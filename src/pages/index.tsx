import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

function HeroSection(): ReactNode {
  return (
    <div className="hero-section">
      <div className="container">
        <h1>AEEF Standards</h1>
        <p className="subtitle">
          Enterprise Standards for AI-Accelerated Engineering.
          Governance-embedded, measurable, and transformation-ready.
        </p>
        <div className="hero-buttons">
          <Link className="primary-btn" to="/pillars/startup-quick-start">
            Startup Quick-Start
          </Link>
          <Link className="secondary-btn" to="/transformation/">
            Transformation Track
          </Link>
          <Link className="secondary-btn" to="/production/">
            Production Standards
          </Link>
        </div>
      </div>
    </div>
  );
}

function StatsSection(): ReactNode {
  const stats = [
    {number: '92%', label: 'of US developers use AI coding tools daily'},
    {number: '1.7x', label: 'more major issues in AI co-authored code'},
    {number: '2.74x', label: 'higher security vulnerability rate'},
    {number: '41%', label: 'of all code written globally is AI-generated'},
  ];
  return (
    <div className="section">
      <div className="container">
        <h2>The Case for Standards</h2>
        <p className="section-subtitle">
          AI-assisted engineering is accelerating. Without governance, speed becomes liability.
        </p>
        <div className="grid-4">
          {stats.map((stat, idx) => (
            <div className="stat-card" key={idx}>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TracksSection(): ReactNode {
  return (
    <div className="section-alt">
      <div className="container">
        <h2>Three Entry Points, One Framework</h2>
        <p className="section-subtitle">
          Choose your entry point based on where your organization is today.
        </p>
        <div className="grid-3">
          <div className="track-card">
            <h2>Quick-Start</h2>
            <p style={{color: 'var(--ifm-color-emphasis-700)', marginBottom: '1rem'}}>
              For startups and small teams who want to start today.
              No enterprise budget or committee required.
            </p>
            <ul style={{color: 'var(--ifm-color-emphasis-600)', fontSize: '0.9rem'}}>
              <li>Day-1 checklists by team size</li>
              <li>Copy-paste config files and CI pipelines</li>
              <li>End-to-end tutorial with real code</li>
              <li>Free-tier tool guidance</li>
            </ul>
            <Link className="button button--primary button--lg" to="/pillars/startup-quick-start">
              Start Now
            </Link>
          </div>
          <div className="track-card">
            <h2>Transformation</h2>
            <p style={{color: 'var(--ifm-color-emphasis-700)', marginBottom: '1rem'}}>
              For organizations adopting AI-assisted engineering for the first time.
              A phased journey from foundation to enterprise scale.
            </p>
            <ul style={{color: 'var(--ifm-color-emphasis-600)', fontSize: '0.9rem'}}>
              <li>3-phase adoption roadmap (0-6 months)</li>
              <li>Operating model lifecycle integration</li>
              <li>Governance gate implementation</li>
              <li>Maturity assessment framework</li>
            </ul>
            <Link className="button button--primary button--lg" to="/transformation/">
              Explore Transformation
            </Link>
          </div>
          <div className="track-card">
            <h2>Production Efficiency</h2>
            <p style={{color: 'var(--ifm-color-emphasis-700)', marginBottom: '1rem'}}>
              For teams already using AI tools who need day-to-day standards,
              best practices, and governance guardrails.
            </p>
            <ul style={{color: 'var(--ifm-color-emphasis-600)', fontSize: '0.9rem'}}>
              <li>8 formal production standards (PRD-STD)</li>
              <li>Best practices for AI pair programming</li>
              <li>Tool integration guides</li>
              <li>Quality gates and security scanning</li>
            </ul>
            <Link className="button button--primary button--lg" to="/production/">
              Explore Production Standards
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function PillarsSection(): ReactNode {
  const pillars = [
    {num: 1, title: 'Engineering Discipline', desc: 'Structured AI integration into development', link: '/pillars/pillar-1-engineering-discipline/'},
    {num: 2, title: 'Governance & Risk', desc: 'Compliance embedded into AI workflows', link: '/pillars/pillar-2-governance-risk/'},
    {num: 3, title: 'Productivity Architecture', desc: 'Standardized productivity multiplication', link: '/pillars/pillar-3-productivity/'},
    {num: 4, title: 'Operating Model', desc: 'AI embedded into enterprise SDLC', link: '/pillars/pillar-4-operating-model/'},
    {num: 5, title: 'Organizational Enablement', desc: 'AI as capability, not experiment', link: '/pillars/pillar-5-organizational-enablement/'},
  ];
  return (
    <div className="section">
      <div className="container">
        <h2>The Five Pillars</h2>
        <p className="section-subtitle">
          AEEF is built on five structural pillars that together form a complete
          enterprise framework for AI-accelerated engineering.
        </p>
        <div className="grid-5">
          {pillars.map((pillar) => (
            <Link className="pillar-card" to={pillar.link} key={pillar.num}>
              <div className="pillar-number">{pillar.num}</div>
              <h3>{pillar.title}</h3>
              <p>{pillar.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function RolesSection(): ReactNode {
  const roles = [
    {title: 'Developer', desc: 'Daily workflows, prompt engineering, code review, security awareness', link: '/roles/developer/'},
    {title: 'Development Manager', desc: 'Team enablement, quality oversight, metrics, tooling decisions', link: '/roles/development-manager/'},
    {title: 'Scrum Master', desc: 'Sprint adaptation, estimation, ceremony adjustments, team health', link: '/roles/scrum-master/'},
    {title: 'Product Manager', desc: 'Roadmap planning, stakeholder expectations, velocity trade-offs', link: '/roles/product-manager/'},
    {title: 'CEO / Executive', desc: 'Strategic imperative, risk governance, investment ROI, board metrics', link: '/roles/executive/'},
    {title: 'CTO / VP Engineering', desc: 'Technology strategy, architecture, build vs buy, org design', link: '/roles/cto/'},
    {title: 'QA / Test Lead', desc: 'Testing strategy, AI test coverage, defect analysis, automation', link: '/roles/qa-lead/'},
  ];
  return (
    <div className="section-alt">
      <div className="container">
        <h2>Role-Based Guides</h2>
        <p className="section-subtitle">
          Every role has a different relationship with AI-assisted engineering.
          Find the guidance tailored to your responsibilities.
        </p>
        <div className="grid-3">
          {roles.map((role) => (
            <Link className="role-card" to={role.link} key={role.title}>
              <h3>{role.title}</h3>
              <p>{role.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MaturitySection(): ReactNode {
  const levels = [
    {num: 1, label: 'Uncontrolled', className: 'level-1', link: '/pillars/maturity/level-1-uncontrolled'},
    {num: 2, label: 'Exploratory', className: 'level-2', link: '/pillars/maturity/level-2-exploratory'},
    {num: 3, label: 'Defined', className: 'level-3', link: '/pillars/maturity/level-3-defined'},
    {num: 4, label: 'Managed', className: 'level-4', link: '/pillars/maturity/level-4-managed'},
    {num: 5, label: 'AI-First', className: 'level-5', link: '/pillars/maturity/level-5-ai-first'},
  ];
  return (
    <div className="section">
      <div className="container">
        <h2>Maturity Model</h2>
        <p className="section-subtitle">
          AEEF defines a five-level maturity progression for AI-assisted engineering adoption.
        </p>
        <div className="maturity-bar">
          {levels.map((level) => (
            <Link className={`level ${level.className}`} to={level.link} key={level.num}>
              Level {level.num}<br />{level.label}
            </Link>
          ))}
        </div>
        <div style={{textAlign: 'center', marginTop: '1rem'}}>
          <Link className="button button--outline button--primary" to="/pillars/maturity/">
            Explore the Maturity Model
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Enterprise Standards for AI-Accelerated Engineering"
      description="AEEF Standards provides governance-embedded, measurable enterprise standards for AI-assisted software engineering.">
      <HeroSection />
      <main>
        <StatsSection />
        <TracksSection />
        <PillarsSection />
        <RolesSection />
        <MaturitySection />
      </main>
    </Layout>
  );
}
