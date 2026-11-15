# Zippy Softwares - Official Portfolio Website
**A Technology Division of Zippy Enterprises Private Limited**  
*Corporate Identity Number (CIN): U72900TG2024PTC184920*  
*Headquarters: Sneha Apartments, HMT Nagar, Nacharam, Hyderabad, Telangana 500076*  
*Website: [zippysoftwares.in](https://zippysoftwares.in)* | *Phone: +91 63026 90251*

---

## Architecture Overview
This project is built using a native, high-performance **HTML + PHP** multi-page architecture designed for instant execution on Hostinger Apache / LiteSpeed shared hosting with zero Node.js / Vite build dependencies.

### Directory Structure
```
├── api/
│   ├── apply_internship.php      # Process student internship applications
│   ├── contact.php               # Process customer inquiry form
│   └── track_lead.php            # Automatic WhatsApp click lead tracking
├── assets/
│   ├── css/style.css             # 3D animations, particle canvas styling, tilt effects
│   ├── js/main.js                # 3D canvas, 3D card tilt, sliders, video, lead tracking
│   ├── images/                   # High-clarity posters & emblems
│   └── videos/                   # Live AI automation video showcase
├── data/
│   ├── .htaccess                 # Protects database files from public access
│   ├── zippy_softwares.sqlite    # SQLite database for Leads & Internships
│   ├── leads.json                # JSON backup of leads
│   └── internships.json          # JSON backup of internship applications
├── includes/
│   ├── config.php                # Company metadata, CIN, address, phone constants
│   ├── data.php                  # Centralized data arrays (portfolio, stats, process)
│   ├── header.php                # Responsive navbar, top hiring banner, mobile drawer
│   ├── footer.php                # 4-column corporate footer, local SEO hub
│   ├── storage.php               # Unified SQLite + JSON storage engine
│   ├── internship_badge.php      # 3D floating "We are Opening Internships!" badge
│   ├── internship_modal.php      # Interactive internship application modal
│   ├── image_modal.php           # 100% full clarity poster lightbox
│   ├── hiring_modal.php          # 4 marketing executives job application modal
│   ├── project_modal.php         # Portfolio architecture case study modal
│   └── whatsapp_button.php       # Floating WhatsApp pulse button
├── about.php                     # Corporate identity, 4 pillars, Nacharam office & map
├── admin.php                     # Operations center: Leads & Internship management
├── ai-automation.php             # Division 03: AI automation services & agents
├── app-development.php           # Division 02: Custom software & mobile applications
├── contact.php                   # Project inquiry form, direct WhatsApp, Google Maps
├── index.php                     # Homepage with 3D canvas, UI slider, 3D posters
├── portfolio.php                 # Searchable & filterable case studies
├── privacy-policy.php            # Data privacy & IP transfer terms
├── process.php                   # 7-stage software development lifecycle
├── services.php                  # Complete catalog of all 3 engineering divisions
├── terms-conditions.php          # Legal terms & 100% source code ownership
├── web-development.php           # Division 01: Web design & portals
├── .htaccess                     # Clean URLs, HTTPS redirect, GZIP, security rules
├── robots.txt                    # Search engine crawler permissions
└── sitemap.xml                   # XML sitemap for Google Search Console
```

---

## Admin Portal
Access the Operations Portal at `/admin` or `/admin.php`:
- **Security:** Protected by confidential Administrator Passkey.
- **Features:**
  1. **Customer Leads:** Automatic logging of every WhatsApp inquiry & contact form submission.
  2. **Internships & Hiring:** Real-time list of all student applicants with college, resume link, and WhatsApp action.
  3. **CSV Export:** One-click download of leads and internship datasets.

---

## Deployment to Hostinger
1. Open Hostinger **hPanel** -> **File Manager** -> `public_html/`.
2. Upload `hostinger-php-deploy.zip` and **Extract** directly into `public_html/`.
3. Ensure domain nameservers are set to `ns1.hostinger.com` and `ns2.hostinger.com`, with SSL installed.
