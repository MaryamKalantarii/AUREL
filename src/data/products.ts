import type {
  Product,
  ProductMaterial,
  ProductOption,
} from '@/types/product';

/* -------------------------------------------------------------------------- */
/* Product options                                                            */
/* -------------------------------------------------------------------------- */

const RING_OPTIONS: ProductOption[] = [
  {
    key: 'ringSize',
    label: 'RING SIZE',
    values: ['4', '5', '6', '7', '8', '9'],
    guideLabel: 'SIZE GUIDE',
  },
];

const BRACELET_OPTIONS: ProductOption[] = [
  {
    key: 'braceletLength',
    label: 'BRACELET LENGTH',
    values: ['16 CM', '18 CM', '20 CM'],
  },
];

const NECKLACE_OPTIONS: ProductOption[] = [
  {
    key: 'chainLength',
    label: 'CHAIN LENGTH',
    values: ['40 CM', '45 CM', '50 CM'],
  },
];

/* -------------------------------------------------------------------------- */
/* Product image helper                                                       */
/* -------------------------------------------------------------------------- */

interface ProductImagesConfig {
  materials: ProductMaterial[];

  detailImages: string[];

  showcase: {
    title: string;
    image: string;
  }[];
}

function createImages(
  config: ProductImagesConfig,
): ProductImagesConfig {
  return config;
}

/* -------------------------------------------------------------------------- */
/* PRODUCTS                                                                   */
/* -------------------------------------------------------------------------- */

