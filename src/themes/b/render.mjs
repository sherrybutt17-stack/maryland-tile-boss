import { site, nav, footerNav } from '../../content/site.js';
import { projects as allProjects } from '../../content/images.js';
import { esc, attr, picture, preloadImage, paras } from '../../lib/html.mjs';

const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  `${site.address.street}, ${site.address.city}, ${site.address.regionCode} ${site.address.postalCode}`
)}&output=embed`;

const evt = (href) =>
  href.startsWith('tel:')
    ? ' data-evt="phone_click"'
    : href.startsWith('mailto:')
    ? ' data-evt="email_click"'
    : ` data-evt="${/quote|contact/.test(href) ? 'quote_cta_click' : /showroom/.test(href) ? 'showroom_cta_click' : 'cta_click'}"`;

const btn = (cta, cls = 'btn') =>
  `<a class="${cls}" href="${attr(cta.href)}"${evt(cta.href)}>${esc(cta.label)}</a>`;

/** Sets the final word of a headline in italic brass — the one flourish this design allows. */
function headline(text) {
  const words = text.split(' ');
  if (words.length < 3) return esc(text);
  const last = words.pop();
  return `${esc(words.join(' '))} <em>${esc(last)}</em>`;
}

function head(page, ctx) {
  const hero = page.heroB;
  return `<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script>document.documentElement.className+=' js';</script>
<title>${esc(page.title)}</title>
<meta name="description" content="${attr(page.description)}">
<link rel="canonical" href="${attr(ctx.url)}">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
<meta name="theme-color" content="#1c1e1f">
<meta property="og:type" content="${page.slug === '' ? 'website' : 'article'}">
<meta property="og:site_name" content="${attr(site.name)}">
<meta property="og:title" content="${attr(page.title)}">
<meta property="og:description" content="${attr(page.description)}">
<meta property="og:url" content="${attr(ctx.url)}">
<meta property="og:locale" content="en_US">
${hero ? `<meta property="og:image" content="${attr(site.domain)}/assets/img/${hero}-1200.jpg">
<meta property="og:image:alt" content="${attr(ctx.imageMeta[hero]?.alt || '')}">` : ''}
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/img/logo-400.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="preload" href="/assets/fonts/bodoni-moda-400-600-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/karla-400-600-normal.woff2" as="font" type="font/woff2" crossorigin>
${hero ? preloadImage(hero, '(min-width: 1000px) 55vw, 100vw') : ''}
<style>${ctx.inlineCss}</style>`;
}

function topbar(page) {
  return `<header class="topbar"><div class="wrap">
<a class="brand" href="/">
${picture('logo', { sizes: '44px', loading: 'eager', alt: `${site.name} logo` })}
<span class="brand-text"><b>The Maryland Tile Boss</b><span>${esc(site.address.city.toUpperCase())}, MARYLAND</span></span>
</a>
<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav">Menu</button>
<nav class="nav" id="nav" aria-label="Main">
${nav.map((n) => `<a href="${attr(n.href)}"${page.href === n.href ? ' aria-current="page"' : ''}>${esc(n.label)}</a>`).join('\n')}
<a class="nav-cta" href="${site.phone.href}" data-evt="phone_click">${esc(site.phone.display)}</a>
</nav>
</div></header>`;
}

function crumbs(trail) {
  if (trail.length < 2) return '';
  return `<div class="wrap crumbs"><nav aria-label="Breadcrumb"><ol>
${trail
  .map((t, i) =>
    i === trail.length - 1
      ? `<li aria-current="page">${esc(t.label)}</li>`
      : `<li><a href="${attr(t.href)}">${esc(t.label)}</a></li>`
  )
  .join('')}
</ol></nav></div>`;
}

function hero(page) {
  return `<section class="hero"><div class="wrap"><div class="hero-inner">
