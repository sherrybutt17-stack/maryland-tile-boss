import { site } from '../content/site.js';

const ORIGIN = site.domain;
const BIZ_ID = `${ORIGIN}/#business`;
const SITE_ID = `${ORIGIN}/#website`;
const MIKE_ID = `${ORIGIN}/about/#mike`;

/**
 * The business node.
 *
 * Deliberate choices:
 * - `name` is "Digitile International", matching Google's existing map entity and ~11 citations.
 *   "The Maryland Tile Boss" is the public brand and is carried as alternateName so the two
 *   resolve to one entity rather than competing.
 * - NO aggregateRating / review. The only verified public review is a single negative Yelp
 *   review, so any rating markup here would be fabrication.
 * - NO priceRange beyond what the business itself published.
 * - addressRegion uses the "MD" code and addressCountry uses "US", correcting the live site,
 *   which emits "Maryland" and "UNITED STATES".
 */
export function localBusiness() {
  return {
    '@type': ['HomeAndConstructionBusiness', 'Store'],
    '@id': BIZ_ID,
    name: site.entityName,
    alternateName: [site.name, site.locationName],
    legalName: site.legalName,
    description:
      'Tile showroom and tile installation in Edgewater, Maryland. Porcelain, ceramic, natural stone, glass and mosaic tile, with installation across Annapolis and Anne Arundel County.',
    url: `${ORIGIN}/`,
    telephone: site.phone.e164,
    email: site.email,
    founder: { '@id': MIKE_ID },
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.regionCode,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: site.address.lat, longitude: site.address.lng },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${site.address.lat},${site.address.lng}`,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '16:00',
      },
    ],
    paymentAccepted: site.payments.join(', '),
    currenciesAccepted: 'USD',
    areaServed: site.serviceAreas.map((n) => ({
      '@type': 'City',
      name: n,
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Anne Arundel County, Maryland' },
    })),
    knowsAbout: [
      'Tile installation',
      'Shower waterproofing systems',
      'Porcelain tile',
      'Ceramic tile',
      'Natural stone tile',
      'Glass and mosaic tile',
      'Large-format tile installation',
      'Tile substrate preparation',
    ],
    sameAs: [site.facebook],
    image: `${ORIGIN}/assets/img/storefront-1200.jpg`,
    logo: `${ORIGIN}/assets/img/logo-400.png`,
  };
}

export function person() {
  return {
    '@type': 'Person',
    '@id': MIKE_ID,
    name: site.owner,
    jobTitle: 'Tile professional and owner',
    description:
      'Third-generation tile professional with more than 45 years of hands-on experience in tile installation, remodeling, products and installation systems.',
    worksFor: { '@id': BIZ_ID },
    knowsAbout: ['Tile installation', 'Shower waterproofing', 'Tile setting materials', 'Substrate preparation'],
  };
}

export function website() {
  return {
    '@type': 'WebSite',
    '@id': SITE_ID,
    url: `${ORIGIN}/`,
    name: site.name,
    alternateName: site.entityName,
    publisher: { '@id': BIZ_ID },
    inLanguage: 'en-US',
  };
}

export function webPage(page, url) {
  return {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: page.title,
    description: page.description,
    isPartOf: { '@id': SITE_ID },
    about: { '@id': BIZ_ID },
    inLanguage: 'en-US',
    primaryImageOfPage: page.heroA ? `${ORIGIN}/assets/img/${page.heroA}-1200.jpg` : undefined,
  };
}

export function breadcrumbs(trail) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.label,
      item: `${ORIGIN}${t.href}`,
    })),
  };
}

export function faqPage(items, url) {
  return {
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function service(name, description, url, serviceType) {
  return {
    '@type': 'Service',
    '@id': `${url}#service`,
    name,
    description,
    serviceType,
    provider: { '@id': BIZ_ID },
    areaServed: site.serviceAreas.map((n) => ({ '@type': 'City', name: n })),
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceLocation: { '@id': BIZ_ID },
      servicePhone: site.phone.e164,
      serviceUrl: url,
    },
  };
}

export function graph(nodes) {
  const clean = JSON.parse(JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes.filter(Boolean) }));
  return `<script type="application/ld+json">${JSON.stringify(clean).replace(/</g, '\\u003c')}</script>`;
}
