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

const btn = (cta, cls = 'btn btn-primary') =>
  `<a class="${cls}" href="${attr(cta.href)}"${evt(cta.href)}>${esc(cta.label)}</a>`;

function head(page, ctx) {
  const hero = page.heroA;
  return `<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script>document.documentElement.className+=' js';</script>
<title>${esc(page.title)}</title>
<meta name="description" content="${attr(page.description)}">
<link rel="canonical" href="${attr(ctx.url)}">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
<meta name="theme-color" content="#fcfbf9">
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
<link rel="preload" href="/assets/fonts/bricolage-grotesque-400-800-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/manrope-400-700-normal.woff2" as="font" type="font/woff2" crossorigin>
${hero ? preloadImage(hero, '(min-width: 1320px) 1260px, 100vw') : ''}
<style>${ctx.inlineCss}</style>`;
}

function navbar(page) {
  return `<header class="nav-shell"><div class="shell">
<div class="navbar">
<a class="brand" href="/">
${picture('logo', { sizes: '38px', loading: 'eager', alt: `${site.name} logo` })}
<span><b>Maryland Tile Boss</b><span>${esc(site.address.city)}, MD &middot; ${esc(site.phone.display)}</span></span>
</a>
<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav">Menu</button>
<nav class="links" id="nav" aria-label="Main">
${nav.map((n) => `<a href="${attr(n.href)}"${page.href === n.href ? ' aria-current="page"' : ''}>${esc(n.label)}</a>`).join('\n')}
<a class="btn btn-glaze btn-sm" href="/contact/" data-evt="quote_cta_click">Get a quote</a>
</nav>
</div>
</div></header>`;
}

