'use client';

import React, { useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

type Product = {
  id: string;
  slug: string;
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
    slug: 'lumiere-ring',
    number: '01 / 12',
    name: 'THE LUMIÈRE RING',
    category: 'RINGS',
    material: 'White Gold · Diamond',
    price: '$3,850',
    rawPrice: 3850,
    isBestSeller: true,
    isDiscount: false,
    isNew: false,
    image: '/images/product-hero-model1111.jpg',
  },
  {
    id: '2',
    slug: 'celesta-bracelet',
    number: '02 / 12',
    name: 'THE CELESTA',
    category: 'BRACELETS',
    material: 'White Gold · Diamond',
    price: '$7,420',
    rawPrice: 7420,
    isBestSeller: true,
    isDiscount: true,
    isNew: false,
    image: '/images/product-detail-2.jpg',
  },
  {
    id: '3',
    slug: 'solstice-necklace',
    number: '03 / 12',
    name: 'THE SOLSTICE',
    category: 'NECKLACES',
    material: 'Yellow Gold · Diamond',
    price: '$8,760',
    rawPrice: 8760,
    isBestSeller: false,
    isDiscount: false,
    isNew: true,
    image: '/images/product-detail-3.jpg',
  },
  {
    id: '4',
    slug: 'verite-earrings',
    number: '04 / 12',
    name: 'THE VÉRITÉ',
    category: 'EARRINGS',
    material: 'White Gold · Diamond',
    price: '$6,120',
    rawPrice: 6120,
    isBestSeller: false,
    isDiscount: true,
    isNew: true,
    image: '/images/product-detail-4.jpg',
  },
  {
    id: '5',
    slug: 'imperial-ring',
    number: '05 / 12',
    name: 'THE IMPERIAL',
    category: 'RINGS',
    material: 'White Gold · Diamond',
    price: '$9,380',
    rawPrice: 9380,
    isBestSeller: true,
    isDiscount: false,
    isNew: false,
    image: '/images/product-detail-5.jpg',
  },
  {
    id: '6',
    slug: 'harmony-bracelet',
    number: '06 / 12',
    name: 'THE HARMONY',
    category: 'BRACELETS',
    material: 'White Gold · Diamond',
    price: '$5,950',
    rawPrice: 5950,
    isBestSeller: false,
    isDiscount: true,
    isNew: false,
    image: '/images/product-detail-2.jpg',
  },
];

const categories = ['ALL', 'RINGS', 'NECKLACES', 'EARRINGS', 'BRACELETS'] as const;
type Category = (typeof categories)[number];
type SortOption = 'bestseller' | 'discount' | 'newest';

export const ProductCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('ALL');
  const [sortOption, setSortOption] = useState<SortOption>('bestseller');
  const [isSortOpen, setIsSortOpen] = useState<boolean>(false);
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());

  const catalogRef = useRef<HTMLDivElement>(null);

  const sortLabel = useMemo(() => {
    if (sortOption === 'bestseller') return 'MOST POPULAR';
    if (sortOption === 'discount') return 'SPECIAL OFFERS';
    if (sortOption === 'newest') return 'NEWEST';
    return 'MOST POPULAR';
  }, [sortOption]);

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

  const handleAddToCart = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    setAddedItems((prev) => new Set(prev).add(id));

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

  return (
    <section ref={catalogRef} className="relative w-full overflow-hidden bg-[#070707] text-[#f5f2eb] py-16">
      <div className="mx-auto w-full max-w-[1700px] px-6 sm:px-10 lg:px-14">
        
        {/* Navigation & Sort Controls */}
        <div className="mb-12 flex flex-col gap-6 border-b border-white/10 pb-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex min-w-0 items-center gap-8">
            <h1 className="shrink-0 font-mono text-[10px] uppercase tracking-[0.35em] text-[#E4E1DA]">
              COLLECTION
            </h1>
            <div className="hidden h-4 w-px bg-white/15 lg:block" />
            <nav className="flex min-w-0 items-center gap-2.5 overflow-x-auto pb-1 scrollbar-none sm:gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-5 py-2 font-mono text-[9px] uppercase tracking-[0.2em] transition-all duration-300 sm:text-[10px] ${
                    selectedCategory === category
                      ? 'bg-[#E4E1DA] text-[#070707] font-medium shadow-[0_0_20px_rgba(228,225,218,0.25)]'
                      : 'bg-white/[0.03] text-[#B8B6B0] hover:bg-white/[0.08] hover:text-white border border-white/5'
                  }`}
                >
                  {category}
                </button>
              ))}
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
            const isAdded = addedItems.has(product.id);

            return (
              <article
                key={product.id}
                className="product-card-item group relative flex flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-[#181715] to-[#0D0C0B] p-4 transition-all duration-500 hover:-translate-y-2.5 hover:border-[#E8D4B9]/40 hover:shadow-[0_30px_70px_rgba(0,0,0,0.95)]"
              >
                {/* Image Box */}
                <Link
                  href={`/product/${product.slug}`}
                  className="relative block h-[330px] w-full overflow-hidden rounded-2xl bg-[#080808]"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center brightness-[0.96] transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0D0C0B] via-transparent to-black/30 opacity-70" />
                </Link>

                {/* Card Content */}
                <div className="flex flex-1 flex-col justify-between px-2 pt-4 pb-1">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#B5A087]">
                      {product.category}
                    </span>
                    <Link href={`/product/${product.slug}`} className="block group/title mt-1.5">
                      <h2 className="font-serif text-[21px] font-extralight uppercase leading-tight tracking-[0.18em] text-[#FAF8F5] transition-colors duration-300 group-hover/title:text-[#E8D4B9]">
                        {product.name}
                      </h2>
                    </Link>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-3.5">
                    <span className="font-sans text-[17px] font-medium tracking-[0.04em] text-[#E8D4B9]">
                      {product.price}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => handleAddToCart(e, product.id)}
                      className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 font-mono text-[8px] uppercase tracking-[0.2em] text-[#FAF8F5] hover:bg-[#E8D4B9] hover:text-black transition-all"
                    >
                      {isAdded ? '✓ ADDED' : '+ ADD TO CART'}
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