<?php
/**
 * Zippy Softwares - Centralized Data Repository
 * Holds services, divisions, portfolio, processes, and local SEO entities.
 */

declare(strict_types=1);

// 1. Top Hero Interactive UI/UX Slider Data (High Clarity Posters)
$serviceSlides = [
    [
        'id' => 'web-development',
        'title' => 'Web Development & Business Portals',
        'subtitle' => 'Modern Websites. Powerful Portals. Real Business Growth.',
        'tagline' => 'Build Your Business Online!',
        'badge' => 'Core Division 01',
        'icon' => 'globe',
        'image' => '/assets/images/slider-web-development.jpg',
        'exploreLink' => '/web-development.php',
        'whatsappMessage' => 'Hello Zippy Softwares, I am interested in Web Development & Business Portals for my business.',
        'highlights' => [
            'Business Websites & High-Conversion Landing Pages',
            'Corporate, E-Commerce & Clinic/Hospital Portals',
            'Custom Domain, Fast Cloud Hosting & SEO-Ready Setup'
        ],
        'themeColor' => 'from-blue-600 to-cyan-600',
        'badgeBg' => 'bg-blue-50 text-blue-700 border-blue-200'
    ],
    [
        'id' => 'app-development',
        'title' => 'Custom Software & App Development',
        'subtitle' => 'Turn Your Ideas into Powerful Digital Solutions.',
        'tagline' => 'Build Your Dream App & Software!',
        'badge' => 'Core Division 02',
        'icon' => 'smartphone',
        'image' => '/assets/images/slider-app-development.jpg',
        'exploreLink' => '/app-development.php',
        'whatsappMessage' => 'Hello Zippy Softwares, I want to build a Custom Mobile App / Software Solution for my business.',
        'highlights' => [
            'Native & Cross-Platform Android & iOS Mobile Apps',
            'Business Management, CRM, ERP & Invoicing Software',
            'API Integration, Appointment Booking & Analytics'
        ],
        'themeColor' => 'from-blue-700 to-indigo-600',
        'badgeBg' => 'bg-emerald-50 text-emerald-700 border-emerald-200'
    ],
    [
        'id' => 'ai-automation',
        'title' => 'AI Automation Services & Agents',
        'subtitle' => 'Work Smarter, Not Harder! Automate 24/7.',
        'tagline' => 'Automate Your Business Today!',
        'badge' => 'Core Division 03',
        'icon' => 'bot',
        'image' => '/assets/images/slider-ai-automation.jpg',
        'exploreLink' => '/ai-automation.php',
        'whatsappMessage' => 'Hello Zippy Softwares, I am looking for AI Agent & Workflow Automation Services for my business.',
        'highlights' => [
            'WhatsApp & Website Conversational AI Chatbots',
            'Voice AI Telephony & Automated Customer Calling',
            'Document OCR, Invoice Parsing & Google Sheets Sync'
        ],
        'themeColor' => 'from-sky-600 to-blue-800',
        'badgeBg' => 'bg-sky-50 text-sky-700 border-sky-200'
    ]
];

// 2. Company Stats
$companyStats = [
    ['value' => '85+', 'label' => 'Successful Solutions Delivered'],
    ['value' => '98.5%', 'label' => 'Client Retention & Trust'],
    ['value' => '10+', 'label' => 'Core Industry Verticals'],
    ['value' => '99.98%', 'label' => 'Uptime & System Reliability']
];

// 3. Why Choose Us Items
$whyChooseUs = [
    [
        'icon' => 'trending-up',
        'title' => 'Commercially Driven Architecture',
        'description' => 'We engineer software around your revenue KPIs, ensuring measurable ROI, reduced manual overhead, and higher client conversion.'
    ],
    [
        'icon' => 'shield-check',
        'title' => '100% Code & IP Ownership',
        'description' => 'You hold complete legal and practical ownership of your Git repositories, database structures, Docker containers, and intellectual property.'
    ],
    [
        'icon' => 'cpu',
        'title' => 'Direct Engineer Access',
        'description' => 'No junior account managers playing telephone. You communicate directly with dedicated senior full-stack architects and engineers.'
    ],
    [
        'icon' => 'code',
        'title' => 'Production-Grade Security',
        'description' => 'Rigorous SOC2-aligned development with parameterized queries, encrypted secrets, audit logs, and automated vulnerability scanning.'
    ],
    [
        'icon' => 'layout',
        'title' => 'Multi-Platform Consistency',
        'description' => 'Seamless cross-device experiences spanning responsive web browsers, tablet POS terminals, and native Android/iOS mobile apps.'
    ],
    [
        'icon' => 'layers',
        'title' => 'Post-Launch SLA Support',
        'description' => 'We stand behind our deployments with dedicated maintenance windows, automated backups, and 99.98% guaranteed server uptime.'
    ]
];

