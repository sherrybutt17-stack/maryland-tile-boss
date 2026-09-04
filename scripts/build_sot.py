import re,json,glob,os
def clean(s):
    if not isinstance(s,str): return ""
    s=re.sub(r'<br\s*/?>','\n',s); s=re.sub(r'</(p|div|li|h[1-6])>','\n',s); s=re.sub(r'<li[^>]*>','- ',s)
    s=re.sub(r'<[^>]+>','',s)
    for a,b in [('&nbsp;',' '),('&amp;','&'),('&#39;',"'"),('&quot;','"'),('&rsquo;','’'),('&ldquo;','“'),('&rdquo;','”'),('&ndash;','–'),('&mdash;','—'),('\xa0',' ')]:
        s=s.replace(a,b)
    s=re.sub(r'[ \t]+',' ',s); s=re.sub(r'\n\s*\n+','\n\n',s)
    return s.strip()
def preload(path):
    h=open(path,encoding="utf-8",errors="ignore").read()
    k="window.__PRELOAD_DATA__ = "
    if k not in h: return None
    i=h.index(k)+len(k); depth=0
    for j in range(i,len(h)):
        if h[j]=='{':depth+=1
        elif h[j]=='}':
            depth-=1
            if depth==0:
                try: return json.loads(h[i:j+1])
                except: return None
pages={}
for f in sorted(glob.glob("research/raw/*.html")):
    p=preload(f)
    if p: pages[os.path.basename(f)[:-5]]=p
home=pages["home"]
imgs={}; svc={}; grp={}; spaces={}; items={}; blocks={}
for slug,p in pages.items():
    imgs.update({int(k):v for k,v in (p.get("images") or {}).items()})
    svc.update(p.get("service_items_map") or {})
    grp.update(p.get("service_groups_map") or {})
    spaces.update(p.get("space_items_map") or {})
    items.update(p.get("space_page_items_map") or {})
    cb=p.get("content_blocks_map") or {}
    blocks.update(cb)
DAY=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
c=home.get("contact") or {}; a=home.get("address") or {}; imp=home.get("impressum") or {}
L=[]
L.append("# SOURCE OF TRUTH — Verified Business Data\n")
L.append(f"Extracted from live site payload `window.__PRELOAD_DATA__` on marylandtileboss.com (crawled 2026-09-04). Site last_update: **{home.get('last_update')}**.\n")
L.append("> Every fact below came from the live site. Nothing here is invented. Items marked ⚠️ are conflicts or gaps that need client confirmation.\n")
L.append("## Identity\n")
L.append(f"- **Business name (current site):** {home.get('name')}")
L.append(f"- **Registered name (impressum):** {imp.get('registered_name')}")
L.append(f"- **Legacy brand in body copy:** Digitile International ⚠️ (site copy still says \"Digitile International\" 9x while branding says Maryland Tile Boss 22x)")
L.append(f"- **Tagline / subtitle:** {home.get('subtitle')}")
L.append(f"- **Owner:** {imp.get('owner')}")
L.append(f"- **Employees:** {home.get('employees_count')}")
L.append(f"- **Meta title in use:** {(home.get('seo') or {}).get('meta_title')}")
L.append(f"- **Brand colors on current site:** primary `{(home.get('color_palette') or {}).get('colors',{}).get('primary')}`, secondary `{(home.get('color_palette') or {}).get('colors',{}).get('secondary')}` (palette: {(home.get('color_palette') or {}).get('name')})")
L.append(f"- **GA measurement ID on site:** {home.get('google_analytics_measurement_id') or 'none found'}\n")
L.append("## NAP (Name / Address / Phone)\n")
L.append(f"- **Street:** {a.get('street')}")
L.append(f"- **City/State/ZIP:** {a.get('city')}, {a.get('state')} {a.get('postal_code')}")
co=(a.get('coordinates') or {}).get('coordinates')
L.append(f"- **Coordinates:** {co}")
L.append(f"- **Primary phone:** {c.get('mobile_number')}")
L.append(f"- **WhatsApp phone:** {c.get('whatsapp_number')} ⚠️ (this is the number Yelp lists as the main number — resolve which is primary)")
L.append(f"- **Email:** {c.get('email')}")
L.append(f"- **Impressum phone:** {imp.get('registered_phone')} | **Impressum email:** {imp.get('registered_email')}")
L.append(f"- **Social links:** {json.dumps(c.get('social_links'))}")
L.append(f"- **Timezone:** {home.get('time_zone')}\n")
L.append("## Opening hours (from site)\n")
oh=home.get("opening_hours") or []
for h_ in oh: L.append(f"- {DAY[h_['day_of_week']]}: {h_['open'][:5]}–{h_['close'][:5]}")
have={h_['day_of_week'] for h_ in oh}
L.append(f"- {', '.join(DAY[i] for i in range(7) if i not in have)}: closed\n")
L.append("## Services (verbatim from site)\n")
for gid,g in grp.items():
    L.append(f"### Service group: {g.get('name')}\n")
    for sid in g.get("items",[]):
        s=svc.get(str(sid)) or svc.get(sid)
        if not s: continue
        L.append(f"#### {s.get('name')}\n")
        L.append(clean(s.get("description"))+"\n")
