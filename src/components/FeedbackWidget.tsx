import React, {type FormEvent, useEffect, useMemo, useState} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

type SubmissionState = 'idle' | 'submitting' | 'success' | 'error';

type FeedbackCustomFields = {
  feedbackEndpoint?: string;
  feedbackEmail?: string;
};

const DEFAULT_FEEDBACK_ENDPOINT = 'https://formsubmit.co/ajax/info@codemeld.io';

export default function FeedbackWidget() {
  const {siteConfig} = useDocusaurusContext();
  const customFields = (siteConfig.customFields ?? {}) as FeedbackCustomFields;

  const feedbackEndpoint = useMemo(
    () => (customFields.feedbackEndpoint ?? DEFAULT_FEEDBACK_ENDPOINT).trim() || DEFAULT_FEEDBACK_ENDPOINT,
    [customFields.feedbackEndpoint],
  );

  const canSubmit = Boolean(feedbackEndpoint);
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

    if (!message.trim()) {
      setSubmitState('error');
      setErrorMessage('Please enter your feedback message before submitting.');
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

    const outboundPayload = {
      name: payload.name || 'Anonymous',
      ...(payload.email ? {email: payload.email} : {}),
      message: payload.message,
      pageUrl: payload.pageUrl,
      submittedAt: payload.submittedAt,
      userAgent: payload.userAgent,
      _subject: `AEEF website feedback from ${payload.name || 'anonymous user'}`,
      _template: 'table',
      _captcha: 'false',
    };

    try {
      const response = await fetch(feedbackEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(outboundPayload),
      });

      if (!response.ok) {
        throw new Error(`Submission failed (${response.status})`);
      }

      let responseData: {success?: boolean | string; message?: string} | null = null;
      try {
        responseData = (await response.json()) as {success?: boolean | string; message?: string};
      } catch {
        responseData = null;
      }

      if (responseData?.success === false || responseData?.success === 'false') {
        throw new Error(responseData.message ?? 'Submission failed');
      }

      setSubmitState('success');
      resetForm();
    } catch (error) {
      setSubmitState('error');
      const messageText = error instanceof Error ? error.message : '';
      setErrorMessage(messageText || 'Could not send feedback. Please try again in a moment.');
    }
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

              {submitState === 'success' ? (
                <p className="feedback-status feedback-status--success">Thanks. Your feedback was sent.</p>
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
