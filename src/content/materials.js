// Material pages. Each one is written to answer a different buying question, so they
// do not read as one template with the material name swapped — that would be doorway content.

export const materialPages = [
  {
    slug: 'tile/porcelain',
    title: 'Porcelain Tile in Edgewater & Annapolis, MD',
    description:
      'Porcelain tile on full-size display in Edgewater, MD. Why it suits floors, showers and wet areas, what rectified means, and how to choose it well.',
    h1: 'Porcelain tile',
    heroA: 'largeFormat',
    heroB: 'greyPlank',
    lede:
      'The workhorse. Pressed and fired dense enough to shrug off water, and hard enough to take a hallway that gets walked every day in wet boots.',
    primaryCta: { label: 'See porcelain in the showroom', href: '/showroom/' },
    secondaryCta: { label: 'Get an installation quote', href: '/contact/' },
    parent: { label: 'Tile we carry', href: '/tile/' },
    sections: [
      {
        type: 'prose',
        heading: 'What makes porcelain different',
        body: [
          'Porcelain is made from a finer, denser clay body fired at a higher temperature than standard ceramic. The result absorbs very little water, which is what makes it dependable on shower floors, in mudrooms and anywhere that freezes and thaws.',
          'Density has a cost: it is harder to cut, and it wants the right blade and the right setting material. It also means a through-body porcelain chips far less visibly than a glazed tile with a pale body underneath.',
        ],
      },
      {
        type: 'comparison',
        heading: 'Where porcelain earns its place',
        intro: 'The same tile is not right for every surface. This is roughly how we steer people.',
        columns: ['Surface', 'Porcelain suitability', 'What to watch'],
        rows: [
          ['Shower floor', 'Excellent — low absorption and available in small formats that follow the slope.', 'Choose a finish with grip when wet; polished is the wrong call here.'],
          ['Bathroom floor', 'Excellent.', 'Slip resistance still matters underfoot when wet.'],
          ['Kitchen floor', 'Excellent — takes dropped pans and grit without marking.', 'Very large formats need a flat substrate.'],
          ['Entry and mudroom', 'Excellent, including where it freezes.', 'Grit does the damage, so a texture that hides it helps.'],
          ['Backsplash', 'Good, and easy to keep clean.', 'Ceramic or glass may give you more of the look you want.'],
        ],
      },
      {
        type: 'checklist',
        heading: 'Things worth knowing before you choose',
        items: [
          'Rectified tile has mechanically finished edges, allowing tighter grout joints — and demanding a flatter floor',
          'Large-format panels look superb and magnify any dip in the substrate',
          'Through-body porcelain hides chips better than a glazed tile with a contrasting body',
          'Wood-look and stone-look porcelain avoids the sealing and maintenance real timber and stone need',
          'The finish, not the material, decides how slippery a tile is when wet',
        ],
      },
      { type: 'gallery', heading: 'Porcelain in real rooms', images: ['showerA', 'showerC', 'greyPlank', 'largeFormat'] },
      { type: 'related', heading: 'Related' },
      { type: 'faq', heading: 'Porcelain questions' },
      { type: 'finalCta' },
    ],
    faq: [
      { q: 'Is porcelain tile better than ceramic?', a: 'For floors and wet areas, generally yes — it absorbs less water and wears harder. On a wall or backsplash, ceramic performs perfectly well and often costs less, so "better" depends entirely on where it is going.' },
      { q: 'Is porcelain tile slippery?', a: 'That depends on the finish rather than the material. A polished porcelain is slippery wet; a textured or matte finish is not. For shower floors and entries we steer people towards finishes with grip.' },
      { q: 'Does porcelain tile need sealing?', a: 'The tile itself does not — it absorbs almost no water. Cement-based grout still benefits from sealing, and that is a separate question from the tile.' },
      { q: 'Can porcelain tile be used outside in Maryland?', a: 'Yes, provided it is rated for freeze-thaw and installed over a suitable exterior assembly with proper drainage. The installation matters as much as the tile here.' },
      { q: 'Why is large-format porcelain more expensive to install?', a: 'Because the floor usually has to be made flatter first, the sheets are heavy and awkward to handle, and cutting is slower. The tile price is only part of the number.' },
    ],
  },

  {
    slug: 'tile/ceramic',
    title: 'Ceramic Tile in Edgewater & Annapolis, MD',
    description:
      'Ceramic tile on display in Edgewater, MD. Where it beats porcelain, where it does not, and how glaze and body affect what you should use it for.',
    h1: 'Ceramic tile',
    heroA: 'tileStack',
    heroB: 'greenGloss',
    lede:
      'Easier to cut, gentler on the budget, and available in glazes and shapes porcelain simply does not offer. On the right surface it is not a compromise at all.',
    primaryCta: { label: 'See ceramic in the showroom', href: '/showroom/' },
    secondaryCta: { label: 'Ask what suits your room', href: '/contact/' },
    parent: { label: 'Tile we carry', href: '/tile/' },
    sections: [
      {
        type: 'prose',
        heading: 'Where ceramic is the right answer',
        body: [
          'Ceramic is fired at a lower temperature than porcelain, with a more absorbent body under the glaze. On a wall — a backsplash, a bath surround, a powder room — that absorbency is irrelevant, and what you gain is a wider range of glazes, colours and hand-made-looking shapes.',
          'It also cuts more easily, which genuinely matters on a job full of returns, niches and outlets. Fewer chipped cuts on a mitre means a cleaner finish at the edges people actually look at.',
        ],
      },
      {
        type: 'prose',
        heading: 'Where we would steer you elsewhere',
        body: [
          'Shower floors and heavy-traffic floors are where ceramic runs out of road. The softer body wears and the higher absorption is a liability in a space that is soaked daily. Porcelain is the sensible choice there.',
          'The other watch-out is glaze hardness. A delicate glossy glaze on a kitchen floor will show scuffing quickly. On a wall, that same glaze will still look immaculate in fifteen years.',
        ],
      },
      {
        type: 'checklist',
        heading: 'Choosing ceramic well',
        items: [
          'Match the glaze hardness to the traffic — a wall glaze on a floor is a short-lived decision',
          'Handmade and zellige-style tile varies in size and flatness by design; the layout has to allow for it',
          'Crackle glazes are porous and need sealing before grouting or the grout will stain them',
          'A white body under a dark glaze shows chips more; consider where knocks are likely',
          'Trim, bullnose and edge pieces are not always available — check before you commit',
        ],
      },
      { type: 'gallery', heading: 'Ceramic and glazed tile', images: ['tileStack', 'greenGloss', 'herringbone', 'showroomTrim'] },
      { type: 'related', heading: 'Related' },
      { type: 'faq', heading: 'Ceramic questions' },
      { type: 'finalCta' },
    ],
    faq: [
      { q: 'Can I use ceramic tile in a shower?', a: 'On shower walls, yes — ceramic is commonly used and performs well. For the shower floor we recommend porcelain, because of the water exposure and the smaller formats needed to follow the slope.' },
      { q: 'Is ceramic tile cheaper than porcelain?', a: 'Usually, both to buy and to install, since it cuts more easily. The gap narrows on designer and handmade ranges, which can cost more than plenty of porcelain.' },
      { q: 'What is crackle glaze and does it need sealing?', a: 'It is a decorative glaze with deliberate fine cracks. Those cracks are porous, so the tile is normally sealed before grouting — otherwise dark grout stains permanently into the crackle.' },
      { q: 'Why do handmade tiles look uneven?', a: 'Because they are. Variation in size, edge and glaze is the point of them, and a good installation works with it rather than trying to force machine-made regularity.' },
    ],
  },

  {
    slug: 'tile/natural-stone',
    title: 'Natural Stone Tile in Edgewater & Annapolis, MD',
    description:
      'Marble, travertine, slate and limestone tile in Edgewater, MD. What natural stone gives you, what maintenance it asks for, and how to choose honestly.',
    h1: 'Natural stone tile',
    heroA: 'stoneSamples',
    heroB: 'stoneFireplaceA',
    lede:
      'Depth and variation no printed tile reproduces, because every piece came out of the ground differently. It asks for more care in return, and it is worth being honest about that upfront.',
    primaryCta: { label: 'See stone in the showroom', href: '/showroom/' },
    secondaryCta: { label: 'Talk through a stone project', href: '/contact/' },
    parent: { label: 'Tile we carry', href: '/tile/' },
    sections: [
      {
        type: 'prose',
        heading: 'Variation is the product, not a defect',
        body: [
          'Stone comes out of a quarry with its own veining, colour shifts and fossil marks, and no two boxes are identical. The most common disappointment with stone is not a fault in the material — it is that someone chose from a single two-inch sample and expected the whole floor to look like it.',
          'For that reason we lay out multiple pieces before ordering, and on a stone job we recommend dry-laying and blending from several boxes so the variation is distributed deliberately rather than arriving in patches.',
        ],
      },
      {
        type: 'comparison',
        heading: 'The stones people ask about most',
        intro: 'A rough guide. Which stone suits you depends on the room and how much upkeep you are willing to accept.',
        columns: ['Stone', 'Character', 'What it asks of you'],
        rows: [
          ['Marble', 'Bright, deep veining, unmatched in a bathroom.', 'Etches on contact with anything acidic. Sealing helps staining, not etching.'],
          ['Travertine', 'Warm, soft-toned, naturally pitted.', 'Holes are filled at the factory and can open up over time; needs sealing.'],
          ['Slate', 'Dark, textured, forgiving with grit and water.', 'Can flake on lower grades; colour varies a lot between batches.'],
          ['Limestone', 'Quiet, even, architectural.', 'Softer and acid-sensitive, so it is happier away from kitchen splashes.'],
        ],
      },
      {
        type: 'checklist',
        heading: 'Realities worth accepting before you buy stone',
        items: [
          'It needs sealing on installation and periodically afterwards',
          'Marble and limestone etch when they meet lemon, wine, vinegar or many household cleaners',
          'Polished stone is genuinely slippery underfoot when wet',
          'Order extra from the same lot — matching a batch later is close to impossible',
          'Some stone needs sealing before grouting so pigment does not stain the surface',
          'A honed finish hides etching far better than a polished one',
        ],
      },
      { type: 'gallery', heading: 'Stone we have set', images: ['stoneFireplaceA', 'stoneFireplaceB', 'slateWall', 'stoneWarm', 'stoneCool', 'stoneSamples'] },
      { type: 'related', heading: 'Related' },
      { type: 'faq', heading: 'Natural stone questions' },
      { type: 'finalCta' },
    ],
    faq: [
      { q: 'Does natural stone tile need sealing?', a: 'Yes — on installation and periodically thereafter. How often depends on the stone, its finish and how hard the area is used.' },
      { q: 'What is etching and can it be prevented?', a: 'Etching is a dull mark left where acid has reacted with the stone itself. Sealing reduces staining but does not prevent etching. Honed finishes disguise it far better than polished ones, and choosing a non-calcareous stone avoids it entirely.' },
      { q: 'Is marble a bad idea in a bathroom?', a: 'Not at all — bathrooms are where marble is at its best, since they see far less acid than a kitchen. Use a honed finish, seal it, and be sensible about cleaning products.' },
      { q: 'Can I use natural stone on a shower floor?', a: 'Yes, with the right stone, a finish that grips when wet, and correct sealing. Porcelain is lower maintenance for the same job, so it comes down to how much you want the stone.' },
      { q: 'Why does my stone tile look different from the sample?', a: 'Because stone varies by nature and a small sample cannot represent a whole lot. Always look at several pieces, and where possible at material from the actual batch.' },
    ],
  },

  {
    slug: 'tile/glass-and-mosaic',
    title: 'Glass & Mosaic Tile in Edgewater & Annapolis, MD',
    description:
      'Glass and mosaic tile in Edgewater, MD. Why installation quality shows through glass, how sheets are set so seams disappear, and where mosaic works best.',
    h1: 'Glass and mosaic tile',
    heroA: 'glassMosaic',
    heroB: 'hexMosaic',
    lede:
      'The one material where the quality of the installation is literally visible through the tile. Glass hides nothing, which is exactly why a good glass job looks so good.',
    primaryCta: { label: 'See mosaics in the showroom', href: '/showroom/' },
    secondaryCta: { label: 'Get a backsplash quote', href: '/tile-installation/backsplash/' },
    parent: { label: 'Tile we carry', href: '/tile/' },
    sections: [
      {
        type: 'prose',
        heading: 'Why glass is unforgiving',
        body: [
          'Glass is translucent. Whatever sits behind it — the trowel ridges, a patch of thin coverage, a grey mortar where it should have been white — reads through the finished surface as shadowing. There is no fixing that after the fact.',
          'So glass gets a white setting material, full coverage rather than dabs, and a flat wall behind it. Done properly the colour is even and the surface has depth. Done badly it looks blotchy, and the tile gets blamed for it.',
        ],
      },
      {
        type: 'prose',
        heading: 'Mosaic sheets and the seam problem',
        body: [
          'Mosaic arrives on mesh-backed sheets. Butt two sheets together carelessly and the joint between them ends up wider or tighter than the joints within the sheet, and your eye finds that seam immediately across a lit backsplash.',
          'Setting mosaic well is mostly about keeping the joint spacing consistent across sheet boundaries, and cutting sheets so partial pieces land where they are least noticeable — at the counter, or under the cabinet line rather than at eye level.',
        ],
      },
      {
        type: 'checklist',
        heading: 'What we sort out on a glass or mosaic job',
        items: [
          'White thinset and full coverage, so nothing shadows through the glass',
          'Sheet layout planned so seams do not land in the middle of the focal wall',
          'Outlet positions worked into the layout before setting starts',
          'Edges finished with a profile, a trim piece, or the tile’s own finished edge',
          'Grout colour chosen against the actual tile, since it changes a mosaic dramatically',
          'Natural stone mosaics sealed before grouting so pigment does not stain them',
        ],
      },
      { type: 'gallery', heading: 'Glass and mosaic work', images: ['twoRiversA', 'twoRiversB', 'glassMosaic', 'hexMosaic', 'twoRiversE', 'bowieC'] },
      { type: 'related', heading: 'Related' },
      { type: 'faq', heading: 'Glass and mosaic questions' },
      { type: 'finalCta' },
    ],
    faq: [
      { q: 'Is glass tile hard to install?', a: 'It is less forgiving than most tile. It needs white setting material, full coverage and a flat substrate, because anything behind it shows through. The tile is not difficult so much as unable to hide mistakes.' },
      { q: 'Can glass tile be used in a shower?', a: 'Yes, on shower walls and as accent bands it works well and cleans easily. On a shower floor, small mosaic with plenty of grout joints gives better grip than large glass pieces.' },
      { q: 'What grout colour should I use with mosaic?', a: 'It changes the result more than people expect — a dark grout turns a pale mosaic into a grid, a matching grout lets the tile read as a surface. Hold candidates against the actual tile before deciding.' },
      { q: 'Do mosaic sheets leave visible seams?', a: 'They do when the joint spacing between sheets does not match the spacing within them. Keeping that consistent across sheet boundaries is the main skill in setting mosaic.' },
      { q: 'Is glass tile more expensive?', a: 'The tile often costs more per square foot, and installation takes longer because of the coverage and cutting requirements. It is usually used over a modest area — a backsplash or an accent band — so the total is often reasonable.' },
    ],
  },
];
