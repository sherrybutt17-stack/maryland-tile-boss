import re,json,glob,os

def clean(s):
    if not isinstance(s,str): return ""
    s=re.sub(r'<br\s*/?>','\n',s); s=re.sub(r'</p>','\n',s); s=re.sub(r'<[^>]+>',' ',s)
    for a,b in [('&nbsp;',' '),('&amp;','&'),('&#39;',"'"),('&quot;','"'),('&rsquo;','’'),('&ldquo;','“'),('&rdquo;','”'),('&ndash;','–'),('&mdash;','—'),('&uuml;','ü'),('&eacute;','é')]:
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
                except Exception as e: print("parse fail",path,e); return None
    return None

pages={}
for f in sorted(glob.glob("research/raw/*.html")):
    slug=os.path.basename(f)[:-5]
    p=preload(f)
    if p: pages[slug]=p

print("pages parsed:",len(pages))
home=pages["home"]

# ---------- image id -> url map (union across pages)
img_map={}
for slug,p in pages.items():
    for im in (p.get("images") or []):
        if isinstance(im,dict) and im.get("id"):
            img_map[im["id"]]=im
print("images indexed:",len(img_map))
if img_map:
    sample=list(img_map.values())[0]
    print("image record keys:",sorted(sample.keys()))
    print(json.dumps(sample,indent=1)[:700])

json.dump({"img_map":{str(k):v for k,v in img_map.items()}},open("research/image_index.json","w"),indent=1)

# ---------- what maps hold content
for key in ["service_groups_map","service_items_map","space_items_map","space_page_items_map","content_blocks_map","slideshows_map","widgets"]:
    v=home.get(key)
    n=len(v) if isinstance(v,(dict,list)) else v
    print(f"{key}: {type(v).__name__} n={n}")
    if isinstance(v,dict) and v:
        k0=list(v.keys())[0]
        print("  sample key:",k0,"->",json.dumps(v[k0],indent=1)[:600])
