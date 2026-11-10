import type { ServiceDivision } from '../types';

export const SERVICES_DATA: Record<string, ServiceDivision> = {
  'web-development': {
    id: 'web-development',
    title: 'Web Development Services',
    badge: 'Core Division 01',
    heroHeadline: 'High-Performance Web Engineering for Modern Businesses',
    heroSubheadline: 'From corporate brand flagships and frictionless e-commerce platforms to scalable SaaS applications and enterprise intranets, we engineer web experiences that drive measurable revenue.',
    shortDesc: 'Engineering blazing-fast, secure, and SEO-optimized web applications and enterprise portals tailored to your business needs.',
    longDesc: 'At Zippy Enterprises Private Limited, we design and build full-stack web platforms that combine corporate visual elegance with robust back-end engineering. Whether you require a lead-generating corporate website, a high-volume online shopping ecosystem, or a secure multi-tenant cloud application, our web engineering division ensures responsive precision, bank-grade encryption, and search engine prominence.',
    accentColor: '#2563EB',
    icon: 'Globe',
    metrics: [
      { value: '99.9%', label: 'Average SLA Uptime' },
      { value: '< 1.2s', label: 'Average First Contentful Paint' },
      { value: '100%', label: 'Mobile Responsive Guarantee' },
      { value: 'SEO Ready', label: 'Structured Semantic Schema' }
    ],
    categories: [
      {
        id: 'business-websites',
        title: 'Business Websites',
        subtitle: 'Corporate flagships engineered for trust, brand authority, and client lead conversion',
        description: 'Your digital headquarters needs to command trust, clearly present your service offerings, and turn visitors into qualified sales leads. We craft custom corporate websites with bespoke typography, interactive capability calculators, high-conversion landing funnels, and effortless content management.',
        icon: 'Building2',
        features: [
          'Custom brand identity integration & UI design systems',
          'Search Engine Optimization (SEO) & Core Web Vitals compliance',
          'Interactive lead capture & CRM form routing',
          'Headless CMS integration (Strapi, Sanity, WordPress REST)',
          'Multi-language and localized content support',
          'Lightning-fast page load times under 1.5 seconds'
        ],
        deliverables: [
          'Figma Interactive UI/UX Prototypes',
          'Responsive Cross-Browser Front-end (React/Next.js/Tailwind)',
          'SEO Structured Data & XML Sitemap Configuration',
          'Analytics, Google Tag Manager & Heatmap Setup',
          'Admin Content Dashboard & Editor Training'
        ],
        businessBenefits: [
          'Elevate brand credibility with corporate stakeholders and partners',
          'Capture 40%+ more qualified inbound leads with streamlined contact flows',
          'Ensure seamless viewing on all smartphones, tablets, and 4K displays'
        ],
        idealFor: [
          'Corporate enterprises',
          'IT & Professional Services firms',
          'Manufacturing & industrial exporters',
          'B2B consulting & legal practices'
        ]
      },
      {
        id: 'ecommerce-platforms',
        title: 'E-commerce Platforms',
        subtitle: 'High-converting digital storefronts with automated inventory and multi-gateway checkout',
        description: 'Scalable online commerce architectures built for rapid catalog navigation, safe payment settlement, GST compliance, and seamless multi-channel order fulfillment. We construct both single-brand online stores and complex multi-vendor marketplaces.',
        icon: 'ShoppingCart',
        features: [
          'Custom product catalogs with multi-variant filtering & instant search',
          'Integrated payment gateways (Razorpay, Stripe, PayU, UPI, Netbanking)',
          'Real-time automated inventory sync & low-stock alerts',
          'Automated GST invoicing, tax breakdown, and shipping label generation',
          'Discount engines, loyalty points, and coupon management',
          'Frictionless guest & one-click checkout flows to minimize cart abandonment'
        ],
        deliverables: [
          'Complete storefront with responsive cart & checkout architecture',
          'Secure Merchant & Inventory Admin Portal',
          'Automated WhatsApp/SMS/Email Order Notification System',
          'Payment Gateway & Logistics API Integration',
          'Security & PCI-DSS compliance verification checklist'
        ],
        businessBenefits: [
          'Process thousands of concurrent transactions without site slowdowns',
          'Reduce cart abandonment rates by up to 28% with optimized checkout',
          'Automate inventory reconciliation across physical retail and digital portals'
        ],
        idealFor: [
          'Direct-to-Consumer (D2C) brands',
          'Retail chains & franchise networks',
          'Wholesale & B2B distributors',
          'Healthcare & FMCG distributors'
        ]
      },
      {
        id: 'custom-web-applications',
        title: 'Custom Web Applications',
        subtitle: 'Bespoke SaaS platforms, internal operations software, and interactive customer portals',
        description: 'When off-the-shelf software cannot satisfy your intricate operational requirements, our engineering team architects bespoke web applications. Built with microservices, modular databases, role-based access control (RBAC), and responsive dashboards.',
        icon: 'AppWindow',
        features: [
          'Custom relational and NoSQL database schemas (PostgreSQL, MongoDB)',
          'Granular Role-Based Access Control (RBAC) & Single Sign-On (SSO)',
          'Dynamic interactive data tables, CSV/Excel export, and real-time filters',
          'RESTful and GraphQL API backends with end-to-end type safety',
          'Asynchronous background job processing and webhook dispatchers',
          'Real-time updates via WebSockets for collaborative work environments'
        ],
        deliverables: [
          'Full-stack source repository with comprehensive documentation',
          'Automated CI/CD deployment pipelines on AWS/GCP/DigitalOcean',
          'Secure Authentication & Session Management Module',
          'Audited Database Migrations and Backup Schedules',
          'REST API endpoints with Swagger/OpenAPI interactive documentation'
        ],
        businessBenefits: [
          'Eliminate recurring SaaS licensing costs with owned software assets',
          'Automate manual spreadsheets and disjointed internal operations',
          'Provide customers with a 24/7 self-service digital management portal'
        ],
        idealFor: [
          'SaaS technology startups',
          'Logistics and fleet management firms',
          'Healthcare diagnostic networks',
          'Financial verification & loan underwriting operations'
        ]
      },
      {
        id: 'enterprise-portals',
        title: 'Enterprise Portals',
        subtitle: 'Unified intranets, vendor partner hubs, and governance compliance systems',
        description: 'Secure digital gateways that consolidate enterprise workflows, internal corporate communications, partner integrations, and compliance auditing under a unified, authenticated interface.',
        icon: 'ShieldAlert',
        features: [
          'Enterprise identity integration (SAML, OAuth 2.0, Azure AD / Okta)',
          'Centralized document management with version history & digital signing',
          'Vendor onboarding workflows with KYC and tax document verification',
          'Audit logs, activity tracking, and compliance reporting',
          'Custom notification center with priority routing',
          'Modular widget-based dashboard customization for different team tiers'
        ],
        deliverables: [
          'Enterprise Portal Architecture with Multi-Tier Security',
          'Single Sign-On (SSO) & Multi-Factor Authentication (MFA)',
          'Compliance Audit Log Exporters',
          'User Management & Departmental Group Hierarchy Engine',
          'Comprehensive Technical SLA & Disaster Recovery Playbook'
        ],
        businessBenefits: [
          'Unify fragmented corporate tools into one secure central hub',
          'Accelerate vendor onboarding and partner collaboration by 65%',
          'Guarantee ironclad data privacy and regulatory compliance'
        ],
        idealFor: [
          'Mid to large corporate groups',
          'Government and civic contractors',
          'Multi-branch educational institutions',
          'Banking and financial conglomerates'
        ]
      }
    ],
    technologies: [
      {
        category: 'Frontend & UI',
        items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'Framer Motion']
      },
      {
        category: 'Backend & APIs',
        items: ['Node.js', 'Express', 'Python FastAPI', 'Go (Golang)', 'GraphQL', 'RESTful Microservices']
      },
      {
        category: 'Databases & Storage',
        items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis Caching', 'Supabase', 'AWS S3']
      },
      {
        category: 'DevOps & Cloud',
        items: ['Docker', 'Kubernetes', 'AWS', 'Google Cloud Platform', 'Cloudflare CDN', 'GitHub Actions CI/CD']
      }
    ],
    industriesServed: [
      'Retail & E-commerce',
      'Banking & Financial Services',
      'Healthcare & Diagnostics',
      'Education & E-Learning',
      'Manufacturing & Supply Chain',
      'Real Estate & Construction'
    ],
    faqs: [
      {
        question: 'How long does it typically take to develop a custom web application?',
        answer: 'Timelines vary by scope. A modern corporate business website typically takes 2 to 4 weeks. A full-featured custom web application or e-commerce platform ranges from 6 to 12 weeks, broken into two-week agile sprint cycles with transparent demos.'
      },
      {
        question: 'Will our web application be fully responsive and mobile-friendly?',
        answer: 'Yes, absolutely. We adopt a mobile-first engineering approach. Every interface is rigorously tested across smartphones, iPads/tablets, laptops, and ultra-wide desktop monitors to ensure zero layout clipping and ergonomic touch interactions.'
      },
      {
        question: 'Do you provide maintenance and hosting support after deployment?',
        answer: 'Yes. Every project includes 30 to 90 days of complimentary post-deployment warranty and technical support. Beyond that, we provide structured monthly AMC and DevOps maintenance agreements covering 24/7 uptime monitoring, server optimization, and security updates.'
      },
      {
        question: 'Can you integrate our existing third-party software and payment gateways?',
        answer: 'Yes. We specialize in API integrations with popular CRM systems (Salesforce, Zoho, HubSpot), ERPs (SAP, Tally), payment processors (Razorpay, Stripe, PayU), and SMS/WhatsApp automation gateways.'
      }
    ]
  },
  'app-development': {
    id: 'app-development',
    title: 'App Development Services',
    badge: 'Core Division 02',
    heroHeadline: 'Mission-Critical Business Applications & Mobile Experiences',
    heroSubheadline: 'Empowering your workforce and engaging your customers with tailored business management apps, accounting tools, CRM & ERP systems, and iOS/Android mobile applications.',
    shortDesc: 'Building intuitive, offline-capable, and data-secure applications that streamline operations and elevate workforce productivity.',
    longDesc: 'Modern enterprises cannot rely on disconnected desktop files or paper-based ledgers. Zippy Enterprises designs, develops, and deploys high-utility business applications that automate internal processes and bridge mobile workers with central management. From field service dispatch and real-time inventory reconciliation to customized accounting suites and cross-platform mobile apps, our solutions are engineered for stability, speed, and uncompromising data integrity.',
    accentColor: '#10B981',
    icon: 'Smartphone',
    metrics: [
      { value: 'Cross-Platform', label: 'iOS, Android & Desktop' },
      { value: 'Offline-First', label: 'Local SQLite & Cloud Sync' },
      { value: 'Role-Based', label: 'Granular Staff Permissions' },
      { value: 'Enterprise Ready', label: 'GST & Audit Trail Built-In' }
    ],
    categories: [
      {
        id: 'business-management-apps',
        title: 'Business Management Apps',
        subtitle: 'Custom operational command centers for field dispatch, staff tracking, and task execution',
        description: 'Digitize your day-to-day operational machinery. Our business management applications centralize task assignments, technician geofencing, equipment maintenance schedules, customer service ticketing, and internal approval hierarchies.',
        icon: 'Briefcase',
        features: [
          'GPS technician location logging and route optimization',
          'Job dispatching, live status tracking, and digital customer sign-offs',
          'Asset and machinery maintenance logs with QR code scanning',
          'Multi-level managerial approvals for expenses, leaves, and purchase orders',
          'Role-based dashboard views for field workers, supervisors, and executives',
          'Real-time push notifications and automated customer SMS/WhatsApp updates'
        ],
        deliverables: [
          'Mobile App for Field Staff (Flutter / React Native)',
          'Central Web Dispatching Dashboard for Operations Teams',
          'Offline Local Storage Sync Engine',
          'Customer Digital Signature & Photo Proof Capture Module',
          'Operational Analytics & Daily Productivity Reports'
        ],
        businessBenefits: [
          'Cut operational overhead by 40% through automated scheduling and routing',
          'Eliminate billing disputes with timestamped photo and GPS proof-of-work',
          'Gain real-time visibility into workforce productivity and unresolved tickets'
        ],
        idealFor: [
          'Pest control and hygiene services',
          'Water purification and appliance AMC providers',
          'HVAC, electrical, and facility management',
          'Security guard and facility management firms'
        ]
      },
      {
        id: 'accounting-applications',
        title: 'Accounting Applications',
        subtitle: 'Tailored financial software with automated GST filing, ledger reconciliation, and invoicing',
        description: 'Standard accounting software is often either too complex or rigid for growing businesses. We build tailored accounting software that matches your exact chart of accounts, invoicing workflows, credit periods, vendor payments, and tax filings.',
        icon: 'Calculator',
        features: [
          'Automated GST calculations (CGST, SGST, IGST) with E-way bill generation',
          'Customer balance tracking, aging reports, and automated WhatsApp payment reminders',
          'Double-entry ledger system with automated reconciliation and bank feeds',
          'Vendor purchase bills, debit/credit notes, and expense categorization',
          'Profit & Loss, Balance Sheet, and Trial Balance generation in one click',
          'Exportable audit trails adhering to regulatory compliance standards'
        ],
        deliverables: [
          'Custom Accounting & Invoicing Application (Web + Desktop/Mobile)',
          'GST compliant PDF invoice engine with customized branding',
          'Automated Payment Gateway Link Generation (UPI QR codes on invoices)',
          'Automated WhatsApp payment reminder cron engine',
          'Role-restricted accountant vs executive access layers'
        ],
        businessBenefits: [
          'Accelerate accounts receivable collections by 35% with automated reminders',
          'Eliminate manual data entry errors and missing invoices',
          'Generate comprehensive tax-ready financial statements in seconds'
        ],
        idealFor: [
          'Wholesale traders and distributors',
          'Pharmaceutical stockists and retail chemist networks',
          'Manufacturing units and fabrication plants',
          'Multi-branch retail businesses'
        ]
      },
      {
        id: 'crm-erp-applications',
        title: 'CRM & ERP Applications',
        subtitle: 'Integrated enterprise resource planning spanning sales leads, procurement, and warehouse stock',
        description: 'Unify your front-office sales pipelines with back-office supply chains. Our custom CRM and ERP solutions deliver a single source of truth across customer relationships, sales rep activities, procurement, warehouse bin locations, and fulfillment.',
        icon: 'Layers',
        features: [
          'Lead capture from websites, social media, WhatsApp, and phone calls',
          'Visual sales kanban pipelines with deal stage tracking and forecasting',
          'Multi-warehouse inventory management with batch, serial, and expiry tracking',
          'Purchase requisition, purchase orders, and vendor price comparison',
          'Customer 360 view: complete transaction history, communications, and tickets',
          'Automated notifications when inventory falls below minimum reorder thresholds'
        ],
        deliverables: [
          'Full-featured CRM & ERP Core System with custom database',
          'Mobile app for on-the-road sales representatives',
          'Warehouse barcode / QR scanner integration module',
          'Executive KPI dashboard with revenue forecasting algorithms',
          'Database backup, encryption, and recovery protocol'
        ],
        businessBenefits: [
          'Boost sales conversion rates by 25%+ with structured follow-up cadences',
          'Prevent stockouts and costly overstocking across multiple store locations',
          'Empower leadership with instant visibility into company-wide financial health'
        ],
        idealFor: [
          'Agri-chemical and fertilizer companies',
          'Heavy equipment and machinery manufacturers',
          'Construction material suppliers',
          'Automotive parts distributors'
        ]
      },
      {
        id: 'custom-mobile-applications',
        title: 'Custom Mobile Applications',
        subtitle: 'High-speed, intuitive native and cross-platform apps for iOS and Android devices',
        description: 'Whether you want a customer-facing mobile application to drive repeat orders or an internal tool for remote teams, we craft sleek, high-performing mobile apps using Flutter and React Native. Optimized for low battery consumption and offline resilience.',
        icon: 'TabletSmartphone',
        features: [
          'Single-codebase deployment to both Apple App Store and Google Play Store',
          'Hardware integrations: camera, Bluetooth, GPS, NFC, and biometric auth',
          'Local SQLite/Realm database caching for seamless offline usage',
          'Push notifications via Firebase Cloud Messaging (FCM) and OneSignal',
          'Ultra-smooth 60fps animations and micro-interactions',
          'Rigorous device testing across 50+ screen resolutions and OS versions'
        ],
        deliverables: [
          'Compiled production APK/AAB for Android and IPA for iOS',
          'App Store and Google Play Store submission & approval assistance',
          'Backend REST API endpoints and mobile authentication service',
          'Crashlytics error tracking and user telemetry dashboard',
          'Comprehensive source code documentation'
        ],
        businessBenefits: [
          'Build strong customer loyalty and retention with home-screen presence',
          'Enable field teams to capture data in zero-connectivity remote regions',
          'Halve development costs by utilizing a unified cross-platform Flutter stack'
        ],
        idealFor: [
          'Consumer mobile applications',
          'B2B ordering portals for retailers',
          'Telemedicine and patient appointment apps',
          'On-demand booking and delivery platforms'
        ]
      }
    ],
    technologies: [
      {
        category: 'Mobile Frameworks',
        items: ['Flutter (Dart)', 'React Native', 'Kotlin (Android Native)', 'Swift (iOS Native)', 'Tailwind React Native']
      },
      {
        category: 'Desktop & Cross-Platform',
        items: ['Electron.js', 'Tauri', 'Flutter Desktop', '.NET / C#']
      },
      {
        category: 'Local Storage & Offline Sync',
        items: ['SQLite', 'Hive', 'WatermelonDB', 'Realm', 'Firebase Offline Persistence']
      },
      {
        category: 'Cloud Services & Messaging',
        items: ['Firebase FCM', 'AWS Amplify', 'Supabase Auth', 'OneSignal', 'Google Maps Platform']
      }
    ],
    industriesServed: [
      'Field Services & Maintenance',
      'Healthcare & Pharmacies',
      'Wholesale & Distribution',
      'Real Estate & Facility Management',
      'Logistics & Courier Delivery',
      'Hospitality & Restaurants'
    ],
    faqs: [
      {
        question: 'Should we build native apps or choose cross-platform development (Flutter/React Native)?',
        answer: 'For 95% of business applications, cross-platform development using Flutter or React Native is the smartest commercial choice. It cuts development and maintenance costs by almost half while delivering native 60fps performance and simultaneous releases on both iOS and Android.'
      },
      {
        question: 'Can the mobile application function when there is no internet connection in the field?',
        answer: 'Yes. We architect our business apps with an offline-first paradigm. Data is written securely to the local on-device SQLite database and automatically reconciles with the central cloud server the moment connectivity is restored.'
      },
      {
        question: 'Do you handle the entire Apple App Store and Google Play Store publishing process?',
        answer: 'Yes. We handle developer account setup, app signing, store asset preparation, privacy disclosures, and submission compliance to ensure smooth, timely app approval.'
      },
      {
        question: 'How do you ensure data security on mobile devices?',
        answer: 'We employ biometric authentication (fingerprint/face recognition), encrypted local storage (SQLCipher), HTTPS/TLS encryption with certificate pinning, and automatic session invalidation upon inactivity.'
      }
    ]
  },
  'ai-automation': {
    id: 'ai-automation',
    title: 'AI Agent & Automation Services',
    badge: 'Core Division 03',
    heroHeadline: 'Autonomous AI Agents & Enterprise Workflow Automation',
    heroSubheadline: 'Transform manual, repetitive operations into intelligent 24/7 automated engines with custom LLM agents, natural conversational voice bots, and automated business workflows.',
    shortDesc: 'Deploying autonomous AI agents, telephony voice bots, and cognitive workflow automation that accelerate business efficiency.',
    longDesc: 'Artificial intelligence is no longer an experimental luxury—it is the ultimate operational leverage. Zippy Enterprises engineers bespoke AI agents and autonomous automation pipelines designed to handle real business workloads: answering customer queries 24/7, conducting telephone follow-ups, parsing complex invoices and PDFs, and synchronizing data across disparate software systems. We combine state-of-the-art Large Language Models (LLMs) with strict business guardrails, ensuring accurate, hallucination-free, and secure enterprise automation.',
    accentColor: '#00D2FF',
    icon: 'Bot',
    metrics: [
      { value: '24/7/365', label: 'Continuous Unattended Operation' },
      { value: '80%+', label: 'Support Resolution Without Human Intervention' },
      { value: '0% Error', label: 'Data Extraction & Invoice Parsing Accuracy' },
      { value: '10x Speed', label: 'Faster Response & Lead Conversion' }
    ],
    categories: [
      {
        id: 'ai-chatbots',
        title: 'AI Chatbots',
        subtitle: 'LLM-powered knowledge base agents that answer inquiries and qualify leads 24/7',
        description: 'Move far beyond antiquated rule-based chatbots that frustrate customers. We build intelligent conversational agents powered by modern LLMs and Retrieval-Augmented Generation (RAG). Connected directly to your company documentation, product catalogs, and live inventory.',
        icon: 'MessageSquareCode',
        features: [
          'Retrieval-Augmented Generation (RAG) over your proprietary company knowledge base',
          'Zero hallucination safeguards with strict factual boundary constraints',
          'Multi-channel deployment across Website, WhatsApp Business API, and Telegram',
          'Contextual multi-turn dialogue with personalized customer memory',
          'Automated lead qualification: captures budget, timeline, and contact information',
          'Seamless warm-handover to human sales or support agents with full conversation transcript'
        ],
        deliverables: [
          'Custom Embeddable Web Chatbot Widget with customized branding',
          'WhatsApp Business Cloud API Agent Integration',
          'Vector Database Knowledge Base Setup (Pinecone / pgvector)',
          'Agent Performance & Analytics Dashboard with sentiment scoring',
          'Conversation Transcript Archival & Human Takeover Console'
        ],
        businessBenefits: [
          'Engage and qualify inbound prospects within 5 seconds at 2 AM or 2 PM',
          'Reduce customer support workload by up to 75% without hiring new staff',
          'Provide instant, accurate product recommendations in multiple languages'
        ],
        idealFor: [
          'E-commerce websites & retail brands',
          'Real estate developers & property brokerages',
          'Financial loan and insurance advisors',
          'Educational institutes and coaching academies'
        ]
      },
      {
        id: 'ai-voice-agents',
        title: 'AI Voice Agents',
        subtitle: 'Ultra-low latency conversational voice bots for inbound calls and outbound telephone outreach',
        description: 'Equip your business with human-like AI voice agents that speak fluent natural language with lifelike intonation. Capable of handling hundreds of simultaneous phone calls for appointment scheduling, payment follow-ups, lead qualification, and order status checks.',
        icon: 'PhoneCall',
        features: [
          'Ultra-low latency speech-to-speech interaction under 600ms',
          'Natural human-like voice synthesis with tone, pause, and emotion control',
          'Automated inbound phone call answering with intelligent intent routing',
          'Outbound telephone campaigns for appointment confirmations and payment reminders',
          'Live CRM synchronization during the call (updates lead status, books calendar slots)',
          'Automated call recording, transcription, and sentiment summarization'
        ],
        deliverables: [
          'Custom Virtual Phone Number & SIP Trunking Configuration',
          'Trained Conversational Voice Prompt & Knowledge Script',
          'Telephony Cloud Webhook Integration (Twilio, Exotel, Plivo)',
          'CRM & Google Calendar real-time booking integration',
          'Supervisor Dashboard with live call monitoring and audit logs'
        ],
        businessBenefits: [
          'Scale inbound phone support to 500+ simultaneous callers with zero wait time',
          'Lower call center operational costs by 60% while improving resolution speed',
          'Recover pending customer dues with courteous, automated voice reminders'
        ],
        idealFor: [
          'Healthcare clinics & hospital appointment desks',
          'Banking, microfinance, and loan recovery teams',
          'Automotive service centers & test drive scheduling',
          'Hotel and travel booking reservation desks'
        ]
      },
      {
        id: 'business-workflow-automation',
        title: 'Business Workflow Automation',
        subtitle: 'End-to-end integration pipelines connecting your CRM, ERP, emails, and internal databases',
        description: 'Eliminate repetitive copy-pasting, manual spreadsheet updates, and fragmented software tools. We architect resilient backend automation pipelines using automated event triggers, webhook routers, and custom middleware that keep your company data perfectly in sync.',
        icon: 'GitFork',
        features: [
          'Intelligent Document Processing (IDP): OCR extraction from invoices, POs, and PDFs',
          'Multi-app workflow orchestrations (connecting Gmail, Google Sheets, CRM, ERP, and Slack)',
          'Automated lead ingestion and instant round-robin assignment to sales reps',
          'Scheduled database cleanup, backup verification, and automated reporting',
          'Error alert monitors that notify engineering teams via WhatsApp/Slack instantly',
          'Custom webhook receivers and data transformation middleware'
        ],
        deliverables: [
          'Custom Automation Pipeline Architecture (n8n, Python, AWS Lambda)',
          'Document OCR & Optical Character Recognition Parser',
          'Bi-directional API Sync Connectors between your primary software tools',
          'Automated Health Monitoring & Failure Recovery System',
          'Step-by-step Standard Operating Procedure (SOP) documentation'
        ],
        businessBenefits: [
          'Save your staff 20+ hours per week of manual data entry and spreadsheet work',
          'Eliminate costly human mistakes in billing and order transcription',
          'Speed up customer order processing cycles from 24 hours to 3 minutes'
        ],
        idealFor: [
          'Logistics and dispatch operations',
          'Manufacturing procurement and supply chain',
          'Accounting and audit firms',
          'E-commerce order fulfillment warehouses'
        ]
      },
      {
        id: 'customer-support-automation',
        title: 'Customer Support Automation',
        subtitle: 'Intelligent ticket triage, auto-resolution, and sentiment-aware escalation engines',
        description: 'Transform customer support into a competitive advantage. Our customer support automation suite automatically categorizes incoming tickets, resolves frequent issues immediately, detects customer frustration, and routes urgent cases to senior managers with prepopulated solutions.',
        icon: 'Headphones',
        features: [
          'Automated ticket categorization and priority scoring based on sentiment and customer value',
          'Instant auto-resolution for common requests (password reset, order tracking, invoice copies)',
          'AI-assisted response suggestions for human support agents to reply 3x faster',
          'SLA breach prevention with automated escalations and manager alerts',
          'Multi-channel support unification: Email, WhatsApp, Portal, and Live Chat in one inbox',
          'Customer satisfaction (CSAT) analytics and agent performance telemetry'
        ],
        deliverables: [
          'Support Ticketing Automation Engine (integrated with Zendesk, Freshdesk, or Custom Portal)',
          'AI Auto-Responder with Knowledge Grounding',
          'Sentiment Analysis & VIP Customer Escalation Matrix',
          'Automated WhatsApp CSAT Survey Collector',
          'Support Operations Performance Dashboard'
        ],
        businessBenefits: [
          'Resolve 65%+ of routine customer inquiries without any human agent intervention',
          'Slash average first response time from 4 hours down to 30 seconds',
          'Improve Customer Satisfaction (CSAT) scores by over 30 points'
        ],
        idealFor: [
          'SaaS software providers',
          'Telecom and internet service providers',
          'Consumer electronics brands',
          'Financial fintech platforms and payment gateways'
        ]
      }
    ],
    technologies: [
      {
        category: 'AI & LLM Frameworks',
        items: ['OpenAI GPT-4o', 'Google Gemini 1.5 / 2.0', 'Anthropic Claude 3.5', 'LangChain', 'LlamaIndex', 'Ollama (Private Hosting)']
      },
      {
        category: 'Vector DBs & Embeddings',
        items: ['Pinecone', 'pgvector (PostgreSQL)', 'ChromaDB', 'Qdrant', 'OpenAI text-embedding-3']
      },
      {
        category: 'Voice & Telephony',
        items: ['Twilio Voice', 'Deepgram Speech-to-Text', 'ElevenLabs Voice Engine', 'Exotel Telephony', 'WebSockets Streaming']
      },
      {
        category: 'Automation & Middleware',
        items: ['n8n Self-Hosted', 'Python AsyncIO', 'FastAPI', 'Celery / Redis Queue', 'AWS Lambda Serverless']
      }
    ],
    industriesServed: [
      'Customer Support & Contact Centers',
      'Banking & Fintech Collections',
      'Healthcare Patient Care',
      'Real Estate Lead Generation',
      'E-commerce & D2C Brands',
      'Education Admissions & Counseling'
    ],
    faqs: [
      {
        question: 'Will the AI chatbot hallucinate or provide incorrect answers to our customers?',
        answer: 'No. We configure our AI agents with strict Retrieval-Augmented Generation (RAG) and guardrails. The AI only references your verified, approved company documentation and system APIs. If information is not present or an inquiry falls outside its purview, it politely acknowledges its limitation and escalates the conversation to your human team.'
      },
      {
        question: 'Is our proprietary business and customer data secure with your AI solutions?',
        answer: 'Yes, absolutely. We prioritize data sovereignty. We utilize enterprise API agreements that explicitly prohibit using client data to train public models. For sensitive enterprise environments, we can also deploy private, air-gapped open-weight models (like Llama 3 or Mistral) on your own private cloud or on-premise infrastructure.'
      },
      {
        question: 'How does an AI voice agent handle caller interruptions or background noise?',
        answer: 'Our modern voice agents utilize continuous streaming WebSockets with built-in Voice Activity Detection (VAD). If the caller speaks mid-sentence, the AI instantly pauses its speech and listens, just like a natural human conversational partner.'
      },
      {
        question: 'Can you integrate AI automation with our existing CRM and ERP tools?',
        answer: 'Yes. Our AI agents are built to interact with existing REST APIs, SQL databases, and webhooks. The AI can read live order statuses, update lead stages in your CRM, generate invoice PDFs, and schedule calendar appointments autonomously.'
      }
    ]
  }
};
