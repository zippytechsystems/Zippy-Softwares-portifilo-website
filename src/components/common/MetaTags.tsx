import { useEffect } from 'react';

interface MetaTagsProps {
  title: string;
  description: string;
  canonicalPath?: string;
}

export const MetaTags: React.FC<MetaTagsProps> = ({ 
  title, 
  description, 
  canonicalPath = '' 
}) => {
  useEffect(() => {
    // Update document title
    const fullTitle = `${title} | Zippy Enterprises Private Limited`;
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

    // Update OG Title & Description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', fullTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    const fullUrl = `https://zippysoftwares.in${canonicalPath}`;
    if (canonical) {
      canonical.setAttribute('href', fullUrl);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', fullUrl);
      document.head.appendChild(canonical);
    }
  }, [title, description, canonicalPath]);

  return null;
};