// 4. Process Steps (7-Stage Journey)
$processSteps = [
    [
        'step' => 1,
        'title' => 'Discovery & Technical Scoping',
        'timeline' => 'Days 1 – 3',
        'description' => 'We dissect your business workflows, define technical requirements, establish database boundaries, and map project milestones.'
    ],
    [
        'step' => 2,
        'title' => 'Architecture & Data Schema',
        'timeline' => 'Days 4 – 7',
        'description' => 'Senior architects design relational database schemas, REST/GraphQL APIs, microservices, and security access controls.'
    ],
    [
        'step' => 3,
        'title' => 'Interactive UI/UX Design',
        'timeline' => 'Week 2',
        'description' => 'High-fidelity wireframes and clickable design prototypes crafted for effortless user onboarding and conversion optimization.'
    ],
    [
        'step' => 4,
        'title' => 'Agile Sprint Engineering',
        'timeline' => 'Weeks 3 – 6',
        'description' => 'Full-stack development executed in two-week iterative sprints with regular staging reviews and continuous code commits.'
    ],
    [
        'step' => 5,
        'title' => 'Automated QA & Security Audit',
        'timeline' => 'Week 7',
        'description' => 'End-to-end regression testing, penetration tests, database stress checks, and multi-browser cross-device verification.'
    ],
    [
        'step' => 6,
        'title' => 'Cloud Deployment & Go-Live',
        'timeline' => 'Week 8',
        'description' => 'Zero-downtime production deployment, SSL certificate hardening, DNS record propagation, and CDN edge optimization.'
    ],
    [
        'step' => 7,
        'title' => '24/7 SLA Maintenance & Scale',
        'timeline' => 'Continuous',
        'description' => 'Automated server monitoring, scheduled security patches, incremental backups, and continuous feature iterations.'
    ]
];

// 5. Industries We Serve
$industriesData = [
    [
        'id' => 'agriculture',
        'name' => 'Agro & Food Processing',
        'icon' => 'sprout',
        'badge' => 'Supply Chain Tech',
        'summary' => 'Farmer procurement portals, batch quality tracking, cold-storage inventory, and direct market billing.'
    ],
    [
        'id' => 'manufacturing',
        'name' => 'Industrial & Manufacturing',
        'icon' => 'factory',
        'badge' => 'ERP & Shop Floor',
        'summary' => 'Production line tracking, raw material BOM management, machine maintenance logs, and worker shifts.'
    ],
    [
        'id' => 'retail',
        'name' => 'Retail & E-Commerce',
        'icon' => 'shopping-bag',
        'badge' => 'Omnichannel POS',
        'summary' => 'Multi-store inventory sync, barcode billing, payment gateway integration, and automated customer loyalty.'
    ],
    [
        'id' => 'healthcare',
        'name' => 'Healthcare & Diagnostic',
        'icon' => 'stethoscope',
        'badge' => 'HIPAA / Data Privacy',
        'summary' => 'Patient appointment booking, electronic health records (EHR), lab test reports, and pharmacy billing.'
    ],
    [
        'id' => 'education',
        'name' => 'Schools & EdTech',
        'icon' => 'graduation-cap',
        'badge' => 'LMS & Fee Portals',
        'summary' => 'Student enrollment desks, online fee collection with SMS alerts, attendance, and exam management.'
    ],
    [
        'id' => 'real-estate',
        'name' => 'Real Estate & Infrastructure',
        'icon' => 'building',
        'badge' => 'CRM & Site Tracking',
        'summary' => 'Property lead tracking, 3D site plan showcases, customer payment installment schedules, and legal docs.'
    ],
    [
        'id' => 'finance',
        'name' => 'Banking & Financial Services',
        'icon' => 'landmark',
        'badge' => 'Fintech & Lending',
        'summary' => 'Loan referral desks, CIBIL verification workflows, borrower document vaults, and commission dashboards.'
    ],
    [
        'id' => 'logistics',
        'name' => 'Logistics & Fleet Dispatch',
        'icon' => 'truck',
        'badge' => 'Telematics & GPS',
        'summary' => 'Live vehicle tracking, driver trip logs, fuel consumption audits, and automated proof-of-delivery.'
    ],
    [
        'id' => 'hospitality',
        'name' => 'Hospitality & Dining',
        'icon' => 'utensils-crossed',
        'badge' => 'Kitchen POS & Booking',
        'summary' => 'Table reservation portals, QR code digital menus, cloud kitchen order routing, and delivery sync.'
    ],
    [
        'id' => 'professional',
        'name' => 'Corporate & Professional',
        'icon' => 'briefcase',
        'badge' => 'Intranets & Portals',
        'summary' => 'Client onboarding extranets, automated document generation, timesheets, and enterprise compliance desks.'
    ]
];

