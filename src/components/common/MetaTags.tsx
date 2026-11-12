import { useEffect } from 'react';

interface MetaTagsProps {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string;
  schemaJson?: Record<string, unknown>;
}

export const MetaTags: React.FC<MetaTagsProps> = ({ 
  title, 
  description, 
  canonicalPath = '',
  keywords,
  schemaJson
}) => {
  useEffect(() => {
    // Ensure company brand is included in title
    const fullTitle = title.includes('Zippy') 
      ? title 
      : `${title} | Zippy Softwares - Zippy Enterprises Private Limited`;
    document.title = fullTitle;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', description);
      document.head.appendChild(metaDesc);
    }

    // Update meta keywords if provided
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        metaKeywords.setAttribute('content', keywords);
        document.head.appendChild(metaKeywords);
      }
    }

    // Update OG Title, Description, and URL
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', fullTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    const fullUrl = `https://zippysoftwares.in${canonicalPath}`;
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', fullUrl);

    // Update Twitter Title and Description
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', fullTitle);

    const twitterDesc = document.querySelector('meta[property="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', description);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', fullUrl);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', fullUrl);
      document.head.appendChild(canonical);
    }

    // Dynamic page-specific JSON-LD Schema
    const schemaScriptId = 'page-specific-jsonld';
    let existingScript = document.getElementById(schemaScriptId);

    if (schemaJson) {
      if (!existingScript) {
        existingScript = document.createElement('script');
        existingScript.id = schemaScriptId;
        existingScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(existingScript);
      }
      existingScript.textContent = JSON.stringify(schemaJson);
    } else if (existingScript) {
      existingScript.remove();
    }

    return () => {
      // Cleanup page-specific script when leaving the page
      const scriptToRemove = document.getElementById(schemaScriptId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [title, description, canonicalPath, keywords, schemaJson]);

  return null;
};
