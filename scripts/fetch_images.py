import json,os,urllib.request,hashlib
d=json.load(open("source-of-truth/site-data.json"))
imgs=d["images"]
os.makedirs("assets/images-original",exist_ok=True)
UA={"User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120 Safari/537.36"}
ok=0;fail=0
man={}
for iid,im in imgs.items():
    url=im.get("url")
    if not url: continue
    ext=os.path.splitext(url.split("?")[0])[1] or ".jpg"
    out=f"assets/images-original/{iid}{ext}"
    man[iid]={"url":url,"file":out,"w":im.get("width"),"h":im.get("height"),"bytes":im.get("bytes"),"stock":im.get("stock")}
    if os.path.exists(out) and os.path.getsize(out)>1000: ok+=1; continue
    try:
        req=urllib.request.Request(url,headers=UA)
        data=urllib.request.urlopen(req,timeout=45).read()
        open(out,"wb").write(data); ok+=1
    except Exception as e:
        fail+=1; print("FAIL",iid,url,e)
json.dump(man,open("assets/image-manifest.json","w"),indent=1)
print(f"downloaded_ok={ok} failed={fail} total={len(imgs)}")
