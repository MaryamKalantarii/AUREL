'use client';

import React, { useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

type Product = {
  id: string;
  number: string;
  name: string;
  category: 'RINGS' | 'NECKLACES' | 'EARRINGS' | 'BRACELETS';
  material: string;
  price: string;
  rawPrice: number;
  isBestSeller: boolean;
  isDiscount: boolean;
  isNew: boolean;
  image: string;
};

const allProducts: Product[] = [
  {
    id: '1',
    number: '01 / 12',
    name: 'THE AURORA',
    category: 'RINGS',
    material: 'White Gold · Diamond',
    price: '$6,850',
    rawPrice: 6850,
    isBestSeller: true,
    isDiscount: false,
    isNew: false,
    image: '/images/product1.png',
  },
  {
    id: '2',
    number: '02 / 12',
    name: 'THE CELESTA',
    category: 'BRACELETS',
    material: 'White Gold · Diamond',
    price: '$7,420',
    rawPrice: 7420,
    isBestSeller: true,
    isDiscount: true,
    isNew: false,
    image: '/images/triptych-necklace.png',
  },
  {
    id: '3',
    number: '03 / 12',
    name: 'THE SOLSTICE',
    category: 'NECKLACES',
    material: 'Yellow Gold · Diamond',
    price: '$8,760',
    rawPrice: 8760,
    isBestSeller: false,
    isDiscount: false,
    isNew: true,
    image: '/images/triptych-necklace.png',
  },
  {
    id: '4',
    number: '04 / 12',
    name: 'THE VÉRITÉ',
    category: 'EARRINGS',
    material: 'White Gold · Diamond',
    price: '$6,120',
    rawPrice: 6120,
    isBestSeller: false,
    isDiscount: true,
    isNew: true,
    image: '/images/triptych-ring.png',
  },
  {
    id: '5',
    number: '05 / 12',
    name: 'THE IMPERIAL',
    category: 'RINGS',
    material: 'White Gold · Diamond',
    price: '$9,380',
    rawPrice: 9380,
    isBestSeller: true,
    isDiscount: false,
    isNew: false,
    image: '/images/product3.png',
  },
  {
    id: '6',
    number: '06 / 12',
    name: 'THE HARMONY',
    category: 'BRACELETS',
    material: 'White Gold · Diamond',
    price: '$5,950',
    rawPrice: 5950,
    isBestSeller: false,
    isDiscount: true,
    isNew: false,
    image: '/images/triptych-necklace.png',
  },
  {
    id: '7',
    number: '07 / 12',
    name: 'THE SÉRÉNITÉ',
    category: 'NECKLACES',
    material: 'White Gold · Sapphire',
    price: '$7,840',
    rawPrice: 7840,
    isBestSeller: true,
    isDiscount: false,
    isNew: true,
    image: '/images/product5.png',
  },
  {
    id: '8',
    number: '08 / 12',
    name: 'THE DÉLICE',
    category: 'NECKLACES',
    material: 'Yellow Gold · Diamond',
    price: '$5,670',
    rawPrice: 5670,
    isBestSeller: false,
    isDiscount: false,
    isNew: true,
    image: '/images/triptych-necklace.png',
  },
  {
    id: '9',
    number: '09 / 12',
    name: 'THE CELESTE',
    category: 'BRACELETS',
    material: 'White Gold · Diamond',
    price: '$6,320',
    rawPrice: 6320,
    isBestSeller: true,
    isDiscount: false,
    isNew: false,
    image: '/images/product4.png',
  },
  {
    id: '10',
    number: '10 / 12',
    name: 'THE ÉCLAT',
    category: 'EARRINGS',
    material: 'White Gold · Diamond',
    price: '$4,980',
    rawPrice: 4980,
    isBestSeller: false,
    isDiscount: true,
    isNew: true,
    image: '/images/triptych-ring.png',
  },
  {
    id: '11',
    number: '11 / 12',
    name: 'THE IMPÉRIAL',
    category: 'RINGS',
    material: 'White Gold · Diamond',
    price: '$8,250',
    rawPrice: 8250,
    isBestSeller: true,
    isDiscount: false,
    isNew: false,
    image: '/images/triptych-ring.png',
  },
  {
    id: '12',
    number: '12 / 12',
    name: 'THE RÊVE',
    category: 'NECKLACES',
    material: 'White Gold · Diamond',
    price: '$10,420',
    rawPrice: 10420,
    isBestSeller: false,
    isDiscount: false,
    isNew: true,
    image: '/images/triptych-necklace.png',
  },
];

const categories = [
  'ALL',
  'RINGS',
  'NECKLACES',
  'EARRINGS',
  'BRACELETS',
] as const;

type Category = (typeof categories)[number];

type SortOption = 'bestseller' | 'discount' | 'newest';

export const ProductCatalog = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<Category>('ALL');

  const [sortOption, setSortOption] =
    useState<SortOption>('bestseller');

  const [isSortOpen, setIsSortOpen] = useState(false);

  const [favorites, setFavorites] = useState<Set<string>>(
    new Set()
  );

  const catalogRef = useRef<HTMLDivElement>(null);

  const filteredProducts = useMemo(() => {
    const filtered =
      selectedCategory === 'ALL'
        ? [...allProducts]
        : allProducts.filter(
            (product) => product.category === selectedCategory
          );

    return filtered.sort((a, b) => {
      if (sortOption === 'bestseller') {
        return (
          Number(b.isBestSeller) - Number(a.isBestSeller)
        );
      }

      if (sortOption === 'discount') {
        return Number(b.isDiscount) - Number(a.isDiscount);
      }

      if (sortOption === 'newest') {
        return Number(b.isNew) - Number(a.isNew);
      }

      return 0;
    });
  }, [selectedCategory, sortOption]);

  const toggleFavorite = (id: string) => {
    setFavorites((current) => {
      const next = new Set(current);

      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }

      return next;
    });
  };

  useGSAP(
    () => {
      const cards =
        catalogRef.current?.querySelectorAll(
          '.product-card-item'
        );

      if (!cards?.length) return;

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 24,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.07,
          ease: 'power3.out',
          clearProps: 'transform',
        }
      );
    },
    {
      scope: catalogRef,
      dependencies: [selectedCategory, sortOption],
    }
  );

  const sortLabel =
    sortOption === 'bestseller'
      ? 'MOST POPULAR'
      : sortOption === 'discount'
      ? 'SPECIAL OFFERS'
      : 'NEWEST';

  return (
    <section
      ref={catalogRef}
      className="relative w-full overflow-hidden bg-[#050505] text-[#f5f2eb]"
    >
      {/* Main catalog container */}
      <div className="mx-auto w-full max-w-[1700px] px-5 pb-20 pt-8 sm:px-8 lg:px-12 xl:px-16">
        {/* Top navigation */}
        <div className="mb-7 flex flex-col gap-6 border-b border-white/[0.16] pb-5 lg:flex-row lg:items-center lg:justify-between">
          {/* Left side */}
          <div className="flex min-w-0 items-center gap-7">
            <h1 className="shrink-0 font-mono-luxury text-[10px] uppercase tracking-[0.28em] text-[#f0ede6] sm:text-[11px]">
              ALL PRODUCTS
            </h1>

            <div className="hidden h-3.5 w-px bg-white/[0.16] lg:block" />

            {/* Category navigation */}
            <nav className="flex min-w-0 items-center gap-5 overflow-x-auto pb-1 scrollbar-none sm:gap-7">
              {categories.map((category) => {
                const isActive =
                  selectedCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() =>
                      setSelectedCategory(category)
                    }
                    className={`relative shrink-0 py-1 font-mono-luxury text-[9px] uppercase tracking-[0.22em] transition-all duration-300 sm:text-[10px] ${
                      isActive
                        ? 'text-[#f5f2eb]'
                        : 'text-[#77736d] hover:text-[#ddd8cf]'
                    }`}
                  >
                    {category}

                    {isActive && (
                      <span className="absolute -bottom-1 left-0 h-px w-full bg-[#e9dfc7]" />
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Sort */}
          <div className="relative shrink-0">
            <button
              type="button"
              onClick={() =>
                setIsSortOpen((current) => !current)
              }
              className="flex h-8 items-center gap-3 border border-white/[0.18] bg-transparent px-3 font-mono-luxury text-[9px] uppercase tracking-[0.18em] text-[#d8d3ca] transition-all duration-300 hover:border-white/[0.4] hover:text-white"
              aria-expanded={isSortOpen}
            >
              <span>SORT BY</span>

              <span className="text-[#77736d]">·</span>

              <span className="text-[#f1ede4]">
                {sortLabel}
              </span>

              <span
                className={`ml-1 text-[8px] transition-transform duration-300 ${
                  isSortOpen ? 'rotate-180' : ''
                }`}
              >
                ↓
              </span>
            </button>

            {isSortOpen && (
              <div className="absolute right-0 top-full z-50 mt-2 w-48 border border-white/[0.16] bg-[#090909] p-1 shadow-2xl">
                <button
                  type="button"
                  onClick={() => {
                    setSortOption('bestseller');
                    setIsSortOpen(false);
                  }}
                  className="flex w-full items-center justify-between px-3 py-2.5 text-left font-mono-luxury text-[9px] uppercase tracking-[0.12em] text-[#aaa59c] transition-colors hover:bg-white/[0.05] hover:text-white"
                >
                  <span>MOST POPULAR</span>
                  {sortOption === 'bestseller' && (
                    <span>✓</span>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setSortOption('discount');
                    setIsSortOpen(false);
                  }}
                  className="flex w-full items-center justify-between px-3 py-2.5 text-left font-mono-luxury text-[9px] uppercase tracking-[0.12em] text-[#aaa59c] transition-colors hover:bg-white/[0.05] hover:text-white"
                >
                  <span>SPECIAL OFFERS</span>
                  {sortOption === 'discount' && (
                    <span>✓</span>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setSortOption('newest');
                    setIsSortOpen(false);
                  }}
                  className="flex w-full items-center justify-between px-3 py-2.5 text-left font-mono-luxury text-[9px] uppercase tracking-[0.12em] text-[#aaa59c] transition-colors hover:bg-white/[0.05] hover:text-white"
                >
                  <span>NEWEST</span>
                  {sortOption === 'newest' && (
                    <span>✓</span>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => {
            const isFavorite = favorites.has(product.id);

            return (
              <article
                key={product.id}
                className="product-card-item group relative flex min-h-[425px] flex-col overflow-hidden border border-white/[0.14] bg-[#080808] transition-all duration-500 hover:border-white/[0.38] sm:min-h-[450px]"
              >
                {/* Product image */}
                <div className="relative h-[285px] w-full overflow-hidden bg-[#060606] sm:h-[300px]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center brightness-[0.92] contrast-[1.05] transition-transform duration-1000 ease-out group-hover:scale-[1.045]"
                  />

                  {/* Soft cinematic overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-black/20" />

                  {/* Top metadata */}
                  <div className="absolute left-3 right-3 top-3 z-10 flex items-center justify-between">
                    <span className="font-mono-luxury text-[8px] tracking-[0.18em] text-[#d0cbc2]">
                      {product.number}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        toggleFavorite(product.id)
                      }
                      aria-label={
                        isFavorite
                          ? 'Remove from favorites'
                          : 'Add to favorites'
                      }
                      className="flex h-6 w-6 items-center justify-center border border-white/[0.2] bg-black/25 text-[13px] text-[#d8d3cb] backdrop-blur-sm transition-all duration-300 hover:border-white/[0.5] hover:text-white"
                    >
                      <span
                        className={
                          isFavorite
                            ? 'text-white'
                            : 'text-[#c3beb5]'
                        }
                      >
                        {isFavorite ? '♥' : '♡'}
                      </span>
                    </button>
                  </div>

                  {/* Hover shine */}
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.08),transparent_45%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                </div>

                {/* Product information */}
                <div className="flex flex-1 flex-col justify-between px-3.5 pb-3.5 pt-3">
                  <div>
                    <h2 className="font-serif-editorial text-[15px] font-light uppercase leading-tight tracking-[0.06em] text-[#f3efe7]">
                      {product.name}
                    </h2>

                    <p className="mt-1 font-mono-luxury text-[8px] uppercase tracking-[0.08em] text-[#77736d]">
                      {product.material}
                    </p>
                  </div>

                  {/* Bottom row */}
                  <div className="mt-5 flex items-center justify-between border-t border-white/[0.1] pt-3">
                    <span className="font-mono-luxury text-[10px] tracking-[0.08em] text-[#ddd8cf]">
                      {product.price}
                    </span>

                    <Link
                      href={`/product/${product.id}`}
                      className="group/link flex items-center gap-2 font-mono-luxury text-[8px] uppercase tracking-[0.15em] text-[#b8b3aa] transition-colors duration-300 hover:text-white"
                    >
                      <span>VIEW DETAILS</span>

                      <span className="flex h-5 w-5 items-center justify-center border border-white/[0.22] text-[10px] transition-all duration-300 group-hover/link:border-white/[0.55] group-hover/link:translate-x-0.5">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Editorial footer */}
      <div className="relative overflow-hidden border-t border-white/[0.15] bg-[#050505]">
        <div className="mx-auto flex min-h-[155px] w-full max-w-[1700px] items-center justify-between gap-10 px-6 py-10 sm:px-10 lg:px-16">
          {/* Editorial text */}
          <div className="relative z-10 max-w-[420px]">
            <p className="mb-3 font-mono-luxury text-[8px] uppercase tracking-[0.28em] text-[#8a857c]">
              THE ART OF LIGHT
            </p>

            <h2 className="font-serif-editorial text-2xl font-light uppercase leading-[0.95] tracking-[0.02em] text-[#f0ece4] sm:text-3xl">
              MORE THAN JEWELRY.
              <br />
              IT&apos;S A LEGACY.
            </h2>
          </div>

          {/* Description */}
          <div className="relative z-10 hidden max-w-[310px] lg:block">
            <p className="font-serif-editorial text-[11px] leading-[1.7] text-[#8d8982]">
              Each piece is a testament to our dedication
              to exceptional craftsmanship, where the
              beauty of rare stones meets the precision of
              human hands.
            </p>
          </div>

          {/* CTA */}
          <Link
            href="/about"
            className="relative z-10 hidden shrink-0 items-center gap-3 font-mono-luxury text-[8px] uppercase tracking-[0.18em] text-[#c8c2b8] transition-colors hover:text-white sm:flex"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.25] text-[12px] transition-transform duration-300 hover:translate-x-1">
              →
            </span>

            <span>ABOUT OUR CRAFT</span>
          </Link>
        </div>

        {/* Decorative jewelry image */}
        <div className="pointer-events-none absolute -bottom-16 right-[-20px] h-[210px] w-[330px] opacity-45 sm:right-0 sm:h-[250px] sm:w-[390px]">
          <Image
            src="/images/triptych-ring.png"
            alt=""
            fill
            sizes="390px"
            className="object-cover object-center mix-blend-screen"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
};