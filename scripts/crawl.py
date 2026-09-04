import re, json, os, urllib.request, urllib.error, time
from html.parser import HTMLParser

URLS = """https://marylandtileboss.com/
https://marylandtileboss.com/about-us
https://marylandtileboss.com/products
https://marylandtileboss.com/contact-us
https://marylandtileboss.com/portfolio
https://marylandtileboss.com/services
https://marylandtileboss.com/faq
https://marylandtileboss.com/blog
https://marylandtileboss.com/360-showroom-tour
https://marylandtileboss.com/booking
https://marylandtileboss.com/services/tiling-installation/porcelain-tiling-installation-150356524
https://marylandtileboss.com/services/tiling-installation/ceramic-tiling-installation-150356525
https://marylandtileboss.com/services/tiling-installation/glass-tiling-installation-150356526
https://marylandtileboss.com/services/interior-design-consultation/design-consultation-150357015
https://marylandtileboss.com/services/interior-design-consultation/tile-selection-150357016
https://marylandtileboss.com/portfolio/backsplash-in-bowie
https://marylandtileboss.com/portfolio/stone-tiling
https://marylandtileboss.com/portfolio/two-rivers-backsplash
https://marylandtileboss.com/portfolio/bathroom-tiling
https://marylandtileboss.com/portfolio/dunkirt-bath-tiling
https://marylandtileboss.com/about-us/meet-the-boss-6543130
https://marylandtileboss.com/about-us/we-are-here-for-you-6543132
https://marylandtileboss.com/about-us/exclusive-showroom-6567617
https://marylandtileboss.com/about-us/unsurpassed-product-knowledge-6543131
https://marylandtileboss.com/blog/how-to-choose-the-perfect-glass-tiles-for-your-shower-enclosure
https://marylandtileboss.com/blog/why-choose-glass-tile-backsplashes-pros-and-cons-for-your-kitchen-design""".split()

UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36"
os.makedirs("research/raw", exist_ok=True)

class Text(HTMLParser):
    def __init__(self):
        super().__init__(); self.out=[]; self.skip=0
    def handle_starttag(self,t,a):
        if t in ("script","style","noscript"): self.skip+=1
    def handle_endtag(self,t):
        if t in ("script","style","noscript") and self.skip: self.skip-=1
    def handle_data(self,d):
        if not self.skip:
            d=d.strip()
            if d: self.out.append(d)

results={}
all_images={}
for u in URLS:
    slug = (u.replace("https://marylandtileboss.com","").strip("/") or "home").replace("/","__")
    try:
        req=urllib.request.Request(u, headers={"User-Agent":UA})
        html=urllib.request.urlopen(req, timeout=30).read().decode("utf-8","ignore")
    except Exception as e:
        results[u]={"error":str(e)}; print("ERR",u,e); continue
    open(f"research/raw/{slug}.html","w",encoding="utf-8").write(html)
    title=re.search(r'<title[^>]*>(.*?)</title>',html,re.S)
    desc=re.search(r'<meta[^>]+name="description"[^>]+content="([^"]*)"',html)
    h1=re.findall(r'<h1[^>]*>(.*?)</h1>',html,re.S)
    hs=re.findall(r'<h([1-4])[^>]*>(.*?)</h\1>',html,re.S)
    imgs=set(re.findall(r'https://img\d*\.uenicdn\.com/image/upload/[^"\'\\\s)]+',html))
    for i in imgs: all_images.setdefault(i,[]).append(u)
    p=Text(); p.feed(html)
    txt=[t for t in p.out if len(t)>1]
    # drop obvious boilerplate repeats later; keep raw
    results[u]={
        "title": re.sub(r'\s+',' ',title.group(1)).strip() if title else None,
        "meta_description": desc.group(1) if desc else None,
        "h1":[re.sub(r'<[^>]+>','',x).strip() for x in h1],
        "headings":[(l,re.sub(r'<[^>]+>','',t).strip()) for l,t in hs][:40],
        "image_count":len(imgs),
        "text": txt,
    }
    print("OK",u,"| title:",results[u]["title"],"| imgs:",len(imgs),"| textchunks:",len(txt))
    time.sleep(0.4)

json.dump(results,open("research/crawl.json","w"),indent=1)
json.dump({k:sorted(set(v)) for k,v in all_images.items()},open("research/images.json","w"),indent=1)
print("\nTOTAL pages:",len(results),"unique images:",len(all_images))
