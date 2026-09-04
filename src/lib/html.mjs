import meta from '../content/image-meta.json' with { type: 'json' };

export const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const attr = (s = '') => esc(s).replace(/'/g, '&#39;');

/**
 * Responsive <picture> with AVIF -> WebP -> JPEG/PNG.
 * Width/height are always emitted so the browser reserves space and CLS stays at zero.
 */
export function picture(key, opts = {}) {
  const m = meta[key];
  if (!m) return `<!-- missing image: ${esc(key)} -->`;

  const {
    sizes = '100vw',
    loading = 'lazy',
    fetchpriority,
    className = '',
    displayRatio,
    alt = m.alt,
    crop,
  } = opts;

  const set = (ext) => m.variants.map((v) => `/assets/img/${key}-${v.w}.${ext} ${v.w}w`).join(', ');
  const largest = m.variants[m.variants.length - 1];
  const ratio = displayRatio || m.ratio;
  const height = Math.round(largest.w / ratio);

  // With a crop, the <picture> becomes the sized box and the image covers it. Keeping the
  // ratio on the wrapper reserves layout space before the image loads, so CLS stays at zero
  // and every card in a grid crops to the same shape regardless of the source photo.
  const cls = [crop ? 'ar' : '', className].filter(Boolean).join(' ');
  const style = crop ? ` style="aspect-ratio:${crop}"` : '';

  return `<picture${cls ? ` class="${attr(cls)}"` : ''}${style}>
<source type="image/avif" srcset="${set('avif')}" sizes="${attr(sizes)}">
<source type="image/webp" srcset="${set('webp')}" sizes="${attr(sizes)}">
<img src="/assets/img/${key}-${largest.w}.${m.fallbackExt}" srcset="${set(m.fallbackExt)}" sizes="${attr(sizes)}"
 width="${largest.w}" height="${height}" alt="${attr(alt)}" loading="${loading}" decoding="${loading === 'eager' ? 'sync' : 'async'}"${
    fetchpriority ? ` fetchpriority="${fetchpriority}"` : ''
  }>
</picture>`;
}

/** The single LCP image per page gets a preload of the exact AVIF the browser will pick. */
export function preloadImage(key, sizes) {
  const m = meta[key];
  if (!m) return '';
  const srcset = m.variants.map((v) => `/assets/img/${key}-${v.w}.avif ${v.w}w`).join(', ');
  return `<link rel="preload" as="image" type="image/avif" imagesrcset="${attr(srcset)}" imagesizes="${attr(sizes)}" fetchpriority="high">`;
}

export const imageMeta = meta;

export function slugToPath(slug) {
  return slug === '' ? '/' : `/${slug}/`;
}

/** Minimal, safe markdown-ish: only paragraphs. Content is authored, not user-supplied. */
export const paras = (arr, cls = '') =>
  arr.map((p) => `<p${cls ? ` class="${attr(cls)}"` : ''}>${esc(p)}</p>`).join('\n');
