import { chromium } from 'playwright';
const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: 1280, height: 900 } });
const p = await ctx.newPage();
await p.goto('https://sherrybutt17-stack.github.io/maryland-tile-boss/', { waitUntil: 'networkidle' });
await p.screenshot({ path: 'research/shots/live-landing.png', fullPage: true });
await b.close();
console.log('shot saved');
