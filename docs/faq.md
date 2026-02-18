---
title: "FAQ & Troubleshooting"
sidebar_position: 1
description: "Frequently asked questions and solutions to common problems with AI-assisted development under AEEF."
---

# FAQ & Troubleshooting

## Getting Started

### "Where do I start? There's so much here."

**If you're a startup or small team:** Start at [Startup Quick-Start](/pillars/startup-quick-start). It strips AEEF down to what you need today.

**If you're an individual developer:** Go directly to [Starter Config Files](/production/tutorials/starter-configs) and [Your First AI-Governed PR](/production/tutorials/first-ai-pr-tutorial).

**If you're a manager/leader:** Start with the [Transformation Track Overview](/transformation/) and the [Investment & ROI Framework](/roles/executive/investment-roi).

**If you're already using AI tools and need to add governance:** Go to the [Apply-Ready Rollout Kit](/production/standards/apply-ready-rollout-kit).

### "Is this framework free to use?"

Yes. AEEF Standards are open and free to use. There is no license fee, certification cost, or vendor lock-in. You can adopt as much or as little as fits your organization.

### "Do I have to implement everything?"

No. AEEF is designed to be adopted incrementally. Start with the [Compliance Level 1](/production/#compliance-levels) standards (Code Review, Security Scanning, Dependency Compliance) and grow from there. The [Startup Quick-Start](/pillars/startup-quick-start#what-you-can-skip-for-now) explicitly lists what you can defer.

### "We're not an enterprise. Is this relevant to us?"

Yes. While AEEF's full framework targets enterprises, the [Startup Quick-Start](/pillars/startup-quick-start), [Tutorials](/production/tutorials/), and [Production Standards](/production/) are designed to be useful at any team size. A 3-person startup and a 300-person enterprise both need code review, security scanning, and responsible AI practices — the difference is in the governance overhead, not the core practices.

---

## Tools and Setup

### "Which AI tool should my team use?"

See [Free-Tier Tool Comparison](/production/tool-guides/free-tier-comparison) for a detailed comparison. The short answer:
- **$0/month:** GitHub Copilot Free + Continue.dev
- **$10-20/month per dev:** GitHub Copilot Individual or Cursor Pro
- **$30-50/month per dev:** Cursor Pro + Claude Code (best combination)

Standardize on one primary tool. Tool proliferation creates configuration drift and review complexity.

### "Can we use ChatGPT / Claude.ai web for coding?"

You can, but with caution:
- **Never paste secrets, customer data, or proprietary algorithms** into web-based AI tools
- Web tools lack project context, so output quality is lower than IDE-integrated tools
- Web tool conversations may be used for training (check data policies)
- Code from web tools still requires the same review and testing standards

IDE-integrated tools (Copilot, Cursor, Claude Code) are preferred because they have project context and their configuration can be version-controlled.

### "How do I set up security scanning for free?"

Copy the [CI/CD Pipeline Starter](/production/tutorials/ci-cd-pipeline-starter). It uses entirely free, open-source tools:
- **Semgrep** — SAST (free tier: 10 developers)
- **Trivy** — Container and filesystem vulnerability scanning (fully free)
- **npm audit / pip-audit / govulncheck** — Language-specific dependency scanning (free)

Total setup time: 15 minutes. Total cost: $0.

### "My AI tool keeps generating code that doesn't match our architecture."

This is the most common problem and has a straightforward fix: **provide project context via configuration files**.

1. Create a `.cursorrules`, `CLAUDE.md`, or `.github/copilot-instructions.md` file (see [Starter Configs](/production/tutorials/starter-configs))
2. Include your architecture patterns, coding conventions, and explicit "do not" rules
3. In your prompts, always specify the context (the CRAFT framework's "C" step — see [AI Pair Programming](/production/best-practices/ai-pair-programming/))

The quality of AI output is directly proportional to the quality of context you provide.

### "How do I prevent AI tools from accessing our secrets?"

Three layers of defense:

1. **File exclusion:** Configure your AI tool to ignore `.env`, credential files, and security-critical directories (see [Starter Configs](/production/tutorials/starter-configs))
2. **Git hygiene:** Ensure `.env` and secret files are in `.gitignore` and never committed
3. **CI scanning:** Add secret detection to your pipeline (Semgrep's `p/secrets` rule set, or `truffleHog`)

---

## Code Quality

### "AI-generated code passes review but breaks in production. What are we missing?"

Common causes:

1. **Hallucinated APIs:** AI generates calls to functions that don't exist or have different signatures. **Fix:** Verify all imports and function calls against actual library documentation.
2. **Missing edge cases:** AI often handles the happy path well but misses null values, empty collections, concurrent access, and timeout scenarios. **Fix:** Add edge case testing to your review checklist.
3. **Incorrect async behavior:** AI frequently generates code with race conditions or missing `await`. **Fix:** Pay special attention to async patterns during review.
4. **Outdated patterns:** AI may use deprecated APIs or old library versions. **Fix:** Check that generated code uses the same versions as your `package.json` / `requirements.txt`.

### "My team resists adding AI metadata to PRs. How do I get buy-in?"

Three approaches that work:

1. **Automate it:** Add the fields to the [PR template](/production/tutorials/starter-configs#githubpull_request_templatemd--pr-template-with-ai-metadata) so they're pre-populated. Filling in "none" is almost zero effort.
2. **Lead by example:** Have the tech lead or manager consistently fill in AI metadata on their own PRs. Culture follows leadership.
3. **Explain the why:** AI disclosure isn't about policing — it's about giving reviewers the right context. Knowing a PR was AI-assisted tells the reviewer to look for different patterns (hallucinated APIs, missing edge cases) than they would for hand-written code.

### "When should I NOT use AI for code generation?"

See the full guide at [When NOT to Use AI](/production/best-practices/when-not-to-use-ai/). The short version:

- **Security-critical code:** Authentication, authorization, cryptography, input sanitization
- **Areas where you lack expertise:** AI amplifies expertise; it doesn't replace it. If you can't review the output competently, don't generate it
- **Complex business logic with nuanced requirements:** AI may generate plausible-looking code that subtly misses domain-specific rules
- **When AI output keeps regressing:** If three refinement attempts haven't converged, write it manually

---

## Process and Governance

### "We're a startup. Do we really need a written AI policy?"

Yes, even if it's one page. Three reasons:

1. **Legal protection:** If an AI-related incident occurs, having a documented policy demonstrates due diligence
2. **Team alignment:** Without a written policy, every developer has their own interpretation of acceptable use
3. **Customer confidence:** Enterprise customers and investors increasingly ask about AI governance in security questionnaires

The [one-page Acceptable Use Policy template](/production/tutorials/policy-templates#acceptable-use-policy) takes 30 minutes to customize.

### "How do I measure whether AI adoption is actually helping?"

Start with three metrics:

1. **PR cycle time:** Time from PR opened to merged. Should decrease or stay stable.
2. **Defect rate in AI-assisted code:** Bugs found in post-merge AI-assisted code vs. non-AI code. Should be equal or lower.
3. **Developer satisfaction:** Simple 1-5 survey every two weeks. Should be above 3.5.

See the [KPI Framework](/pillars/kpi/) for the complete metrics approach.

### "How often should we update our AI policies and standards?"

- **Quarterly review** of all policies and tool configurations (at minimum)
- **Immediate review** when: a new AI tool is widely adopted, a security incident occurs, a regulation changes, or tool vendors make significant changes to data handling

---

## Security

### "Someone on our team accidentally pasted secrets into ChatGPT. What do we do?"

1. **Immediately rotate** any exposed credentials (API keys, passwords, tokens)
2. **Document** exactly what was shared and with which tool
3. **Notify** your security contact (or CTO in a startup)
4. **Check** the AI vendor's data deletion process
5. **Implement** preventive controls (file exclusions in AI tools, secret scanning in CI)

See the [Incident Response Template](/production/tutorials/policy-templates#ai-incident-response-template) for the full playbook.

### "How do we prevent AI from introducing security vulnerabilities?"

Defense in depth:

1. **Prevention:** Configure AI tools with security rules (see [Starter Configs](/production/tutorials/starter-configs))
2. **Detection at review:** Use the [AI-specific review checklist](/production/tutorials/policy-templates#code-review-checklist-ai-specific)
3. **Detection in CI:** Run SAST scanning (Semgrep) on every PR
4. **Detection post-deploy:** Regular dependency scanning and vulnerability monitoring

No single layer is sufficient. All four together provide strong protection.

### "Is it safe to use free-tier AI tools?"

Free tiers are acceptable for development if you follow these rules:

1. **Never share confidential data** — same rule as paid tiers
2. **Check data usage policies** — some free tiers may use your code for training
3. **Use project-level exclusion files** — prevent secrets from entering AI context
4. **Apply the same review standards** — free tools don't get a lower review bar

See [Free-Tier Tool Comparison](/production/tool-guides/free-tier-comparison#security-considerations-by-tier) for detailed security guidance per tier.

---

## Scaling

### "When should we move from the Startup Quick-Start to the full Transformation Track?"

Transition triggers:
- You have more than 20 engineers
- You're pursuing SOC 2, ISO 27001, or similar certifications
- You have enterprise customers requiring security questionnaires
- You're in a regulated industry
- Multiple teams are using AI tools with no coordination
- You've had a security incident related to AI-generated code

See [Scaling Up](/pillars/startup-quick-start#scaling-up-when-to-adopt-full-aeef) for the full checklist.

### "We have multiple teams using different AI tools. How do we standardize?"

1. **Evaluate tools** using the [AI Tool Evaluation Scorecard](/production/tutorials/policy-templates#ai-tool-evaluation-scorecard)
2. **Pick one primary tool** for the organization
3. **Allow one secondary tool** for specific use cases (e.g., Cursor for IDE, Claude Code for agentic tasks)
4. **Commit shared configuration files** to all repositories
5. **Set a migration deadline** (typically 2-4 weeks) for teams to switch
