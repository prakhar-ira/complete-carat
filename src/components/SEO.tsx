import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
}

const defaultDescription = "Complete Carat - Your trusted jewelry marketplace";
const defaultTitle = "Complete Carat";
const defaultOGImage = "https://www.completecarat.com/images/og-image.jpg";

export default function SEO({
  title = defaultTitle,
  description = defaultDescription,
  canonical,
  ogImage = defaultOGImage,
  noindex = false,
}: SEOProps) {
  const siteUrl = "https://www.completecarat.com/";
  const pageUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullTitle = title === defaultTitle ? title : `${title} | ${defaultTitle}`;

  // Structured data for organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Complete Carat",
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    sameAs: [
      "https://www.instagram.com/completecarat/",
      "https://www.google.com/maps/place/Complete+Carat/@40.7574844,-73.9828387,17z/data=!4m8!3m7!1s0x883b4b7804cad1dd:0x70ee511590d1d9dc!8m2!3d40.7574804!4d-73.9802638!9m1!1b1!16s%2Fg%2F11vsw3l9jh?entry=ttu&g_ep=EgoyMDI0MTIwMS4xIKXMDSoASAFQAw%3D%3D",
      "https://www.trustpilot.com/review/completecarat.com?utm_medium=trustbox&utm_source=TrustBoxReviewCollector"
      // Add other social media URLs
    ],
  };

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={pageUrl} />
      
      {/* Robots meta */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </Head>
  );
} 