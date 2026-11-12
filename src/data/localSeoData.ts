export interface LocalAreaInfo {
  name: string;
  slug: string;
  pincode: string;
  distanceMinutes: string;
  distanceKm: string;
  description: string;
  nearbyLandmarks: string[];
  popularServices: string[];
  keywords: string[];
}

export interface LocalFaqItem {
  question: string;
  answer: string;
}

export const PRIMARY_LOCATION = {
  name: "Zippy Softwares",
  legalName: "Zippy Enterprises Private Limited",
  tagline: "Premier IT Software Development, Web Design & AI Automation Hub",
  building: "Sneha Apartments",
  street: "HMT Nagar",
  locality: "Nacharam",
  city: "Hyderabad",
  state: "Telangana",
  postalCode: "500076",
  country: "India",
  countryCode: "IN",
  latitude: 17.4326,
  longitude: 78.5583,
  fullAddress: "Sneha Apartments, HMT Nagar, Nacharam, Hyderabad, Telangana 500076, India",
  phone: "+91 63026 90251",
  phoneRaw: "+916302690251",
  email: "zippyenterprises7@gmail.com",
  website: "https://zippysoftwares.in",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Sneha+Apartments+HMT+Nagar+Nacharam+Hyderabad+500076",
  openingHours: "Mo-Sa 09:30-19:00",
  priceRange: "₹₹"
};

