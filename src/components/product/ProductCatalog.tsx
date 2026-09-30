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
  const [selectedCategory, setSelectedCategory] = useState<Category>('ALL');
  const [sortOption, setSortOption] = useState<SortOption>('bestseller');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());

  const catalogRef = useRef<HTMLDivElement>(null);

  const filteredProducts = useMemo(() => {
    const filtered =
      selectedCategory === 'ALL'
        ? [...allProducts]
        : allProducts.filter((product) => product.category === selectedCategory);

    return filtered.sort((a, b) => {
      if (sortOption === 'bestseller') return Number(b.isBestSeller) - Number(a.isBestSeller);
      if (sortOption === 'discount') return Number(b.isDiscount) - Number(a.isDiscount);
      if (sortOption === 'newest') return Number(b.isNew) - Number(a.isNew);
      return 0;
    });
  }, [selectedCategory, sortOption]);

  const toggleFavorite = (id: string) => {
    setFavorites((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleAddToCart = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    setAddedItems((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });

    setTimeout(() => {
      setAddedItems((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    }, 2000);
  };

  useGSAP(
    () => {
      const cards = catalogRef.current?.querySelectorAll('.product-card-item');
      if (!cards?.length) return;

      gsap.fromTo(
        cards,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.06,
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
      className="relative w-full overflow-hidden bg-[#070707] text-[#f5f2eb] py-16"
    >
      <div className="mx-auto w-full max-w-[1700px] px-6 sm:px-10 lg:px-14">
        {/* Navigation Bar */}
        <div className="mb-12 flex flex-col gap-6 border-b border-white/10 pb-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex min-w-0 items-center gap-8">
            <h1 className="shrink-0 font-mono text-[10px] uppercase tracking-[0.35em] text-[#E4E1DA]">
              COLLECTION
            </h1>
            <div className="hidden h-4 w-px bg-white/15 lg:block" />
            <nav className="flex min-w-0 items-center gap-2.5 overflow-x-auto pb-1 scrollbar-none sm:gap-3">
              {categories.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full px-5 py-2 font-mono text-[9px] uppercase tracking-[0.2em] transition-all duration-300 sm:text-[10px] ${
                      isActive
                        ? 'bg-[#E4E1DA] text-[#070707] font-medium shadow-[0_0_20px_rgba(228,225,218,0.25)]'
                        : 'bg-white/[0.03] text-[#B8B6B0] hover:bg-white/[0.08] hover:text-white border border-white/5'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Sort Dropdown */}
          <div className="relative shrink-0">
            <button
              type="button"
              onClick={() => setIsSortOpen((current) => !current)}
              className="flex h-10 items-center gap-3 rounded-full border border-white/15 bg-white/[0.03] px-5 font-mono text-[9px] uppercase tracking-[0.2em] text-[#d8d3ca] backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08]"
              aria-expanded={isSortOpen}
            >
              <span>SORT BY</span>
              <span className="text-[#77736d]">·</span>
              <span className="text-[#f1ede4]">{sortLabel}</span>
              <span
                className={`ml-1 text-[8px] transition-transform duration-300 ${
                  isSortOpen ? 'rotate-180' : ''
                }`}
              >
                ↓
              </span>
            </button>

            {isSortOpen && (
              <div className="absolute right-0 top-full z-50 mt-3 w-52 rounded-2xl border border-white/15 bg-[#121110]/95 p-2 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.9)]">
                <button
                  type="button"
                  onClick={() => {
                    setSortOption('bestseller');
                    setIsSortOpen(false);
                  }}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-2.5 text-left font-mono text-[9px] uppercase tracking-[0.15em] text-[#aaa59c] transition-colors hover:bg-white/[0.08] hover:text-white"
                >
                  <span>MOST POPULAR</span>
                  {sortOption === 'bestseller' && <span>✓</span>}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSortOption('discount');
                    setIsSortOpen(false);
                  }}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-2.5 text-left font-mono text-[9px] uppercase tracking-[0.15em] text-[#aaa59c] transition-colors hover:bg-white/[0.08] hover:text-white"
                >
                  <span>SPECIAL OFFERS</span>
                  {sortOption === 'discount' && <span>✓</span>}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSortOption('newest');
                    setIsSortOpen(false);
                  }}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-2.5 text-left font-mono text-[9px] uppercase tracking-[0.15em] text-[#aaa59c] transition-colors hover:bg-white/[0.08] hover:text-white"
                >
                  <span>NEWEST</span>
                  {sortOption === 'newest' && <span>✓</span>}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => {
            const isFavorite = favorites.has(product.id);
            const isAdded = addedItems.has(product.id);

            return (
              <article
                key={product.id}
                className="product-card-item group relative flex flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-[#181715] to-[#0D0C0B] p-4 transition-all duration-500 hover:-translate-y-2.5 hover:border-[#E8D4B9]/40 hover:shadow-[0_30px_70px_rgba(0,0,0,0.95),0_0_25px_rgba(232,212,185,0.12)]"
              >
                {/* Image Box */}
                <Link
                  href={`/product/${product.id}`}
                  className="relative block h-[330px] w-full overflow-hidden rounded-2xl bg-[#080808]"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center brightness-[0.96] transition-transform duration-700 ease-out group-hover:scale-108"
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0D0C0B] via-transparent to-black/30 opacity-70" />

                  {/* Top Badges & Favorite */}
                  <div className="absolute left-3 right-3 top-3 z-10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="rounded-full bg-black/60 px-2.5 py-1 font-mono text-[8px] tracking-[0.2em] text-[#D8CCB8] backdrop-blur-md border border-white/10">
                        {product.number.split(' ')[0]}
                      </span>
                      {product.isNew && (
                        <span className="rounded-full bg-[#E8D4B9] px-2.5 py-1 font-mono text-[7px] font-bold tracking-[0.2em] text-black shadow-lg">
                          NEW
                        </span>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleFavorite(product.id);
                      }}
                      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/50 text-[12px] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-white/40 hover:bg-black/80 shadow-lg"
                    >
                      <span className={isFavorite ? 'text-rose-500 scale-110' : 'text-[#D8CCB8]'}>
                        {isFavorite ? '♥' : '♡'}
                      </span>
                    </button>
                  </div>
                </Link>

                {/* Card Content & Updated Typography */}
                <div className="flex flex-1 flex-col justify-between px-2 pt-4 pb-1">
                  <div>
                    {/* Category & Material Sub-header */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] font-normal uppercase tracking-[0.22em] text-[#B5A087]">
                        {product.category}
                      </span>
                      <span className="font-mono text-[8.5px] uppercase tracking-[0.12em] text-[#78746D]">
                        {product.material.split('·')[0]}
                      </span>
                    </div>

                    {/* High-Fashion Light Serif Product Title */}
                    <Link href={`/product/${product.id}`} className="block group/title mt-1.5">
                      <h2 className="font-serif text-[21px] font-extralight uppercase leading-tight tracking-[0.18em] text-[#FAF8F5] transition-colors duration-300 group-hover/title:text-[#E8D4B9]">
                        {product.name}
                      </h2>
                    </Link>
                  </div>

                  {/* Clean Sans Price & Quick Add Action */}
                  <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-3.5">
                    {/* Crisp Sans-Serif Price Display */}
                    <div className="flex flex-col">
                      <span className="font-sans text-[17px] font-medium tracking-[0.04em] text-[#E8D4B9]">
                        {product.price}
                      </span>
                    </div>

                    {/* Integrated Quick Add Button */}
                    <button
                      type="button"
                      onClick={(e) => handleAddToCart(e, product.id)}
                      className={`relative overflow-hidden rounded-full border px-4 py-2 font-mono text-[8px] font-medium uppercase tracking-[0.2em] transition-all duration-300 ${
                        isAdded
                          ? 'border-emerald-500/50 bg-emerald-950/80 text-emerald-300'
                          : 'border-white/15 bg-white/[0.04] text-[#FAF8F5] hover:border-[#E8D4B9] hover:bg-[#E8D4B9] hover:text-black hover:shadow-[0_0_15px_rgba(232,212,185,0.35)]'
                      }`}
                    >
                      {isAdded ? (
                        <span className="flex items-center gap-1">
                          <span>✓</span> ADDED
                        </span>
                      ) : (
                        <span className="flex items-center gap-1.5">
                          <span className="text-[10px]">+</span> ADD TO CART
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};