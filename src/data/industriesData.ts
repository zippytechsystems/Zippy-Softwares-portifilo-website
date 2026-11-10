import type { IndustryItem } from '../types';

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'agriculture',
    name: 'Agriculture & Agro Industries',
    icon: 'Sprout',
    badge: 'AgriTech & Processing',
    summary: 'Digitalizing seed production, fertilizer supply chains, mandi pricing, cold storage traceability, and rural retail distribution.',
    solutionsProvided: [
      'Supply chain & batch-level seed traceability ERP',
      'Weighbridge and warehouse intake automation',
      'Distributor credit management & farmer ledger portals',
      'Crop advisory and weather alert WhatsApp broadcast bots'
    ],
    sampleUseCases: [
      'AgroLogix ERP for seed and fertilizer distributors',
      'Grain processing mill inventory and moisture logs',
      'Contract farming harvest and purchase tracking'
    ]
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Heavy Engineering',
    icon: 'Factory',
    badge: 'Industrial 4.0',
    summary: 'Modernizing shop-floor production tracking, raw material procurement, machinery maintenance logs, and global export portals.',
    solutionsProvided: [
      'Production scheduling & machine downtime logging',
      'Digital Bill of Materials (BOM) & inventory management',
      'Global multi-currency Request for Quote (RFQ) portals',
      'Predictive machinery maintenance alert systems'
    ],
    sampleUseCases: [
      'ApexCorp global export portal with 3D machinery preview',
      'Fabrication plant job order and steel stock allocation',
      'Quality inspection checklist app with photo verification'
    ]
  },
  {
    id: 'retail-wholesale',
    name: 'Retail & Wholesale',
    icon: 'ShoppingBag',
    badge: 'Omnichannel Commerce',
    summary: 'Accelerating point-of-sale checkout, multi-branch inventory synchronization, GST invoicing, and customer loyalty retention.',
    solutionsProvided: [
      'Lightning-fast barcode POS counter billing software',
      'Automated multi-warehouse inventory sync',
      'Integrated e-commerce storefronts with payment gateways',
      'Customer loyalty points & automated WhatsApp discount alerts'
    ],
    sampleUseCases: [
      'Multi-branch wholesale textile order booking system',
      'FMCG distributor inventory and retailer credit ledger',
      'B2B merchant portal for bulk dealer order placements'
    ]
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Pharmaceuticals',
    icon: 'Stethoscope',
    badge: 'HealthTech & Pharmacy',
    summary: 'Streamlining clinic appointments, pharmacy stock management, medicine expiry control, patient records, and diagnostic reporting.',
    solutionsProvided: [
      'Retail pharmacy POS with batch and expiry tracking',
      'Doctor appointment scheduling & automated WhatsApp reminders',
      'Patient electronic medical records (EMR) portals',
      'Diagnostic lab test booking and automated PDF report delivery'
    ],
    sampleUseCases: [
      'MedHealth retail pharmacy POS and drug composition search',
      'Multi-specialty clinic patient queue and token management',
      'Diagnostic lab WhatsApp PDF report dispatch bot'
    ]
  },
  {
    id: 'education',
    name: 'Education & Training Institutes',
    icon: 'GraduationCap',
    badge: 'EdTech & Academics',
    summary: 'Empowering schools, coaching academies, and universities with student admissions, online exam portals, fee collection, and LMS platforms.',
    solutionsProvided: [
      'Student information systems (SIS) and attendance tracking',
      'Online fee collection with automated receipt generation',
      'Learning management systems (LMS) with video courses',
      'AI chatbot admissions counselor for student inquiries'
    ],
    sampleUseCases: [
      'Coaching institute student attendance and test score portal',
      'College campus ERP for department and semester grading',
      'AI lead qualification chatbot for overseas education consultants'
    ]
  },
  {
    id: 'real-estate',
    name: 'Real Estate & Construction',
    icon: 'Building',
    badge: 'PropTech & Infrastructure',
    summary: 'Empowering developers, architects, and contractors with project site progress tracking, lead management, and digital buyer walkthroughs.',
    solutionsProvided: [
      'Property development showcase websites with floor plans',
      'Real estate lead CRM with automated WhatsApp call scheduling',
      'Multi-site construction labor, cement, and material log app',
      'Subcontractor billing and milestone sign-off software'
    ],
    sampleUseCases: [
      'Residential township interactive master plan and unit booking',
      'Construction contractor daily site report (DSR) mobile app',
      'Commercial property lease and tenant maintenance ticketing portal'
    ]
  },
  {
    id: 'finance',
    name: 'Banking & Financial Services',
    icon: 'Landmark',
    badge: 'FinTech & Lending',
    summary: 'Securing retail loan origination, KYC document intake, credit assessment, agent commission calculation, and debt collection automation.',
    solutionsProvided: [
      'Loan eligibility & EMI amortization calculation portals',
      'Encrypted digital KYC document upload and verification funnels',
      'Lead distribution dashboards for multi-branch banking teams',
      'AI voice bots for courteous loan payment follow-ups'
    ],
    sampleUseCases: [
      'Zippy Banking & Loan Verification Platform',
      'Microfinance loan collection and agent ledger app',
      'Financial advisory client portfolio tracking dashboard'
    ]
  },
  {
    id: 'logistics',
    name: 'Logistics & Supply Chain',
    icon: 'Truck',
    badge: 'Transport & Freight',
    summary: 'Unifying fleet dispatching, vehicle GPS breadcrumbs, driver mobile apps, electronic proof of delivery (e-POD), and consignment tracking.',
    solutionsProvided: [
      'Fleet dispatch & trip sheet generation software',
      'Driver mobile application with offline GPS breadcrumb logging',
      'Electronic Proof of Delivery (e-POD) with signature capture',
      'Public consignment tracking portal with live status milestones'
    ],
    sampleUseCases: [
      'FleetTrack Pro mobile logistics and fuel logging app',
      'Courier hub parcel sorting and barcode dispatch terminal',
      'Cold-chain transport temperature and vehicle tracking portal'
    ]
  },
  {
    id: 'hospitality',
    name: 'Hospitality & Restaurants',
    icon: 'UtensilsCrossed',
    badge: 'Travel & Dining',
    summary: 'Modernizing hotel reservation engines, restaurant QR table ordering, kitchen display systems (KDS), and guest review automation.',
    solutionsProvided: [
      'Direct room booking engines eliminating OTA commissions',
      'Contactless QR digital menu and table billing systems',
      'Kitchen Order Ticket (KOT) display dashboards',
      'Automated post-stay WhatsApp review collection bots'
    ],
    sampleUseCases: [
      'Boutique resort direct booking website with room selector',
      'Multi-outlet restaurant chain central inventory and kitchen billing',
      'Hotel guest concierge AI chatbot for room service and amenities'
    ]
  },
  {
    id: 'smb-business',
    name: 'Small & Medium Businesses (SMBs)',
    icon: 'TrendingUp',
    badge: 'Enterprise Growth',
    summary: 'Equipping growing enterprises with enterprise-grade technology without the bloated enterprise costs: custom CRMs, AMCs, and automation.',
    solutionsProvided: [
      'Custom customer inquiry capture & WhatsApp CRM',
      'Field service job dispatch and technician tracking',
      'GST invoice creation and automated customer payment links',
      'Business workflow automation connecting Google Sheets, Email, and SMS'
    ],
    sampleUseCases: [
      'Rakesh Pest Control field service and inspection system',
      'PurifierFlow water purifier AMC customer management platform',
      'Electrical and HVAC contractor project estimation and billing app'
    ]
  }
];
