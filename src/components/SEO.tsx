import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://trump-legacy-insights-chronicle.lovable.app';
const SITE_NAME = 'Trump Legacy Insights Chronicle';
const DEFAULT_IMAGE = 'https://lovable.dev/opengraph-image-p98pqg.png';

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  type = 'website',
}) => {
  const url = `${SITE_URL}${path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
