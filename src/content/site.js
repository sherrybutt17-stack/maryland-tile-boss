// Global site data. Every value here is verified from the live site payload
// (window.__PRELOAD_DATA__, crawled 2026-09-04) or the LocalBusiness JSON-LD.
// Nothing in this file is invented. Unverified items live in TODO_VERIFY and are never rendered.

export const site = {
  // Brand vs. entity. The client chose "Maryland Tile Boss" as the public brand, and that is
  // what the masthead and voice carry. But Google's existing map entity, ~11 citations, the
  // Yelp listing and the physical storefront sign all say "Digitile International Showroom &
  // Design Center" — so that name stays as the schema/NAP entity and appears in every footer,
  // contact and showroom block. Rebranding the citation layer to a name with one citation
  // would restart the local entity from zero.
  name: 'The Maryland Tile Boss',
  shortName: 'Maryland Tile Boss',
  legalName: 'The Maryland Tile Boss',
  entityName: 'Digitile International',
  locationName: 'Digitile International Showroom & Design Center',
  alternateName: 'Digitile International',
  tagline: 'the Tile Authority in MD',
  owner: 'Michael DiGirolamo',
  ownerShort: 'Mike',
  domain: 'https://marylandtileboss.com',

  address: {
    street: '14 Mayo Rd',
    city: 'Edgewater',
    region: 'Maryland',
    regionCode: 'MD',
    postalCode: '21037',
    country: 'US',
    lat: 38.9402169,
    lng: -76.5622115,
  },

  // NAP decision: 443-871-3876 is the public primary because it is the number attached to
  // Google's existing map entity AND to Yelp AND to the site's own "Call Mike" trade block.
  // 443-871-0971 is the number in the site's contact field. Using one number everywhere is
  // worth more than matching the CMS field. Client must confirm — see TODO_VERIFY.
  phone: { display: '(443) 871-3876', href: 'tel:+14438713876', e164: '+14438713876' },
  altPhone: { display: '(443) 871-0971', href: 'tel:+14438710971', e164: '+14438710971' },
  email: 'digi-tile@comcast.net',
  facebook: 'https://www.facebook.com/61574520041133',

  hours: [
    { day: 'Monday', open: '10:00', close: '16:00' },
    { day: 'Tuesday', open: '10:00', close: '16:00' },
    { day: 'Wednesday', open: '10:00', close: '16:00' },
    { day: 'Thursday', open: '10:00', close: '16:00' },
    { day: 'Friday', open: '10:00', close: '16:00' },
    { day: 'Saturday', open: '10:00', close: '16:00' },
  ],
  hoursSummary: 'Monday to Saturday, 10am–4pm. Closed Sunday.',
  hoursSchema: ['Mo 10:00-16:00', 'Tu 10:00-16:00', 'We 10:00-16:00', 'Th 10:00-16:00', 'Fr 10:00-16:00', 'Sa 10:00-16:00'],

  payments: ['Cash App', 'Venmo', 'Zelle', 'Debit and credit cards'],

  // Verified attributes from the site's own amenity tags and About blocks.
  proof: {
    generations: 'Third-generation tile professional',
    years: '45+ years hands-on',
    family: 'Family-owned',
    selection: 'Largest selection under one roof',
    consult: 'Free consultation',
  },

  serviceAreas: [
    'Edgewater', 'Annapolis', 'Davidsonville', 'Arnold', 'Severna Park',
    'Crownsville', 'Riva', 'Mayo', 'Bowie', 'Dunkirk', 'Odenton', 'Crofton',
  ],
  serviceAreaSummary: 'Edgewater, Annapolis and Anne Arundel County',

  ga4: 'G-58WKG0P0GQ',
};

// Facts that appeared only in third-party sources and could NOT be confirmed on the
// client's own site. These are deliberately NOT rendered anywhere until the client confirms.
export const TODO_VERIFY = [
  'Wedi Pro Certified / Schluter-trained certifications (seen in a search summary only)',
  'Established 2000 / 25+ vendors on display (seen in a search summary only)',
  'MHIC contractor licence number (required by Maryland law on home-improvement marketing)',
  'Whether the lock-box showroom is 24/7 or scheduled access',
  'CONFIRM: 443-871-3876 chosen as the single public number (matches Google + Yelp + the "Call Mike" block). 443-871-0971 is in the site CMS. One must be retired publicly.',
  'The relationship to "Nash & Sons dba Digi-tile" and the Crofton MD 21114 listings on Houzz/Angi/HomeAdvisor/Manta — legacy records or a separate entity? Removal action needs the owner’s answer.',
  'Correct opening hours — the site says Mon–Sat 10–4, Yelp says Mon–Fri 10–5 / Sat 10–4, a cached version said "by appointment".',
];

export const nav = [
  { label: 'Showroom', href: '/showroom/' },
  { label: 'Installation', href: '/tile-installation/' },
  { label: 'Tile', href: '/tile/' },
  { label: 'Trade', href: '/trade/' },
  { label: 'Portfolio', href: '/portfolio/' },
  { label: 'About', href: '/about/' },
];

export const footerNav = {
  Installation: [
    { label: 'Tile installation', href: '/tile-installation/' },
    { label: 'Bathroom tile', href: '/tile-installation/bathroom/' },
    { label: 'Shower tile & waterproofing', href: '/tile-installation/shower/' },
    { label: 'Kitchen backsplash', href: '/tile-installation/backsplash/' },
    { label: 'Tile floors', href: '/tile-installation/floors/' },
  ],
  Tile: [
    { label: 'All tile', href: '/tile/' },
    { label: 'Porcelain tile', href: '/tile/porcelain/' },
    { label: 'Ceramic tile', href: '/tile/ceramic/' },
    { label: 'Natural stone tile', href: '/tile/natural-stone/' },
    { label: 'Glass & mosaic tile', href: '/tile/glass-and-mosaic/' },
  ],
  Company: [
    { label: 'Visit the showroom', href: '/showroom/' },
    { label: 'Designers, builders & contractors', href: '/trade/' },
    { label: 'Serving Annapolis', href: '/annapolis/' },
    { label: 'Portfolio', href: '/portfolio/' },
    { label: 'About Mike', href: '/about/' },
    { label: 'Questions', href: '/faq/' },
    { label: 'Tile knowledge', href: '/blog/' },
    { label: 'Contact', href: '/contact/' },
  ],
};