export const allProducts: Product[] = [
  /* ======================================================================== */
  /* 01 - LUMIÈRE RING                                                       */
  /* ======================================================================== */

  {
    id: '1',
    number: '01 / 12',
    slug: 'lumiere-ring',

    name: 'THE LUMIÈRE RING',
    subTitle: 'SOLITAIRE DIAMOND RING',

    category: 'RINGS',

    price: '$3,850',
    rawPrice: 3850,

    rating: 4.9,
    reviewsCount: 124,

    description:
      'A timeless expression of pure beauty. The Lumière Ring captures light in its most refined form — crafted for a lifetime.',

    isBestSeller: true,
    isDiscount: false,
    isNew: true,

...createImages({
  materials: [
    {
      id: 'white-gold',
      label: 'White Gold',
      gradient:
        'from-zinc-300 via-[#e4e4e7] to-zinc-500',
      images: [
        '/images/products/lumiere-ring/white-gold-1.jpg',
        '/images/products/lumiere-ring/white-gold-2.jpg',
        '/images/products/lumiere-ring/white-gold-3.png',
        '/images/products/lumiere-ring/white-gold-4.jpg',
      ],
    },

    {
      id: 'yellow-gold',
      label: 'Yellow Gold',
      gradient:
        'from-[#ffd700] via-[#d4af37] to-[#996515]',
      images: [
        '/images/products/lumiere-ring/yellow-gold-1.jpg',
        '/images/products/lumiere-ring/yellow-gold-2.jpg',
        '/images/products/lumiere-ring/yellow-gold-3.jpg',
        '/images/products/lumiere-ring/yellow-gold-4.jpg',
      ],
    },

    {
      id: 'rose-gold',
      label: 'Rose Gold',
      gradient:
        'from-[#e8a598] via-[#f7d6cd] to-[#b76e79]',
      images: [
        '/images/products/lumiere-ring/rose-gold-1.jpg',
        '/images/products/lumiere-ring/rose-gold-2.jpg',
        '/images/products/lumiere-ring/rose-gold-3.jpg',
        '/images/products/lumiere-ring/rose-gold-4.jpg',
      ],
    },
  ],

  detailImages: [
    '/images/products/lumiere-ring/detail-1.jpg',
    '/images/products/lumiere-ring/detail-2.jpg',
  ],

  showcase: [
    {
      title: 'FRONT VIEW',
      image:
        '/images/products/lumiere-ring/front.jpg',
    },
    {
      title: 'SIDE VIEW',
      image:
        '/images/products/lumiere-ring/side.jpg',
    },
    {
      title: 'ON HAND',
      image:
        '/images/products/lumiere-ring/on-hand.jpg',
    },
  ],

// BRAND STORY
BrandStory: {
  leftImage:
    '/images/products/lumiere-ring/brand-story-1.jpg',
  rightImage:
    '/images/products/lumiere-ring/brand-story-2.jpg',
},
}),

    details: {
      centerStone: 'Natural Diamond',
      caratWeight: '1.00 ct (approx.)',
      cut: 'Brilliant',
      color: 'D–F (Colorless)',
      clarity: 'VVS1 – VS1',
      metal: '18K White Gold / Platinum',
    },

    options: RING_OPTIONS,
  },

  /* ======================================================================== */
  /* 02 - CELESTA BRACELET                                                   */
  /* ======================================================================== */

  {
    id: '2',
    number: '02 / 12',
    slug: 'celesta-bracelet',

    name: 'THE CELESTA BRACELET',
    subTitle: 'DIAMOND TENNIS BRACELET',

    category: 'BRACELETS',

    price: '$7,420',
    rawPrice: 7420,

    rating: 4.8,
    reviewsCount: 96,

    description:
      'Engineered for seamless movement and ultimate comfort, the Celesta Bracelet rests gracefully around the wrist.',

    isBestSeller: true,
    isDiscount: true,
    isNew: false,

    ...createImages({
      materials: [
        {
          id: 'white-gold',
          label: 'White Gold',
          gradient:
            'from-zinc-300 via-[#e4e4e7] to-zinc-500',
          images: [
            '/images/products/celesta-bracelet/white-gold-1.jpg',
            '/images/products/celesta-bracelet/white-gold-2.jpg',
            '/images/products/celesta-bracelet/white-gold-3.jpg',
            '/images/products/celesta-bracelet/white-gold-4.jpg',
          ],
        },

        {
          id: 'yellow-gold',
          label: 'Yellow Gold',
          gradient:
            'from-[#ffd700] via-[#d4af37] to-[#996515]',
          images: [
            '/images/products/celesta-bracelet/yellow-gold-1.jpg',
            '/images/products/celesta-bracelet/yellow-gold-2.jpg',
            '/images/products/celesta-bracelet/yellow-gold-3.jpg',
            '/images/products/celesta-bracelet/yellow-gold-4.jpg',
          ],
        },

        {
          id: 'rose-gold',
          label: 'Rose Gold',
          gradient:
            'from-[#e8a598] via-[#f7d6cd] to-[#b76e79]',
          images: [
            '/images/products/celesta-bracelet/rose-gold-1.jpg',
            '/images/products/celesta-bracelet/rose-gold-2.jpg',
            '/images/products/celesta-bracelet/rose-gold-3.jpg',
            '/images/products/celesta-bracelet/rose-gold-4.jpg',
          ],
        },
      ],

      detailImages: [
        '/images/products/celesta-bracelet/detail-1.jpg',
        '/images/products/celesta-bracelet/detail-2.jpg',
      ],

      showcase: [
        {
          title: 'FRONT VIEW',
          image:
            '/images/products/celesta-bracelet/front.jpg',
        },
        {
          title: 'SIDE VIEW',
          image:
            '/images/products/celesta-bracelet/side.jpg',
        },
        {
          title: 'ON WRIST',
          image:
            '/images/products/celesta-bracelet/on-wrist.jpg',
        },
      ],
    }),

    details: {
      centerStone: 'Natural Diamond',
      caratWeight: '3.20 ct (approx.)',
      metal: '18K White Gold',
      braceletStyle: 'Tennis',
      clasp: 'Box Clasp with Safety Lock',
    },

    options: BRACELET_OPTIONS,
  },

  /* ======================================================================== */
  /* 03 - SOLSTICE NECKLACE                                                  */
  /* ======================================================================== */

  {
    id: '3',
    number: '03 / 12',
    slug: 'solstice-necklace',

    name: 'THE SOLSTICE NECKLACE',
    subTitle: 'DIAMOND PENDANT NECKLACE',

    category: 'NECKLACES',

    price: '$8,760',
    rawPrice: 8760,

    rating: 4.9,
    reviewsCount: 88,

    description:
      'Designed to rest fluidly along the collarbone, crafted with delicate precision and balanced proportions.',

    isBestSeller: false,
    isDiscount: false,
    isNew: true,

    ...createImages({
      materials: [
        {
          id: 'white-gold',
          label: 'White Gold',
          gradient:
            'from-zinc-300 via-[#e4e4e7] to-zinc-500',
          images: [
            '/images/products/solstice-necklace/white-gold-1.jpg',
            '/images/products/solstice-necklace/white-gold-2.jpg',
            '/images/products/solstice-necklace/white-gold-3.jpg',
            '/images/products/solstice-necklace/white-gold-4.jpg',
          ],
        },

        {
          id: 'yellow-gold',
          label: 'Yellow Gold',
          gradient:
            'from-[#ffd700] via-[#d4af37] to-[#996515]',
          images: [
            '/images/products/solstice-necklace/yellow-gold-1.jpg',
            '/images/products/solstice-necklace/yellow-gold-2.jpg',
            '/images/products/solstice-necklace/yellow-gold-3.jpg',
            '/images/products/solstice-necklace/yellow-gold-4.jpg',
          ],
        },

        {
          id: 'rose-gold',
          label: 'Rose Gold',
          gradient:
            'from-[#e8a598] via-[#f7d6cd] to-[#b76e79]',
          images: [
            '/images/products/solstice-necklace/rose-gold-1.jpg',
            '/images/products/solstice-necklace/rose-gold-2.jpg',
            '/images/products/solstice-necklace/rose-gold-3.jpg',
            '/images/products/solstice-necklace/rose-gold-4.jpg',
          ],
        },
      ],

      detailImages: [
        '/images/products/solstice-necklace/detail-1.jpg',
        '/images/products/solstice-necklace/detail-2.jpg',
      ],

      showcase: [
        {
          title: 'FRONT VIEW',
          image:
            '/images/products/solstice-necklace/front.jpg',
        },
        {
          title: 'SIDE VIEW',
          image:
            '/images/products/solstice-necklace/side.jpg',
        },
        {
          title: 'ON BODY',
          image:
            '/images/products/solstice-necklace/on-body.jpg',
        },
      ],
    }),

    details: {
      centerStone: 'Natural Diamond',
      caratWeight: '2.40 ct (approx.)',
      metal: '18K Yellow Gold',
      chainLength: '45 cm',
      clasp: 'Lobster Clasp',
    },

    options: NECKLACE_OPTIONS,
  },

  /* ======================================================================== */
  /* 04 - VÉRITÉ EARRINGS                                                    */
  /* ======================================================================== */

  {
    id: '4',
    number: '04 / 12',
    slug: 'verite-earrings',

    name: 'THE VÉRITÉ EARRINGS',
    subTitle: 'DIAMOND STUD EARRINGS',

    category: 'EARRINGS',

    price: '$6,120',
    rawPrice: 6120,

    rating: 4.8,
    reviewsCount: 71,

    description:
      'Sculpted to capture light from every angle, featuring ergonomic backs designed for light weight and daily wear.',

    isBestSeller: false,
    isDiscount: true,
    isNew: true,

    ...createImages({
      materials: [
        {
          id: 'white-gold',
          label: 'White Gold',
          gradient:
            'from-zinc-300 via-[#e4e4e7] to-zinc-500',
          images: [
            '/images/products/verite-earrings/white-gold-1.jpg',
            '/images/products/verite-earrings/white-gold-2.jpg',
            '/images/products/verite-earrings/white-gold-3.jpg',
            '/images/products/verite-earrings/white-gold-4.jpg',
          ],
        },

        {
          id: 'yellow-gold',
          label: 'Yellow Gold',
          gradient:
            'from-[#ffd700] via-[#d4af37] to-[#996515]',
          images: [
            '/images/products/verite-earrings/yellow-gold-1.jpg',
            '/images/products/verite-earrings/yellow-gold-2.jpg',
            '/images/products/verite-earrings/yellow-gold-3.jpg',
            '/images/products/verite-earrings/yellow-gold-4.jpg',
          ],
        },

        {
          id: 'rose-gold',
          label: 'Rose Gold',
          gradient:
            'from-[#e8a598] via-[#f7d6cd] to-[#b76e79]',
          images: [
            '/images/products/verite-earrings/rose-gold-1.jpg',
            '/images/products/verite-earrings/rose-gold-2.jpg',
            '/images/products/verite-earrings/rose-gold-3.jpg',
            '/images/products/verite-earrings/rose-gold-4.jpg',
          ],
        },
      ],

      detailImages: [
        '/images/products/verite-earrings/detail-1.jpg',
        '/images/products/verite-earrings/detail-2.jpg',
      ],

      showcase: [
        {
          title: 'FRONT VIEW',
          image:
            '/images/products/verite-earrings/front.jpg',
        },
        {
          title: 'SIDE VIEW',
          image:
            '/images/products/verite-earrings/side.jpg',
        },
        {
          title: 'ON EAR',
          image:
            '/images/products/verite-earrings/on-ear.jpg',
        },
      ],
    }),

    details: {
      centerStone: 'Natural Diamond',
      caratWeight: '1.50 ct total',
      metal: '18K White Gold',
      closure: 'Push Back',
      style: 'Classic Stud',
    },

    // Earrings سایز ندارد
    options: [],
  },

  /* ======================================================================== */
  /* 05 - IMPERIAL RING                                                       */
  /* ======================================================================== */

  {
    id: '5',
    number: '05 / 12',
    slug: 'imperial-ring',

    name: 'THE IMPERIAL',
    subTitle: 'STATEMENT DIAMOND RING',

    category: 'RINGS',

    price: '$9,380',
    rawPrice: 9380,

    rating: 4.9,
    reviewsCount: 63,

    description:
      'A sculptural ring designed around a luminous center stone and a refined architectural silhouette.',

    isBestSeller: true,
    isDiscount: false,
    isNew: false,

    ...createImages({
      materials: [
        {
          id: 'white-gold',
          label: 'White Gold',
          gradient:
            'from-zinc-300 via-[#e4e4e7] to-zinc-500',
          images: [
            '/images/products/imperial-ring/white-gold-1.jpg',
            '/images/products/imperial-ring/white-gold-2.jpg',
            '/images/products/imperial-ring/white-gold-3.jpg',
            '/images/products/imperial-ring/white-gold-4.jpg',
          ],
        },

        {
          id: 'yellow-gold',
          label: 'Yellow Gold',
          gradient:
            'from-[#ffd700] via-[#d4af37] to-[#996515]',
          images: [
            '/images/products/imperial-ring/yellow-gold-1.jpg',
            '/images/products/imperial-ring/yellow-gold-2.jpg',
            '/images/products/imperial-ring/yellow-gold-3.jpg',
            '/images/products/imperial-ring/yellow-gold-4.jpg',
          ],
        },

        {
          id: 'rose-gold',
          label: 'Rose Gold',
          gradient:
            'from-[#e8a598] via-[#f7d6cd] to-[#b76e79]',
          images: [
            '/images/products/imperial-ring/rose-gold-1.jpg',
            '/images/products/imperial-ring/rose-gold-2.jpg',
            '/images/products/imperial-ring/rose-gold-3.jpg',
            '/images/products/imperial-ring/rose-gold-4.jpg',
          ],
        },
      ],

      detailImages: [
        '/images/products/imperial-ring/detail-1.jpg',
        '/images/products/imperial-ring/detail-2.jpg',
      ],

      showcase: [
        {
          title: 'FRONT VIEW',
          image:
            '/images/products/imperial-ring/front.jpg',
        },
        {
          title: 'SIDE VIEW',
          image:
            '/images/products/imperial-ring/side.jpg',
        },
        {
          title: 'ON HAND',
          image:
            '/images/products/imperial-ring/on-hand.jpg',
        },
      ],
    }),

    details: {
      centerStone: 'Natural Diamond',
      caratWeight: '1.80 ct (approx.)',
      cut: 'Brilliant',
      color: 'D–F (Colorless)',
      clarity: 'VVS1 – VS1',
      metal: '18K White Gold',
    },

    options: RING_OPTIONS,
  },

  /* ======================================================================== */
  /* 06 - HARMONY BRACELET                                                   */
  /* ======================================================================== */

  {
    id: '6',
    number: '06 / 12',
    slug: 'harmony-bracelet-06',

    name: 'THE HARMONY',
    subTitle: 'DIAMOND BRACELET',

    category: 'BRACELETS',

    price: '$5,950',
    rawPrice: 5950,

    rating: 4.7,
    reviewsCount: 54,

    description:
      'A balanced silhouette designed to move naturally with the wrist.',

    isBestSeller: false,
    isDiscount: true,
    isNew: false,

    ...createImages({
      materials: [
        {
          id: 'white-gold',
          label: 'White Gold',
          gradient:
            'from-zinc-300 via-[#e4e4e7] to-zinc-500',
          images: [
            '/images/products/harmony-bracelet-06/white-gold-1.jpg',
            '/images/products/harmony-bracelet-06/white-gold-2.jpg',
            '/images/products/harmony-bracelet-06/white-gold-3.jpg',
            '/images/products/harmony-bracelet-06/white-gold-4.jpg',
          ],
        },

        {
          id: 'yellow-gold',
          label: 'Yellow Gold',
          gradient:
            'from-[#ffd700] via-[#d4af37] to-[#996515]',
          images: [
            '/images/products/harmony-bracelet-06/yellow-gold-1.jpg',
            '/images/products/harmony-bracelet-06/yellow-gold-2.jpg',
            '/images/products/harmony-bracelet-06/yellow-gold-3.jpg',
            '/images/products/harmony-bracelet-06/yellow-gold-4.jpg',
          ],
        },

        {
          id: 'rose-gold',
          label: 'Rose Gold',
          gradient:
            'from-[#e8a598] via-[#f7d6cd] to-[#b76e79]',
          images: [
            '/images/products/harmony-bracelet-06/rose-gold-1.jpg',
            '/images/products/harmony-bracelet-06/rose-gold-2.jpg',
            '/images/products/harmony-bracelet-06/rose-gold-3.jpg',
            '/images/products/harmony-bracelet-06/rose-gold-4.jpg',
          ],
        },
      ],

      detailImages: [
        '/images/products/harmony-bracelet-06/detail-1.jpg',
        '/images/products/harmony-bracelet-06/detail-2.jpg',
      ],

      showcase: [
        {
          title: 'FRONT VIEW',
          image:
            '/images/products/harmony-bracelet-06/front.jpg',
        },
        {
          title: 'SIDE VIEW',
          image:
            '/images/products/harmony-bracelet-06/side.jpg',
        },
        {
          title: 'ON WRIST',
          image:
            '/images/products/harmony-bracelet-06/on-wrist.jpg',
        },
      ],
    }),

    details: {
      centerStone: 'Natural Diamond',
      caratWeight: '2.10 ct (approx.)',
      metal: '18K White Gold',
      braceletStyle: 'Line Bracelet',
      clasp: 'Lobster Clasp',
    },

    options: BRACELET_OPTIONS,
  },

  /* ======================================================================== */
  /* 07 - HARMONY BRACELET                                                   */
  /* ======================================================================== */

  /* ======================================================================== */
  /* 08 - HARMONY BRACELET                                                   */
  /* ======================================================================== */

  {
    id: '8',
    number: '08 / 12',
    slug: 'harmony-bracelet-08',

    name: 'THE EARRINGS DIAMOND  ',
    subTitle: 'DIAMOND EARRINGS',

    category: 'EARRINGS',

    price: '$5,950',
    rawPrice: 5950,

    rating: 4.7,
    reviewsCount: 43,

    description:
      'A balanced silhouette designed to move naturally with the wrist.',

    isBestSeller: false,
    isDiscount: true,
    isNew: false,

    ...createImages({
      materials: [
        {
          id: 'white-gold',
          label: 'White Gold',
          gradient:
            'from-zinc-300 via-[#e4e4e7] to-zinc-500',
          images: [
            '/images/products/harmony-earing-08/white-gold-1.jpg',
            '/images/products/harmony-earing-08/white-gold-2.jpg',
            '/images/products/harmony-earing-08/white-gold-3.jpg',
            '/images/products/harmony-earing-08/white-gold-4.jpg',
       
          ],
        },

        {
          id: 'yellow-gold',
          label: 'Yellow Gold',
          gradient:
            'from-[#ffd700] via-[#d4af37] to-[#996515]',
          images: [
            '/images/products/harmony-bracelet-08/yellow-gold-1.jpg',
            '/images/products/harmony-bracelet-08/yellow-gold-2.jpg',
            '/images/products/harmony-bracelet-08/yellow-gold-3.jpg',
            '/images/products/harmony-bracelet-08/yellow-gold-4.jpg',
          ],
        },

        {
          id: 'rose-gold',
          label: 'Rose Gold',
          gradient:
            'from-[#e8a598] via-[#f7d6cd] to-[#b76e79]',
          images: [
            '/images/products/harmony-bracelet-08/rose-gold-1.jpg',
            '/images/products/harmony-bracelet-08/rose-gold-2.jpg',
            '/images/products/harmony-bracelet-08/rose-gold-3.jpg',
            '/images/products/harmony-bracelet-08/rose-gold-4.jpg',
          ],
        },
      ],

      detailImages: [
        '/images/products/harmony-bracelet-08/detail-1.jpg',
        '/images/products/harmony-bracelet-08/detail-2.jpg',
      ],

      showcase: [
        {
          title: 'FRONT VIEW',
          image:
            '/images/products/harmony-bracelet-08/front.jpg',
        },
        {
          title: 'SIDE VIEW',
          image:
            '/images/products/harmony-bracelet-08/side.jpg',
        },
        {
          title: 'ON WRIST',
          image:
            '/images/products/harmony-bracelet-08/on-wrist.jpg',
        },
      ],
    }),

    details: {
      centerStone: 'Natural Diamond',
      caratWeight: '2.10 ct (approx.)',
      metal: '18K White Gold',
      braceletStyle: 'Line Bracelet',
      clasp: 'Lobster Clasp',
    },

    options: BRACELET_OPTIONS,
  },

  /* ======================================================================== */
  /* 09 - HARMONY BRACELET                                                   */
  /* ======================================================================== */

  {
    id: '9',
    number: '09 / 12',
    slug: 'harmony-bracelet-09',

    name: 'THE THE cUalte EARRINGS',
    subTitle: 'DIAMOND BRACELET',

    category: 'EARRINGS',

    price: '$5,950',
    rawPrice: 5950,

    rating: 4.7,
    reviewsCount: 38,

    description:
      'A balanced silhouette designed to move naturally with the wrist.',

    isBestSeller: false,
    isDiscount: true,
    isNew: false,

    ...createImages({
      materials: [
        {
          id: 'white-gold',
          label: 'White Gold',
          gradient:
            'from-zinc-300 via-[#e4e4e7] to-zinc-500',
          images: [
            '/images/products/cUalte-EARRINGS/white-gold-1.jpg',
            '/images/products/cUalte-EARRINGS/white-gold-2.jpg',
            '/images/products/cUalte-EARRINGS/white-gold-3.jpg',
            '/images/products/cUalte-EARRINGS/white-gold-4.jpg',
           
          ],
        },

        {
          id: 'yellow-gold',
          label: 'Yellow Gold',
          gradient:
            'from-[#ffd700] via-[#d4af37] to-[#996515]',
          images: [
            '/images/products/harmony-bracelet-09/yellow-gold-1.jpg',
            '/images/products/harmony-bracelet-09/yellow-gold-2.jpg',
            '/images/products/harmony-bracelet-09/yellow-gold-3.jpg',
            '/images/products/harmony-bracelet-09/yellow-gold-4.jpg',
          ],
        },

        {
          id: 'rose-gold',
          label: 'Rose Gold',
          gradient:
            'from-[#e8a598] via-[#f7d6cd] to-[#b76e79]',
          images: [
            '/images/products/harmony-bracelet-09/rose-gold-1.jpg',
            '/images/products/harmony-bracelet-09/rose-gold-2.jpg',
            '/images/products/harmony-bracelet-09/rose-gold-3.jpg',
            '/images/products/harmony-bracelet-09/rose-gold-4.jpg',
          ],
        },
      ],

      detailImages: [
        '/images/products/harmony-bracelet-09/detail-1.jpg',
        '/images/products/harmony-bracelet-09/detail-2.jpg',
      ],

      showcase: [
        {
          title: 'FRONT VIEW',
          image:
            '/images/products/harmony-bracelet-09/front.jpg',
        },
        {
          title: 'SIDE VIEW',
          image:
            '/images/products/harmony-bracelet-09/side.jpg',
        },
        {
          title: 'ON WRIST',
          image:
            '/images/products/harmony-bracelet-09/on-wrist.jpg',
        },
      ],
    }),

    details: {
      centerStone: 'Natural Diamond',
      caratWeight: '2.10 ct (approx.)',
      metal: '18K White Gold',
      braceletStyle: 'Line Bracelet',
      clasp: 'Lobster Clasp',
    },

    options: BRACELET_OPTIONS,
  },

  /* ======================================================================== */
  /* 10 - HARMONY BRACELET                                                   */
  /* ======================================================================== */

  {
    id: '10',
    number: '10 / 12',
    slug: 'harmony-bracelet-10',

    name: 'THE DIAMOND NECKLACES',
    subTitle: 'DIAMOND BRACELET',

    category: 'NECKLACES',

    price: '$5,950',
    rawPrice: 5950,

    rating: 4.7,
    reviewsCount: 36,

    description:
      'A balanced silhouette designed to move naturally with the wrist.',

    isBestSeller: false,
    isDiscount: true,
    isNew: false,

    ...createImages({
      materials: [
        {
          id: 'white-gold',
          label: 'White Gold',
          gradient:
            'from-zinc-300 via-[#e4e4e7] to-zinc-500',
          images: [
            '/images/products/NECKLACES-DIAMOND/white-gold-1.jpg',
            '/images/products/NECKLACES-DIAMOND/white-gold-2.jpg',
            '/images/products/NECKLACES-DIAMOND/white-gold-3.jpg',
            '/images/products/NECKLACES-DIAMOND/white-gold-4.jpg',
       
          ],
        },

        {
          id: 'yellow-gold',
          label: 'Yellow Gold',
          gradient:
            'from-[#ffd700] via-[#d4af37] to-[#996515]',
          images: [
            '/images/products/harmony-bracelet-10/yellow-gold-1.jpg',
            '/images/products/harmony-bracelet-10/yellow-gold-2.jpg',
            '/images/products/harmony-bracelet-10/yellow-gold-3.jpg',
            '/images/products/harmony-bracelet-10/yellow-gold-4.jpg',
          ],
        },

        {
          id: 'rose-gold',
          label: 'Rose Gold',
          gradient:
            'from-[#e8a598] via-[#f7d6cd] to-[#b76e79]',
          images: [
            '/images/products/harmony-bracelet-10/rose-gold-1.jpg',
            '/images/products/harmony-bracelet-10/rose-gold-2.jpg',
            '/images/products/harmony-bracelet-10/rose-gold-3.jpg',
            '/images/products/harmony-bracelet-10/rose-gold-4.jpg',
          ],
        },
      ],

      detailImages: [
        '/images/products/harmony-bracelet-10/detail-1.jpg',
        '/images/products/harmony-bracelet-10/detail-2.jpg',
      ],

      showcase: [
        {
          title: 'FRONT VIEW',
          image:
            '/images/products/harmony-bracelet-10/front.jpg',
        },
        {
          title: 'SIDE VIEW',
          image:
            '/images/products/harmony-bracelet-10/side.jpg',
        },
        {
          title: 'ON WRIST',
          image:
            '/images/products/harmony-bracelet-10/on-wrist.jpg',
        },
      ],
    }),

    details: {
      centerStone: 'Natural Diamond',
      caratWeight: '2.10 ct (approx.)',
      metal: '18K White Gold',
      braceletStyle: 'Line Bracelet',
      clasp: 'Lobster Clasp',
    },

    options: BRACELET_OPTIONS,
  },

  /* ======================================================================== */
  /* 11 - HARMONY BRACELET                                                   */
  /* ======================================================================== */

  {
    id: '11',
    number: '11 / 12',
    slug: 'harmony-bracelet-11',

    name: 'THE HARMONY NECKLACES',
    subTitle: 'DIAMOND NECKLACES',

    category: 'NECKLACES',

    price: '$5,950',
    rawPrice: 5950,

    rating: 4.7,
    reviewsCount: 31,

    description:
      'A balanced silhouette designed to move naturally with the wrist.',

    isBestSeller: false,
    isDiscount: true,
    isNew: false,

    ...createImages({
      materials: [
        {
          id: 'white-gold',
          label: 'White Gold',
          gradient:
            'from-zinc-300 via-[#e4e4e7] to-zinc-500',
          images: [
            '/images/products/harmony-NECKLACES-11/white-gold-1.jpg',
            '/images/products/harmony-NECKLACES-11/white-gold-2.jpg',
            '/images/products/harmony-NECKLACES-11/white-gold-3.jpg',
            '/images/products/harmony-NECKLACES-11/white-gold-4.jpg',
          ],
        },

        {
          id: 'yellow-gold',
          label: 'Yellow Gold',
          gradient:
            'from-[#ffd700] via-[#d4af37] to-[#996515]',
          images: [
            '/images/products/harmony-bracelet-11/yellow-gold-1.jpg',
            '/images/products/harmony-bracelet-11/yellow-gold-2.jpg',
            '/images/products/harmony-bracelet-11/yellow-gold-3.jpg',
            '/images/products/harmony-bracelet-11/yellow-gold-4.jpg',
          ],
        },

        {
          id: 'rose-gold',
          label: 'Rose Gold',
          gradient:
            'from-[#e8a598] via-[#f7d6cd] to-[#b76e79]',
          images: [
            '/images/products/harmony-bracelet-11/rose-gold-1.jpg',
            '/images/products/harmony-bracelet-11/rose-gold-2.jpg',
            '/images/products/harmony-bracelet-11/rose-gold-3.jpg',
            '/images/products/harmony-bracelet-11/rose-gold-4.jpg',
          ],
        },
      ],

      detailImages: [
        '/images/products/harmony-bracelet-11/detail-1.jpg',
        '/images/products/harmony-bracelet-11/detail-2.jpg',
      ],

      showcase: [
        {
          title: 'FRONT VIEW',
          image:
            '/images/products/harmony-bracelet-11/front.jpg',
        },
        {
          title: 'SIDE VIEW',
          image:
            '/images/products/harmony-bracelet-11/side.jpg',
        },
        {
          title: 'ON WRIST',
          image:
            '/images/products/harmony-bracelet-11/on-wrist.jpg',
        },
      ],
    }),

    details: {
      centerStone: 'Natural Diamond',
      caratWeight: '2.10 ct (approx.)',
      metal: '18K White Gold',
      braceletStyle: 'Line Bracelet',
      clasp: 'Lobster Clasp',
    },

    options: BRACELET_OPTIONS,
  },

  /* ======================================================================== */
  /* 12 - HARMONY BRACELET                                                   */
  /* ======================================================================== */

  // {
  //   id: '12',
  //   number: '12 / 12',
  //   slug: 'harmony-bracelet-12',

  //   name: 'THE HARMONY',
  //   subTitle: 'DIAMOND BRACELET',

  //   category: 'NECKLACES',

  //   price: '$5,950',
  //   rawPrice: 5950,

  //   rating: 4.7,
  //   reviewsCount: 27,

  //   description:
  //     'A balanced silhouette designed to move naturally with the wrist.',

  //   isBestSeller: false,
  //   isDiscount: true,
  //   isNew: false,

  //   ...createImages({
  //     materials: [
  //       {
  //         id: 'white-gold',
  //         label: 'White Gold',
  //         gradient:
  //           'from-zinc-300 via-[#e4e4e7] to-zinc-500',
  //         images: [
  //           '/images/products/harmony-bracelet-12/white-gold-1.jpg',
  //           '/images/products/harmony-bracelet-12/white-gold-2.jpg',
  //           '/images/products/harmony-bracelet-12/white-gold-3.jpg',
  //           '/images/products/harmony-bracelet-12/white-gold-4.jpg',
  //         ],
  //       },

  //       {
  //         id: 'yellow-gold',
  //         label: 'Yellow Gold',
  //         gradient:
  //           'from-[#ffd700] via-[#d4af37] to-[#996515]',
  //         images: [
  //           '/images/products/harmony-bracelet-12/yellow-gold-1.jpg',
  //           '/images/products/harmony-bracelet-12/yellow-gold-2.jpg',
  //           '/images/products/harmony-bracelet-12/yellow-gold-3.jpg',
  //           '/images/products/harmony-bracelet-12/yellow-gold-4.jpg',
  //         ],
  //       },

  //       {
  //         id: 'rose-gold',
  //         label: 'Rose Gold',
  //         gradient:
  //           'from-[#e8a598] via-[#f7d6cd] to-[#b76e79]',
  //         images: [
  //           '/images/products/harmony-bracelet-12/rose-gold-1.jpg',
  //           '/images/products/harmony-bracelet-12/rose-gold-2.jpg',
  //           '/images/products/harmony-bracelet-12/rose-gold-3.jpg',
  //           '/images/products/harmony-bracelet-12/rose-gold-4.jpg',
  //         ],
  //       },
  //     ],

  //     detailImages: [
  //       '/images/products/harmony-bracelet-12/detail-1.jpg',
  //       '/images/products/harmony-bracelet-12/detail-2.jpg',
  //     ],

  //     showcase: [
  //       {
  //         title: 'FRONT VIEW',
  //         image:
  //           '/images/products/harmony-bracelet-12/front.jpg',
  //       },
  //       {
  //         title: 'SIDE VIEW',
  //         image:
  //           '/images/products/harmony-bracelet-12/side.jpg',
  //       },
  //       {
  //         title: 'ON WRIST',
  //         image:
  //           '/images/products/harmony-bracelet-12/on-wrist.jpg',
  //       },
  //     ],
  //   }),

  //   details: {
  //     centerStone: 'Natural Diamond',
  //     caratWeight: '2.10 ct (approx.)',
  //     metal: '18K White Gold',
  //     braceletStyle: 'Line Bracelet',
  //     clasp: 'Lobster Clasp',
  //   },

  //   options: BRACELET_OPTIONS,
  // },
];

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

export function getProductBySlug(
  slug: string,
) {
  return allProducts.find(
    (product) =>
      product.slug === slug,
  );
}