import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const siteUrl = process.env.SITE_URL ?? 'https://aeef.codemeld.io';

const config: Config = {
  title: 'AEEF Standards',
  tagline: 'Enterprise Standards for AI-Accelerated Engineering',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: siteUrl,
  baseUrl: '/',

  onBrokenLinks: 'throw',

  markdown: {
    format: 'detect',
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [
    [
      '@cmfcmf/docusaurus-search-local',
      {
        indexBlog: true,
        indexDocs: true,
        language: 'en',
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'pillars',
          sidebarPath: './sidebars.ts',
        },
        blog: {
          path: 'blog',
          routeBasePath: 'updates',
          blogTitle: 'Standards Updates',
          blogDescription: 'Latest updates to the AEEF Standards',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'transformation',
        path: 'transformation',
        routeBasePath: 'transformation',
        sidebarPath: './sidebarsTransformation.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'production',
        path: 'production',
        routeBasePath: 'production',
        sidebarPath: './sidebarsProduction.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'roles',
        path: 'roles',
        routeBasePath: 'roles',
        sidebarPath: './sidebarsRoles.ts',
      },
    ],
  ],

  themeConfig: {
    image: 'img/aeef-social-card.png',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'initial_release',
      content: 'AEEF Standards v1.0 Initial Release &mdash; <a href="/updates">Read the announcement</a>',
      backgroundColor: '#1a365d',
      textColor: '#ffffff',
      isCloseable: true,
    },
    navbar: {
      title: 'AEEF Standards',
      logo: {
        alt: 'AEEF Standards Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/transformation/',
          label: 'Transformation',
          position: 'left',
        },
        {
          to: '/production/',
          label: 'Production',
          position: 'left',
        },
        {
          to: '/pillars/',
          label: 'Pillars',
          position: 'left',
        },
        {
          to: '/roles/',
          label: 'Roles',
          position: 'left',
        },
        {
          to: '/updates',
          label: 'Updates',
          position: 'left',
        },
        {
          to: '/pillars/maturity/',
          label: 'Maturity Model',
          position: 'right',
        },
        {
          to: '/pillars/kpi/',
          label: 'KPI Framework',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Standards',
          items: [
            {label: 'Transformation Track', to: '/transformation/'},
            {label: 'Production Standards', to: '/production/'},
            {label: 'Role Guides', to: '/roles/'},
          ],
        },
        {
          title: 'Framework',
          items: [
            {label: 'Five Pillars', to: '/pillars/'},
            {label: 'Maturity Model', to: '/pillars/maturity/'},
            {label: 'KPI Framework', to: '/pillars/kpi/'},
          ],
        },
        {
          title: 'About',
          items: [
            {label: 'About AEEF', to: '/pillars/about/'},
            {label: 'Glossary', to: '/pillars/about/glossary'},
            {label: 'Standards Updates', to: '/updates'},
          ],
        },
      ],
      copyright: `Copyright &copy; ${new Date().getFullYear()} AI-Accelerated Enterprise Engineering Framework (AEEF). All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
