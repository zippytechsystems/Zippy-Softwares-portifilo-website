import type { ProcessStep } from '../types';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Requirement Discussion',
    timeline: 'Week 1',
    tagline: 'Deep-dive alignment on commercial goals, user personas, and technical boundaries',
    description: 'Every successful software project starts with comprehensive listening. We meet with your key stakeholders to understand your business model, core operational friction, target user profiles, existing tech stack, and measurable KPIs.',
    activities: [
      'Discovery interviews with business founders, department heads, and operational users',
      'Evaluation of existing systems, spreadsheets, legacy software, and APIs',
      'Definition of core success metrics (conversion rates, operational time saved, cost reductions)',
      'Feasibility analysis and identification of technical constraints and security requirements'
    ],
    deliverables: [
      'Project Scope & Vision Document (SOW)',
      'Technical Feasibility Assessment',
      'High-Level Feature Breakdown & MVP Boundary Definition',
      'Non-Disclosure Agreement (NDA) & Mutual Project Agreement'
    ],
    toolsUsed: ['Miro', 'Notion', 'Google Meet / Zoom', 'Slack / Teams'],
    icon: 'MessagesSquare'
  },
  {
    step: 2,
    title: 'Planning & Analysis',
    timeline: 'Week 1 - 2',
    tagline: 'Architectural blueprinting, database modeling, and milestone roadmap creation',
    description: 'We translate business objectives into a rigorous engineering roadmap. We design relational database schemas, select optimal technology stacks, plan cloud infrastructure topology, and map two-week agile sprint milestones.',
    activities: [
      'Database entity-relationship modeling (ER diagrams) and indexing strategies',
      'API contract specification (RESTful / GraphQL / Webhook definitions)',
      'Cloud architecture planning (Microservices, Docker, CDN, serverless vs VM)',
      'Resource scheduling, sprint backlog structuring, and dependency mapping'
    ],
    deliverables: [
      'Software Architecture Blueprint & Technology Matrix',
      'Database Schema & Data Flow Diagrams',
      'Sprint Roadmap with Clear Milestone Acceptance Criteria',
      'Security, Privacy, and Regulatory Compliance Checklist'
    ],
    toolsUsed: ['Jira / Linear', 'DbDiagram.io', 'Lucidchart', 'Swagger / OpenAPI'],
    icon: 'Compass'
  },
  {
    step: 3,
    title: 'UI/UX Design',
    timeline: 'Week 2 - 3',
    tagline: 'User-centric wireframing, high-fidelity prototypes, and design systems',
    description: 'Before writing production code, our UI/UX designers craft intuitive, pixel-perfect user journeys. We build design systems that reflect your corporate brand authority, eliminate user confusion, and ensure ergonomic usability across all device form factors.',
    activities: [
      'Information architecture mapping and low-fidelity wireframing of critical user paths',
      'Creation of bespoke Design Systems (color palettes, typography scale, component library)',
      'High-fidelity interactive prototype development in Figma for mobile, tablet, and desktop',
      'Interactive prototype walkthrough and design review workshops with your team'
    ],
    deliverables: [
      'Complete Figma Interactive Prototype (Clickable Prototype)',
      'Comprehensive Design System Tokens & Asset Library',
      'Responsive Breakpoint Specifications (Mobile, Tablet, Desktop, Wide)',
      'Design Sign-Off and Development Handoff Documentation'
    ],
    toolsUsed: ['Figma', 'Adobe Creative Suite', 'Principle', 'Tailwind Design Tokens'],
    icon: 'Palette'
  },
  {
    step: 4,
    title: 'Development',
    timeline: 'Week 3 - 8+',
    tagline: 'Clean, modular, and scalable software engineering in agile sprint cycles',
    description: 'Our senior developers write clean, modular, and maintainable code adhering to industry standards. Work is delivered in two-week agile sprint increments, allowing you to test working software and provide continuous feedback throughout the development lifecycle.',
    activities: [
      'Modular front-end and back-end coding adhering to SOLID principles and clean architecture',
      'Secure database implementation, migrations, indexing, and connection pooling',
      'Integration of third-party APIs (payment gateways, WhatsApp, ERPs, maps, AI models)',
      'Bi-weekly staging environment deployments with live sprint review demonstrations'
    ],
    deliverables: [
      'Version-controlled Git source code repository with comprehensive commit history',
      'Protected Staging Environment for live stakeholder testing',
      'Documented API endpoints and back-end service layers',
      'Sprint progress reports and transparent burn-down tracking'
    ],
    toolsUsed: ['Git / GitHub', 'VS Code', 'Docker', 'Postman', 'Vercel / AWS Staging'],
    icon: 'Code2'
  },
  {
    step: 5,
    title: 'Testing & Quality Assurance',
    timeline: 'Week 7 - 9',
    tagline: 'Rigorous functional, automated, security, and cross-device validation',
    description: 'Quality is non-negotiable. Our QA engineers subject the software to comprehensive automated unit testing, end-to-end user journey simulations, security vulnerability scans, cross-browser compatibility checks, and load stress testing.',
    activities: [
      'Automated unit, integration, and end-to-end regression testing',
      'Cross-device testing on actual physical iOS, Android, macOS, and Windows hardware',
      'Security vulnerability audits (SQL injection, XSS, CSRF, auth token leakage, OWASP Top 10)',
      'Core Web Vitals, page speed, database query optimization, and load testing under concurrent traffic'
    ],
    deliverables: [
      'Comprehensive QA Test Execution & Bug Resolution Report',
      'Cross-Browser & Cross-Device Compatibility Verification Matrix',
      'Security & Penetration Audit Verification Sign-Off',
      'Performance Benchmark & Lighthouse 90+ Scorecard'
    ],
    toolsUsed: ['Playwright', 'Jest', 'Postman Automated Tests', 'OWASP ZAP', 'Lighthouse'],
    icon: 'ShieldCheck'
  },
  {
    step: 6,
    title: 'Deployment',
    timeline: 'Week 9 - 10',
    tagline: 'Zero-downtime production launch with automated CI/CD and cloud scaling',
    description: 'When the software passes all quality gates, we execute a seamless, zero-downtime production deployment. We set up automated CI/CD deployment pipelines, configure SSL certificates, optimize CDN caches, configure automated database backups, and verify production DNS.',
    activities: [
      'Production server provisioning and container orchestration on AWS, GCP, or DigitalOcean',
      'Automated CI/CD pipeline setup for continuous, safe future deployments',
      'SSL/TLS certificate installation, CDN edge caching, and DDoS mitigation',
      'Live smoke testing and end-to-end production transaction verification'
    ],
    deliverables: [
      'Live Production Environment running on verified cloud infrastructure',
      'Automated Nightly Database Backup and Disaster Recovery Script',
      'SSL Encryption & DNS Security Configuration (HSTS, CSP, CORS)',
      'Handover of all Root Credentials, Keys, and Master Administrative Accounts'
    ],
    toolsUsed: ['AWS / GCP', 'Cloudflare', 'GitHub Actions CI/CD', 'Docker / Nginx', 'Let\'s Encrypt'],
    icon: 'Rocket'
  },
  {
    step: 7,
    title: 'Maintenance & Support',
    timeline: 'Ongoing',
    tagline: 'Proactive 24/7 monitoring, security patches, SLA support, and feature evolution',
    description: 'Our partnership doesn\'t end at deployment. We stand behind our software with ongoing technical support, proactive server health monitoring, security patches, OS version compatibility updates, and continuous feature enhancements to fuel your business growth.',
    activities: [
      '24/7 automated server uptime, memory, and database health monitoring',
      'Guaranteed SLA response times for critical bug fixes and technical inquiries',
      'Regular OS, framework, and security dependency patch upgrades',
      'Quarterly performance reviews, database re-indexing, and feature iteration planning'
    ],
    deliverables: [
      'Monthly System Health & Uptime Performance Reports',
      'Dedicated SLA Support Helpdesk & Emergency WhatsApp Escalation Channel',
      'Routine Data Backup Verification and Recovery Drills',
      'Continuous Feature Roadmap Consultation & Version Updates'
    ],
    toolsUsed: ['Datadog / BetterStack', 'Sentry Error Tracking', 'New Relic', 'Jira Service Desk'],
    icon: 'Headphones'
  }
];
