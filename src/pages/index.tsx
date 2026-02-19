import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

type Pathway = {
  title: string;
  summary: string;
  audience: string;
  bullets: string[];
  cta: string;
  link: string;
};

type QuickLink = {
  title: string;
  desc: string;
  link: string;
};

function HeroSection(): ReactNode {
  return (
    <section className="home-hero">
      <div className="container">
        <div className="home-hero-copy">
          <p className="home-kicker">AI-Accelerated Enterprise Engineering Framework</p>
          <h1>Ship Faster With AI, Without Compromising Quality or Governance</h1>
          <p className="home-lead">
            AEEF gives engineering leaders and delivery teams a production-ready operating
            model for AI-assisted software development: measurable, auditable, and scalable.
          </p>
          <div className="home-hero-buttons">
            <Link className="home-btn home-btn-primary" to="/pillars/startup-quick-start">
              Start in 1 Day
            </Link>
            <Link className="home-btn home-btn-secondary" to="/production/">
              See Production Standards
            </Link>
            <Link className="home-btn home-btn-secondary" to="/transformation/">
              Plan Enterprise Rollout
            </Link>
          </div>
          <div className="home-trust-strip">
            <span>5 Pillars</span>
            <span>12 Production Standards</span>
            <span>Role-Based Playbooks</span>
            <span>Maturity Model</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function PathwaysSection(): ReactNode {
  const pathways: Pathway[] = [
    {
      title: 'Quick-Start',
      summary: 'Launch controlled AI-assisted delivery this week.',
      audience: 'Best for startups and small teams moving fast.',
      bullets: [
        'Day-1 checklist by team size',
        'Copy-paste CI and policy starter configs',
        'Hands-on tutorial from first PR to release',
      ],
      cta: 'Go to Quick-Start',
      link: '/pillars/startup-quick-start',
    },
    {
      title: 'Transformation Track',
      summary: 'Adopt AI across teams with phased governance.',
      audience: 'Best for organizations scaling AI usage for the first time.',
      bullets: [
        'Foundation, expansion, and enterprise-scale phases',
        'Operating model lifecycle and gate design',
        'Org-level capability and maturity progression',
      ],
      cta: 'Explore Transformation',
      link: '/transformation/',
    },
    {
      title: 'Production Standards',
      summary: 'Run AI-assisted engineering with enforceable controls.',
      audience: 'Best for teams already shipping with AI in active products.',
      bullets: [
        'Normative PRD-STD controls using RFC 2119 language',
        'Quality, testing, and security requirements',
        'Auditability, provenance, and policy-ready evidence',
      ],
      cta: 'View Standards',
      link: '/production/standards/',
    },
  ];

  return (
    <section className="home-section">
      <div className="container">
        <div className="home-section-head">
          <p className="home-eyebrow">Start Here</p>
          <h2>Choose Your Adoption Path</h2>
          <p>
            Whether you are standing up a team or scaling across the enterprise, pick the entry
            point that matches your operating reality.
          </p>
        </div>
        <div className="home-card-grid home-card-grid-3">
          {pathways.map((path) => (
            <article className="home-path-card" key={path.title}>
              <h3>{path.title}</h3>
              <p className="home-path-summary">{path.summary}</p>
              <p className="home-path-audience">{path.audience}</p>
              <ul>
                {path.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link className="home-inline-link" to={path.link}>
                {path.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickLinksSection(): ReactNode {
  const links: QuickLink[] = [
    {
      title: 'PRD-STD Standards',
      desc: 'Formal controls for prompt engineering, review, testing, and security.',
      link: '/production/standards/',
    },
    {
      title: 'CI/CD Starter',
      desc: 'Reference pipeline patterns for quality gates in AI-assisted delivery.',
      link: '/production/tutorials/ci-cd-pipeline-starter',
    },
    {
      title: 'KPI Framework',
      desc: 'Measure risk, productivity, and financial outcomes with executive-ready metrics.',
      link: '/pillars/kpi/',
    },
    {
      title: 'Maturity Model',
      desc: 'Assess capability from uncontrolled adoption to AI-first operations.',
      link: '/pillars/maturity/',
    },
    {
      title: 'Role Guides',
      desc: 'Operational playbooks for developers, managers, security, QA, and executives.',
      link: '/roles/',
    },
    {
      title: 'Release Updates',
      desc: 'Track framework evolution and standards change history.',
      link: '/updates',
    },
  ];

  return (
    <section className="home-section home-section-alt">
      <div className="container">
        <div className="home-section-head">
          <p className="home-eyebrow">Most Used</p>
          <h2>Core Resources Teams Use Every Week</h2>
          <p>Jump directly to the assets that typically anchor implementation and governance.</p>
        </div>
        <div className="home-card-grid home-card-grid-3">
          {links.map((item) => (
            <Link className="home-resource-card" to={item.link} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProofSection(): ReactNode {
  const stats = [
    {number: '92%', label: 'of US developers use AI coding tools daily'},
    {number: '1.7x', label: 'more major issues in AI co-authored code'},
    {number: '2.74x', label: 'higher security vulnerability rate'},
    {number: '41%', label: 'of global code is now AI-generated'},
  ];

  return (
    <section className="home-section">
      <div className="container">
        <div className="home-section-head">
          <p className="home-eyebrow">Why AEEF</p>
          <h2>AI Adoption Is Not Optional. Governance Is.</h2>
          <p>
            The velocity gains are real, but unmanaged AI-assisted delivery compounds defects,
            vulnerabilities, and audit exposure.
          </p>
        </div>
        <div className="home-card-grid home-card-grid-4">
          {stats.map((stat) => (
            <div className="home-proof-card" key={stat.number}>
              <p className="home-proof-number">{stat.number}</p>
              <p className="home-proof-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FrameworkSection(): ReactNode {
  const pillars = [
    {num: 1, title: 'Engineering Discipline', link: '/pillars/pillar-1-engineering-discipline/'},
    {num: 2, title: 'Governance & Risk', link: '/pillars/pillar-2-governance-risk/'},
    {num: 3, title: 'Productivity Architecture', link: '/pillars/pillar-3-productivity/'},
    {num: 4, title: 'Operating Model', link: '/pillars/pillar-4-operating-model/'},
    {num: 5, title: 'Organizational Enablement', link: '/pillars/pillar-5-organizational-enablement/'},
  ];

  return (
    <section className="home-section home-section-alt">
      <div className="container">
        <div className="home-split">
          <div>
            <p className="home-eyebrow">Framework Core</p>
            <h2>Five Pillars, One Operating System for AI Engineering</h2>
            <p>
              AEEF is structured to cover the full delivery system: standards, controls, team
              behavior, and organization-level enablement.
            </p>
            <Link className="home-inline-link" to="/pillars/">
              Explore all pillars
            </Link>
          </div>
          <div className="home-pillars-list">
            {pillars.map((pillar) => (
              <Link className="home-pillar-row" to={pillar.link} key={pillar.num}>
                <span className="home-pillar-num">{pillar.num}</span>
                <span>{pillar.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RolesMaturitySection(): ReactNode {
  const roles = [
    {title: 'Developer', link: '/roles/developer/'},
    {title: 'Development Manager', link: '/roles/development-manager/'},
    {title: 'Scrum Master', link: '/roles/scrum-master/'},
    {title: 'Product Manager', link: '/roles/product-manager/'},
    {title: 'Executive', link: '/roles/executive/'},
    {title: 'CTO / VP Engineering', link: '/roles/cto/'},
    {title: 'Solution Architect', link: '/roles/solution-architect/'},
    {title: 'QA / Test Lead', link: '/roles/qa-lead/'},
    {title: 'Security Engineer', link: '/roles/security-engineer/'},
    {title: 'Platform Engineer', link: '/roles/platform-engineer/'},
    {title: 'Compliance Officer', link: '/roles/compliance-officer/'},
  ];

  const levels = [
    {num: 1, label: 'Uncontrolled', className: 'level-1', link: '/pillars/maturity/level-1-uncontrolled'},
    {num: 2, label: 'Exploratory', className: 'level-2', link: '/pillars/maturity/level-2-exploratory'},
    {num: 3, label: 'Defined', className: 'level-3', link: '/pillars/maturity/level-3-defined'},
    {num: 4, label: 'Managed', className: 'level-4', link: '/pillars/maturity/level-4-managed'},
    {num: 5, label: 'AI-First', className: 'level-5', link: '/pillars/maturity/level-5-ai-first'},
  ];

  return (
    <section className="home-section">
      <div className="container">
        <div className="home-two-column">
          <article className="home-panel">
            <p className="home-eyebrow">By Role</p>
            <h3>Guidance Tailored to Accountability</h3>
            <p>
              Align daily engineering decisions, management controls, and executive oversight on
              one framework.
            </p>
            <div className="home-chip-grid">
              {roles.map((role) => (
                <Link className="home-chip" to={role.link} key={role.title}>
                  {role.title}
                </Link>
              ))}
            </div>
          </article>
          <article className="home-panel">
            <p className="home-eyebrow">By Capability</p>
            <h3>Maturity Progression You Can Operationalize</h3>
            <p>
              Move step-by-step from ad hoc AI usage to a controlled, measurable AI-first model.
            </p>
            <div className="home-maturity">
              {levels.map((level) => (
                <Link className={`home-level ${level.className}`} to={level.link} key={level.num}>
                  L{level.num} {level.label}
                </Link>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection(): ReactNode {
  return (
    <section className="home-final-cta">
      <div className="container">
        <h2>Build Your AI Engineering System, Not Just AI Habits</h2>
        <p>
          Start with standards, enforce through workflow, and scale through governance that teams
          can actually run.
        </p>
        <div className="home-hero-buttons">
          <Link className="home-btn home-btn-primary" to="/pillars/startup-quick-start">
            Start Quick-Start
          </Link>
          <Link className="home-btn home-btn-secondary" to="/production/standards/">
            Open PRD-STD Library
          </Link>
          <Link className="home-btn home-btn-secondary" to="/pillars/maturity/">
            Assess Maturity
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Enterprise Standards for AI-Accelerated Engineering"
      description="AEEF Standards provides governance-embedded, measurable enterprise standards for AI-assisted software engineering.">
      <HeroSection />
      <main>
        <PathwaysSection />
        <QuickLinksSection />
        <ProofSection />
        <FrameworkSection />
        <RolesMaturitySection />
        <FinalCtaSection />
      </main>
    </Layout>
  );
}