<div>
<h1 class="serif${page.h1.length > 34 ? ' h1-long' : ''}">${headline(page.h1)}</h1>
<p class="lede">${esc(page.lede)}</p>
<div class="btn-row">
${btn(page.primaryCta, 'btn btn-solid')}
${btn(page.secondaryCta, 'btn btn-quiet')}
</div>
</div>
<div class="hero-media">
${picture(page.heroB, { sizes: '(min-width: 1000px) 55vw, 100vw', loading: 'eager', fetchpriority: 'high', crop: '5/4' })}
<p class="hero-caption">${esc(site.address.street)}, ${esc(site.address.city)} — ${esc(site.hoursSummary)}</p>
</div>
</div></div></section>`;
}

function facts(items) {
  return `<section class="section-hair"><div class="wrap"><ul class="nap" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:0 2.5rem;padding-block:1.5rem;list-style:none;margin:0">
${items
  .map(
    (f) =>
      `<li style="grid-template-columns:1fr;gap:0.2rem;border:0;padding:1rem 0"><span class="serif" style="font-size:var(--step-2)">${esc(
        f.value
      )}</span><span style="color:var(--fog);font-size:var(--step--1)">${esc(f.label)}</span></li>`
  )
  .join('\n')}
</ul></div></section>`;
}

function headBlock(s) {
  if (!s.heading) return '';
  return `<div class="head"><h2 class="serif">${esc(s.heading)}</h2>${
    s.body && typeof s.body === 'string' ? `<p>${esc(s.body)}</p>` : ''
  }${s.intro ? `<p>${esc(s.intro)}</p>` : ''}</div>`;
}

function renderSection(s, page, ctx) {
  switch (s.type) {
    case 'prose':
      return `<section class="section section-hair"><div class="wrap"><div class="split reveal">
<h2 class="serif">${esc(s.heading)}</h2>
<div class="split-body">${paras(s.body)}</div>
</div></div></section>`;

    case 'cards':
      return `<section class="section section-raised"><div class="wrap">
${headBlock(s)}
<div class="entries reveal">
${s.items
  .map((c) => {
    const inner = `${picture(c.image, { sizes: '(min-width:720px) 46vw, 100vw', crop: '16/10' })}
<h3>${esc(c.title)}</h3><p>${esc(c.body)}</p>`;
    return c.href ? `<a class="entry" href="${attr(c.href)}">${inner}</a>` : `<div class="entry">${inner}</div>`;
  })
  .join('\n')}
</div></div></section>`;

    case 'materials':
      return `<section class="section section-hair"><div class="wrap">
${headBlock(s)}
<div class="plates reveal">
${s.items
  .map(
    (m) => `<a class="plate" href="${attr(m.href)}">${picture(m.image, { sizes: '(min-width:900px) 24vw, 48vw', crop: '3/4' })}<span class="plate-name">${esc(m.title)} <i>View</i></span></a>`
  )
  .join('\n')}
</div></div></section>`;

    case 'feature':
      return `<section class="section section-raised"><div class="wrap">
<div class="split split-reverse reveal">
<div class="split-body"><h2 class="serif" style="margin-bottom:1.2rem">${esc(s.heading)}</h2>${paras(s.body)}
${s.cta ? `<div class="btn-row" style="margin-top:1.8rem">${btn(s.cta)}</div>` : ''}</div>
<div class="split-media">${picture(s.image, { sizes: '(min-width:900px) 42vw, 100vw', crop: '4/3' })}</div>
</div></div></section>`;

    case 'process':
      return `<section class="section section-hair"><div class="wrap">
${headBlock(s)}
<ol class="sequence reveal">
${s.steps
  .map(
    (st, i) =>
      `<li><span class="n serif">${String(i + 1).padStart(2, '0')}</span><div><h3>${esc(st.title)}</h3><p>${esc(st.body)}</p></div></li>`
  )
  .join('\n')}
</ol></div></section>`;

    case 'checklist':
      return `<section class="section section-hair"><div class="wrap">