export const TARGET_LOCALITIES: LocalAreaInfo[] = [
  {
    name: "Nacharam",
    slug: "nacharam",
    pincode: "500076",
    distanceMinutes: "Headquarters (0 mins)",
    distanceKm: "0 km",
    description: "Our corporate headquarters and engineering development center. Providing direct on-site consultation, custom software engineering, web application design, mobile app development, and AI agent workflow automation for local businesses, enterprises, and manufacturing firms.",
    nearbyLandmarks: ["HMT Nagar", "Nacharam Industrial Area", "Vyjayanthi Cinema", "Delhi Public School Nacharam"],
    popularServices: [
      "Custom Web Design & Web Development",
      "Android & iOS Mobile App Engineering",
      "Autonomous AI Agents & Chatbot Automation",
      "Industrial & Corporate ERP Systems"
    ],
    keywords: [
      "IT software company in Nacharam 500076",
      "software development company Nacharam",
      "web design company in Nacharam",
      "mobile app development Nacharam",
      "AI automation agency Nacharam Hyderabad"
    ]
  },
  {
    name: "Habsiguda",
    slug: "habsiguda",
    pincode: "500007",
    distanceMinutes: "5 mins drive",
    distanceKm: "2.8 km",
    description: "Serving educational institutes, research centers, healthcare clinics, and commercial businesses across Habsiguda with modern web portals, iOS/Android mobile applications, and intelligent customer service AI chatbots.",
    nearbyLandmarks: ["Habsiguda Metro Station", "CCMB", "Street No. 8 Habsiguda", "NGRI"],
    popularServices: [
      "Responsive Website Design & SEO",
      "Educational & E-Learning Web Portals",
      "Android & iOS App Development",
      "WhatsApp & Telephony AI Automation"
    ],
    keywords: [
      "IT software company near Habsiguda",
      "web design services Habsiguda Hyderabad",
      "mobile app developers Habsiguda",
      "software development company near me Habsiguda"
    ]
  },
  {
    name: "Mallapur",
    slug: "mallapur",
    pincode: "500076",
    distanceMinutes: "3 mins drive",
    distanceKm: "1.5 km",
    description: "Direct neighbor to Nacharam. Delivering manufacturing ERPs, warehouse automation, inventory tracking apps, and corporate websites to Mallapur industrial and commercial establishments.",
    nearbyLandmarks: ["Mallapur Main Road", "Industrial Development Area", "TSIIC Mallapur"],
    popularServices: [
      "Factory & Inventory Management Software",
      "Business Management Android & iOS Apps",
      "Corporate Website Development",
      "AI Process Automation"
    ],
    keywords: [
      "software company Mallapur Hyderabad",
      "web design Mallapur 500076",
      "near by IT software development Mallapur",
      "app development Mallapur"
    ]
  },
  {
    name: "Uppal",
    slug: "uppal",
    pincode: "500039",
    distanceMinutes: "10 mins drive",
    distanceKm: "4.5 km",
    description: "Rapidly expanding IT and commercial sector in East Hyderabad. We partner with Uppal IT businesses, sports academies, startups, and retail enterprises to engineer scalable cloud software, mobile applications, and AI agents.",
    nearbyLandmarks: ["Uppal Metro Station", "Rajiv Gandhi International Cricket Stadium", "Uppal Ring Road", "NSL Arena SEZ"],
    popularServices: [
      "High-Traffic E-Commerce Platforms",
      "Cross-Platform Mobile Apps (Flutter/React Native)",
      "Autonomous AI Support Agents",
      "Custom SaaS & Cloud Software"
    ],
    keywords: [
      "IT software company Uppal Hyderabad",
      "web development company Uppal",
      "mobile app development Uppal 500039",
      "AI agent development company Uppal"
    ]
  },
  {
    name: "Cherlapally",
    slug: "cherlapally",
    pincode: "500051",
    distanceMinutes: "7 mins drive",
    distanceKm: "3.8 km",
    description: "Providing industrial automation, B2B supplier portals, GST billing software, and custom mobile apps for Cherlapally's thriving manufacturing and logistics ecosystem.",
    nearbyLandmarks: ["Cherlapally Railway Terminal", "Cherlapally Industrial Park Phase 1-3", "ECIL Cross Roads"],
    popularServices: [
      "Industrial B2B Portals & ERP Software",
      "Custom Accounting & GST Systems",
      "Fleet & Logistics Mobile Apps",
      "Automated Document Processing AI"
    ],
    keywords: [
      "software development company Cherlapally",
      "IT services Cherlapally Industrial Park",
      "web design Cherlapally Hyderabad 500051",
      "app developers near Cherlapally"
    ]
  },
  {
    name: "Secunderabad",
    slug: "secunderabad",
    pincode: "500003",
    distanceMinutes: "15 mins drive",
    distanceKm: "7.5 km",
    description: "Delivering enterprise-grade digital transformations, banking/financial interfaces, retail mobile apps, and full-stack software development for Secunderabad's central business and trading hubs.",
    nearbyLandmarks: ["Secunderabad Railway Station", "Clock Tower", "Paradise Circle", "MG Road"],
    popularServices: [
      "Enterprise Web & Portal Engineering",
      "Native iOS & Android Mobile Apps",
      "AI Customer Support Chatbots",
      "Financial & Billing Software"
    ],
    keywords: [
      "IT software development Secunderabad",
      "web design company Secunderabad",
      "best mobile app development Secunderabad",
      "AI automation company Secunderabad"
    ]
  },
  {
    name: "Narapally",
    slug: "narapally",
    pincode: "500088",
    distanceMinutes: "15 mins drive",
    distanceKm: "9 km",
    description: "Powering academic institutions, tech campuses, and developing businesses along the Warangal Highway corridor with modern responsive websites, student management mobile apps, and automated workflows.",
    nearbyLandmarks: ["Warangal Highway (NH 163)", "Pocharam IT SEZ / Infosys Campus", "Ghatkesar Connectivity"],
    popularServices: [
      "Institution & School Management Portals",
      "Mobile Applications for iOS & Android",
      "SEO-Optimized Business Websites",
      "Automated Lead Ingestion AI"
    ],
    keywords: [
      "software company Narapally 500088",
      "web development Narapally Ghatkesar",
      "mobile app developers Narapally",
      "IT services near Narapally"
    ]
  },
  {
    name: "LB Nagar",
    slug: "lb-nagar",
    pincode: "500074",
    distanceMinutes: "20 mins drive",
    distanceKm: "11 km",
    description: "Catering to South-East Hyderabad's vibrant healthcare, retail, real estate, and trading networks with high-converting websites, appointment booking mobile apps, and 24/7 AI conversational voice bots.",
    nearbyLandmarks: ["LB Nagar Metro Station", "Kamineni Hospital", "Sagar Ring Road", "Nagole Flyover"],
    popularServices: [
      "Real Estate & Healthcare Web Platforms",
      "Customer-Facing Mobile Apps (iOS & Android)",
      "24/7 AI Voice & Chatbot Agents",
      "Custom CRM & Lead Funnels"
    ],
    keywords: [
      "software company LB Nagar Hyderabad",
      "web design company LB Nagar 500074",
      "mobile app development LB Nagar",
      "near by IT software services LB Nagar"
    ]
  },
  {
    name: "Tarnaka",
    slug: "tarnaka",
    pincode: "500017",
    distanceMinutes: "8 mins drive",
    distanceKm: "4.2 km",
    description: "Close connectivity to Osmania University and research labs. We build specialized research platforms, startup MVPs, and modern web applications with cutting-edge AI integrations.",
    nearbyLandmarks: ["Tarnaka Metro Station", "Osmania University", "Nagarjuna Nagar"],
    popularServices: [
      "Startup MVP & Web Development",
      "Mobile Applications for iOS & Android",
      "AI Knowledge Base Assistants",
      "Performance Web Optimization"
    ],
    keywords: [
      "software company Tarnaka Hyderabad",
      "web design Tarnaka 500017",
      "app development Tarnaka"
    ]
  },
  {
    name: "ECIL & Moula Ali",
    slug: "ecil-moula-ali",
    pincode: "500062",
    distanceMinutes: "10 mins drive",
    distanceKm: "5.5 km",
    description: "Supporting electronics, manufacturing, and tech businesses across ECIL, Moula Ali, and Kushaiguda with secure cloud architectures, inventory portals, and custom mobile applications.",
    nearbyLandmarks: ["ECIL Cross Roads", "Moula Ali Industrial Area", "Kushaiguda Market"],
    popularServices: [
      "Manufacturing & Inventory Software",
      "Android & iOS Business Apps",
      "Corporate Web Design",
      "Process Automation Systems"
    ],
    keywords: [
      "IT software company ECIL Hyderabad",
      "software development Moula Ali",
      "web design ECIL 500062"
    ]
  }
];

