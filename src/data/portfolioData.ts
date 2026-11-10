import type { Project } from '../types';

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'rakesh-pest-control',
    slug: 'rakesh-pest-control-system',
    title: 'Rakesh Pest Control Operational & Booking Platform',
    category: 'Web Applications',
    projectType: 'Client Project',
    clientOrContext: 'Rakesh Pest Control Services',
    tagline: 'End-to-end field service booking, technician route scheduling, and customer CRM',
    description: 'A custom operational platform built to streamline booking inquiries, schedule on-site technician inspections, generate digital treatment certificates, and automate customer follow-up cycles.',
    fullOverview: 'Rakesh Pest Control required a modern digital system to replace manual paper registers and fragmented phone calls. Zippy Enterprises designed and deployed a comprehensive booking and management portal allowing customers to schedule inspections online, while management assigns jobs to field staff with automated status notifications and digital invoices.',
    challenge: 'Prior to this solution, incoming customer inquiries were tracked across manual registers, leading to missed appointments, delayed inspections, and untracked repeat annual maintenance contracts (AMCs).',
    solution: 'We engineered a responsive web management portal with an automated inquiry pipeline, job status tracking (Received, Scheduled, Inspected, Completed), digital treatment documentation, and automated customer notifications.',
    technologies: ['React.js', 'Tailwind CSS', 'Node.js', 'Express', 'JSON Store DB', 'WhatsApp API'],
    deliverables: [
      'Customer-facing booking portal with service selection',
      'Operations admin dashboard for booking triage and assignment',
      'Automated email and customer inquiry persistence engine',
      'Mobile-responsive layout for field technician status updates',
      'Digital service report generation module'
    ],
    keyFeatures: [
      'Real-time inquiry capture and categorization',
      'Interactive service selection (Residential, Commercial, Termite, Bedbug)',
      'Automated customer acknowledgment via WhatsApp and email',
      'Inspection date and time slot calendar scheduling',
      'Secure administrative portal for customer ledger and job tracking'
    ],
    metrics: [
      { label: 'Booking Response Time', value: 'Reduced by 70%' },
      { label: 'Lost Inquiries', value: 'Zero Lost Leads' },
      { label: 'System Reliability', value: '100% Up-time' }
    ],
    industry: 'Field Services & Facilities',
    accentColor: '#10B981',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
  },
  {
    id: 'medhealth-pharmacy',
    slug: 'medhealth-pharmacy-retail-management',
    title: 'MedHealth Pharmacy Retail & Inventory Management',
    category: 'Business Software',
    projectType: 'Client Project',
    clientOrContext: 'MedHealth Retail & Chemist Store',
    tagline: 'Prescription intake, batch-wise drug inventory, expiry alerts, and GST billing',
    description: 'A tailored retail pharmacy software solution designed for rapid barcode counter billing, prescription record keeping, automated expiry warnings, and supplier replenishment management.',
    fullOverview: 'Developed specifically for retail chemist operations, this software delivers fast point-of-sale counter operations with instant drug salt search, batch-specific tracking, automated supplier purchase orders, and compliant GST sales invoices.',
    challenge: 'Standard generic retail POS systems lacked critical pharmaceutical workflows: tracking batch numbers, alerting before medicine expiration, and handling scheduled drug prescription records.',
    solution: 'We developed an intuitive desktop and web application with split-second salt/substitute search, automated 60-day expiry warning triggers, barcode counter billing, and daily sales reconciliation.',
    technologies: ['TypeScript', 'React', 'Tailwind CSS', 'SQLite Local DB', 'Node.js Backend'],
    deliverables: [
      'High-speed POS counter billing interface with thermal print support',
      'Medicine catalog with 10,000+ pre-indexed drugs and compositions',
      'Automated batch and expiry monitoring module',
      'GST tax summary and daily profit ledger export',
      'Customer WhatsApp invoice and dosage reminder system'
    ],
    keyFeatures: [
      'Split-second barcode scan & keyboard-only billing shortcuts',
      'Substitute generic drug composition suggestions',
      'Automated purchase order generation for depleted medicines',
      'Customer prescription photo upload and archival',
      'Daily, monthly, and annual sales margin analytics'
    ],
    metrics: [
      { label: 'Counter Checkout Time', value: '< 20 Seconds' },
      { label: 'Expired Stock Waste', value: 'Reduced by 85%' },
      { label: 'Billing Accuracy', value: '100% GST Compliant' }
    ],
    industry: 'Healthcare & Pharmaceuticals',
    accentColor: '#3B82F6',
    badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30'
  },
  {
    id: 'purifier-water-business',
    slug: 'purifierflow-water-service-crm',
    title: 'PurifierFlow Water Service & AMC Management Platform',
    category: 'Web Applications',
    projectType: 'Client Project',
    clientOrContext: 'Water Purification & RO Systems Enterprise',
    tagline: 'Customer recurring AMC scheduling, filter lifecycle alerts, and field technician dispatch',
    description: 'A custom service management platform designed to automate water purifier installations, filter replacement cycles, customer service requests, and annual maintenance contract renewals.',
    fullOverview: 'PurifierFlow enables water purifier sales and maintenance businesses to maintain complete service histories for every installed residential and commercial RO unit. The platform automatically tracks filter life cycles based on installation dates and alerts customers and technicians before filters foul.',
    challenge: 'Managing over 1,500 active AMC customers via phone calls and paper cards resulted in missed quarterly services, expired membranes, and dissatisfied commercial clients.',
    solution: 'We engineered a centralized CRM and dispatch portal that maps every customer unit, tracks filter lifespan via automated scheduling algorithms, and dispatches technicians with digital job cards.',
    technologies: ['React.js', 'Tailwind CSS', 'Node.js', 'Express', 'Twilio SMS API', 'PostgreSQL'],
    deliverables: [
      'Customer Service History and Machine Serial Number Database',
      'Automated 90-day filter replacement reminder engine',
      'Technician job card dispatch and digital signature capture',
      'Customer AMC subscription portal with online renewals',
      'Inventory tracking for membranes, sediment filters, and pumps'
    ],
    keyFeatures: [
      'Machine QR-code tagging for instantaneous on-site service history lookup',
      'Automated WhatsApp reminders for upcoming quarterly maintenance',
      'Integrated payment link generation for AMC renewals',
      'Customer feedback and rating collection upon job completion',
      'Real-time technician route allocation and pending ticket boards'
    ],
    metrics: [
      { label: 'AMC Renewal Rate', value: 'Increased by 45%' },
      { label: 'Service Turnaround', value: '< 24 Hours' },
      { label: 'Customer Retention', value: '96% Sustained' }
    ],
    industry: 'Home & Commercial Appliances',
    accentColor: '#00D2FF',
    badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
  },
  {
    id: 'zippy-icic-bank-loans',
    slug: 'zippy-banking-loan-verification-portal',
    title: 'Zippy Banking & Loan Verification Platform',
    category: 'Web Applications',
    projectType: 'Client Project',
    clientOrContext: 'Banking & Financial Services Lead Portal',
    tagline: 'Digital loan eligibility calculator, KYC intake, branch allocation, and lead pipeline',
    description: 'A secure financial services web portal built for processing retail and business loan inquiries, verifying document prerequisites, calculating eligibility, and dispatching leads to banking executives.',
    fullOverview: 'The Zippy Banking & Loan Portal bridges prospective loan applicants with qualified banking loan officers. It guides applicants through income verification, loan amount estimation, and encrypted document uploads, ensuring high-conversion lead generation while complying with rigorous financial data safety standards.',
    challenge: 'Financial services lead generation often suffers from low qualification rates and disorganized document collection over unencrypted messaging apps.',
    solution: 'We constructed an encrypted web portal featuring interactive EMI and eligibility calculators, instant pan-card/Aadhaar format validation, structured document uploads, and automated lead scoring.',
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Node.js', 'AWS S3 Encrypted'],
    deliverables: [
      'Interactive EMI & Loan Eligibility Calculator with dynamic amortization charts',
      'Step-by-step digital loan application funnel (Personal, Business, Home, Auto)',
      'Secure multi-document file uploader with size & format validation',
      'Executive dashboard for branch managers to review and assign leads',
      'Automated SMS & WhatsApp loan status tracking for applicants'
    ],
    keyFeatures: [
      'End-to-end data encryption for sensitive financial documents',
      'Real-time credit score range assessment and eligibility recommendation',
      'Automated lead qualification rules engine',
      'Multi-branch lead routing based on pin code and loan type',
      'Compliance-ready audit log for lead handling and document access'
    ],
    metrics: [
      { label: 'Lead Completion Rate', value: 'Boosted by 62%' },
      { label: 'Document Rejection', value: 'Cut by 40%' },
      { label: 'Security Rating', value: 'Bank-Grade AES 256' }
    ],
    industry: 'Banking & Financial Services',
    accentColor: '#F59E0B',
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30'
  },
  {
    id: 'novapulse-ai-voice-agent',
    slug: 'novapulse-ai-voice-and-chat-support',
    title: 'NovaPulse Autonomous AI Voice & Chat Support Agent',
    category: 'AI Automation',
    projectType: 'Interactive Demo',
    clientOrContext: 'Zippy Enterprise AI Showcase Demo',
    tagline: 'Multi-lingual real-time conversational voice agent with sub-500ms latency telephony',
    description: 'An autonomous enterprise AI agent capable of holding natural telephone conversations, scheduling calendar meetings, checking live database records, and resolving complex customer support inquiries.',
    fullOverview: 'NovaPulse is an enterprise demonstration prototype illustrating how modern LLMs, real-time voice streaming, and Retrieval-Augmented Generation (RAG) can automate 80% of contact center workloads. The agent handles inbound telephone calls, processes customer spoken dialogue, queries live inventory/order databases via function calling, and updates CRM records in real time.',
    challenge: 'Traditional IVRs (interactive voice response) are frustratingly rigid, while human customer support centers face high turnover and inability to scale during peak volume surges.',
    solution: 'We engineered an intelligent voice pipeline integrating streaming Speech-to-Text, low-latency LLM orchestration with custom business logic guardrails, and natural voice synthesis connected to SIP telephony.',
    technologies: ['Google Gemini / GPT-4o', 'Deepgram Nova-2', 'ElevenLabs', 'WebSockets', 'Python FastAPI', 'Pinecone Vector DB'],
    deliverables: [
      'Low-latency full-duplex conversational voice telephony pipeline',
      'Knowledge-grounded RAG retrieval agent for instant corporate Q&A',
      'Function-calling layer integrated with SQL database & Google Calendar',
      'Live transcription, sentiment analysis, and call audit dashboard',
      'Interactive browser-based live voice simulation demo'
    ],
    keyFeatures: [
      'Interruption handling: AI naturally halts when human caller speaks',
      'Sub-500ms end-to-end conversational roundtrip latency',
      'Zero hallucinations: strictly adheres to verified company knowledge bounds',
      'Multi-lingual support: English, Hindi, Telugu, and international languages',
      'Automated call summary generated and synced to CRM upon hang-up'
    ],
    metrics: [
      { label: 'Response Latency', value: '< 480ms' },
      { label: 'Autonomous Resolution', value: '82% of calls' },
      { label: 'Human Handoff', value: 'Seamless with Transcript' }
    ],
    industry: 'Customer Support & Telephony',
    accentColor: '#00D2FF',
    badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
  },
  {
    id: 'agrologix-smart-erp',
    slug: 'agrologix-supply-chain-erp',
    title: 'AgroLogix Smart Agri-Supply Chain & Processing ERP',
    category: 'Business Software',
    projectType: 'Enterprise Concept',
    clientOrContext: 'Conceptual Architecture for Agri-Business & Seed Processing',
    tagline: 'Farm-to-warehouse inventory traceability, mandi price feeds, and distributor credit management',
    description: 'An enterprise-grade software architecture engineered for agribusinesses, agricultural input manufacturers, grain processing mills, and regional wholesale networks.',
    fullOverview: 'AgroLogix is designed to resolve the unique operational hurdles of agricultural supply chains: batch-wise seed germination testing, perishable commodity shelf-life tracking, seasonal procurement surges, and complex distributor credit schemes.',
    challenge: 'Agricultural processors deal with fluctuating raw material procurement prices, complex weighbridge integrations, and non-linear credit terms with local rural distributors.',
    solution: 'A cloud-based modular ERP featuring automated weighbridge IoT data capture, batch-level quality testing logs, real-time mandi price benchmarking, and automated credit limit enforcement.',
    technologies: ['React.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Chart.js'],
    deliverables: [
      'Complete ERP architecture blueprint and database schema',
      'Procurement & weighbridge intake verification module',
      'Warehouse bin management with barcode traceability',
      'Distributor ledger with automated interest and credit controls',
      'Interactive executive analytics dashboard with crop yield forecasts'
    ],
    keyFeatures: [
      'Batch traceability from raw farmer lot to finished packaged bag',
      'Integration ready for weighbridge hardware via serial/network protocols',
      'Automated GST e-invoice and e-way bill generation',
      'Dynamic distributor credit management with overdue lockouts',
      'Mobile-friendly dispatch module for warehouse workers'
    ],
    metrics: [
      { label: 'Traceability Time', value: '< 5 Seconds' },
      { label: 'Procurement Leakage', value: 'Eliminated' },
      { label: 'Architecture Scale', value: '100k+ Transactions' }
    ],
    industry: 'Agriculture & Agro Industries',
    accentColor: '#10B981',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
  },
  {
    id: 'finshield-ai-invoice-audit',
    slug: 'finshield-automated-invoice-and-audit',
    title: 'FinShield AI Automated Invoice OCR & Audit Engine',
    category: 'AI Automation',
    projectType: 'Interactive Demo',
    clientOrContext: 'Enterprise Finance Automation Demo',
    tagline: 'Computer vision invoice extraction, 3-way PO matching, and fraud anomaly detection',
    description: 'An AI-powered document intelligence pipeline that scans incoming vendor invoices, extracts line-item data with 99%+ accuracy, compares against purchase orders, and flags price anomalies.',
    fullOverview: 'FinShield automates the labor-intensive accounts payable workflow. Accounts teams no longer need to manually key in hundreds of paper invoices or PDF attachments. FinShield extracts vendor details, line items, taxes, and bank details, performs automated 3-way matching against existing POs and Goods Received Notes (GRNs), and queues approved bills directly into the accounting system.',
    challenge: 'Manual invoice data entry costs companies thousands of hours each year, and results in costly duplicate payments and missed vendor early-payment discounts.',
    solution: 'We engineered an optical character recognition and multimodal LLM parsing pipeline that handles skewed, scanned, or non-standard format invoices with structured JSON schema outputs.',
    technologies: ['Python FastAPI', 'Tesseract OCR / Multimodal Vision', 'LangChain', 'PostgreSQL', 'Docker'],
    deliverables: [
      'Intelligent PDF and image invoice upload dropzone',
      'Automated line-item data extraction into structured financial records',
      'Automated 3-way matching rules engine (PO vs Invoice vs GRN)',
      'Anomaly detection module highlighting duplicate invoices and price spikes',
      'Export connectors for Tally, SAP, and custom ERP databases'
    ],
    keyFeatures: [
      'Multimodal parsing: effortlessly extracts data from photos of paper bills',
      'Automated GSTIN and vendor bank account validation',
      'Tolerance threshold matching (flags variance above 1%)',
      'Audit log with side-by-side original image and extracted data review',
      'Automated Slack/Email alerts for approval by department heads'
    ],
    metrics: [
      { label: 'Data Entry Time', value: 'Reduced by 92%' },
      { label: 'Extraction Accuracy', value: '99.4%' },
      { label: 'Processing Speed', value: 'Under 4s per page' }
    ],
    industry: 'Finance & Enterprise Operations',
    accentColor: '#6366F1',
    badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30'
  },
  {
    id: 'apexcorp-heavy-machinery',
    slug: 'apexcorp-global-machinery-portal',
    title: 'ApexCorp Global Machinery & Equipment Portal',
    category: 'Websites',
    projectType: 'Enterprise Concept',
    clientOrContext: 'Enterprise Manufacturing & Heavy Engineering Showcase',
    tagline: 'High-performance multilingual corporate portal with 3D machinery catalog and RFQ engine',
    description: 'A corporate web architecture designed for manufacturing exporters, featuring technical specification filters, multi-currency Request for Quote (RFQ) builders, and interactive 360 equipment previews.',
    fullOverview: 'Engineered to showcase heavy engineering capabilities to global international buyers. The portal balances heavy media assets with extreme speed through progressive image decoding and server-rendered micro-frontends.',
    challenge: 'Industrial manufacturers often struggle with dated, slow websites that fail to demonstrate the precision and scale of their manufacturing facilities to overseas clients.',
    solution: 'We architected a modern Next.js corporate portal featuring video-enhanced machinery showcases, interactive RFQ specification configurators, downloadable CAD technical spec sheets, and multi-language capabilities.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Three.js / WebGL', 'Headless CMS', 'Cloudflare CDN'],
    deliverables: [
      'Industrial corporate website with interactive product showcase',
      'Dynamic multi-tier Request for Quote (RFQ) workflow',
      'Interactive 360-degree machinery viewer component',
      'Global distributor locator with interactive maps',
      'Compliance and certification download center'
    ],
    keyFeatures: [
      'Sub-second page transitions across 100+ industrial product specifications',
      'Automated conversion of RFQ inquiries into structured lead records',
      'SEO architecture targeting international export keywords',
      'Interactive machinery capability comparison matrix',
      'Multi-currency and multi-region content localization'
    ],
    metrics: [
      { label: 'International Leads', value: '+78% Inbound' },
      { label: 'Google PageSpeed Score', value: '98 / 100' },
      { label: 'Avg Session Duration', value: '4m 30s' }
    ],
    industry: 'Manufacturing & Heavy Engineering',
    accentColor: '#3B82F6',
    badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30'
  },
  {
    id: 'fleettrack-logistics-mobile',
    slug: 'fleettrack-pro-mobile-logistics',
    title: 'FleetTrack Pro Mobile Logistics & Driver Dispatch',
    category: 'Mobile Applications',
    projectType: 'Enterprise Concept',
    clientOrContext: 'Enterprise Logistics & Freight Transportation Showcase',
    tagline: 'Offline-first driver mobile app with live GPS tracking, electronic POD, and route navigation',
    description: 'A robust mobile application built for commercial truck drivers and fleet dispatchers, ensuring seamless operation in low-connectivity highway zones with digital proof of delivery.',
    fullOverview: 'FleetTrack Pro connects highway drivers with central transport managers. Drivers receive optimized dispatch schedules, log toll and fuel expenses, capture receiver signatures upon delivery, and navigate optimal freight corridors.',
    challenge: 'Transportation drivers frequently encounter dead mobile reception zones, causing communication blackouts, unrecorded delivery sign-offs, and delayed freight invoicing.',
    solution: 'We engineered an offline-first Flutter application that records GPS breadcrumbs and delivery signatures locally, syncing automatically when entering cellular range.',
    technologies: ['Flutter (Dart)', 'SQLite', 'Firebase Cloud Messaging', 'Google Maps API', 'Node.js'],
    deliverables: [
      'Cross-platform mobile application for Android and iOS devices',
      'Offline-first synchronization engine with encrypted local storage',
      'Digital signature and photo proof-of-delivery (e-POD) module',
      'Driver toll, fuel, and trip expense logging interface',
      'Fleet manager web dashboard with live vehicle position markers'
    ],
    keyFeatures: [
      'Uninterrupted offline functionality with automatic background sync',
      'Turn-by-turn navigation optimized for commercial truck weight limits',
      'Instant electronic proof of delivery with geostamped customer signatures',
      'SOS emergency breakdown button with instant dispatch notifications',
      'Battery-optimized background GPS telemetry engine'
    ],
    metrics: [
      { label: 'Offline Sync Speed', value: 'Instant upon 4G/5G' },
      { label: 'Billing Cycle Time', value: 'Same-Day Invoicing' },
      { label: 'Driver Adoption Rate', value: '97% Rating' }
    ],
    industry: 'Logistics & Transportation',
    accentColor: '#10B981',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
  }
];
