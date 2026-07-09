import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { SITE } from '../data/site';

/**
 * Per-route SEO: title, meta description, canonical URL, and Open Graph /
 * Twitter card tags. Drop <Seo title=... description=... /> at the top of
 * any page. Falls back to site-wide defaults when props are omitted.
 */
export default function Seo({ title, description, image, type = 'website', noindex = false }) {
  const { pathname } = useLocation();
  const canonical = `${SITE.url}${pathname === '/' ? '' : pathname}`;
  const fullTitle = title ? `${title} | ${SITE.shortName}` : `${SITE.name} | Incubation Centre`;
  const desc = description || SITE.description;
  const ogImage = image || `${SITE.url}/og-image.png`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