// 6. Featured Portfolio Projects
$portfolioProjects = [
    [
        'id' => 'enterprise-crm',
        'title' => 'Multi-Branch Field Operations & CRM Platform',
        'category' => 'Business Software',
        'projectType' => 'Enterprise System',
        'badgeColor' => 'bg-emerald-50 text-emerald-700 border-emerald-200',
        'clientOrContext' => 'Regional Distribution Enterprise • Telangana',
        'industry' => 'Industrial Distribution',
        'description' => 'A centralized enterprise operations platform replacing fragmented spreadsheets with real-time field executive tracking, quotation generation, multi-tier approvals, and automated GST billing.',
        'deliverables' => [
            'Role-based access control for 150+ field executives',
            'Offline-first mobile database sync with background upload',
            'Automated PDF invoice generation and WhatsApp delivery',
            'Executive performance leaderboard and commission ledger'
        ],
        'technologies' => ['React.js', 'Node.js', 'PostgreSQL', 'Docker', 'AWS S3']
    ],
    [
        'id' => 'agro-ecommerce',
        'title' => 'B2B Agro-Produce Marketplace & Logistics Portal',
        'category' => 'Web Applications',
        'projectType' => 'Custom Web Platform',
        'badgeColor' => 'bg-blue-50 text-blue-700 border-blue-200',
        'clientOrContext' => 'Agri-Tech Cooperative Network • Hyderabad',
        'industry' => 'Agriculture & Supply Chain',
        'description' => 'An online trading portal connecting 3,000+ farmers with regional wholesale procurement desks. Features live commodity pricing, weighbridge slip uploads, and automated instant UPI settlements.',
        'deliverables' => [
            'Real-time commodity price ticker with SMS broadcast',
            'Multilingual UI supporting Telugu and English',
            'Direct UPI settlement gateway integration',
            'Cold-chain transport dispatch scheduler'
        ],
        'technologies' => ['Next.js', 'Tailwind CSS', 'FastAPI', 'Redis', 'PostgreSQL']
    ],
    [
        'id' => 'ai-voice-bot',
        'title' => 'Autonomous Telephony AI Voice Assistant Desk',
        'category' => 'AI Automation',
        'projectType' => 'Voice AI & Bot',
        'badgeColor' => 'bg-sky-50 text-sky-700 border-sky-200',
        'clientOrContext' => 'Healthcare Network • Nacharam & Secunderabad',
        'industry' => 'Healthcare & Diagnostics',
        'description' => 'An ultra-low-latency voice AI telephony agent handling patient inquiries, appointment scheduling, and lab test confirmation calls 24/7 with zero human call center lag.',
        'deliverables' => [
            'Sub-500ms voice response latency over live SIP telephony',
            'Automated appointment calendar booking with Doctor sync',
            'WhatsApp confirmation and pre-op fasting instruction delivery',
            'Automatic emergency call escalation to human duty nurse'
        ],
        'technologies' => ['Python', 'OpenAI Whisper', 'WebSockets', 'Twilio SIP', 'PostgreSQL']
    ],
    [
        'id' => 'pharmacy-retail-pos',
        'title' => 'Multi-Store Pharmacy Inventory & POS Engine',
        'category' => 'Mobile Applications',
        'projectType' => 'Flutter Mobile & Desktop',
        'badgeColor' => 'bg-purple-50 text-purple-700 border-purple-200',
        'clientOrContext' => 'Retail Pharmacy Chain (12 Branches) • Hyderabad',
        'industry' => 'Healthcare Retail',
        'description' => 'A cross-platform Flutter application powering barcode scanning, batch expiry tracking, Schedule-H drug compliance registers, and instant thermal receipt printing.',
        'deliverables' => [
            'Sub-second barcode lookup across 45,000+ drug SKUs',
            'Near-expiry automated supplier return notification',
            'Bluetooth thermal printer integration',
            'Centralized daily profit and GST filing export'
        ],
        'technologies' => ['Flutter', 'Dart', 'SQLite', 'Node.js', 'GraphQL']
    ],
    [
        'id' => 'loan-referral-portal',
        'title' => 'Digital Loan Referral & Verification Portal',
        'category' => 'Business Software',
        'projectType' => 'Fintech Portal',
        'badgeColor' => 'bg-amber-50 text-amber-700 border-amber-200',
        'clientOrContext' => 'Banking Channel Partner Desk • Hyderabad',
        'industry' => 'Banking & Financial Services',
        'description' => 'A secure lending management portal managing borrower applications, CIBIL eligibility checks, bank branch routing, and referral commission disbursement tracking.',
        'deliverables' => [
            'Bank-grade encrypted borrower document vault',
            'Multi-bank eligibility matrix calculator',
            'Connector commission settlement tracker',
            'Automated SMS status updates to applicants'
        ],
        'technologies' => ['PHP 8.2', 'MySQL', 'Tailwind CSS', 'REST API', 'Apache']
    ],
    [
        'id' => 'corporate-flagship',
        'title' => 'High-Performance Corporate Engineering Flagship',
        'category' => 'Websites',
        'projectType' => 'Corporate Web Portal',
        'badgeColor' => 'bg-blue-50 text-blue-700 border-blue-200',
        'clientOrContext' => 'Heavy Engineering Equipment Manufacturer • Nacharam',
        'industry' => 'Industrial Manufacturing',
        'description' => 'An ultra-fast corporate website showcasing heavy machinery catalogs, interactive 3D product viewports, quotation configurators, and multi-country export lead routing.',
        'deliverables' => [
            'Core Web Vitals 99/100 performance score',
            'Interactive 3D machinery dimension viewer',
            'Automated export RFQ lead routing to regional sales heads',
            'Full SEO indexing across 40+ specialized machinery keywords'
        ],
        'technologies' => ['Tailwind CSS', 'Vanilla JS', 'PHP', 'HTML5', 'Apache']
    ]
];

