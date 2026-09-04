import { site, nav, footerNav } from '../../content/site.js';
import { projects as allProjects } from '../../content/images.js';
import { esc, attr, picture, preloadImage, paras } from '../../lib/html.mjs';

const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  `${site.address.street}, ${site.address.city}, ${site.address.regionCode} ${site.address.postalCode}`
)}&output=embed`;

const ctaAttrs = (href, label) =>
  href.startsWith('tel:')
    ? ` data-evt="phone_click"`
    : href.startsWith('mailto:')
    ? ` data-evt="email_click"`
    : ` data-evt="${/quote|contact/.test(href) ? 'quote_cta_click' : /showroom/.test(href) ? 'showroom_cta_click' : 'cta_click'}"`;

const btn = (cta, cls = 'btn') =>
  `<a class="${cls}" href="${attr(cta.href)}"${ctaAttrs(cta.href, cta.label)}>${esc(cta.label)}</a>`;

function head(page, ctx) {
  const url = ctx.url;
  const hero = page.heroA;
  return `<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script>document.documentElement.className+=' js';</script>
<title>${esc(page.title)}</title>
<meta name="description" content="${attr(page.description)}">
<link rel="canonical" href="${attr(url)}">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
<meta name="theme-color" content="#16171a">
<meta property="og:type" content="${page.slug === '' ? 'website' : 'article'}">
<meta property="og:site_name" content="${attr(site.name)}">
<meta property="og:title" content="${attr(page.title)}">
<meta property="og:description" content="${attr(page.description)}">
<meta property="og:url" content="${attr(url)}">
<meta property="og:locale" content="en_US">
${hero ? `<meta property="og:image" content="${attr(site.domain)}/assets/img/${hero}-1200.jpg">
<meta property="og:image:alt" content="${attr(ctx.imageMeta[hero]?.alt || '')}">` : ''}
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/img/logo-400.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="preload" href="/assets/fonts/archivo-black-400-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/archivo-400-650-normal.woff2" as="font" type="font/woff2" crossorigin>
${hero ? preloadImage(hero, '(min-width: 950px) 50vw, 100vw') : ''}
<style>${ctx.inlineCss}</style>`;
}

function masthead(page) {
  return `<header class="masthead-group">
<div class="utility"><div class="wrap">
<p>Showroom: ${esc(site.address.street)}, ${esc(site.address.city)}, ${esc(site.address.regionCode)} — ${esc(site.hoursSummary)}</p>
<p><a href="${site.phone.href}" data-evt="phone_click">Call ${esc(site.phone.display)}</a></p>
</div></div>
<div class="masthead">
<div class="wrap">
<a class="brand" href="/">
${picture('logo', { sizes: '58px', loading: 'eager', alt: `${site.name} logo` })}
<span>
<span class="brand-name">Maryland<span>Tile Boss</span></span>
<span class="brand-sub">${esc(site.address.city)}, Maryland</span>
</span>
</a>
<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav">Menu</button>
<nav class="nav" id="nav" aria-label="Main">
${nav.map((n) => `<a href="${attr(n.href)}"${page.href === n.href ? ' aria-current="page"' : ''}>${esc(n.label)}</a>`).join('\n')}
<a class="btn btn-gold" href="/contact/" data-evt="quote_cta_click">Get a quote</a>
</nav>
</div>
</div>
</header>`;
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
  return `<section class="hero">
<div class="hero-grid">
<div class="hero-copy">
<h1 class="display${page.h1.length > 34 ? ' h1-long' : ''}">${esc(page.h1)}</h1>
<p class="lede">${esc(page.lede)}</p>
<div class="btn-row">
${btn(page.primaryCta, 'btn btn-gold')}
${btn(page.secondaryCta, 'btn btn-ghost')}
</div>
</div>
<div class="hero-media">
${picture(page.heroA, { sizes: '(min-width: 950px) 50vw, 100vw', loading: 'eager', fetchpriority: 'high', crop: '4/3' })}
<p class="hero-stamp">${esc(site.proof.years)} · ${esc(site.proof.generations)}</p>
</div>
</div>
</section>`;
}

function facts(items) {
  return `<div class="facts">
${items
  .map((f) => `<div class="fact"><p class="fact-value">${esc(f.value)}</p><p class="fact-label">${esc(f.label)}</p></div>`)
  .join('\n')}
</div>`;
}

function sectionHead(s) {
  if (!s.heading) return '';
  return `<div class="section-head"><h2 class="display">${esc(s.heading)}</h2>${
    s.body && typeof s.body === 'string' ? `<p>${esc(s.body)}</p>` : ''
  }</div>`;
}

function renderSection(s, page, ctx) {
  switch (s.type) {
    case 'prose':
      return `<section class="section"><div class="wrap prose reveal">