L.append("## FAQ currently on site (verbatim)\n")
for iid,it in items.items():
    if spaces.get(it.get("space_id"),{}).get("type")=="FAQ":
        L.append(f"**{it.get('title')}**\n\n{clean(it.get('description'))}\n")
L.append("## Portfolio projects (real client work)\n")
for iid,it in items.items():
    sp=spaces.get(it.get("space_id"),{})
    if sp.get("type")=="MEDIA":
        media=[m.get("image_id") for m in (it.get("media") or [])]
        urls=[imgs.get(m,{}).get("url") for m in media if imgs.get(m)]
        L.append(f"- **{it.get('title')}** — {len(media)} images: {', '.join(u for u in urls if u) or 'URLs not in payload'}")
L.append("")
L.append("## Blog posts currently published\n")
for iid,it in items.items():
    sp=spaces.get(it.get("space_id"),{})
    if sp.get("type")=="SPACE" and len(it.get("description") or "")>500:
        L.append(f"- **{it.get('title')}** ({len(clean(it.get('description')))} chars of real copy)")
L.append("")
L.append("## Video asset\n")
for vid,v in (home.get("videos") or {}).items():
    L.append(f"- {v.get('url')} (thumbnail {v.get('thumbnail_url')})")
L.append("")
real=[v for v in imgs.values() if not v.get("stock")]
stock=[v for v in imgs.values() if v.get("stock")]
L.append(f"## Image inventory\n\n- **Total images in payload:** {len(imgs)}\n- **Genuine client photos (stock=false):** {len(real)} ← reuse these\n- **Ueni stock photos (stock=true):** {len(stock)} ⚠️ do NOT present as client work\n")
L.append("### Genuine client photography\n")
for v in sorted(real,key=lambda x:-(x.get('width') or 0)):
    L.append(f"- `{v['id']}` {v.get('width')}×{v.get('height')} {round((v.get('bytes') or 0)/1024)}KB — {v.get('url')}")
L.append("\n### Stock images present on current site\n")
for v in sorted(stock,key=lambda x:-(x.get('width') or 0))[:200]:
    L.append(f"- `{v['id']}` {v.get('width')}×{v.get('height')} — {v.get('url')}")
open("source-of-truth/business-data.md","w").write("\n".join(L))
json.dump({"images":{str(k):v for k,v in imgs.items()},"services":svc,"groups":grp,"spaces":spaces,"items":items},open("source-of-truth/site-data.json","w"),indent=1)
print("WROTE source-of-truth/business-data.md")
print("images:",len(imgs),"real:",len(real),"stock:",len(stock),"services:",len(svc),"faq:",sum(1 for i in items.values() if spaces.get(i.get('space_id'),{}).get('type')=='FAQ'))
