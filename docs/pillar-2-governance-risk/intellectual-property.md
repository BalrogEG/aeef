---
title: "Intellectual Property Management"
sidebar_position: 3
description: "Managing IP considerations when using AI code generation tools."
---

# Intellectual Property Management

AI-generated code raises significant intellectual property (IP) questions that organizations MUST address proactively. AI models are trained on vast corpora of code, including open-source projects with various licenses, proprietary code that may have been inadvertently included in training data, and publicly available code with ambiguous licensing. The legal landscape is evolving, but the risks are present now. This section defines the organizational policies, processes, and technical controls required to manage IP risk in AI-assisted development.

## The IP Risk Landscape

:::warning
The legal framework surrounding AI-generated code and copyright is unsettled and varies by jurisdiction. The standards in this section represent conservative, risk-mitigating practices. Organizations MUST consult with legal counsel to tailor these standards to their specific jurisdictional and contractual context.
:::

### Key Risk Areas

1. **Training Data Contamination**: AI models may reproduce substantial portions of copyrighted code from their training data, potentially creating copyright infringement liability
2. **License Inheritance**: If AI output includes code derived from GPL, AGPL, or other copyleft-licensed training data, it may trigger copyleft obligations on the incorporating codebase
3. **Copyright Ownership Uncertainty**: The copyright status of AI-generated code is legally ambiguous in many jurisdictions; relying on copyright protection for AI-generated code may be unreliable
4. **Trade Secret Exposure**: Inputting proprietary code as context in cloud-based AI tools may compromise trade secret status
5. **Contractual Obligations**: Client contracts, employment agreements, and vendor agreements may contain clauses that are affected by AI-assisted development

## Licensing Implications

### Understanding License Risk in AI Outputs

AI models do not track the licensing of their training data. When an AI tool generates code, there is no guarantee that the output is free from license-encumbered patterns. Organizations MUST implement controls to mitigate this risk.

### Licensing Control Requirements

| Requirement | Description | Enforcement |
|---|---|---|
| **License Scanning** | All AI-generated code MUST be scanned for license compliance before merging | Automated: FOSSA, Black Duck, Licensee, ScanCode |
| **Copyleft Detection** | AI-generated code MUST be screened for substantial similarity to known copyleft-licensed code | Automated: code similarity tools + license scanners |
| **Approved License List** | The organization MUST maintain a list of approved licenses for dependencies; AI-generated code that introduces dependencies MUST comply | Manual review + automated dependency license checking |
| **License Conflict Resolution** | When a potential license conflict is detected, development MUST stop and legal counsel MUST be consulted before proceeding | Escalation procedure |

### License Risk Tiers

| Tier | License Type | AI Output Risk | Required Action |
|---|---|---|---|
| **Low Risk** | MIT, BSD 2-Clause, Apache 2.0 | Permissive; attribution required | Include attribution in NOTICES file |
| **Medium Risk** | LGPL, MPL, EPL | Weak copyleft; file-level obligations | Legal review before integration |
| **High Risk** | GPL v2/v3, AGPL | Strong copyleft; may affect entire codebase | Legal review REQUIRED; do not integrate without explicit legal approval |
| **Prohibited** | SSPL, Creative Commons NonCommercial, proprietary | Incompatible with commercial use or ambiguous | MUST NOT be integrated; reject and re-generate |

## Copyright Considerations

### Ownership of AI-Generated Code

The copyright status of AI-generated code varies by jurisdiction and is subject to ongoing legal evolution:

- In many jurisdictions, copyright requires human authorship. Purely AI-generated code (with no substantive human modification) may not be copyrightable
- Code with **substantial human modification** is more likely to qualify for copyright protection, with the human author as the rights holder
- Organizations SHOULD treat AI-generated code as having **uncertain copyright status** for defensive purposes

### Organizational Copyright Practices

- Employment agreements and contractor agreements MUST be updated to address AI-assisted work product and assignment of rights
- Organizations SHOULD require **substantial human modification** of AI-generated code for any work product that the organization intends to rely on copyright to protect
- The `human-modifications` field in [Code Provenance](./code-provenance.md) metadata directly supports copyright analysis and MUST be accurately classified
- Organizations MUST NOT represent AI-generated code as entirely human-authored in regulatory filings, patent applications, or contractual deliverables unless the code has been substantially modified

:::info
The AEEF provenance metadata (see [Code Provenance & Attribution](./code-provenance.md)) is designed to support IP analysis by capturing the degree of human modification. This data is essential for legal counsel to assess copyright and ownership questions.
:::

## Proprietary Code Protection

### Preventing Proprietary Code Leakage

When developers use AI tools, they provide code and context that may include proprietary information. This creates two categories of risk:

