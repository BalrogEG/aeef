import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  productionSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Production Efficiency Overview',
    },
    {
      type: 'category',
      label: 'Standards & Guidelines',
      link: {type: 'doc', id: 'standards/index'},
      items: [
        'standards/apply-ready-rollout-kit',
        'standards/PRD-STD-001-prompt-engineering',
        'standards/PRD-STD-002-code-review',
        'standards/PRD-STD-003-testing-requirements',
        'standards/PRD-STD-004-security-scanning',
        'standards/PRD-STD-005-documentation',
        'standards/PRD-STD-006-technical-debt',
        'standards/PRD-STD-007-quality-gates',
        'standards/PRD-STD-008-dependency-compliance',
      ],
    },
    {
      type: 'category',
      label: 'Best Practices',
      link: {type: 'doc', id: 'best-practices/index'},
      items: [
        'best-practices/ai-pair-programming',
        'best-practices/context-window-management',
        'best-practices/iterative-refinement',
        'best-practices/when-not-to-use-ai',
      ],
    },
    {
      type: 'category',
      label: 'Tool Guides',
      link: {type: 'doc', id: 'tool-guides/index'},
      items: [
        'tool-guides/ide-integration',
        'tool-guides/ai-code-review',
        'tool-guides/automated-testing-ai',
        'tool-guides/security-scanning-tools',
      ],
    },
  ],
};

export default sidebars;
