import React, {type FormEvent, useEffect, useMemo, useState} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

type SubmissionState = 'idle' | 'submitting' | 'success' | 'error';

type FeedbackCustomFields = {
  feedbackEndpoint?: string;
  feedbackEmail?: string;
};

export default function FeedbackWidget() {
  const {siteConfig} = useDocusaurusContext();
  const customFields = (siteConfig.customFields ?? {}) as FeedbackCustomFields;

  const feedbackEndpoint = useMemo(
    () => (customFields.feedbackEndpoint ?? '').trim(),
    [customFields.feedbackEndpoint],
  );
  const feedbackEmail = useMemo(
    () => (customFields.feedbackEmail ?? '').trim(),
    [customFields.feedbackEmail],
  );

  const canSubmit = Boolean(feedbackEndpoint || feedbackEmail);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitState, setSubmitState] = useState<SubmissionState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('feedback-modal-open');
      return;
    }

    document.body.classList.remove('feedback-modal-open');
  }, [isOpen]);

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!canSubmit || !message.trim()) {
      setSubmitState('error');
      setErrorMessage('Feedback is not configured yet. Please set FEEDBACK_ENDPOINT or FEEDBACK_EMAIL.');
      return;
    }

    setSubmitState('submitting');
    setErrorMessage('');

    const payload = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      pageUrl: window.location.href,
      submittedAt: new Date().toISOString(),
      userAgent: window.navigator.userAgent,
    };

    if (feedbackEndpoint) {
      try {
        const response = await fetch(feedbackEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error(`Submission failed (${response.status})`);
        }

        setSubmitState('success');
        resetForm();
        return;
      } catch {
        setSubmitState('error');
        setErrorMessage('Could not send feedback. Please try again in a moment.');
        return;
      }
    }

    const subject = encodeURIComponent(`Website feedback from ${payload.name || 'anonymous user'}`);
    const body = encodeURIComponent(
      `Page: ${payload.pageUrl}\n` +
        `Name: ${payload.name || 'Anonymous'}\n` +
        `Email: ${payload.email || 'Not provided'}\n` +
        `Submitted: ${payload.submittedAt}\n\n` +
        payload.message,
    );

    window.location.href = `mailto:${feedbackEmail}?subject=${subject}&body=${body}`;
    setSubmitState('success');
    resetForm();
  };

  return (
    <>
      <button
        type="button"
        className="feedback-floating-button"
        onClick={() => {
          setIsOpen(true);
          setSubmitState('idle');
          setErrorMessage('');
        }}
      >
        Feedback
      </button>

      {isOpen ? (
        <div
          className="feedback-modal-backdrop"
          onClick={() => setIsOpen(false)}
          role="presentation"
        >
          <div
            className="feedback-modal"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="feedback-modal-title"
          >
            <div className="feedback-modal-header">
              <h2 id="feedback-modal-title">Send feedback</h2>
              <button
                type="button"
                className="feedback-close-button"
                onClick={() => setIsOpen(false)}
                aria-label="Close feedback form"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className="feedback-form">
              <label htmlFor="feedback-message">Message</label>
              <textarea
                id="feedback-message"
                rows={5}
                value={message}
                maxLength={2000}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Tell us what should be improved"
                required
              />

              <label htmlFor="feedback-name">Name (optional)</label>
              <input
                id="feedback-name"
                type="text"
                value={name}
                maxLength={120}
                onChange={(event) => setName(event.target.value)}
                placeholder="Your name"
              />

              <label htmlFor="feedback-email">Email (optional)</label>
              <input
                id="feedback-email"
                type="email"
                value={email}
                maxLength={160}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@company.com"
              />

              <div className="feedback-actions">
                <button type="button" className="button button--secondary" onClick={() => setIsOpen(false)}>
                  Cancel
                </button>
                <button
                  type="submit"
                  className="button button--primary"
                  disabled={submitState === 'submitting' || !canSubmit}
                >
                  {submitState === 'submitting' ? 'Sending...' : 'Submit'}
                </button>
              </div>

              {!canSubmit ? (
                <p className="feedback-status feedback-status--error">
                  Feedback is disabled. Set FEEDBACK_ENDPOINT or FEEDBACK_EMAIL in your environment.
                </p>
              ) : null}

              {submitState === 'success' ? (
                <p className="feedback-status feedback-status--success">Thanks. Your feedback was submitted.</p>
              ) : null}

              {submitState === 'error' && errorMessage ? (
                <p className="feedback-status feedback-status--error">{errorMessage}</p>
              ) : null}
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