function crumbs(trail) {
  if (trail.length < 2) return '';
  return `<div class="shell crumbs"><nav aria-label="Breadcrumb"><ol>
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
  return `<section class="hero"><div class="shell">
<div class="hero-head">
<h1${page.h1.length > 34 ? ' class="h1-long"' : ''}>${esc(page.h1)}</h1>
<div>
<p class="lede">${esc(page.lede)}</p>
<div class="btns">
${btn(page.primaryCta, 'btn btn-primary')}
${btn(page.secondaryCta, 'btn btn-quiet')}
</div>
</div>
</div>
<div class="hero-media">
${picture(page.heroA, { sizes: '(min-width: 1320px) 1260px, 100vw', loading: 'eager', fetchpriority: 'high', crop: '21/9' })}
</div>
</div></section>`;
}

function stats(items) {
  return `<div class="shell"><div class="stats">
${items.map((f) => `<div class="stat"><b>${esc(f.value)}</b><span>${esc(f.label)}</span></div>`).join('\n')}
</div></div>`;
}

function secHead(s) {
  if (!s.heading) return '';
  const lead = s.body && typeof s.body === 'string' ? `<p class="lead">${esc(s.body)}</p>` : s.intro ? `<p class="lead">${esc(s.intro)}</p>` : '';
  return `<div class="sec-head"><h2>${esc(s.heading)}</h2>${lead}</div>`;
}

function renderSection(s, page, ctx) {
  switch (s.type) {
    case 'prose':
      return `<section class="sec"><div class="shell"><div class="split reveal">
<h2>${esc(s.heading)}</h2>
<div class="prose">${paras(s.body)}</div>
</div></div></section>`;

    case 'cards':
      return `<section class="sec sec-chalk"><div class="shell">
${secHead(s)}
<div class="bento reveal">
${s.items
  .map((c) => {
    const inner = `${picture(c.image, { sizes: '(min-width:1080px) 40vw, (min-width:700px) 48vw, 100vw', crop: '16/10' })}
<div class="card-body"><h3>${esc(c.title)}</h3><p>${esc(c.body)}</p>${c.href ? '<span class="go">Read more</span>' : ''}</div>`;
    return c.href ? `<a class="card" href="${attr(c.href)}">${inner}</a>` : `<div class="card">${inner}</div>`;
  })
  .join('\n')}
</div></div></section>`;

    case 'materials':
      return `<section class="sec"><div class="shell">
${secHead(s)}
<div class="swatches reveal">
${s.items
  .map(
    (m) => `<a class="swatch" href="${attr(m.href)}">${picture(m.image, {
      sizes: '(min-width:900px) 24vw, 48vw',
      crop: '4/5',
    })}<span class="swatch-name">${esc(m.title)} <i>View</i></span></a>`
  )
  .join('\n')}
</div></div></section>`;

    case 'feature':
      return `<section class="sec"><div class="shell">
<div class="panel reveal">
<div>
<h2>${esc(s.heading)}</h2>
${paras(s.body)}
${s.cta ? `<div class="btns" style="margin-top:1.8rem">${btn(s.cta, 'btn btn-glaze')}</div>` : ''}
</div>
<div class="panel-media">${picture(s.image, { sizes: '(min-width:900px) 46vw, 100vw', crop: '4/3' })}</div>
</div></div></section>`;

    case 'process':
      return `<section class="sec sec-chalk"><div class="shell">
${secHead(s)}
<ol class="flow reveal" style="list-style:none;margin:0;padding:0">
${s.steps
  .map((st, i) => `<li class="step"><div class="step-n">${i + 1}</div><h3>${esc(st.title)}</h3><p>${esc(st.body)}</p></li>`)
  .join('\n')}
</ol></div></section>`;

    case 'checklist':
      return `<section class="sec"><div class="shell">
${secHead(s)}
<ul class="checks reveal">${s.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
</div></section>`;

    case 'comparison':
      return `<section class="sec sec-chalk"><div class="shell">
${secHead(s)}
<div class="table-wrap reveal"><table>
<thead><tr>${s.columns.map((c) => `<th scope="col">${esc(c)}</th>`).join('')}</tr></thead>
<tbody>${s.rows
        .map((r) => `<tr><th scope="row">${esc(r[0])}</th>${r.slice(1).map((c) => `<td>${esc(c)}</td>`).join('')}</tr>`)
        .join('')}</tbody>
</table></div></div></section>`;

    case 'gallery':
      return `<section class="sec"><div class="shell">
${secHead(s)}
<div class="gallery reveal">
${s.images.map((k) => picture(k, { sizes: '(min-width:900px) 32vw, 48vw', crop: '4/3' })).join('\n')}
</div></div></section>`;

    case 'projects':
      return `<section class="sec"><div class="shell">
${secHead(s)}
<div class="work-grid reveal">
${allProjects.slice(0, 3).map((p) => workCard(p, 'h3')).join('\n')}
</div>
<div class="btns" style="margin-top:2.4rem">${btn({ label: 'See all projects', href: '/portfolio/' }, 'btn btn-quiet')}</div>
</div></section>`;

    case 'projectGrid':
      return `<section class="sec"><div class="shell"><div class="work-grid">
${allProjects.map((p) => workCard(p, 'h2')).join('\n')}
</div></div></section>`;

    case 'local':
      return `<section class="sec sec-chalk"><div class="shell"><div class="split reveal">
<h2>${esc(s.heading)}</h2>
<div class="prose">
<p>${esc(s.body)}</p>
<p style="color:var(--glaze);font-weight:600">${site.serviceAreas.map((a) => esc(a)).join(' &middot; ')}</p>
<div class="btns" style="margin-top:1.6rem">${btn({ label: 'Serving Annapolis', href: '/annapolis/' }, 'btn btn-quiet')}</div>
</div>
</div></div></section>`;

    case 'visit':
      return `<section class="sec sec-chalk"${s.anchor ? ` id="${attr(s.anchor)}"` : ''}><div class="shell">
${secHead(s)}
<div class="visit">
<ul class="nap">
<li><span class="nap-key">Address</span><span><a href="https://www.google.com/maps/search/?api=1&amp;query=${site.address.lat},${site.address.lng}" data-evt="directions_click">${esc(site.address.street)}, ${esc(site.address.city)}, ${esc(site.address.regionCode)} ${esc(site.address.postalCode)}</a></span></li>
<li><span class="nap-key">Look for</span><span>The ${esc(site.locationName)} sign — same business.</span></li>
<li><span class="nap-key">Phone</span><span><a href="${site.phone.href}" data-evt="phone_click">${esc(site.phone.display)}</a></span></li>
<li><span class="nap-key">Email</span><span><a href="mailto:${esc(site.email)}" data-evt="email_click">${esc(site.email)}</a></span></li>
<li><span class="nap-key">Hours</span><span>${site.hours.map((h) => `${esc(h.day)} ${h.open}–${h.close}`).join('<br>')}<br>Sunday closed</span></li>
<li><span class="nap-key">Payment</span><span>${esc(site.payments.join(', '))}</span></li>
</ul>
<div class="map"><iframe src="${attr(MAP_SRC)}" title="Map showing the showroom at ${attr(site.address.street)}, ${attr(site.address.city)}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
</div></div></section>`;

    case 'contactBlock':
      return `<section class="sec"><div class="shell"><div class="panel reveal">
<div>
<h2>Talk to Mike</h2>
<p>The quickest route to a straight answer is the phone. Out of hours, email or send the form and it will be picked up around showroom hours.</p>
<div class="btns" style="margin-top:1.6rem">
<a class="btn btn-glaze" href="${site.phone.href}" data-evt="phone_click">Call ${esc(site.phone.display)}</a>
<a class="btn btn-quiet" href="mailto:${esc(site.email)}" data-evt="email_click">Email the showroom</a>
</div>
</div>
<div class="panel-media">${picture('showroomCounter', { sizes: '(min-width:900px) 46vw, 100vw', crop: '4/3' })}</div>
</div></div></section>`;

    case 'form':
      return `<section class="sec sec-chalk"><div class="shell">
${secHead(s)}
${contactForm()}
</div></section>`;

    case 'diagrams':
      return `<section class="sec sec-chalk"><div class="shell">
${secHead(s)}
<div class="diagrams reveal">
${s.items
  .map(
    (d) => `<figure class="diagram">
<div class="diagram-art">${d.svg}</div>
<div class="diagram-legend"><span class="dl-bad">${esc(d.wrongLabel)}</span><span class="dl-good">${esc(d.rightLabel)}</span></div>
<figcaption><h3>${esc(d.title)}</h3><p>${esc(d.note)}</p></figcaption>
</figure>`
  )
  .join('\n')}
</div></div></section>`;

    case 'annotated':
      return `<section class="sec"><div class="shell">
${secHead(s)}
<div class="notes reveal">
${s.items
  .map(
    (n) => `<figure class="note">
${picture(n.image, { sizes: '(min-width:1150px) 32vw, (min-width:700px) 48vw, 100vw', crop: '4/3' })}
<figcaption><h3>${esc(n.title)}</h3><p>${esc(n.note)}</p></figcaption>
</figure>`
  )
  .join('\n')}
</div></div></section>`;

    case 'related':
      return relatedBlock(page);

    case 'projectFacts': {
      const p = page.project;
      return `<section class="sec sec-chalk"><div class="shell">
<div class="sec-head"><h2>About this job</h2></div>
<ul class="nap" style="max-width:46rem">
<li><span class="nap-key">Location</span><span>${esc(p.place)}</span></li>
<li><span class="nap-key">Room</span><span>${esc(p.room)}</span></li>
<li><span class="nap-key">Material</span><span>${esc(p.material)}</span></li>
<li><span class="nap-key">Scope</span><span>${esc(p.summary)}</span></li>
</ul>
<div class="btns" style="margin-top:2rem">
<a class="btn btn-glaze" href="/contact/" data-evt="quote_cta_click">Ask about a job like this</a>
<a class="btn btn-quiet" href="/portfolio/">All projects</a>
</div></div></section>`;
    }

    case 'postList':
      return `<section class="sec"><div class="shell"><div class="work-grid">
${ctx.posts
  .map(
    (p) => `<a class="work" href="/blog/${attr(p.slug)}/">
${picture(p.image, { sizes: '(min-width:1120px) 32vw, (min-width:760px) 48vw, 100vw', crop: '4/3' })}
<p class="work-meta">${esc(new Date(p.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }))}</p>
<h2>${esc(p.title)}</h2><p>${esc(p.desc)}</p></a>`
  )
  .join('\n')}
</div></div></section>`;

    case 'postBody': {
      const p = page.post;
      return `<article class="sec"><div class="shell">
<p class="work-meta"><time datetime="${attr(p.date)}">${esc(
        new Date(p.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
      )}</time> — written by ${esc(site.owner)}</p>
<div class="measure prose" style="margin-top:1.8rem">
${p.blocks
  .map((b) =>
    b.t === 'h'
      ? `<h2 style="font-size:var(--t-2);margin:2.2rem 0 0.9rem">${esc(b.text)}</h2>`
      : b.t === 'list'
      ? `<ul class="checks">${b.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`
      : `<p>${esc(b.text)}</p>`
  )
  .join('\n')}
</div>
<div class="btns" style="margin-top:2.4rem">${btn(page.primaryCta, 'btn btn-glaze')}</div>
</div></article>`;
    }

    case 'faq': {
      const items = page.faq || [];
      if (!items.length) return '';
      return `<section class="sec"><div class="shell">
${secHead(s)}
<div class="faq reveal">
${items.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer"><p>${esc(f.a)}</p></div></details>`).join('\n')}
</div></div></section>`;
    }

    case 'faqGroups':
      return (page.faqGroups || [])
        .map(
          (g, i) => `<section class="sec${i % 2 ? ' sec-chalk' : ''}"><div class="shell">
<div class="sec-head"><h2>${esc(g.heading)}</h2></div>
<div class="faq">
${g.items.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer"><p>${esc(f.a)}</p></div></details>`).join('\n')}
</div></div></section>`
        )
        .join('\n');

    case 'finalCta':
      return `<section class="closing"><div class="shell"><div class="closing-inner">
<h2>Come and put your hands on it</h2>
<p>${esc(site.address.street)}, ${esc(site.address.city)} — ${esc(site.hoursSummary)} The consultation is free, and you deal with the man who sets the tile.</p>
<div class="btns">
<a class="btn btn-primary" href="${site.phone.href}" data-evt="phone_click">Call ${esc(site.phone.display)}</a>
<a class="btn btn-quiet" href="/showroom/" data-evt="showroom_cta_click">Plan a visit</a>
<a class="btn btn-quiet" href="/contact/" data-evt="quote_cta_click">Request a quote</a>
</div>
</div></div></section>`;

    default:
      return '';
  }
}

function workCard(p, tag) {
  return `<a class="work" href="/portfolio/${attr(p.slug)}/">
${picture(p.hero, { sizes: '(min-width:1120px) 32vw, (min-width:760px) 48vw, 100vw', crop: '4/3' })}
<p class="work-meta">${esc(p.place)} — ${esc(p.material)}</p>
<${tag}>${esc(p.title)}</${tag}>
<p>${esc(p.summary)}</p>
</a>`;
}

function relatedBlock(page) {
  const links = [
    { label: 'Visit the showroom', href: '/showroom/', body: 'Hold full-size samples against your own finishes before you commit.' },
    { label: 'Tile we carry', href: '/tile/', body: 'Porcelain, ceramic, natural stone, glass and mosaic.' },
    { label: 'Designers, builders & contractors', href: '/trade/', body: 'Lock-box showroom access for the trade.' },
  ].filter((l) => l.href !== page.href);
  return `<section class="sec"><div class="shell">
<div class="sec-head"><h2>Where to next</h2></div>
<div class="bento">
${links
  .map(
    (l) => `<a class="card" href="${attr(l.href)}"><div class="card-body"><h3>${esc(l.label)}</h3><p>${esc(l.body)}</p><span class="go">Read more</span></div></a>`
  )
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
<button class="btn btn-glaze" type="submit" data-evt="contact_form_submit">Send this to Mike</button>
<p class="form-note">Prefer to talk? Call <a href="${site.phone.href}" data-evt="phone_click">${esc(site.phone.display)}</a> during showroom hours.</p>
</form>`;
}

function footer() {
  return `<footer class="footer"><div class="shell">
<div class="footer-grid">
<div class="footer-brand">
${picture('logoWide', { sizes: '92px', alt: site.name })}
<p>${esc(site.locationName)}<br>${esc(site.address.street)}, ${esc(site.address.city)}, ${esc(site.address.regionCode)} ${esc(site.address.postalCode)}</p>
<p><a href="${site.phone.href}" data-evt="phone_click">${esc(site.phone.display)}</a><br><a href="mailto:${esc(site.email)}" data-evt="email_click">${esc(site.email)}</a></p>
<p>${esc(site.hoursSummary)}</p>
</div>
${Object.entries(footerNav)
    .map(
      ([heading, links]) => `<div><h2>${esc(heading)}</h2><ul>
${links.map((l) => `<li><a href="${attr(l.href)}">${esc(l.label)}</a></li>`).join('')}
</ul></div>`
    )
    .join('\n')}
</div>
<div class="footer-legal">
<p>© ${new Date().getFullYear()} ${esc(site.legalName)}. Also trading as ${esc(site.entityName)}. Serving ${esc(site.serviceAreaSummary)}.</p>
<p><a href="${attr(site.facebook)}" rel="noopener">Facebook</a> &middot; <a href="/faq/">Questions</a> &middot; <a href="/contact/">Contact</a></p>
</div>
</div></footer>
<nav class="mobile-bar" aria-label="Quick actions">
<a href="${site.phone.href}" data-evt="phone_click">Call</a>
<a href="https://www.google.com/maps/search/?api=1&amp;query=${site.address.lat},${site.address.lng}" data-evt="directions_click">Directions</a>
<a href="/contact/" data-evt="quote_cta_click">Quote</a>
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
${navbar(page)}
${crumbs(ctx.trail)}
<main id="main">
${hero(page)}
${page.facts ? stats(page.facts) : ''}
${page.sections.map((s) => renderSection(s, page, ctx)).join('\n')}
</main>
${footer()}
${SCRIPT}
</body>
</html>`;
}
