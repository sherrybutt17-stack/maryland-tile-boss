// The standards page: what separates ordinary tile work from work that lasts.
//
// PHOTOGRAPHY NOTE — read before editing.
// The "what goes wrong" side of this page is deliberately written, not photographed.
// We hold no photographs of failed tile work, and the three ways to fake it are all
// off the table: stock imagery would imply these were Mike's own tear-outs, competitor
// photographs are not ours to publish, and generated images would be fabricated evidence.
// Every image on this page is genuine work by this business.
//
// When Mike supplies tear-out photographs (see TODO_VERIFY in site.js), the honest
// upgrade is to add paired before/after imagery to the `annotated` section below.

export const standardsPage = {
  slug: 'standards',
  title: 'What Good Tile Work Looks Like | Maryland Tile Boss',
  description:
    'How to tell careful tile work from ordinary work — coverage, waterproofing, movement joints and layout, explained by a third-generation installer.',
  h1: 'The difference is in what you cannot see',
  heroA: 'waterproofBoard',
  heroB: 'waterproofBoard',
  lede:
    'Two tiled bathrooms can look identical on handover day and be nothing alike. One is still sound in twenty years. The other starts moving in eighteen months. Here is what actually separates them.',
  primaryCta: { label: 'Talk about your project', href: '/contact/' },
  secondaryCta: { label: 'See finished work', href: '/portfolio/' },
  sections: [
    {
      type: 'prose',
      heading: 'Why bad tile work passes inspection',
      body: [
        'Tile is the only finish in a house that hides its own workmanship. Once the grout is in, the coverage behind each tile, the waterproofing behind the wall, and the preparation under the floor are all sealed away where nobody can check them.',
        'That is why the cheapest quote is so often the most expensive one. Everything that gets skipped to reach that number is invisible on the day it is handed over, and every one of those shortcuts has a delay before it shows.',
        'None of what follows is secret knowledge. It is the ordinary standard of the trade. The only unusual thing is writing it down where a customer can read it.',
      ],
    },
    {
      type: 'comparison',
      heading: 'Six places the corners get cut',
      intro:
        'For each one: what an ordinary job does, what a careful job does, and how long before you find out which one you paid for.',
      columns: ['The detail', 'Ordinary', 'Done properly', 'When it shows'],
      rows: [
        [
          'Mortar coverage',
          'Five dabs of adhesive on the back of each tile. Fast, and it holds — at first.',
          'A notched bed combed in one direction and the tile bedded into it, so the back makes near-full contact.',
          'Hollow-sounding tile, then cracking at the corners where there was never anything underneath. One to five years.',
        ],
        [
          'Shower waterproofing',
          'Relying on the tile and grout, or a membrane taken only part way up the wall.',
          'A tested system taken to full height, with corners, changes of plane and pipe penetrations detailed to that manufacturer’s instructions.',
          'Staining at the base of the wall, loose tile at the kerb, a smell that never clears. Two to ten years.',
        ],
        [
          'Movement joints',
          'Grout taken hard into every internal corner and straight up to the wall.',
          'Flexible sealant at internal corners and changes of plane, and a joint at the perimeter so the floor can move.',
          'A crack running the length of a corner, usually after the first full heating season.',
        ],
        [
          'Substrate preparation',
          'Tiling over whatever is there, because it looks flat enough.',
          'Deflection and flatness measured, then levelled or reinforced before anything is set.',
          'Lippage you feel underfoot, cracked grout lines, and on a bad floor, cracked tile. One to three years.',
        ],
        [
          'Layout and cuts',
          'Starting at one wall and working across, so the last row is whatever is left.',
          'The room set out first so full tiles land in the eyeline and cuts fall in corners and under fittings.',
          'Immediately — and you will look at it every day for as long as you own the house.',
        ],
        [
          'Niches and benches',
          'A flat shelf, sealed on the top face only.',
          'Sloped to drain, and waterproofed on every face including the underside.',
          'Water sitting on the shelf, then staining and movement behind it. Two to eight years.',
        ],
      ],
    },
    {
      // Diagrams rather than photographs. A cross-section can show the thing that actually
      // differs — what sits behind the tile — which no photograph of a finished wall can.
      // It is also unmistakably a drawing, so nothing here can be read as false evidence.
      type: 'diagrams',
      heading: 'The two that cost the most, drawn',
      body: 'Cross-sections through a wall. Everything shown here is sealed out of sight the moment the tile goes on.',
      items: [
        {
          title: 'Mortar coverage',
          note:
            'Dabs are quicker and hold fine at first. The voids between them are where water collects, where the tile flexes, and where it eventually lets go. A combed bed supports the whole tile.',
          wrongLabel: 'Five dabs',
          rightLabel: 'Combed bed',
          svg: `<svg viewBox="0 0 340 150" role="img" aria-label="Cross-section comparison: five separate mortar dabs leaving voids behind the tile, versus a continuous combed mortar bed supporting the whole tile">
  <g class="dg">
    <rect x="8" y="18" width="12" height="110" class="dg-sub"/>
    <rect x="52" y="18" width="10" height="110" class="dg-tile"/>
    <g class="dg-bad">
      <rect x="20" y="24" width="32" height="12" rx="2"/>
      <rect x="20" y="48" width="32" height="12" rx="2"/>
      <rect x="20" y="68" width="32" height="12" rx="2"/>
      <rect x="20" y="90" width="32" height="12" rx="2"/>
      <rect x="20" y="110" width="32" height="12" rx="2"/>
    </g>
    <text x="26" y="45" class="dg-void">void</text>
    <text x="26" y="88" class="dg-void">void</text>
  </g>
  <g class="dg" transform="translate(180,0)">
    <rect x="8" y="18" width="12" height="110" class="dg-sub"/>
    <rect x="52" y="18" width="10" height="110" class="dg-tile"/>
    <path class="dg-good" d="M20 20 h32 v108 h-32 z"/>
    <g class="dg-comb">
      <path d="M20 26 h32 M20 38 h32 M20 50 h32 M20 62 h32 M20 74 h32 M20 86 h32 M20 98 h32 M20 110 h32 M20 122 h32"/>
    </g>
  </g>
</svg>`,
        },
        {
          title: 'Waterproofing height',
          note:
            'Water does not stop at the height someone decided to stop the membrane. Spray, steam and splash all travel higher, and anything that gets past the top edge is inside the wall with no way back out.',
          wrongLabel: 'Stopped short',
          rightLabel: 'Full height',
          svg: `<svg viewBox="0 0 340 150" role="img" aria-label="Cross-section comparison: waterproofing membrane stopped part way up the wall letting water in above it, versus membrane carried to full height and over the kerb">
  <g class="dg">
    <rect x="8" y="10" width="12" height="120" class="dg-sub"/>
    <rect x="44" y="10" width="9" height="120" class="dg-tile"/>
    <path class="dg-bad-line" d="M20 76 v54 h24"/>
    <g class="dg-water">
      <path d="M30 26 v20" marker-end="url(#dgArrow)"/>
      <path d="M30 52 h-8 v18" marker-end="url(#dgArrow)"/>
    </g>
    <text x="58" y="32" class="dg-void">gets in above</text>
    <rect x="20" y="122" width="24" height="8" class="dg-kerb"/>
  </g>
  <g class="dg" transform="translate(180,0)">
    <rect x="8" y="10" width="12" height="120" class="dg-sub"/>
    <rect x="44" y="10" width="9" height="120" class="dg-tile"/>
    <path class="dg-good-line" d="M20 14 v116 h24"/>
    <g class="dg-water">
      <path d="M30 26 v20" marker-end="url(#dgArrow)"/>
    </g>
    <text x="58" y="32" class="dg-ok">stays out</text>
    <rect x="20" y="122" width="24" height="8" class="dg-kerb"/>
  </g>
  <defs>
    <marker id="dgArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M0 0 L10 5 L0 10 z"/>
    </marker>
  </defs>
</svg>`,
        },
      ],
    },
    {
      type: 'annotated',
      heading: 'What careful work looks like up close',
      body:
        'These are all jobs handed over by this business. The captions point at the thing worth looking at rather than the room in general.',
      items: [
        {
          image: 'showerB',
          title: 'The niche is a detail, not an afterthought',
          note: 'Framed so the mosaic runs whole into the opening rather than dying into a cut edge, with the shelf sloped so water leaves it. Waterproofing wraps every face behind what you can see.',
        },
        {
          image: 'twoRiversB',
          title: 'The pattern survives the obstacles',
          note: 'Outlet positions were worked into the layout before setting, so the mosaic reads as one continuous run instead of breaking into slivers around the plates.',
        },
        {
          image: 'bowieC',
          title: 'The corner is mitred, not stopped short',
          note: 'Where the backsplash meets the upper cabinets and the window return, the geometry carries through the corner rather than being cut off and trimmed over.',
        },
        {
          image: 'showerC',
          title: 'The bench is built to shed water',
          note: 'Tiled to fall very slightly forward, with the large-format tile coursed to line through with the wall behind it.',
        },
        {
          image: 'settingTile',
          title: 'Full contact, not five dabs',
          note: 'Notched bed combed one way, tile bedded into it, levelling clips holding adjacent edges flush while it cures. This is the step that decides whether a tile sounds hollow in five years.',
        },
        {
          image: 'twoRiversE',
          title: 'Joints line through across sheets',
          note: 'Mosaic arrives on mesh sheets. Keeping the spacing identical across the seam between sheets is most of the skill — and it is the giveaway when it has not been done.',
        },
      ],
    },
    {
      type: 'checklist',
      heading: 'Six checks you can make yourself — on anyone’s work',
      items: [
        'Tap across the floor with a knuckle. A change to a hollow sound means the mortar never made proper contact there.',
        'Look down the wall from one end at eye level. Lippage and bowed lines show up in a raking view and vanish head-on.',
        'Check the internal corners. Grout in a corner will crack; flexible sealant is what belongs there.',
        'Look at where the cuts landed. Slivers along the most visible wall mean the room was never set out.',
        'In a shower, press the wall low down near the kerb. Any give or softness is a waterproofing question.',
        'Ask which waterproofing system was used and whether every component came from it. A specific answer is a good sign; a vague one is the answer.',
      ],
    },
    {
      type: 'prose',
      heading: 'What we would rather show you',
      body: [
        'The honest limit of this page is that we can show you work done properly, but not photographs of the failures described above — those belong to other people’s houses, and we will not illustrate them with stock imagery pretending to be our own tear-outs.',
        'What we can do is show you the real thing in person. Come to the showroom and ask to see how a shower assembly goes together. It is a more convincing five minutes than any photograph.',
      ],
    },
    { type: 'related', heading: 'Related' },
    { type: 'faq', heading: 'Questions about quality and cost' },
    { type: 'finalCta' },
  ],
  faq: [
    {
      q: 'Why is one tile quote so much cheaper than another?',
      a: 'Usually because the quotes are not for the same work. Preparation, waterproofing, setting materials and layout time are where the difference sits, and none of them are visible once the job is finished. Ask each quote to state what preparation and waterproofing is included, and the gap normally explains itself.',
    },
    {
      q: 'How can I tell if my existing tile was installed badly?',
      a: 'Tap across it for hollow spots, look along the wall at a raking angle for lippage, check whether internal corners are grouted or sealed, and look at where the cuts landed. Cracked grout following a straight line usually means a missing movement joint rather than bad grout.',
    },
    {
      q: 'Does hollow-sounding tile always need replacing?',
      a: 'Not always. A small hollow area away from traffic may last for years. Hollow tile underfoot in a busy area, or at a shower kerb, is a different matter — that is where it starts to break free.',
    },
    {
      q: 'Is cracked grout a grout problem?',
      a: 'Usually not. Grout cracking in a straight line, especially in a corner or at a wall, is normally telling you the assembly is moving and there was no joint to absorb it. Re-grouting it puts the same rigid material back into a joint that needs to flex.',
    },
    {
      q: 'Can you fix someone else’s tile work?',
      a: 'Sometimes, and sometimes the honest answer is that a repair will not hold. It depends what failed and how far it goes. We will tell you which one you have rather than sell you a repair that buys a year.',
    },
  ],
};