${headBlock(s)}
<ul class="marks reveal">${s.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
</div></section>`;

    case 'comparison':
      return `<section class="section section-raised"><div class="wrap">
${headBlock(s)}
<div class="table-scroll reveal"><table>
<thead><tr>${s.columns.map((c) => `<th scope="col">${esc(c)}</th>`).join('')}</tr></thead>
<tbody>${s.rows
        .map((r) => `<tr><th scope="row">${esc(r[0])}</th>${r.slice(1).map((c) => `<td>${esc(c)}</td>`).join('')}</tr>`)
        .join('')}</tbody>
</table></div></div></section>`;

    case 'gallery':
      return `<section class="section section-hair"><div class="wrap">
${headBlock(s)}
<div class="frames reveal">
${s.images.map((k) => `<div>${picture(k, { sizes: '(min-width:900px) 45vw, 50vw' })}</div>`).join('\n')}
</div></div></section>`;

    case 'projects': {
      const list = allProjects.slice(0, 3);
      return `<section class="section section-hair"><div class="wrap">
${headBlock(s)}
<div class="works reveal">
${list.map(workRow).join('\n')}
</div>
<div class="btn-row" style="margin-top:3rem">${btn({ label: 'All projects', href: '/portfolio/' }, 'btn btn-quiet')}</div>
</div></section>`;
    }

    case 'projectGrid':
      return `<section class="section"><div class="wrap"><div class="works">
${allProjects.map((p) => workRow(p, 'h2')).join('\n')}
</div></div></section>`;

    case 'local':
      return `<section class="section section-raised"><div class="wrap"><div class="split reveal">
<h2 class="serif">${esc(s.heading)}</h2>
<div class="split-body">
<p>${esc(s.body)}</p>
<p style="color:var(--brass)">${site.serviceAreas.map((a) => esc(a)).join(' &nbsp;/&nbsp; ')}</p>
<div class="btn-row" style="margin-top:1.6rem">${btn({ label: 'Serving Annapolis', href: '/annapolis/' }, 'btn btn-quiet')}</div>
</div>
</div></div></section>`;

    case 'visit':
      return `<section class="section section-hair"${s.anchor ? ` id="${attr(s.anchor)}"` : ''}><div class="wrap">
${headBlock(s)}
<div class="visit">
<ul class="nap">
<li><span class="nap-key">ADDRESS</span><span><a href="https://www.google.com/maps/search/?api=1&amp;query=${site.address.lat},${site.address.lng}" data-evt="directions_click">${esc(site.address.street)}, ${esc(site.address.city)}, ${esc(site.address.regionCode)} ${esc(site.address.postalCode)}</a></span></li>
<li><span class="nap-key">LOOK FOR</span><span>The ${esc(site.locationName)} sign — same business.</span></li>
<li><span class="nap-key">PHONE</span><span><a href="${site.phone.href}" data-evt="phone_click">${esc(site.phone.display)}</a></span></li>
<li><span class="nap-key">EMAIL</span><span><a href="mailto:${esc(site.email)}" data-evt="email_click">${esc(site.email)}</a></span></li>
<li><span class="nap-key">HOURS</span><span>${site.hours.map((h) => `${esc(h.day)} ${h.open}–${h.close}`).join('<br>')}<br>Sunday closed</span></li>
<li><span class="nap-key">PAYMENT</span><span>${esc(site.payments.join(', '))}</span></li>
</ul>
<div class="visit-map"><iframe src="${attr(MAP_SRC)}" title="Map showing the showroom at ${attr(site.address.street)}, ${attr(site.address.city)}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
</div></div></section>`;

    case 'contactBlock':
      return `<section class="section section-hair"><div class="wrap"><div class="split reveal">
<h2 class="serif">Talk to Mike</h2>
<div class="split-body">
<p>The quickest route to a straight answer is the phone. Out of hours, email or send the form and it will be picked up around showroom hours.</p>
<div class="btn-row" style="margin-top:1.6rem">
<a class="btn btn-solid" href="${site.phone.href}" data-evt="phone_click">Call ${esc(site.phone.display)}</a>
<a class="btn btn-quiet" href="mailto:${esc(site.email)}" data-evt="email_click">Email the showroom</a>
</div>
</div>
</div></div></section>`;

    case 'form':
      return `<section class="section section-raised"><div class="wrap">
${headBlock(s)}
${contactForm()}
</div></section>`;

    case 'diagrams':
      return `<section class="section section-raised"><div class="wrap">
${headBlock(s)}
<div class="diagrams reveal">
${s.items
  .map(
    (d) => `<figure class="diagram">
<div class="diagram-art">${d.svg}</div>
<div class="diagram-legend"><span class="dl-bad">${esc(d.wrongLabel)}</span><span class="dl-good">${esc(d.rightLabel)}</span></div>
<figcaption><h3 class="serif">${esc(d.title)}</h3><p>${esc(d.note)}</p></figcaption>
</figure>`
  )
  .join('\n')}
</div></div></section>`;

    case 'annotated':
      return `<section class="section section-hair"><div class="wrap">
${headBlock(s)}
<div class="notes reveal">
${s.items
  .map(
    (n) => `<figure class="note">
${picture(n.image, { sizes: '(min-width:900px) 46vw, 100vw', crop: '4/3' })}
<figcaption><h3 class="serif">${esc(n.title)}</h3><p>${esc(n.note)}</p></figcaption>
</figure>`
  )
  .join('\n')}
</div></div></section>`;

    case 'related':
      return relatedBlock(page);

    case 'projectFacts': {
      const p = page.project;
      return `<section class="section section-raised"><div class="wrap">
<div class="head"><h2 class="serif">About this job</h2></div>
<ul class="nap" style="max-width:48rem">
<li><span class="nap-key">LOCATION</span><span>${esc(p.place)}</span></li>
<li><span class="nap-key">ROOM</span><span>${esc(p.room)}</span></li>
<li><span class="nap-key">MATERIAL</span><span>${esc(p.material)}</span></li>
<li><span class="nap-key">SCOPE</span><span>${esc(p.summary)}</span></li>
</ul>
<div class="btn-row" style="margin-top:2rem">
<a class="btn btn-solid" href="/contact/" data-evt="quote_cta_click">Ask about a job like this</a>
<a class="btn btn-quiet" href="/portfolio/">All projects</a>
</div></div></section>`;
    }

    case 'postList':
      return `<section class="section section-hair"><div class="wrap"><div class="works">
${ctx.posts
  .map(
    (p) => `<a class="work" href="/blog/${attr(p.slug)}/">
<div class="work-media">${picture(p.image, { sizes: '(min-width:900px) 55vw, 100vw', crop: '4/3' })}</div>
<div><p class="work-place">${esc(
      new Date(p.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    )}</p><h2 class="serif">${esc(p.title)}</h2><p>${esc(p.desc)}</p><span class="work-link">Read it</span></div></a>`
  )
  .join('\n')}
</div></div></section>`;

    case 'postBody': {
      const p = page.post;
      return `<article class="section section-hair"><div class="wrap">
<p style="color:var(--fog);font-size:var(--step--1)"><time datetime="${attr(p.date)}">${esc(
        new Date(p.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
      )}</time> — written by ${esc(site.owner)}</p>
<div class="measure" style="margin-top:2rem">
${p.blocks
  .map((b) =>
    b.t === 'h'
      ? `<h2 class="serif" style="font-size:var(--step-2);margin:2.4rem 0 1rem">${esc(b.text)}</h2>`
      : b.t === 'list'
      ? `<ul class="marks">${b.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`
      : `<p>${esc(b.text)}</p>`
  )
  .join('\n')}
</div>
<div class="btn-row" style="margin-top:2.5rem">${btn(page.primaryCta, 'btn btn-solid')}</div>
</div></article>`;
    }

    case 'faq': {
      const items = page.faq || [];
      if (!items.length) return '';
      return `<section class="section section-hair"><div class="wrap">
${headBlock(s)}
<div class="qa">
${items.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer"><p>${esc(f.a)}</p></div></details>`).join('\n')}
</div></div></section>`;
    }

    case 'faqGroups':
      return (page.faqGroups || [])
        .map(
          (g, i) => `<section class="section ${i % 2 ? 'section-raised' : 'section-hair'}"><div class="wrap">
<div class="head"><h2 class="serif">${esc(g.heading)}</h2></div>
<div class="qa">
${g.items.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer"><p>${esc(f.a)}</p></div></details>`).join('\n')}
</div></div></section>`
        )
        .join('\n');

    case 'finalCta':
      return `<section class="closing"><div class="wrap">
<h2 class="serif">Come and put your hands on it</h2>
<p>${esc(site.address.street)}, ${esc(site.address.city)} — ${esc(site.hoursSummary)} The consultation is free, and you deal with the man who sets the tile.</p>
<div class="btn-row">
<a class="btn btn-solid" href="${site.phone.href}" data-evt="phone_click">Call ${esc(site.phone.display)}</a>
<a class="btn btn-quiet" href="/showroom/" data-evt="showroom_cta_click">Plan a visit</a>
<a class="btn btn-quiet" href="/contact/" data-evt="quote_cta_click">Request a quote</a>
</div>
</div></section>`;

    default:
      return '';
  }
}

function workRow(p, tag = 'h3') {
  return `<a class="work" href="/portfolio/${attr(p.slug)}/">
<div class="work-media">${picture(p.hero, { sizes: '(min-width:900px) 55vw, 100vw', crop: '4/3' })}</div>
<div>
<p class="work-place">${esc(p.place.toUpperCase())}</p>
<${tag} class="serif">${esc(p.title)}</${tag}>
<p>${esc(p.summary)}</p>
<span class="work-link">${esc(p.material)}</span>
</div></a>`;
}

function relatedBlock(page) {
  const links = [
    { label: 'Visit the showroom', href: '/showroom/', body: 'Hold full-size samples against your own finishes before you commit.' },
    { label: 'Tile we carry', href: '/tile/', body: 'Porcelain, ceramic, natural stone, glass and mosaic.' },
    { label: 'Designers, builders & contractors', href: '/trade/', body: 'Lock-box showroom access for the trade.' },
  ].filter((l) => l.href !== page.href);
  return `<section class="section section-hair"><div class="wrap">
<div class="head"><h2 class="serif">Where to next</h2></div>
<div class="entries">
${links
  .map((l) => `<a class="entry" href="${attr(l.href)}"><h3>${esc(l.label)}</h3><p>${esc(l.body)}</p></a>`)
  .join('\n')}
</div></div></section>`;
}

function contactForm() {
  return `<form id="project-form" method="post" action="/thanks/" data-netlify="true" netlify-honeypot="company-website">
<input type="hidden" name="form-name" value="project">
<p class="hp"><label>Do not fill this in <input name="company-website" tabindex="-1" autocomplete="off"></label></p>
<div class="field"><label for="f-name">Your name</label><input id="f-name" name="name" type="text" autocomplete="name" required></div>
<div class="field"><label for="f-phone">Phone</label><input id="f-phone" name="phone" type="tel" autocomplete="tel" required></div>
<div class="field"><label for="f-email">Email <span class="hint">— optional if you would rather be called</span></label><input id="f-email" name="email" type="email" autocomplete="email"></div>
<div class="field"><label for="f-type">What is the project?</label>
<select id="f-type" name="project_type">
<option>Bathroom</option><option>Shower</option><option>Kitchen backsplash</option><option>Floors</option>
<option>Buying tile only</option><option>Trade / designer enquiry</option><option>Something else</option>
</select></div>
<div class="field"><label for="f-when">Roughly when?</label>
<select id="f-when" name="timing">
<option>As soon as possible</option><option>Next month or two</option><option>Later this year</option><option>Still planning</option>
</select></div>
<div class="field"><label for="f-msg">Anything useful to know <span class="hint">— room size, tile you like, what is there now</span></label><textarea id="f-msg" name="message"></textarea></div>
<button class="btn btn-solid" type="submit" data-evt="contact_form_submit">Send this to Mike</button>
<p class="form-note">Prefer to talk? Call <a href="${site.phone.href}" data-evt="phone_click" style="color:var(--brass-hi)">${esc(site.phone.display)}</a> during showroom hours.</p>
</form>`;
}

function footer() {
  return `<footer class="footer"><div class="wrap">
<div class="footer-grid">
<div class="footer-brand">
${picture('logoWide', { sizes: '100px', alt: site.name })}
<p>${esc(site.locationName)}<br>${esc(site.address.street)}, ${esc(site.address.city)}, ${esc(site.address.regionCode)} ${esc(site.address.postalCode)}</p>
<p><a href="${site.phone.href}" data-evt="phone_click">${esc(site.phone.display)}</a><br><a href="mailto:${esc(site.email)}" data-evt="email_click">${esc(site.email)}</a></p>
<p>${esc(site.hoursSummary)}</p>
</div>
${Object.entries(footerNav)
    .map(
      ([heading, links]) => `<div><h2>${esc(heading.toUpperCase())}</h2><ul>
${links.map((l) => `<li><a href="${attr(l.href)}">${esc(l.label)}</a></li>`).join('')}
</ul></div>`
    )
    .join('\n')}
</div>
<div class="footer-legal">
<p>© ${new Date().getFullYear()} ${esc(site.legalName)}. Also trading as ${esc(site.entityName)}. Serving ${esc(site.serviceAreaSummary)}.</p>
<p><a href="${attr(site.facebook)}" rel="noopener">Facebook</a> &nbsp;/&nbsp; <a href="/faq/">Questions</a> &nbsp;/&nbsp; <a href="/contact/">Contact</a></p>
</div>
</div></footer>
<nav class="actionbar" aria-label="Quick actions">
<a href="${site.phone.href}" data-evt="phone_click">Call</a>
<a href="https://www.google.com/maps/search/?api=1&amp;query=${site.address.lat},${site.address.lng}" data-evt="directions_click">Directions</a>
<a href="/contact/" data-evt="quote_cta_click">Get a quote</a>
</nav>`;
}

const SCRIPT = `<script>
(function(){
  var t=document.querySelector('.nav-toggle'),n=document.getElementById('nav');
  if(t&&n){t.addEventListener('click',function(){var o=n.getAttribute('data-open')==='true';n.setAttribute('data-open',String(!o));t.setAttribute('aria-expanded',String(!o));});}
  if(window.matchMedia('(prefers-reduced-motion: no-preference)').matches&&'IntersectionObserver'in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('is-in');io.unobserve(e.target);}});},{rootMargin:'0px 0px -8% 0px'});
    document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});
  } else { document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('is-in');}); }
  document.addEventListener('click',function(e){
    var a=e.target.closest('[data-evt]'); if(!a) return;
    if(window.gtag){window.gtag('event',a.getAttribute('data-evt'),{link_url:a.getAttribute('href')||'',link_text:(a.textContent||'').trim().slice(0,80)});}
  });
  var f=document.getElementById('project-form');
  if(f){f.addEventListener('submit',function(){if(window.gtag){window.gtag('event','generate_lead',{form:'project'});}});}
})();
</script>`;

export function render(page, ctx) {
  return `<!doctype html>
<html lang="en-US">
<head>
${head(page, ctx)}
${ctx.schema}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
${topbar(page)}
${crumbs(ctx.trail)}
<main id="main">
${hero(page)}
${page.facts ? facts(page.facts) : ''}
${page.sections.map((s) => renderSection(s, page, ctx)).join('\n')}
</main>
${footer()}
${SCRIPT}
</body>
</html>`;
}