// 7. Local SEO Target Areas (Nacharam & Surrounding)
$localServiceAreas = [
    [
        'name' => 'Nacharam',
        'pincode' => '500076',
        'distance' => 'Headquarters Location',
        'description' => 'Our primary engineering and registered office is located at Sneha Apartments, HMT Nagar, Nacharam. We provide on-site technical consultations for industrial units, commercial offices, and retail businesses.'
    ],
    [
        'name' => 'Habsiguda',
        'pincode' => '500007',
        'distance' => '5 Mins from Nacharam',
        'description' => 'Direct IT and custom software services for research centers, retail stores, healthcare clinics, and educational hubs around Habsiguda crossroads and Street No 8.'
    ],
    [
        'name' => 'Mallapur',
        'pincode' => '500076',
        'distance' => '3 Mins from Nacharam',
        'description' => 'Specialized ERP, industrial inventory software, and business automation platforms built for manufacturing enterprises and fabrication units across Mallapur Industrial Area.'
    ],
    [
        'name' => 'Uppal',
        'pincode' => '500039',
        'distance' => '10 Mins from Nacharam',
        'description' => 'Scalable web applications, e-commerce platforms, and corporate websites for businesses across Uppal, IDA Uppal, and the Ramanthapur commercial corridor.'
    ],
    [
        'name' => 'Cherlapally',
        'pincode' => '500051',
        'distance' => '10 Mins from Nacharam',
        'description' => 'Heavy machinery inventory portals, worker attendance systems, and B2B ordering software for manufacturing hubs in Cherlapally Industrial Development Area.'
    ],
    [
        'name' => 'Secunderabad',
        'pincode' => '500003',
        'distance' => '15 Mins from Nacharam',
        'description' => 'Complete software engineering, mobile app development, and AI agent deployment for corporate headquarters, wholesale traders, and distributors in Secunderabad.'
    ],
    [
        'name' => 'Narapally',
        'pincode' => '500088',
        'distance' => '15 Mins from Nacharam',
        'description' => 'Educational management software, student enrollment desks, and business management apps for growing institutions and retail hubs along the Warangal Highway.'
    ],
    [
        'name' => 'LB Nagar',
        'pincode' => '500074',
        'distance' => '20 Mins from Nacharam',
        'description' => 'Custom CRM systems, billing software, and customer support AI chatbots for commercial enterprises, real estate firms, and retail franchises in LB Nagar.'
    ]
];
