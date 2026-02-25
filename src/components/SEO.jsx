import React from 'react';

const SEO = ({ title, description, keywords, image, url, type = 'website' }) => {
  const siteName = "Deepika Saxena | Portfolio";
  const defaultDescription = "Professional MERN Stack Developer specializing in ReactJS, NodeJS, MongoDB and modern responsive web applications.";
  const defaultKeywords = "MERN Developer, Web Developer Portfolio, React Developer India, Full Stack Developer, Deepika Saxena Portfolio, Hackathon Developer, Innovation Project, Space Technology Hackathon, AI Student Project, Team Based Innovation";
  
  return (
    <>
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url || window.location.href} />
      <meta property="og:title" content={title || siteName} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || '/og-image.jpg'} />
      <meta property="og:site_name" content={siteName} />



      {/* Primary Meta Tags */}
      <meta name="theme-color" content="#6366F1" />
      <link rel="canonical" href={url || window.location.href} />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Deepika Saxena",
          "url": "https://deepika-portfolio.vercel.app",
          "jobTitle": "MERN Stack Web Developer",
          "alumniOf": "Invertis University",
          "sameAs": [
            "https://www.linkedin.com/in/deepika0905/",
            "https://github.com/deepika749"
          ]
        })}
      </script>
    </>
  );
};

export default SEO;
