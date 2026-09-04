import sharp from 'sharp';
import fs from 'fs';
const files = fs.readdirSync('assets/images-original').filter(f=>/\.(jpg|jpeg|png)$/i.test(f)).sort();
const COLS=8, CELL=200, PER=48;
for (let s=0; s*PER<files.length; s++){
  const batch=files.slice(s*PER,(s+1)*PER);
  const rows=Math.ceil(batch.length/COLS);
  const comps=[];
  for (let i=0;i<batch.length;i++){
    const buf=await sharp(`assets/images-original/${batch[i]}`).resize(CELL,CELL,{fit:'cover'}).flatten({background:'#fff'}).toBuffer();
    const label=await sharp({create:{width:CELL,height:26,channels:3,background:'#111'}})
      .composite([{input:Buffer.from(`<svg width="${CELL}" height="26"><text x="6" y="18" font-family="monospace" font-size="15" fill="#fff">${batch[i].replace(/\.(jpg|jpeg|png)$/i,'')}</text></svg>`),top:0,left:0}])
      .png().toBuffer();
    comps.push({input:buf,left:(i%COLS)*CELL,top:Math.floor(i/COLS)*(CELL+26)});
    comps.push({input:label,left:(i%COLS)*CELL,top:Math.floor(i/COLS)*(CELL+26)+CELL-26});
  }
  await sharp({create:{width:COLS*CELL,height:rows*(CELL+26),channels:3,background:'#222'}})
    .composite(comps).jpeg({quality:80}).toFile(`research/contact-sheet-${s+1}.jpg`);
  console.log('wrote sheet',s+1,'with',batch.length);
}