export const LOCAL_SEO_FAQS: LocalFaqItem[] = [
  {
    question: "Where is Zippy Softwares located in Hyderabad?",
    answer: "Zippy Softwares (a division of Zippy Enterprises Private Limited) is headquartered at Sneha Apartments, HMT Nagar, Nacharam, Hyderabad, Telangana 500076. We are centrally located within 5 minutes of Habsiguda, 3 minutes from Mallapur, and 10 minutes from Uppal."
  },
  {
    question: "Which areas in Hyderabad does Zippy Softwares provide nearby IT software development for?",
    answer: "We provide comprehensive on-site and remote IT software services across Nacharam (500076), Habsiguda (500007), Mallapur (500076), Uppal (500039), Cherlapally (500051), Secunderabad (500003), Narapally (500088), LB Nagar (500074), Tarnaka, ECIL, Boduppal, and throughout Hyderabad & Telangana."
  },
  {
    question: "What custom web design and development services do you provide?",
    answer: "We design and develop high-speed, SEO-optimized business websites, custom web applications (React, Next.js, Node.js), enterprise client portals, e-commerce stores, and headless CMS solutions tailored to boost Google rankings and convert visitors into clients."
  },
  {
    question: "Do you build mobile applications for both Android and iOS?",
    answer: "Yes, we engineer native and cross-platform mobile apps for Android and iOS using modern frameworks like Flutter and React Native, as well as native Swift and Kotlin. We handle end-to-end design, backend API development, Google Play Store and Apple App Store publishing."
  },
  {
    question: "What are AI Agent & Automation solutions and how do they benefit local businesses?",
    answer: "Our AI agent automation solutions include 24/7 autonomous customer service chatbots, conversational AI voice call agents, automated WhatsApp business workflows, and document intelligence pipelines that reduce operational costs by up to 60% and capture leads around the clock."
  },
  {
    question: "How can businesses in Nacharam, Uppal, Habsiguda, or Secunderabad consult with Zippy Softwares?",
    answer: "You can book an in-person consultation at our Nacharam office, request an on-site visit to your office, or connect immediately via phone or WhatsApp at +91 63026 90251 or email zippyenterprises7@gmail.com."
  }
];