<h2 class="display">${esc(s.heading)}</h2><div style="height:1.1rem"></div>
${paras(s.body)}
</div></section>`;

    case 'cards':
      return `<section class="section section-bone"><div class="wrap">
${sectionHead(s)}
<div class="tiles${s.items.length === 4 ? ' tiles-4' : ''} reveal">
${s.items
  .map((c) => {
    const inner = `<div class="tile-media">${picture(c.image, { sizes: '(min-width:1040px) 24vw, (min-width:640px) 48vw, 100vw', crop: '4/3' })}</div>
<div class="tile-body"><h3>${esc(c.title)}</h3><p>${esc(c.body)}</p>${
      c.href ? `<span class="tile-more">Read more</span>` : ''
    }</div>`;
    return c.href
      ? `<a class="tile" href="${attr(c.href)}">${inner}</a>`
      : `<div class="tile">${inner}</div>`;
  })
  .join('\n')}
</div></div></section>`;

    case 'materials':
      return `<section class="section"><div class="wrap">
${sectionHead(s)}
<div class="materials reveal">
${s.items
  .map(
    (m) =>
      `<a class="material" href="${attr(m.href)}">${picture(m.image, { sizes: '(min-width:900px) 25vw, 50vw', crop: '1/1' })}<span>${esc(m.title)}</span></a>`
  )
  .join('\n')}
</div></div></section>`;

    case 'feature':
      return `<section class="section section-bone"><div class="wrap">
<div class="feature reveal">
<div class="feature-media">${picture(s.image, { sizes: '(min-width:900px) 50vw, 100vw', crop: '4/3' })}</div>
<div><h2 class="display">${esc(s.heading)}</h2><div style="height:1rem"></div>${paras(s.body)}
${s.cta ? `<div class="btn-row" style="margin-top:1.6rem">${btn(s.cta)}</div>` : ''}</div>
</div></div></section>`;

    case 'process':
      return `<section class="section"><div class="wrap">
${sectionHead(s)}
<ol class="steps reveal" style="list-style:none;margin:0;padding:0">
${s.steps
  .map(
    (st, i) =>
      `<li class="step"><p class="step-n">${i + 1}</p><h3>${esc(st.title)}</h3><p>${esc(st.body)}</p></li>`
  )
  .join('\n')}
</ol></div></section>`;

    case 'checklist':
      return `<section class="section"><div class="wrap">
