import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  transformationSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Transformation Overview',
    },
    {
      type: 'category',
      label: 'Phase 1: Foundation (Weeks 1-4)',
      link: {type: 'doc', id: 'phase-1-foundation/index'},
      items: [
        'phase-1-foundation/ai-tool-assessment',
        'phase-1-foundation/baseline-security-policies',
        'phase-1-foundation/developer-training',
        'phase-1-foundation/pilot-project-selection',
        'phase-1-foundation/measurement-baseline',
      ],
    },
    {
      type: 'category',
      label: 'Phase 2: Structured Expansion (Months 1-3)',
      link: {type: 'doc', id: 'phase-2-expansion/index'},
      items: [
        'phase-2-expansion/governance-implementation',
        'phase-2-expansion/cicd-pipeline-integration',
        'phase-2-expansion/knowledge-sharing',
        'phase-2-expansion/expanded-metrics',
        'phase-2-expansion/risk-assessment-scaling',
      ],
    },
    {
      type: 'category',
      label: 'Phase 3: Enterprise Scale (Months 3-6)',
      link: {type: 'doc', id: 'phase-3-enterprise-scale/index'},
      items: [
        'phase-3-enterprise-scale/organization-wide-policy',
        'phase-3-enterprise-scale/advanced-prompt-engineering',
        'phase-3-enterprise-scale/ai-first-workflows',
        'phase-3-enterprise-scale/continuous-improvement',
        'phase-3-enterprise-scale/maturity-certification',
      ],
    },
    {
      type: 'category',
      label: 'Operating Model Lifecycle',
      link: {type: 'doc', id: 'operating-model/index'},
      items: [
        'operating-model/business-intent',
        'operating-model/ai-exploration',
        'operating-model/human-hardening',
        'operating-model/governance-gate',
        'operating-model/controlled-deployment',
        'operating-model/post-implementation-review',
      ],
    },
    {
      type: 'category',
      label: 'AI Product Lifecycle',
      link: {type: 'doc', id: 'ai-product-lifecycle/index'},
      items: [
        'ai-product-lifecycle/model-evaluation-release-gates',
        'ai-product-lifecycle/production-monitoring-drift',
        'ai-product-lifecycle/model-incident-response',
      ],
    },
  ],
};

export default sidebars;
