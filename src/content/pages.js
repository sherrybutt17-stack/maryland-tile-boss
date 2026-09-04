// Page content. Design-agnostic: both themes render these same blocks with different markup.
// Every factual claim traces to source-of-truth/business-data.md. No invented pricing,
// no invented reviews, no invented credentials.

export const pages = [
  // ─────────────────────────────────────────────────────────────── HOME
  {
    slug: '',
    file: 'index.html',
    title: 'Tile Store & Installation, Edgewater MD | Tile Boss',
    description:
      'Tile showroom and installation in Edgewater, MD. Hold full-size samples before you buy, then have them set by a third-generation tile setter.',
    h1: 'Pick the right tile. Have it set right.',
    heroA: 'showroomRacks',
    heroB: 'showerA',
    lede:
      'A working tile showroom on Mayo Road in Edgewater, where you can hold a full-size sample up to your own light before you commit — and installation by a third-generation tile setter with 45 years on the job.',
    primaryCta: { label: 'Visit the showroom', href: '/showroom/' },
    secondaryCta: { label: 'Get an installation quote', href: '/contact/' },
    facts: [
      { value: '45 years', label: 'Hands-on in the trade' },
      { value: 'Third generation', label: 'Tile runs in the family' },
      { value: 'Mon–Sat', label: '10am to 4pm, Edgewater' },
      { value: 'Free', label: 'Design consultation' },
    ],
    sections: [
      {
        type: 'prose',
        heading: 'Two ways people use this place',
        body: [
          'Some people come in to buy tile and take it to their own installer. Some hand the whole job over — selection, materials and setting. Both are fine. What does not work is picking tile from a phone screen and hoping it looks like that on your wall.',
          'The showroom exists so you can rule things out fast. Bring a cabinet door, a counter chip, a paint card. Hold the real tile against it under real light. Most people arrive with a shortlist of eight and leave having chosen one.',
        ],
      },
      {
        type: 'cards',
        heading: 'What we install',
        items: [
          { title: 'Bathroom tile', href: '/tile-installation/bathroom/', body: 'Floors, walls, tub surrounds and vanity areas, set over substrates that suit a wet room.', image: 'bathA' },
          { title: 'Showers and waterproofing', href: '/tile-installation/shower/', body: 'The part nobody sees and everybody pays for when it is done badly. Membranes, pans, niches and benches.', image: 'showerB' },
          { title: 'Kitchen backsplashes', href: '/tile-installation/backsplash/', body: 'Glass, stone and mosaic, cut around outlets and returns so the pattern reads unbroken.', image: 'twoRiversA' },
          { title: 'Tile floors', href: '/tile-installation/floors/', body: 'Large-format porcelain, stone and plank, laid flat over a properly prepared floor.', image: 'settingFloor' },
        ],
      },
      {
        type: 'materials',
        heading: 'Tile we carry',
        body: 'Porcelain, ceramic, natural stone, glass and mosaic — from many manufacturers, on full-size display boards rather than two-inch chips.',
        items: [
          { title: 'Porcelain', href: '/tile/porcelain/', image: 'largeFormat' },
          { title: 'Ceramic', href: '/tile/ceramic/', image: 'tileStack' },
          { title: 'Natural stone', href: '/tile/natural-stone/', image: 'stoneSamples' },
          { title: 'Glass & mosaic', href: '/tile/glass-and-mosaic/', image: 'glassMosaic' },
        ],
      },
      {
        type: 'feature',
        heading: 'A showroom built around how the trade actually works',
        image: 'sharedShowroom',
        body: [
          'Designers, builders and contractors get lock-box access to the showroom so they can bring clients in and pull samples on their own schedule, rather than on ours.',
          'If you specify tile for a living, that is the difference between winning a selection meeting and rescheduling it.',
        ],
        cta: { label: 'How trade access works', href: '/trade/' },
      },
      {
        type: 'process',
        heading: 'How a job runs',
        steps: [
          { title: 'Come in and narrow it down', body: 'Bring your finishes. We pull full-size boards and rule out the wrong ones quickly. The consultation is free.' },
          { title: 'Measure and quantify', body: 'Square footage, waste allowance, trim, setting materials and waterproofing get worked out together, not guessed at.' },
          { title: 'Prep decides everything', body: 'Substrate, flatness, movement joints and waterproofing get sorted before a single tile is set.' },
          { title: 'Set, grout and finish', body: 'Layout is planned so cuts land where they belong, not in the middle of the wall you look at every morning.' },
        ],
      },
      {
        type: 'projects',
        heading: 'Recent work',
        body: 'Real jobs in Anne Arundel County and nearby, photographed as they were handed over.',
      },
      {
        type: 'local',
        heading: 'Where we work',
        body: 'The showroom is on Mayo Road in Edgewater, a few minutes over the South River bridge from Annapolis. Installation covers Edgewater, Annapolis and the surrounding Anne Arundel County area, with recent jobs in Bowie, Dunkirk and Odenton.',
      },
      { type: 'faq', heading: 'Questions people ask before coming in' },
      { type: 'finalCta' },
    ],
    faq: [
      {
        q: 'Where is the showroom?',
        a: '14 Mayo Rd, Edgewater, MD 21037. Look for the Digitile International Design Center sign above the door — that is the same business. Open Monday to Saturday, 10am to 4pm.',
      },
      {
        q: 'Do I need an appointment?',
        a: 'No. You can walk in during opening hours. If you want a full design consultation with someone free to sit with you for an hour, call ahead on (443) 871-3876 and we will set a time.',
      },
      {
        q: 'Do you install, or only sell tile?',
        a: 'Both. You can buy tile and use your own installer, or have us handle selection and installation together. Plenty of people do the first and come back for the second.',
      },
      {
        q: 'Do you work with designers, builders and contractors?',
        a: 'Yes. There is lock-box access to the showroom for design and building trades so you can bring clients in and pull samples without waiting on us. Call Mike on (443) 871-3876 for the details.',
      },
      {
        q: 'How much does tile installation cost?',
        a: 'It depends on the tile, the size of the area, the condition of what is underneath, and how much waterproofing the job needs — a small mosaic backsplash and a large-format shower are very different pieces of work. We quote per job after measuring rather than publishing a square-foot rate that would be wrong for most people.',
      },
      {
        q: 'What is the difference between porcelain and ceramic?',
        a: 'Porcelain is pressed and fired denser, absorbs less water, and holds up better underfoot and in wet areas. Ceramic is easier to cut, often cheaper, and perfectly good on walls. For a shower floor or a busy hallway, porcelain is usually the right call.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────── SHOWROOM
  {
    slug: 'showroom',
    title: 'Tile Showroom in Edgewater, MD | Maryland Tile Boss',
    description:
      'Visit the tile showroom at 14 Mayo Rd, Edgewater MD. Full-size porcelain, ceramic, stone and glass displays. Open Monday to Saturday, 10am–4pm.',
    h1: 'The showroom on Mayo Road',
    heroA: 'showroomWide',
    heroB: 'showroomRacks',
    lede:
      'Full-size tile on boards you can pull out, carry to the window, and hold against your own cabinet door. Ten minutes here saves a week of second-guessing.',
    primaryCta: { label: 'Get directions', href: '#visit' },
    secondaryCta: { label: 'Call before you come', href: 'tel:+14438713876' },
    sections: [
      {
        type: 'prose',
        heading: 'Why a physical showroom still matters',
        body: [
          'Tile photographs badly. Glaze reflects differently under a showroom light than it does under your north-facing bathroom window, and a mosaic that looks calm on a screen can read busy across a whole wall.',
          'Everything here is displayed at a size that tells you the truth. Large-format porcelain stands full height. Mosaics are on sheets, not chips. Stone is shown with its variation visible, because that variation is the point and it is also the thing people are most surprised by after delivery.',
        ],
      },
      {
        type: 'gallery',
        heading: 'Inside the showroom',
        images: ['showroomRacks', 'showroomWall', 'showroomBoards', 'showroomMurals', 'showroomTrim', 'showroomAisle'],
      },
      {
        type: 'checklist',
        heading: 'Bring these and you will get much further',
        items: [
          'A cabinet door or a drawer front, if the kitchen or vanity is already chosen',
          'A chip or photo of the countertop',
          'Your paint colours',
          'Rough dimensions of the room, even approximate ones',
          'Photos of the space as it stands, including the light at the time of day you use it most',
        ],
      },
      {
        type: 'prose',
        heading: 'The consultation is free, and it is a real one',
        body: [
          'You will not be handed a catalogue and left alone. The consultation covers what the tile has to survive — a shower floor, a mudroom, a south-facing sunroom — before it covers what it looks like, because the wrong material in the wrong room fails no matter how good the selection looked.',
          'You are dealing with the person who sets the tile, not a salesperson passing you along. That means the advice you get on Tuesday is the same advice that has to hold up on site.',
        ],
      },
      { type: 'visit', heading: 'Visiting', anchor: 'visit' },
      { type: 'faq', heading: 'Before you visit' },
      { type: 'finalCta' },
    ],
    faq: [
      { q: 'What are the showroom hours?', a: 'Monday to Saturday, 10am to 4pm. Closed Sunday.' },
      { q: 'Is there parking?', a: 'Yes, there is parking directly in front of the storefront on Mayo Road.' },
      { q: 'Can I take samples home?', a: 'Yes — seeing a sample in your own light is exactly the point. Ask when you are in and we will sort out what you can take.' },
      { q: 'How far is it from Annapolis?', a: 'A few minutes south of Annapolis over the South River bridge, on Mayo Road in Edgewater.' },
      { q: 'What if I already have an installer?', a: 'That is completely fine. Plenty of people buy tile here and have their own contractor set it. We will still help you choose the right material for the job and work out quantities.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────── INSTALLATION HUB
  {
    slug: 'tile-installation',
    title: 'Tile Installation, Annapolis MD | Maryland Tile Boss',
    description:
      'Tile installation across Annapolis and Anne Arundel County by a third-generation tile setter. Bathrooms, showers, backsplashes and floors.',
    h1: 'Tile installation in Annapolis and Anne Arundel County',
    heroA: 'settingTile',
    heroB: 'settingFloor',
    lede:
      'Most tile failures are not tile failures. They are preparation failures that took eighteen months to show up. This is the part of the job worth paying attention to.',
    primaryCta: { label: 'Get an installation quote', href: '/contact/' },
    secondaryCta: { label: 'See recent work', href: '/portfolio/' },
    sections: [
      {
        type: 'prose',
        heading: 'What actually goes wrong',
        body: [
          'Cracked grout lines along a wall usually mean there was no movement joint where the floor meets it. Loose tile underfoot usually means the mortar never made full contact — a tile stuck at the corners will sound hollow and eventually let go. A shower that smells and stains at the base is almost always a waterproofing detail that was skipped behind the tile.',
          'None of these are visible on handover day. All of them are decided before the first tile goes on the wall, which is why the preparation conversation is the one worth having.',
        ],
      },
      {
        type: 'cards',
        heading: 'Where we work',
        items: [
          { title: 'Bathroom tile installation', href: '/tile-installation/bathroom/', body: 'Floors, walls and tub surrounds built for a room that gets wet every day.', image: 'bathB' },
          { title: 'Shower tile and waterproofing', href: '/tile-installation/shower/', body: 'Pans, membranes, niches and benches — the assembly behind the tile, done properly.', image: 'showerA' },
          { title: 'Kitchen backsplash installation', href: '/tile-installation/backsplash/', body: 'Glass, stone and mosaic cut cleanly around outlets, windows and returns.', image: 'bowieA' },
          { title: 'Tile floor installation', href: '/tile-installation/floors/', body: 'Large-format porcelain, stone and plank over a floor that has been made flat first.', image: 'greyPlank' },
        ],
      },
      {
        type: 'process',
        heading: 'How the work runs',
        steps: [
          { title: 'Look at what is there', body: 'Substrate, flatness, moisture, movement and how the room is used. This determines the method, not preference.' },
          { title: 'Choose materials that suit it', body: 'Setting material, waterproofing, trim and grout are selected for the assembly — a wet wall and a hallway floor need different answers.' },
          { title: 'Plan the layout', body: 'Where the full tiles land and where the cuts fall gets decided deliberately, so cuts end up in corners rather than in eyelines.' },
          { title: 'Set it and finish it', body: 'Full mortar coverage, joints where they belong, grout and sealant chosen for the joint width and the exposure.' },
        ],
      },
      {
        type: 'prose',
        heading: 'Working with the man who does the work',
        body: [
          'This is a small operation. That is the trade-off: you will not get a call centre or a project coordinator, and you may wait a little for a slot. What you get instead is that the person who advised you on the material is the person responsible for how it goes in.',
          'If you already have a contractor you trust, we will happily sell you the tile and help you get the quantities and trim right. Buying tile here does not commit you to installation.',
        ],
      },
      {
        type: 'feature',
        heading: 'How to tell careful work from ordinary work',
        image: 'settingTile',
        body: [
          'Tile hides its own workmanship. Once the grout is in, the coverage behind each tile and the waterproofing behind the wall are sealed away where nobody can check them — which is why the cheapest quote is so often the most expensive one.',
          'We wrote down the six places corners normally get cut, what a careful job does instead, and how long it takes before you find out which one you paid for.',
        ],
        cta: { label: 'What good tile work looks like', href: '/standards/' },
      },
      { type: 'projects', heading: 'Recent installations' },
      { type: 'faq', heading: 'Installation questions' },
      { type: 'finalCta' },
    ],
    faq: [
      { q: 'What areas do you cover?', a: 'Edgewater, Annapolis and the surrounding Anne Arundel County area. Recent projects include Bowie, Dunkirk and Odenton.' },
      { q: 'How long does a bathroom take?', a: 'It depends on the size, the tile and how much preparation the room needs. A straightforward backsplash is a short job; a full shower with a waterproofed pan and large-format tile is a multi-day one. You will get a realistic timeframe with your quote rather than an optimistic one.' },
      { q: 'Do I have to buy the tile from you?', a: 'No. It is usually simpler if you do, because quantities, trim and setting materials get worked out together. But we will install tile you have already bought.' },
      { q: 'Can you tell me a price per square foot?', a: 'Not honestly, no. The same square footage can double in price depending on tile size, cuts, substrate condition and waterproofing. We measure and quote the actual job.' },
      { q: 'Do you do repairs and small jobs?', a: 'Ask. Small jobs get fitted around larger ones, so it depends on what is booked, but it is worth a call.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────── BATHROOM
  {
    slug: 'tile-installation/bathroom',
    title: 'Bathroom Tile Installation, Annapolis MD | Tile Boss',
    description:
      'Bathroom tile installation in Annapolis and Anne Arundel County. Floors, walls and tub surrounds set over properly prepared, waterproofed substrates.',
    h1: 'Bathroom tile installation',
    heroA: 'bathA',
    heroB: 'showerD',
    lede:
      'A bathroom is the hardest room in the house to tile well, because it is the only one that gets soaked, scrubbed and heated every single day.',
    primaryCta: { label: 'Get a quote for your bathroom', href: '/contact/' },
    secondaryCta: { label: 'Choose bathroom tile', href: '/showroom/' },
    parent: { label: 'Tile installation', href: '/tile-installation/' },
    sections: [
      {
        type: 'prose',
        heading: 'Getting the material right for the room',
        body: [
          'Bathroom floors want a tile with enough slip resistance to be safe wet, and low enough water absorption that it does not stain from the inside. Porcelain handles both. Polished stone looks superb and is genuinely slippery underfoot when wet, which is a fair trade only if you know you are making it.',
          'Walls are more forgiving — ceramic is perfectly at home on a bathroom wall, and it cuts more easily around awkward returns. The tighter question is usually tile size against room size: a very large tile in a small bathroom means more cuts at the perimeter, not fewer.',
        ],
      },
      {
        type: 'checklist',
        heading: 'What we sort out before tiling starts',
        items: [
          'Whether the subfloor deflects enough to crack a rigid tile installation',
          'Flatness, because large-format tile magnifies every dip in the floor',
          'Waterproofing at the tub, shower and any wall that gets direct spray',
          'Where movement joints have to fall, including at the perimeter',
          'How the floor tile meets the door threshold and the adjoining room',
        ],
      },
      { type: 'gallery', heading: 'Bathroom work', images: ['bathA', 'bathB', 'showerA', 'showerE'] },
      {
        type: 'prose',
        heading: 'Grout is a finish, not a seal',
        body: [
          'Grout fills the joint between tiles and it always lets water through. That is not a defect — it is why the waterproofing behind it exists. Sealing grout slows staining and makes cleaning easier, but a sealed grout joint is not a waterproof one.',
          'For bathrooms we will talk through joint width, grout type and where a flexible sealant belongs instead of grout — internal corners and changes of plane, mainly, because those are the places that move.',
        ],
      },
      { type: 'related', heading: 'Related' },
      { type: 'faq', heading: 'Bathroom tile questions' },
      { type: 'finalCta' },
    ],
    faq: [
      { q: 'Is porcelain better than ceramic for a bathroom?', a: 'For the floor and anywhere that gets direct water, yes — porcelain absorbs less water and wears harder. On walls away from spray, ceramic is perfectly suitable and often easier to work with.' },
      { q: 'Can you tile over the existing bathroom floor?', a: 'Sometimes, but it depends entirely on what is under there and how solid it is. Tiling over a floor that flexes or is already failing just buries the problem. We will tell you which one you have.' },
      { q: 'What size tile suits a small bathroom?', a: 'There is no single answer, but the useful test is how the tile lands against the room dimensions. A large tile can make a small room feel calmer if the cuts fall sensibly, and worse if they do not. We lay it out before committing.' },
      { q: 'How do I stop mould in the grout?', a: 'Ventilation does more than any product. Beyond that: the right grout for the joint, sealant rather than grout at internal corners, and waterproofing behind the tile so the wall is not staying damp between showers.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────── SHOWER
  {
    slug: 'tile-installation/shower',
    title: 'Shower Tile & Waterproofing, Annapolis MD | Tile Boss',
    description:
      'Shower tile installation and waterproofing in Annapolis, MD. Sheet and liquid membranes, preformed systems, sloped pans, niches and benches.',
    h1: 'Shower tile and waterproofing',
    heroA: 'waterproofBoard',
    heroB: 'showerB',
    lede:
      'Tile and grout are not a waterproofing system. The thing that keeps water out of your wall is behind the tile, and you only find out whether it was done properly years later.',
    primaryCta: { label: 'Talk about your shower', href: '/contact/' },
    secondaryCta: { label: 'See a finished shower', href: '/portfolio/dunkirk-bathroom/' },
    parent: { label: 'Tile installation', href: '/tile-installation/' },
    sections: [
      {
        type: 'prose',
        heading: 'What a shower assembly actually is',
        body: [
          'A tiled shower is a stack of layers, and the tile is only the last one. Underneath sits the waterproofing, the substrate it is bonded to, the slope that moves water to the drain, and the drain assembly itself. Get the order or the details wrong and the tile can look immaculate while the wall behind it stays wet.',
          'Water that gets past a failed detail does not evaporate. It sits in the substrate and the framing, and the first sign is usually staining at the base of the wall, loose tile at the kerb, or a smell that does not clear.',
        ],
      },
      {
        type: 'comparison',
        heading: 'Three ways to waterproof a shower',
        intro: 'All three work when installed to the manufacturer’s instructions. The differences matter more for the detailing than the headline.',
        columns: ['System', 'How it works', 'Worth knowing'],
        rows: [
          ['Sheet membrane', 'A waterproof sheet bonded over the substrate, with seams and corners bonded to a set pattern.', 'Consistent thickness, because the sheet is manufactured. Seams, corners and pipe penetrations are where the skill sits.'],
          ['Liquid-applied membrane', 'A liquid coating rolled or troweled on in coats to a required thickness, usually with reinforcing fabric at corners.', 'Conforms easily to awkward shapes. Coverage rate and coat thickness must be respected — thin spots are invisible once tiled.'],
          ['Preformed / foam system', 'Manufactured boards, sloped trays and matched sealing components that assemble as a designed system.', 'Fast and dimensionally accurate. Works properly when the components stay within one manufacturer’s system.'],
        ],
      },
      {
        type: 'checklist',
        heading: 'The details that decide whether a shower lasts',
        items: [
          'Slope to the drain formed correctly, so water leaves rather than sits',
          'Corners, changes of plane and pipe penetrations sealed to the system instructions',
          'The waterproofing carried high enough up the wall for the way the shower is actually used',
          'Niches sloped and sealed — a flat niche shelf holds water against the wall',
          'Benches waterproofed on every face, not just the top',
          'Movement accommodated at the perimeter and at internal corners',
        ],
      },
      { type: 'gallery', heading: 'Finished showers', images: ['showerA', 'showerB', 'showerC', 'showerD', 'showerE'] },
      {
        type: 'prose',
        heading: 'Mixing systems is where trouble starts',
        body: [
          'Waterproofing components are tested as systems. A sheet membrane from one manufacturer, a corner patch from another and a sealant chosen on price is no longer a tested assembly, and no warranty covers it.',
          'On our own work we stay inside one manufacturer’s system for the waterproofing and follow their instructions for the details. If you are hiring someone else, that is a fair question to ask them: which system, and are all the components from it?',
        ],
      },
      { type: 'related', heading: 'Related' },
      { type: 'faq', heading: 'Shower waterproofing questions' },
      { type: 'finalCta' },
    ],
    faq: [
      { q: 'Why is shower waterproofing so important?', a: 'Because tile and grout are not waterproof. Grout joints let water through by design. A properly installed waterproofing system behind the tile is what protects the substrate and the framing from that water.' },
      { q: 'What is the difference between waterproofing systems?', a: 'The main types are sheet membranes, liquid-applied membranes and preformed systems. Each has its own installation requirements and detailing. All of them work when installed to the manufacturer’s instructions for that specific system.' },
      { q: 'Can you waterproof over existing tile?', a: 'Waterproofing belongs behind the tile, so no — not in any way that solves the problem. If an existing shower is leaking, the assembly has to come out to fix it properly.' },
      { q: 'Do I need a sloped pan if I have a shower tray?', a: 'A manufactured tray already provides the slope. A tiled shower floor needs slope formed to the drain as part of the assembly, and the waterproofing has to tie into the drain correctly.' },
      { q: 'How long should a tiled shower last?', a: 'A properly built shower should last for decades. Showers that fail early almost always fail at a detail — a corner, a niche, a penetration or a bench — rather than across the middle of a wall.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────── BACKSPLASH
  {
    slug: 'tile-installation/backsplash',
    title: 'Backsplash Installation, Annapolis MD | Tile Boss',
    description:
      'Kitchen backsplash installation in Annapolis, MD. Glass, stone and mosaic tile cut cleanly around outlets, windows and cabinet returns.',
    h1: 'Kitchen backsplash installation',
    heroA: 'twoRiversA',
    heroB: 'bowieA',
    lede:
      'The smallest tiling job in the house and the one people look at most. It is also the one where sloppy cuts are impossible to hide, because everything happens at eye level.',
    primaryCta: { label: 'Get a backsplash quote', href: '/contact/' },
    secondaryCta: { label: 'Choose backsplash tile', href: '/tile/glass-and-mosaic/' },
    parent: { label: 'Tile installation', href: '/tile-installation/' },
    sections: [
      {
        type: 'prose',
        heading: 'Why backsplashes go wrong',
        body: [
          'A backsplash is mostly edges. It meets the counter, the cabinets, a window return, a range hood and a row of outlets, and each of those is a chance for the pattern to break or a cut to show. Mosaic sheets make it harder, not easier: the sheet has to be cut so the joint spacing carries through, otherwise you get a visible seam where two sheets meet.',
          'Outlets are the usual giveaway. Cut generously and the plate does not cover the gap; cut without planning and a mosaic strip ends up as a sliver. Outlet positions get worked into the layout at the start.',
        ],
      },
      { type: 'gallery', heading: 'Backsplashes we have set', images: ['twoRiversA', 'twoRiversB', 'bowieA', 'bowieB', 'twoRiversD', 'bowieC'] },
      {
        type: 'checklist',
        heading: 'Decisions worth making before we start',
        items: [
          'Where the tile stops behind the range and beside the window',
          'Whether it runs to the underside of the cabinets or full height to the ceiling on the open wall',
          'How the edge is finished — a metal profile, a bullnose, or the tile’s own finished edge',
          'Grout colour, which changes a mosaic more than people expect',
          'Whether the counter is level enough to start straight off it, or whether the first course needs setting to a line',
        ],
      },
      {
        type: 'prose',
        heading: 'Glass, stone and porcelain behave differently',
        body: [
          'Glass mosaic is unforgiving: it is translucent, so the adhesive behind it shows through, and it needs a white setting material and full coverage to look right. Natural stone mosaic drinks in grout pigment unless it is sealed first, which is why a dark grout on an unsealed marble mosaic can end up permanently shadowed.',
          'Porcelain and ceramic are the most forgiving and, in a kitchen that gets used hard, the easiest to keep clean. None of this makes one right and the others wrong — it just changes what has to happen during installation.',
        ],
      },
      { type: 'related', heading: 'Related' },
      { type: 'faq', heading: 'Backsplash questions' },
      { type: 'finalCta' },
    ],
    faq: [
      { q: 'How long does a backsplash take to install?', a: 'A typical kitchen backsplash is a short job, but it is spread over more than one visit because the tile has to set before it can be grouted. Expect the kitchen to be usable throughout.' },
      { q: 'Do you have to remove the outlets?', a: 'Covers come off and the outlets are usually reset forward to sit flush with the new tile thickness. That is normal and it is what makes the plates sit flat afterwards.' },
      { q: 'Can I put glass tile behind a gas range?', a: 'Behind a standard range, generally yes. Directly behind a commercial-output burner, check the appliance clearances first — that is an appliance requirement rather than a tile one.' },
      { q: 'Should the backsplash match the countertop?', a: 'It has to work with it, which is not the same as matching it. Bring a chip of the counter to the showroom and hold candidates against it — that is a two-minute answer in person and an endless argument online.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────── FLOORS
  {
    slug: 'tile-installation/floors',
    title: 'Tile Floor Installation, Annapolis MD | Tile Boss',
    description:
      'Tile floor installation in Annapolis, MD. Large-format porcelain, natural stone and plank tile laid over properly prepared, flat substrates.',
    h1: 'Tile floor installation',
    heroA: 'settingFloor',
    heroB: 'greyPlank',
    lede:
      'Large-format tile is only as flat as the floor beneath it. Most of the work in a good tile floor happens before any tile is opened.',
    primaryCta: { label: 'Get a flooring quote', href: '/contact/' },
    secondaryCta: { label: 'See floor tile options', href: '/tile/porcelain/' },
    parent: { label: 'Tile installation', href: '/tile-installation/' },
    sections: [
      {
        type: 'prose',
        heading: 'Flatness, deflection and lippage',
        body: [
          'Two different problems get confused here. Deflection is how much the floor structure flexes underfoot — too much and a rigid tile floor cracks no matter how well it is set. Flatness is how much the surface dips and rises over a given distance, and it is what causes lippage: one tile edge standing proud of its neighbour.',
          'The bigger the tile, the less it can bridge. A floor that was perfectly acceptable for small tile can be genuinely unsuitable for a large-format plank without levelling work first. That is a cost worth knowing about at quoting stage, not on day two.',
        ],
      },
      {
        type: 'checklist',
        heading: 'What gets checked first',
        items: [
          'Structural deflection and whether the floor can carry a rigid installation',
          'Flatness across the room, measured rather than eyeballed',
          'Substrate type and what it needs to bond properly',
          'Where movement joints must fall, including at the perimeter and at doorways',
          'Transitions to adjoining rooms and how the heights meet',
          'Whether heated floor is going in, which changes the build-up',
        ],
      },
      { type: 'gallery', heading: 'Floors and surfaces', images: ['settingFloor', 'settingTile', 'grouting', 'greyPlank'] },
      {
        type: 'prose',
        heading: 'Layout is a design decision',
        body: [
          'Where the first tile goes decides where the last cut lands. Set out from the wrong reference and you finish with a two-inch sliver along the most visible wall in the room. For plank tile there is also the offset to settle: a heavy brick-bond offset on a long plank exaggerates any bow in the tile itself.',
          'We set out the room and show you where the cuts will fall before setting anything, because moving a line on the floor takes a minute and moving it afterwards takes a day.',
        ],
      },
      { type: 'related', heading: 'Related' },
      { type: 'faq', heading: 'Floor tile questions' },
      { type: 'finalCta' },
    ],
    faq: [
      { q: 'Can you tile over an existing tile floor?', a: 'Sometimes. It depends on whether the existing floor is solidly bonded, how the added height affects doors and transitions, and whether the total build-up is sensible. Where it is not suitable, we will say so.' },
      { q: 'What is the largest tile you can lay?', a: 'Large-format panels are routine now, but they demand a flat substrate and the right setting method. The limit is usually the condition of the floor rather than the tile.' },
      { q: 'Is natural stone suitable for a kitchen floor?', a: 'It can be beautiful and it needs maintenance — sealing, and care with acidic spills on marble and limestone in particular. Porcelain that mimics stone avoids that upkeep if you would rather not think about it.' },
      { q: 'Do I need underfloor heating installed before the tile?', a: 'Yes. Heating goes into the build-up before the tile, so it has to be decided early. It also affects the setting materials used.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────── TILE HUB
  {
    slug: 'tile',
    title: 'Porcelain, Ceramic, Stone & Glass Tile | Edgewater MD',
    description:
      'Porcelain, ceramic, natural stone, glass and mosaic tile on full-size display in Edgewater, MD. Honest advice about what suits your room.',
    h1: 'Tile we carry',
    heroA: 'showroomWall',
    heroB: 'hexMosaic',
    lede:
      'Porcelain, ceramic, natural stone, glass and mosaic, from many manufacturers. The useful question is rarely which is best — it is which one suits the room you are putting it in.',
    primaryCta: { label: 'See it in person', href: '/showroom/' },
    secondaryCta: { label: 'Ask about a specific tile', href: '/contact/' },
    sections: [
      {
        type: 'comparison',
        heading: 'Choosing between materials',
        intro: 'A quick orientation. The showroom conversation goes deeper, because the room decides more than the material does.',
        columns: ['Material', 'Where it earns its place', 'Trade-off'],
        rows: [
          ['Porcelain', 'Floors, showers, wet areas, heavy traffic. Dense, low water absorption, hard-wearing.', 'Harder to cut than ceramic; large panels demand a flat substrate.'],
          ['Ceramic', 'Walls, backsplashes, lighter-traffic floors. Easy to cut, wide range, generally lower cost.', 'Softer and more absorbent than porcelain — not the first choice for a shower floor.'],
          ['Natural stone', 'Where you want genuine variation and depth that print cannot reproduce.', 'Needs sealing and ongoing care; marble and limestone react to acids.'],
          ['Glass & mosaic', 'Backsplashes and accent bands, where light and reflection are the point.', 'Translucent, so installation quality shows through; needs full coverage and the right setting material.'],
        ],
      },
      {
        type: 'materials',
        heading: 'Browse by material',
        items: [
          { title: 'Porcelain tile', href: '/tile/porcelain/', image: 'largeFormat' },
          { title: 'Ceramic tile', href: '/tile/ceramic/', image: 'tileStack' },
          { title: 'Natural stone tile', href: '/tile/natural-stone/', image: 'stoneSamples' },
          { title: 'Glass & mosaic tile', href: '/tile/glass-and-mosaic/', image: 'glassMosaic' },
        ],
      },
      {
        type: 'prose',
        heading: 'On “which tile is best”',
        body: [
          'There is no best tile, only a best fit. A polished marble that is stunning in a powder room is a poor choice for a shower floor. A rectified large-format porcelain that looks superb in an open kitchen creates unnecessary cuts in a small bathroom.',
          'What we can do quickly is rule out the materials that will not survive your room, and then let you choose freely from what is left on looks alone. That is a much better way round than falling for something first and discovering the problem later.',
        ],
      },
      { type: 'faq', heading: 'Material questions' },
      { type: 'finalCta' },
    ],
    faq: [
      { q: 'What is the difference between porcelain and ceramic tile?', a: 'Porcelain is fired denser and absorbs less water, which makes it harder-wearing and better suited to floors and wet areas. Ceramic is easier to cut and often less expensive, and it is perfectly good on walls and backsplashes.' },
      { q: 'Does natural stone need sealing?', a: 'Yes, and it needs resealing periodically. How often depends on the stone, the finish and how hard the area is used. Marble and limestone also etch when they meet acids like lemon juice or some cleaners.' },
      { q: 'What is rectified tile?', a: 'Tile whose edges have been mechanically finished after firing so every piece is the same size with a true edge. It allows tighter grout joints, and it demands a flatter substrate to look right.' },
      { q: 'Can porcelain tile look like wood or stone?', a: 'Yes, and modern printing makes it convincing. It gets you the appearance without the sealing and maintenance that real stone or timber needs, which is why so much of the market has moved that way.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────── TRADE
  {
    slug: 'trade',
    title: 'Tile Showroom for Designers & Builders | Edgewater MD',
    description:
      'Lock-box showroom access in Edgewater, MD for designers, builders and contractors. Bring clients in and pull samples on your own schedule.',
    h1: 'Showroom access for designers, builders and contractors',
    heroA: 'sharedShowroom',
    heroB: 'tradeSession',
    lede:
      'If you specify tile for a living, the constraint is rarely choice. It is getting a client in front of real material at a time that suits the client.',
    primaryCta: { label: 'Call Mike about trade access', href: 'tel:+14438713876' },
    secondaryCta: { label: 'Email about the programme', href: '/contact/' },
    sections: [
      {
        type: 'prose',
        heading: 'Lock-box access, in the client’s own words',
        body: [
          'The showroom offers lock-box access for designers, builders and contractors so you can better serve your clients — bringing them in, pulling boards and working through a selection without being tied to our counter hours.',
          'It is a straightforward arrangement rather than a formal membership scheme, and the details are worked out directly with Mike. Call (443) 871-3876 and ask.',
        ],
      },
      {
        type: 'cards',
        heading: 'What it is useful for',
        items: [
          { title: 'Client selection meetings', body: 'Sit a client down with full-size boards rather than a screen, and close the selection in one visit instead of three.', image: 'tradeSession' },
          { title: 'Comparing options side by side', body: 'Pull competing materials out together and see them against each other under the same light.', image: 'showroomBoards' },
          { title: 'Sample runs', body: 'Take samples out to a site or a client’s home so the decision is made in the light it will live in.', image: 'showroomTrim' },
          { title: 'Talking through the assembly', body: 'Waterproofing, substrate and setting materials, worked out with someone who installs as well as sells.', image: 'waterproofBoard' },
        ],
      },
      {
        type: 'prose',
        heading: 'Why a specifier might prefer a small showroom',
        body: [
          'A big-box counter can quote you a price. It cannot usually tell you whether the mosaic you have specified will show its setting bed through the glass, or whether the large-format plank you like will lie flat on the floor as built.',
          'You are dealing with a third-generation installer with 45 years in the trade. If a specification is going to cause a problem on site, you will hear about it while it is still a drawing.',
        ],
      },
      {
        type: 'feature',
        heading: 'Contractor education',
        image: 'showroomDesk',
        body: [
          'The Maryland Tile Boss side of the business runs contractor-focused events and writes about installation systems, waterproofing, tools and products — with the stated aim of helping the trade build better.',
          'If you want to be told when something is happening, call or email and ask to be kept in the loop.',
        ],
        cta: { label: 'Read the tile knowledge posts', href: '/blog/' },
      },
      { type: 'faq', heading: 'Trade questions' },
      { type: 'finalCta' },
    ],
    faq: [
      { q: 'Who is trade access for?', a: 'Interior designers, builders, remodelers and tile contractors who bring clients in or pull samples regularly.' },
      { q: 'How do I get access?', a: 'Call Mike on (443) 871-3876. It is arranged directly rather than through an application form.' },
      { q: 'Can I bring clients in outside normal hours?', a: 'That is the point of the arrangement. Confirm the specifics with Mike when you set it up.' },
      { q: 'Do you install for contractors, or only direct?', a: 'Both come up. If you need tile set on a job you are running, it is worth a conversation about scheduling.' },
      { q: 'Can I buy tile at trade terms?', a: 'Ask Mike directly — pricing is discussed case by case rather than published.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────── ANNAPOLIS
  {
    slug: 'annapolis',
    title: 'Tile Store & Installer Serving Annapolis, MD',
    description:
      'A tile showroom and installer serving Annapolis, MD from Edgewater, minutes over the South River bridge. Free consultation, expert installation.',
    h1: 'Serving Annapolis from the Edgewater showroom',
    heroA: 'storefront',
    heroB: 'showroomAisle',
    lede:
      'The showroom is on Mayo Road in Edgewater, a few minutes south of Annapolis over the South River bridge — close enough to drop in on the way home with a cabinet door in the car.',
    primaryCta: { label: 'Get directions from Annapolis', href: '/contact/' },
    secondaryCta: { label: 'Book a consultation', href: 'tel:+14438713876' },
    sections: [
      {
        type: 'prose',
        heading: 'What Annapolis-area houses actually ask of tile',
        body: [
          'A lot of the housing stock around Annapolis and the South River is older, and older floors move. That matters more than the tile you choose: a floor with too much deflection will crack a rigid tile installation regardless of what is on top of it, so the first thing worth checking on a period house is what is under the floor rather than what is going on it.',
          'Waterfront and near-water properties bring their own considerations — humidity that never fully clears, bathrooms that stay damp, and mudrooms and entries that take on far more water than a typical hallway. Ventilation and material choice do more work here than they do inland.',
        ],
      },
      {
        type: 'prose',
        heading: 'Getting here',
        body: [
          'From downtown Annapolis, head south on Solomons Island Road over the South River bridge and turn onto Mayo Road. The storefront carries the Digitile International Design Center sign, which is the same business under its longer-standing name.',
          'Parking is directly in front. The showroom is open Monday to Saturday, 10am to 4pm.',
        ],
      },
      { type: 'gallery', heading: 'Work around the county', images: ['twoRiversA', 'showerA', 'bowieA', 'stoneFireplaceA'] },
      {
        type: 'prose',
        heading: 'Beyond Annapolis',
        body: [
          'Installation covers the surrounding Anne Arundel County area. Recent projects include a glass mosaic backsplash in Odenton, a geometric stone backsplash in Bowie, and a large-format shower in Dunkirk.',
        ],
      },
      { type: 'faq', heading: 'Annapolis questions' },
      { type: 'finalCta' },
    ],
    faq: [
      { q: 'How far is the showroom from Annapolis?', a: 'A few minutes south over the South River bridge, on Mayo Road in Edgewater. For most of Annapolis it is a short drive.' },
      { q: 'Do you install in Annapolis itself?', a: 'Yes. Annapolis, Edgewater and the surrounding Anne Arundel County area.' },
      { q: 'Do you work on older Annapolis homes?', a: 'Regularly. The main thing older properties change is the preparation — floor structure, flatness and moisture get more attention before any tile is chosen.' },
      { q: 'Can I visit on a Saturday?', a: 'Yes, the showroom is open Saturdays 10am to 4pm.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────── ABOUT
  {
    slug: 'about',
    title: 'About Mike DiGirolamo | Maryland Tile Boss',
    description:
      'Mike DiGirolamo is a third-generation tile professional with 45+ years of hands-on experience, based in Edgewater, Maryland.',
    h1: 'Forty-five years, three generations, one trade',
    heroA: 'waterproofBoard',
    heroB: 'showroomCounter',
    lede:
      'The Maryland Tile Boss is Mike DiGirolamo — a third-generation tile professional with more than 45 years of hands-on experience in tile installation, remodeling, products and installation systems.',
    primaryCta: { label: 'Come and meet him', href: '/showroom/' },
    secondaryCta: { label: 'Call the showroom', href: 'tel:+14438713876' },
    sections: [
      {
        type: 'prose',
        heading: 'Built on jobsite knowledge',
        body: [
          'Three generations of tile work sits behind this business, and 45 years of it belongs to Mike personally. That is long enough to have installed over most of the substrates, setting materials and waterproofing systems the trade has used in that time — including several that were sold as the future and turned out not to be.',
          'It also means the advice in the showroom comes from someone who has to live with the consequences of it. Selling a client the wrong material is not an abstract problem when you are the one setting it three weeks later.',
        ],
      },
      {
        type: 'feature',
        heading: 'Knowledge that keeps moving',
        image: 'showroomMurals',
        body: [
          'The trade does not stand still. Waterproofing systems, large-format tile, setting materials, tools and installation technology have all changed substantially, and the best installers keep learning rather than settling into one method.',
          'Staying connected to manufacturers, going to industry events and testing new products is a working habit here, not a marketing line — and it feeds directly into what gets recommended across the counter.',
        ],
      },
      {
        type: 'prose',
        heading: 'The Maryland Tile Boss, and Digitile International',
        body: [
          'You will see two names attached to this business. Digitile International Showroom & Design Center is the long-standing name on the storefront at 14 Mayo Road, and it is the name most directories and map listings still carry. The Maryland Tile Boss is the newer identity, built around sharing what four and a half decades in the trade has taught.',
          'Same showroom, same phone, same person behind the counter. If you found us under one name and the sign says the other, you are in the right place.',
        ],
      },
      {
        type: 'feature',
        heading: 'Sharing the trade, not gatekeeping it',
        image: 'showroomDesk',
        body: [
          'A fair amount of energy here goes into educating contractors, installers, remodelers, designers, DIYers and homeowners — explaining not just what is new, but how it works, where it makes sense, and what to watch out for from real-world experience.',
          'That is unusual for a business that sells the materials. It is also the reason people call before they buy.',
        ],
        cta: { label: 'Read the tile knowledge posts', href: '/blog/' },
      },
      { type: 'gallery', heading: 'The showroom, day to day', images: ['showroomCounter', 'tradeGroup', 'showroomWide', 'storefrontSign'] },
      { type: 'faq', heading: 'About the business' },
      { type: 'finalCta' },
    ],
    faq: [
      { q: 'Who is the Maryland Tile Boss?', a: 'Mike DiGirolamo, a third-generation tile professional with more than 45 years of hands-on experience in tile installation, remodeling, products and installation systems.' },
      { q: 'Is Maryland Tile Boss the same business as Digitile International?', a: 'Yes. Digitile International Showroom & Design Center is the name on the storefront and on most directory listings; The Maryland Tile Boss is the newer identity. Same location at 14 Mayo Rd, Edgewater, and the same phone number.' },
      { q: 'Is this a family business?', a: 'It is family-owned, and tile has run through three generations of the family.' },
      { q: 'How big is the team?', a: 'Small — which is why you deal with Mike directly rather than being handed between a salesperson and a crew.' },
      { q: 'What payment methods do you take?', a: 'Debit and credit cards, plus Cash App, Venmo and Zelle.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────── PORTFOLIO
  {
    slug: 'portfolio',
    title: 'Tile Installation Portfolio | Anne Arundel County MD',
    description:
      'Completed tile installations across Anne Arundel County, MD — backsplashes in Odenton and Bowie, a large-format shower in Dunkirk, and more.',
    h1: 'Work we have handed over',
    heroA: 'twoRiversA',
    heroB: 'stoneFireplaceA',
    lede: 'Real jobs in Anne Arundel County and nearby, photographed as they were finished.',
    primaryCta: { label: 'Start your project', href: '/contact/' },
    secondaryCta: { label: 'Visit the showroom', href: '/showroom/' },
    sections: [
      { type: 'projectGrid' },
      { type: 'finalCta' },
    ],
    faq: [],
  },

  // ─────────────────────────────────────────────────────────────── FAQ
  {
    slug: 'faq',
    title: 'Tile & Installation Questions | Maryland Tile Boss',
    description:
      'Straight answers about choosing tile, shower waterproofing, installation cost, porcelain versus ceramic, and visiting the Edgewater showroom.',
    h1: 'Questions, answered properly',
    heroA: 'showroomBoards',
    heroB: 'hexMosaic',
    lede:
      'The questions that come up most across the counter. If yours is not here, call (443) 871-3876 — you will get a straight answer rather than a callback from a sales team.',
    primaryCta: { label: 'Ask your own question', href: '/contact/' },
    secondaryCta: { label: 'Visit the showroom', href: '/showroom/' },
    sections: [
      { type: 'faqGroups' },
      { type: 'finalCta' },
    ],
    faqGroups: [
      {
        heading: 'Visiting and buying',
        items: [
          { q: 'Where are you and when are you open?', a: '14 Mayo Rd, Edgewater, MD 21037, open Monday to Saturday 10am to 4pm and closed Sunday. The storefront sign reads Digitile International Design Center.' },
          { q: 'Do I need an appointment?', a: 'No, you can walk in. For a longer design consultation it is worth calling ahead on (443) 871-3876 so someone is free to sit with you.' },
          { q: 'Is the consultation really free?', a: 'Yes. Free consultation is part of how the showroom works.' },
          { q: 'Can I buy tile without installation?', a: 'Yes. Plenty of people buy tile here and use their own installer.' },
          { q: 'What payment methods do you accept?', a: 'Debit and credit cards, Cash App, Venmo and Zelle.' },
          { q: 'Can I take samples home?', a: 'Yes — and you should. Tile changes considerably under different light.' },
        ],
      },
      {
        heading: 'Choosing tile',
        items: [
          { q: 'What is the difference between porcelain and ceramic tile?', a: 'Porcelain is fired denser and absorbs less water, so it wears harder and suits floors and wet areas better. Ceramic cuts more easily and generally costs less, and it is well suited to walls and backsplashes.' },
          { q: 'Is porcelain tile good for bathrooms?', a: 'Yes. Its low water absorption and hardness make it a sound choice for bathroom floors, walls and showers.' },
          { q: 'What tile works best on shower walls?', a: 'Porcelain and ceramic both perform well on shower walls. The more important decisions are the waterproofing behind the tile, the tile size against the wall dimensions, and where the cuts land around the niche and controls.' },
          { q: 'Does natural stone need sealing?', a: 'Yes, initially and then periodically. Marble and limestone also etch on contact with acids, which is worth knowing before it goes near a kitchen counter or a splashback.' },
          { q: 'How much extra tile should I order?', a: 'Always more than the exact square footage, to cover cuts, waste and future repairs. How much extra depends on the tile size and the layout — a diagonal or herringbone pattern generates far more waste than a straight lay. We work it out with you.' },
        ],
      },
      {
        heading: 'Installation',
        items: [
          { q: 'How much does tile installation cost in the Annapolis area?', a: 'It varies with tile size, layout, the condition of the substrate and how much waterproofing is required. A mosaic backsplash and a large-format waterproofed shower are very different jobs, so we measure and quote rather than publish a rate that would mislead most people.' },
          { q: 'How long does tile installation take?', a: 'A backsplash is a short job spread over a couple of visits so the tile can set before grouting. A full bathroom or shower is a multi-day job. Preparation work extends it, and skipping preparation is what causes failures later.' },
          { q: 'Should I buy tile before contacting an installer?', a: 'Talk to an installer first, or at least at the same time. Tile choice affects substrate preparation, setting materials and cost, and it is much cheaper to change a selection than to change a floor.' },
          { q: 'What should I know before starting a tile project?', a: 'Preparation is the largest single factor in whether a tile installation lasts. The substrate, waterproofing, tile selection, layout, setting materials, movement joints and installation method all need deciding before the first tile is set.' },
          { q: 'Why is shower waterproofing so important?', a: 'Tile and grout are not a waterproofing system. A properly designed and installed waterproofing system protects the structure behind the tile from water getting through the grout joints.' },
          { q: 'What is the difference between waterproofing systems?', a: 'The main options are sheet membranes, liquid-applied membranes and preformed shower systems. Each has its own installation requirements and advantages, and each must be installed to that manufacturer’s instructions.' },
        ],
      },
      {
        heading: 'Trade and designers',
        items: [
          { q: 'Do you work with designers, builders and contractors?', a: 'Yes. There is lock-box showroom access for design and building trades so you can bring clients in and pull samples on your own schedule. Call Mike on (443) 871-3876 for details.' },
          { q: 'Can I bring a client to the showroom?', a: 'Yes, and that is exactly what the trade access arrangement is for.' },
        ],
      },
    ],
    faq: [],
  },

  // ─────────────────────────────────────────────────────────────── CONTACT
  {
    slug: 'contact',
    title: 'Contact & Directions | Tile Showroom, Edgewater MD',
    description:
      'Call (443) 871-3876 or visit the tile showroom at 14 Mayo Rd, Edgewater, MD 21037. Open Monday to Saturday, 10am to 4pm. Serving Annapolis and Anne Arundel County.',
    h1: 'Come in, or call and ask',
    heroA: 'storefront',
    heroB: 'storefrontSign',
    lede:
      'The fastest way to get a useful answer about tile is to speak to someone who sets it. The second fastest is to stand in front of it.',
    primaryCta: { label: 'Call (443) 871-3876', href: 'tel:+14438713876' },
    secondaryCta: { label: 'Email the showroom', href: 'mailto:digi-tile@comcast.net' },
    sections: [
      { type: 'contactBlock' },
      { type: 'form', heading: 'Send a project through' },
      { type: 'visit', heading: 'Finding us', anchor: 'visit' },
      { type: 'faq', heading: 'Quick answers' },
    ],
    faq: [
      { q: 'What is the best number to call?', a: '(443) 871-3876 reaches the showroom and Mike directly.' },
      { q: 'How quickly will I hear back on an email?', a: 'Email goes to digi-tile@comcast.net and is picked up around showroom hours. If something is time-sensitive, call.' },
      { q: 'Can I get a quote without visiting?', a: 'We can talk through a job on the phone and give you a sense of it, but an accurate quote needs measurements and a look at what is already there.' },
    ],
  },
];
