<?php
/**
 * Zippy Softwares (Zippy Enterprises Private Limited)
 * Core Configuration & Metadata
 * Office: Sneha Apartments, HMT Nagar, Nacharam, 500076, Hyderabad, Telangana
 */

declare(strict_types=1);

// Error reporting in development, suppressed in production
error_reporting(E_ALL & ~E_NOTICE);
ini_set('display_errors', '0');

// Company & Brand Definitions
define('BRAND_NAME', 'Zippy Softwares');
define('LEGAL_NAME', 'Zippy Enterprises Private Limited');
define('CIN_NUMBER', 'U72900TG2024PTC184920');
define('SITE_URL', 'https://zippysoftwares.in');
define('OFFICIAL_EMAIL', 'zippyenterprises7@gmail.com');
define('CONTACT_PHONE_DISPLAY', '+91 63026 90251');
define('CONTACT_PHONE_RAW', '+916302690251');
define('WHATSAPP_NUMBER', '916302690251');
define('WORKING_HOURS', 'Monday to Saturday: 9:30 AM – 7:00 PM IST');

// Physical Office Address Details
define('OFFICE_BUILDING', 'Sneha Apartments');
define('OFFICE_STREET', 'HMT Nagar');
define('OFFICE_LOCALITY', 'Nacharam');
define('OFFICE_CITY', 'Hyderabad');
define('OFFICE_STATE', 'Telangana');
define('OFFICE_PINCODE', '500076');
define('OFFICE_FULL_ADDRESS', 'Sneha Apartments, HMT Nagar, Nacharam, Hyderabad, Telangana 500076, India');
define('OFFICE_MAPS_URL', 'https://www.google.com/maps/search/?api=1&query=Sneha+Apartments+HMT+Nagar+Nacharam+Hyderabad+500076');
define('OFFICE_EMBED_MAP', 'https://maps.google.com/maps?q=Sneha+Apartments,+HMT+Nagar,+Nacharam,+Hyderabad,+Telangana+500076&t=&z=16&ie=UTF8&iwloc=&output=embed');

// Universal Compatibility Aliases
define('COMPANY_NAME', BRAND_NAME);
define('COMPANY_LEGAL_NAME', LEGAL_NAME);
define('COMPANY_CIN', CIN_NUMBER);
define('COMPANY_ADDRESS', OFFICE_FULL_ADDRESS);
define('COMPANY_PHONE', CONTACT_PHONE_DISPLAY);
define('COMPANY_EMAIL', OFFICIAL_EMAIL);

// Social Channels
define('SOCIAL_WHATSAPP', 'https://wa.me/' . WHATSAPP_NUMBER);
define('SOCIAL_INSTAGRAM', 'https://www.instagram.com/zippysoftwares');
define('SOCIAL_FACEBOOK', 'https://www.facebook.com/zippyenterprises');
define('SOCIAL_LINKEDIN', 'https://www.linkedin.com/company/zippy-enterprises');
define('SOCIAL_GITHUB', 'https://github.com/zippyenterprises');

/**
 * Helper to build custom WhatsApp Inquiry URLs
 */
function get_whatsapp_url(string $customMessage = '', string $service = ''): string {
    $text = $customMessage;
    if (empty($text)) {
        if (!empty($service)) {
            $text = "Hello Zippy Softwares, I am interested in " . $service . " for my business. Please provide more details and consultation.";
        } else {
            $text = "Hello Zippy Softwares, I would like to consult with your software team regarding a custom project.";
        }
    }
    return "https://wa.me/" . WHATSAPP_NUMBER . "?text=" . rawurlencode($text);
}

/**
 * Helper for active navbar link styling
 */
function is_active_page(string $pageName, string $currentPage): string {
    return ($pageName === $currentPage) ? 'text-blue-600 font-bold border-b-2 border-blue-600' : 'text-slate-700 hover:text-blue-600 font-medium';
}
