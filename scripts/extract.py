import re,json,os,glob

def preload(path):
    h=open(path,encoding="utf-8",errors="ignore").read()
    k="window.__PRELOAD_DATA__ = "
    if k not in h: return None
    i=h.index(k)+len(k); depth=0
    for j in range(i,len(h)):
        if h[j]=='{':depth+=1
        elif h[j]=='}':
            depth-=1
            if depth==0: return json.loads(h[i:j+1])
    return None

d=preload("research/raw/home.html")
print("TOP KEYS:", sorted(d.keys()))

import textwrap
def clean(s):
    if not isinstance(s,str): return s
    s=re.sub(r'<[^>]+>',' ',s)
    s=s.replace('&nbsp;',' ').replace('&amp;','&').replace('&#39;',"'").replace('&quot;','"').replace('&rsquo;','’')
    return re.sub(r'\s+',' ',s).strip()

def show(label,val,limit=1200):
    print(f"\n########## {label}")
    if isinstance(val,str): print(clean(val)[:limit])
    else: print(json.dumps(val,indent=1)[:limit])

show("NAME/SUBTITLE/TITLE",{k:d.get(k) for k in ["name","subtitle","title","page_title","slug","description"]},2500)
show("CONTACT",d.get("contact"),1500)
show("OPENING HOURS",d.get("opening_hours"),1800)
show("AREAS COVERED",d.get("areas_covered"),1500)
show("RATING",d.get("rating"),500)
show("SEO",d.get("seo"),1500)
show("BRANDING",d.get("branding"),800)
show("COLOR PALETTE",d.get("color_palette"),800)
show("MENU ITEMS",[{k:m.get(k) for k in ("title","url","type","slug")} for m in (d.get("menu_items") or [])],1500)
show("LOGO",d.get("logo_image"),600)
show("HERO IMAGE",d.get("hero_image"),600)
show("EMPLOYEES",d.get("employees_count"),200)
show("LAST UPDATE",d.get("last_update"),200)
