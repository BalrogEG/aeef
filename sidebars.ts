import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  pillarsSidebar: [
    {
      type: 'doc',
      id: 'startup-quick-start',
      label: 'Startup Quick-Start',
    },
    {
      type: 'doc',
      id: 'startup-self-assessment',
      label: 'Self-Assessment Guide',
    },
    {
      type: 'doc',
      id: 'faq',
      label: 'FAQ & Troubleshooting',
    },
    {
      type: 'doc',
      id: 'index',
      label: 'Five Pillars Overview',
    },
    {
      type: 'category',
      label: 'Pillar 1: Engineering Discipline',
      link: {type: 'doc', id: 'pillar-1-engineering-discipline/index'},
      items: [
        'pillar-1-engineering-discipline/prompt-engineering-rigor',
        'pillar-1-engineering-discipline/human-in-the-loop',
        'pillar-1-engineering-discipline/ai-output-verification',
        'pillar-1-engineering-discipline/engineering-quality-standards',
      ],
    },
    {
      type: 'category',
      label: 'Pillar 2: Governance & Risk',
      link: {type: 'doc', id: 'pillar-2-governance-risk/index'},
      items: [
        'pillar-2-governance-risk/code-provenance',
        'pillar-2-governance-risk/retention-audit-policy',
        'pillar-2-governance-risk/intellectual-property',
        'pillar-2-governance-risk/security-risk-framework',
        'pillar-2-governance-risk/compliance-regulatory',
        'pillar-2-governance-risk/ai-standards-crosswalk',
        'pillar-2-governance-risk/iso-42001-certification-readiness',
        'pillar-2-governance-risk/ksa-regulatory-profile',
        'pillar-2-governance-risk/government-middle-east-profile',
        'pillar-2-governance-risk/sdaia-ethics-traceability',
        'pillar-2-governance-risk/sdaia-risk-framework-alignment',
        'pillar-2-governance-risk/sama-csf-integration',
        'pillar-2-governance-risk/naii-metrics-mapping',
        'pillar-2-governance-risk/incident-response',
      ],
    },
    {
      type: 'category',
      label: 'Pillar 3: Productivity Architecture',
      link: {type: 'doc', id: 'pillar-3-productivity/index'},
      items: [
        'pillar-3-productivity/workflow-optimization',
        'pillar-3-productivity/toolchain-integration',
        'pillar-3-productivity/metrics-measurement',
        'pillar-3-productivity/feedback-loop-design',
      ],
    },
    {
      type: 'category',
      label: 'Pillar 4: Operating Model',
      link: {type: 'doc', id: 'pillar-4-operating-model/index'},
      items: [
        'pillar-4-operating-model/sprint-agile-adaptation',
        'pillar-4-operating-model/estimation-planning',
        'pillar-4-operating-model/team-structure-roles',
        'pillar-4-operating-model/change-management',
      ],
    },
    {
      type: 'category',
      label: 'Pillar 5: Organizational Enablement',
      link: {type: 'doc', id: 'pillar-5-organizational-enablement/index'},
      items: [
        'pillar-5-organizational-enablement/training-skill-development',
        'pillar-5-organizational-enablement/culture-mindset',
        'pillar-5-organizational-enablement/maturity-assessment',
        'pillar-5-organizational-enablement/center-of-excellence',
        'pillar-5-organizational-enablement/non-engineering-functions',
      ],
    },
    {
      type: 'category',
      label: 'Maturity Model',
      link: {type: 'doc', id: 'maturity/index'},
      items: [
        'maturity/level-1-uncontrolled',
        'maturity/level-2-exploratory',
        'maturity/level-3-defined',
        'maturity/level-4-managed',
        'maturity/level-5-ai-first',
      ],
    },
    {
      type: 'category',
      label: 'KPI Framework',
      link: {type: 'doc', id: 'kpi/index'},
      items: [
        'kpi/productivity-metrics',
        'kpi/risk-metrics',
        'kpi/financial-metrics',
      ],
    },
    {
      type: 'category',
      label: 'About',
      link: {type: 'doc', id: 'about/index'},
      items: [
        'about/research-evidence',
        'about/external-resources',
        'about/case-studies',
        'about/contributing',
        'about/glossary',
        'about/version-history',
      ],
    },
  ],
};

export default sidebars;
