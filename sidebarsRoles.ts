import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  rolesSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Role Guides Overview',
    },
    {
      type: 'category',
      label: 'Developer',
      link: {type: 'doc', id: 'developer/index'},
      items: [
        'developer/daily-workflows',
        'developer/prompt-engineering',
        'developer/code-review-responsibilities',
        'developer/security-awareness',
        'developer/skill-development',
      ],
    },
    {
      type: 'category',
      label: 'Development Manager',
      link: {type: 'doc', id: 'development-manager/index'},
      items: [
        'development-manager/team-enablement',
        'development-manager/quality-risk-oversight',
        'development-manager/metrics-that-matter',
        'development-manager/tooling-decisions',
        'development-manager/performance-management',
      ],
    },
    {
      type: 'category',
      label: 'Scrum Master',
      link: {type: 'doc', id: 'scrum-master/index'},
      items: [
        'scrum-master/sprint-adaptation',
        'scrum-master/estimation-ai-world',
        'scrum-master/ceremony-adjustments',
        'scrum-master/impediment-patterns',
        'scrum-master/team-health-indicators',
      ],
    },
    {
      type: 'category',
      label: 'Product Manager',
      link: {type: 'doc', id: 'product-manager/index'},
      items: [
        'product-manager/roadmap-planning',
        'product-manager/stakeholder-expectations',
        'product-manager/velocity-quality-tradeoffs',
        'product-manager/user-stories-ai',
      ],
    },
    {
      type: 'category',
      label: 'CEO / Executive',
      link: {type: 'doc', id: 'executive/index'},
      items: [
        'executive/strategic-imperative',
        'executive/risk-governance-summary',
        'executive/investment-roi',
        'executive/competitive-landscape',
        'executive/board-ready-metrics',
      ],
    },
    {
      type: 'category',
      label: 'CTO / VP Engineering',
      link: {type: 'doc', id: 'cto/index'},
      items: [
        'cto/technology-strategy',
        'cto/architecture-considerations',
        'cto/build-vs-buy',
        'cto/org-design',
        'cto/technical-risk',
      ],
    },
    {
      type: 'category',
      label: 'Solution Architect',
      link: {type: 'doc', id: 'solution-architect/index'},
      items: [
        'solution-architect/reference-architecture',
        'solution-architect/agent-contracts-handoffs',
        'solution-architect/governance-enforcement',
        'solution-architect/architecture-assurance-metrics',
      ],
    },
    {
      type: 'category',
      label: 'QA / Test Lead',
      link: {type: 'doc', id: 'qa-lead/index'},
      items: [
        'qa-lead/testing-strategy',
        'qa-lead/ai-test-coverage',
        'qa-lead/defect-analysis',
        'qa-lead/automation-priorities',
      ],
    },
    {
      type: 'category',
      label: 'Security Engineer',
      link: {type: 'doc', id: 'security-engineer/index'},
      items: [
        'security-engineer/secure-coding-guardrails',
        'security-engineer/threat-modeling-ai-code',
        'security-engineer/vulnerability-response-slas',
      ],
    },
    {
      type: 'category',
      label: 'Platform / DevOps Engineer',
      link: {type: 'doc', id: 'platform-engineer/index'},
      items: [
        'platform-engineer/pipeline-guardrails',
        'platform-engineer/tooling-provisioning',
        'platform-engineer/observability-quality-gates',
      ],
    },
    {
      type: 'category',
      label: 'Compliance & Risk Officer',
      link: {type: 'doc', id: 'compliance-officer/index'},
      items: [
        'compliance-officer/policy-control-mapping',
        'compliance-officer/audit-evidence-pack',
        'compliance-officer/third-party-ai-risk',
      ],
    },
  ],
};

export default sidebars;