1. **Direct leakage**: Proprietary code submitted as prompt context may be stored, logged, or used for model training by the AI tool provider
2. **Indirect leakage**: AI tool providers may use submitted code to improve models that then generate similar code for competitors

### Protection Requirements

| Control | Description | Applicability |
|---|---|---|
| **Data Classification Compliance** | Developers MUST follow the data classification rules defined in the [Pillar 2 Overview](./index.md) before including any code in AI prompts | All AI tool usage |
| **Zero-Retention Tool Preference** | Organizations SHOULD prefer AI tools that contractually guarantee zero data retention and no use of inputs for model training | All AI tool selection |
| **Contractual Protections** | AI tool vendor agreements MUST include: data handling terms, non-use of input for training, data deletion policies, breach notification obligations | All AI tool procurement |
| **On-Premises Deployment** | For Restricted data, AI tools MUST be deployed on-premises or in the organization's private cloud with full data isolation | Restricted data only |
| **Prompt Sanitization** | Before submitting code as context, developers MUST remove or redact: production credentials, customer data, proprietary algorithms that are trade secrets, internal system names that reveal architecture | All AI tool usage |

### Trade Secret Considerations

- Code that constitutes a trade secret MUST NOT be submitted to cloud-based AI tools unless the tool deployment guarantees data isolation and the vendor agreement includes confidentiality obligations
- Organizations MUST maintain an inventory of code assets classified as trade secrets and communicate this classification to development teams
- AI tool usage logs (when available) SHOULD be reviewed periodically to verify compliance with trade secret protection requirements

## Organizational IP Policies

### Policy Requirements

Organizations using AI-assisted development MUST establish and maintain the following IP policies:

1. **AI-Assisted Development IP Policy**: Defines the organization's position on ownership, licensing, and protection of AI-generated code. MUST be approved by legal counsel and updated at least annually
2. **AI Tool Acceptable Use Policy**: Defines which AI tools are approved, what data may be submitted, and what usage restrictions apply. MUST be communicated to all developers
3. **Third-Party Code Contribution Policy**: Updated to address the inclusion of AI-generated code in open-source contributions, client deliverables, and partner collaborations
4. **Vendor IP Terms Checklist**: A standardized checklist for evaluating AI tool vendor agreements with respect to IP rights

### Developer Responsibilities

Every developer using AI tools MUST:

- [ ] Complete IP awareness training for AI-assisted development (annual requirement)
- [ ] Understand and follow the data classification policy for all AI tool interactions
- [ ] Accurately classify the `human-modifications` level in provenance metadata
- [ ] Report any suspected license conflict or IP issue to the legal team immediately
- [ ] Refrain from submitting trade secrets or Restricted data to unapproved AI tools
- [ ] Include proper attribution in all AI-generated code per [Code Provenance](./code-provenance.md) standards

## Open-Source Considerations

### Contributing AI-Generated Code to Open-Source Projects

Special care is required when AI-generated code is contributed to open-source projects:

- AI-generated code contributed to open-source projects MUST be disclosed as AI-generated in the contribution
- The organization's open-source contribution policy MUST address AI-generated contributions and any required disclosures
- Contributors MUST verify that AI-generated code does not introduce license-incompatible content into the open-source project
- Some open-source projects have their own policies on AI-generated contributions; contributors MUST comply with the target project's policy

### Using AI Tools with Open-Source Codebases

- When developing on open-source projects, developers MUST be aware that AI tools may generate code similar to other open-source projects with incompatible licenses
- License scanning is REQUIRED for AI-generated code contributed to open-source projects, regardless of the project's existing license
- Organizations SHOULD maintain a list of approved open-source projects for AI-assisted development based on license compatibility analysis

:::danger
Contributing AI-generated code to a GPL-licensed project that includes patterns from an AGPL-licensed training source could create license conflicts that affect the entire project. License scanning before contribution is MANDATORY.
:::

## Enforcement and Remediation

### Detection of IP Violations

- Automated license scanning MUST be integrated into the CI/CD pipeline (see [AI Output Verification](../pillar-1-engineering-discipline/ai-output-verification.md))
- Code similarity analysis SHOULD be run periodically (RECOMMENDED: monthly) against known open-source corpora
- Any detected license violation MUST be treated as a blocking issue -- the affected code MUST NOT be merged or deployed until resolved

### Remediation Protocol

1. **Isolate**: Quarantine the affected code in a separate branch; do not deploy
2. **Assess**: Legal counsel evaluates the scope and severity of the IP issue
3. **Remediate**: Rewrite the affected code without AI assistance, or re-generate with different constraints and verify the new output is clean
4. **Verify**: Run license scanning and similarity analysis on the remediated code
5. **Document**: Record the incident in the IP issue log with root cause and preventive measures
6. **Update**: If the issue originated from a specific prompt or AI tool behavior, update the prompt library and tool guidance accordingly