${sectionHead(s)}
<ul class="checklist reveal">${s.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
</div></section>`;

    case 'comparison':
      return `<section class="section section-bone"><div class="wrap">
<div class="section-head"><h2 class="display">${esc(s.heading)}</h2>${s.intro ? `<p>${esc(s.intro)}</p>` : ''}</div>
<div class="table-scroll reveal"><table>
<thead><tr>${s.columns.map((c) => `<th scope="col">${esc(c)}</th>`).join('')}</tr></thead>
<tbody>${s.rows
        .map(
          (r) =>
            `<tr><th scope="row">${esc(r[0])}</th>${r.slice(1).map((c) => `<td>${esc(c)}</td>`).join('')}</tr>`
        )
        .join('')}</tbody>
</table></div></div></section>`;

    case 'gallery':
      return `<section class="section"><div class="wrap">
${sectionHead(s)}
<div class="gallery reveal">
${s.images.map((k) => picture(k, { sizes: '(min-width:860px) 33vw, 50vw', crop: '4/3' })).join('\n')}
</div></div></section>`;

    case 'projects': {
      const list = allProjects.slice(0, 3);
      return `<section class="section section-bone"><div class="wrap">
${sectionHead(s)}
<div class="projects reveal">
${list
  .map(
    (p) => `<a class="project" href="/portfolio/${p.slug}/">
${picture(p.hero, { sizes: '(min-width:1100px) 33vw, (min-width:760px) 50vw, 100vw', crop: '4/3' })}
<div class="project-body"><p class="project-meta">${esc(p.place)} — ${esc(p.material)}</p><h3>${esc(p.title)}</h3><p>${esc(p.summary)}</p></div>
</a>`
  )
  .join('\n')}
</div>
<div class="btn-row" style="margin-top:2rem">${btn({ label: 'See all projects', href: '/portfolio/' }, 'btn btn-ghost')}</div>
</div></section>`;
    }

    case 'projectGrid':
      return `<section class="section"><div class="wrap"><div class="projects">
${allProjects
  .map(
    (p) => `<a class="project" href="/portfolio/${p.slug}/">
${picture(p.hero, { sizes: '(min-width:1100px) 33vw, (min-width:760px) 50vw, 100vw', crop: '4/3' })}
<div class="project-body"><p class="project-meta">${esc(p.place)} — ${esc(p.material)}</p><h2>${esc(p.title)}</h2><p>${esc(p.summary)}</p></div>
</a>`
  )
  .join('\n')}
</div></div></section>`;

    case 'local':
      return `<section class="section"><div class="wrap prose reveal">
<h2 class="display">${esc(s.heading)}</h2><div style="height:1.1rem"></div>
<p>${esc(s.body)}</p>
<p>${site.serviceAreas.map((a) => esc(a)).join(' · ')}</p>
<div class="btn-row" style="margin-top:1.5rem">${btn({ label: 'Serving Annapolis', href: '/annapolis/' }, 'btn btn-ghost')}</div>
</div></section>`;

    case 'visit':
      return `<section class="section section-bone" ${s.anchor ? `id="${attr(s.anchor)}"` : ''}><div class="wrap">
${sectionHead(s)}
<div class="visit">
<div>
<ul class="nap">
<li><span class="nap-key">Address</span><span><a href="https://www.google.com/maps/search/?api=1&amp;query=${site.address.lat},${site.address.lng}" data-evt="directions_click">${esc(site.address.street)}<br>${esc(site.address.city)}, ${esc(site.address.regionCode)} ${esc(site.address.postalCode)}</a></span></li>
<li><span class="nap-key">Look for</span><span>The ${esc(site.locationName)} sign above the door — same business.</span></li>
<li><span class="nap-key">Phone</span><span><a href="${site.phone.href}" data-evt="phone_click">${esc(site.phone.display)}</a></span></li>
<li><span class="nap-key">Email</span><span><a href="mailto:${esc(site.email)}" data-evt="email_click">${esc(site.email)}</a></span></li>
<li><span class="nap-key">Hours</span><span>${site.hours.map((h) => `${esc(h.day)} ${h.open}–${h.close}`).join('<br>')}<br>Sunday closed</span></li>
<li><span class="nap-key">Payment</span><span>${esc(site.payments.join(', '))}</span></li>
</ul>
</div>
<div class="visit-map"><iframe src="${attr(MAP_SRC)}" title="Map showing the showroom at ${attr(site.address.street)}, ${attr(site.address.city)}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
</div></div></section>`;

    case 'contactBlock':
      return `<section class="section"><div class="wrap">
<div class="feature">
<div>
<h2 class="display">Talk to Mike</h2><div style="height:1rem"></div>
<p>The quickest route to a straight answer is the phone. If it is out of hours, email or send the form and it will be picked up around showroom hours.</p>
<div class="btn-row" style="margin-top:1.4rem">
<a class="btn btn-gold" href="${site.phone.href}" data-evt="phone_click">Call ${esc(site.phone.display)}</a>
<a class="btn btn-ghost" href="mailto:${esc(site.email)}" data-evt="email_click">Email the showroom</a>
</div>
</div>
<div class="feature-media">${picture('showroomCounter', { sizes: '(min-width:900px) 50vw, 100vw', crop: '4/3' })}</div>
</div></div></section>`;

    case 'form':
      return `<section class="section section-bone"><div class="wrap">
${sectionHead(s)}
${contactForm()}
</div></section>`;

    case 'related':
      return relatedBlock(page);

    case 'projectFacts': {
      const p = page.project;
      return `<section class="section section-bone"><div class="wrap">
<h2 class="display">About this job</h2><div style="height:1.2rem"></div>
<ul class="nap" style="max-width:46rem">
<li><span class="nap-key">Location</span><span>${esc(p.place)}</span></li>
<li><span class="nap-key">Room</span><span>${esc(p.room)}</span></li>
<li><span class="nap-key">Material</span><span>${esc(p.material)}</span></li>
<li><span class="nap-key">Scope</span><span>${esc(p.summary)}</span></li>
</ul>
<div class="btn-row" style="margin-top:1.8rem">
<a class="btn btn-gold" href="/contact/" data-evt="quote_cta_click">Ask about a job like this</a>
<a class="btn btn-ghost" href="/portfolio/">All projects</a>
</div>
</div></section>`;
    }

    case 'postList':
      return `<section class="section"><div class="wrap"><div class="projects">
${ctx.posts
  .map(
    (p) => `<a class="project" href="/blog/${attr(p.slug)}/">
${picture(p.image, { sizes: '(min-width:1100px) 33vw, (min-width:760px) 50vw, 100vw', crop: '4/3' })}
<div class="project-body"><p class="project-meta">${esc(
      new Date(p.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    )}</p><h2>${esc(p.title)}</h2><p>${esc(p.desc)}</p></div></a>`
  )
  .join('\n')}
</div></div></section>`;

    case 'postBody': {
      const p = page.post;
      return `<article class="section"><div class="wrap">
<p style="color:var(--ink-soft);font-size:var(--step--1)"><time datetime="${attr(p.date)}">${esc(
        new Date(p.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
      )}</time> — written by ${esc(site.owner)}</p>
<div class="measure" style="margin-top:1.6rem">
${p.blocks
  .map((b) =>
    b.t === 'h'
      ? `<h2 class="display" style="font-size:var(--step-2);margin:2rem 0 0.8rem">${esc(b.text)}</h2>`
      : b.t === 'list'
      ? `<ul class="checklist">${b.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`
      : `<p>${esc(b.text)}</p>`
  )
  .join('\n')}
</div>
<div class="btn-row" style="margin-top:2rem">${btn(page.primaryCta, 'btn btn-gold')}</div>
</div></article>`;
    }

    case 'faq': {
      const items = page.faq || [];
      if (!items.length) return '';
      return `<section class="section"><div class="wrap">
${sectionHead(s)}
<div class="faq">
${items
  .map(
    (f) => `<details><summary>${esc(f.q)}</summary><div class="answer"><p>${esc(f.a)}</p></div></details>`
  )
  .join('\n')}
</div></div></section>`;
    }

    case 'faqGroups':
      return (page.faqGroups || [])
        .map(
          (g, i) => `<section class="section${i % 2 ? ' section-bone' : ''}"><div class="wrap">
<h2 class="display">${esc(g.heading)}</h2><div style="height:1.3rem"></div>
<div class="faq">
${g.items.map((f) => `<details><summary>${esc(f.q)}</summary><div class="answer"><p>${esc(f.a)}</p></div></details>`).join('\n')}
</div></div></section>`
        )
        .join('\n');

    case 'finalCta':
      return `<section class="finalcta"><div class="wrap">
<h2 class="display">Come and put your hands on it</h2>
<p>${esc(site.address.street)}, ${esc(site.address.city)} — ${esc(site.hoursSummary)} Free consultation, and you deal with the man who sets the tile.</p>
<div class="btn-row">
<a class="btn btn-gold" href="${site.phone.href}" data-evt="phone_click">Call ${esc(site.phone.display)}</a>
<a class="btn btn-ghost" href="/showroom/" data-evt="showroom_cta_click">Plan a showroom visit</a>
<a class="btn btn-ghost" href="/contact/" data-evt="quote_cta_click">Request a quote</a>
</div>
</div></section>`;

    default:
      return '';
  }
}

function relatedBlock(page) {
  const links = [
    { label: 'Visit the showroom', href: '/showroom/', body: 'Hold full-size samples against your own finishes before you commit.' },
    { label: 'Tile we carry', href: '/tile/', body: 'Porcelain, ceramic, natural stone, glass and mosaic.' },
    { label: 'Designers, builders & contractors', href: '/trade/', body: 'Lock-box showroom access for the trade.' },
  ].filter((l) => l.href !== page.href);
  return `<section class="section section-bone"><div class="wrap">
<h2 class="display">Where to next</h2><div style="height:1.3rem"></div>
<div class="tiles">
${links
  .map(
    (l) => `<a class="tile" href="${attr(l.href)}"><div class="tile-body"><h3>${esc(l.label)}</h3><p>${esc(l.body)}</p><span class="tile-more">Read more</span></div></a>`
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
<button class="btn btn-gold" type="submit" data-evt="contact_form_submit">Send this to Mike</button>
<p class="form-note">Prefer to talk? Call <a href="${site.phone.href}" data-evt="phone_click">${esc(site.phone.display)}</a> during showroom hours.</p>
</form>`;
}

function footer() {
  return `<footer class="footer"><div class="wrap">
<div class="footer-grid">
<div class="footer-brand">
${picture('logoWide', { sizes: '116px', alt: `${site.name}` })}
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
<p><a href="${attr(site.facebook)}" rel="noopener">Facebook</a> · <a href="/faq/">Questions</a> · <a href="/contact/">Contact</a></p>
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
  const trail = ctx.trail;
  return `<!doctype html>
<html lang="en-US">
<head>
${head(page, ctx)}
${ctx.schema}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
${masthead(page)}
${crumbs(trail)}
<main id="main">
${page.slug === '' || !page.heroA ? '' : ''}
${hero(page)}
${page.facts ? facts(page.facts) : ''}
${page.sections.map((s) => renderSection(s, page, ctx)).join('\n')}
</main>
${footer()}
${SCRIPT}
</body>
</html>`;
}

export const cssFile = 'src/themes/a/style.css';
export const fonts = ['archivo-400-650-normal.woff2', 'archivo-black-400-normal.woff2'];
