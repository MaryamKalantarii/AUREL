'use client';

import React, {
  useMemo,
  useRef,
  useState,
} from 'react';

import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { allProducts } from '@/data/products';

const categories = [
  'ALL',
  'RINGS',
  'NECKLACES',
  'EARRINGS',
  'BRACELETS',
] as const;

type Category = (typeof categories)[number];

type SortOption =
  | 'bestseller'
  | 'discount'
  | 'newest';

export const ProductCatalog = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<Category>('ALL');

  const [sortOption, setSortOption] =
    useState<SortOption>('bestseller');

  const [searchQuery, setSearchQuery] =
    useState('');

  const [isSearchOpen, setIsSearchOpen] =
    useState(false);

  const [addedItems, setAddedItems] =
    useState<Set<string>>(new Set());

  const catalogRef =
    useRef<HTMLDivElement>(null);

  const filteredProducts = useMemo(() => {
    const query = searchQuery
      .trim()
      .toLowerCase();

    const filtered = allProducts.filter(
      (product) => {
        const matchesCategory =
          selectedCategory === 'ALL' ||
          product.category === selectedCategory;

        if (!matchesCategory) return false;

        if (!query) return true;

        return (
          product.name
            .toLowerCase()
            .includes(query) ||
          product.subTitle
            .toLowerCase()
            .includes(query) ||
          product.category
            .toLowerCase()
            .includes(query) ||
          product.description
            .toLowerCase()
            .includes(query)
        );
      },
    );

    return filtered.sort((a, b) => {
      if (sortOption === 'bestseller') {
        return (
          Number(b.isBestSeller) -
          Number(a.isBestSeller)
        );
      }

      if (sortOption === 'discount') {
        return (
          Number(b.isDiscount) -
          Number(a.isDiscount)
        );
      }

      if (sortOption === 'newest') {
        return (
          Number(b.isNew) -
          Number(a.isNew)
        );
      }

      return 0;
    });
  }, [
    selectedCategory,
    sortOption,
    searchQuery,
  ]);

  const handleAddToCart = (
    e: React.MouseEvent,
    id: string,
  ) => {
    e.preventDefault();
    e.stopPropagation();

    setAddedItems(
      (prev) => new Set(prev).add(id),
    );

    window.setTimeout(() => {
      setAddedItems((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    }, 2000);
  };

  useGSAP(
    () => {
      const cards =
        catalogRef.current?.querySelectorAll(
          '.product-card-item',
        );

      if (!cards?.length) return;

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.06,
          ease: 'power3.out',
          clearProps: 'transform',
        },
      );
    },
    {
      scope: catalogRef,
      dependencies: [
        selectedCategory,
        sortOption,
        searchQuery,
      ],
    },
  );

  return (
    <section
      ref={catalogRef}
      className="relative w-full overflow-hidden bg-[#070707] py-16 text-[#f5f2eb]"
    >
      <div className="mx-auto w-full max-w-[1700px] px-6 sm:px-10 lg:px-14">

        {/* Navigation */}
        <div className="mb-12 flex flex-col gap-7 border-b border-white/10 pb-6">

          {/* TOP ROW */}
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            {/* Collection + Categories */}
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
                    onClick={() =>
                      setSelectedCategory(category)
                    }
                    className={`shrink-0 rounded-full px-5 py-2 font-mono text-[9px] uppercase tracking-[0.2em] transition-all duration-300 sm:text-[10px] ${
                      selectedCategory === category
                        ? 'bg-[#E4E1DA] font-medium text-[#070707] shadow-[0_0_20px_rgba(228,225,218,0.25)]'
                        : 'border border-white/5 bg-white/[0.03] text-[#B8B6B0] hover:bg-white/[0.08] hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </nav>
            </div>

            {/* Search + Sort */}
            <div className="flex items-center gap-3">

              {/* SEARCH */}
              <div
                className={`relative flex items-center overflow-hidden rounded-full border transition-all duration-500 ${
                  isSearchOpen || searchQuery
                    ? 'w-full border-[#E8D4B9]/30 bg-white/[0.045] sm:w-[280px]'
                    : 'w-10 border-white/10 bg-white/[0.025]'
                }`}
              >
                {/* Search Icon */}
                <button
                  type="button"
                  aria-label="Search products"
                  onClick={() =>
                    setIsSearchOpen(true)
                  }
                  className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center text-[#B8B6B0] transition-colors hover:text-[#E8D4B9]"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle
                      cx="11"
                      cy="11"
                      r="7"
                    />
                    <path d="m20 20-4-4" />
                  </svg>
                </button>

                {/* Input */}
                <input
                  type="text"
                  value={searchQuery}
                  onFocus={() =>
                    setIsSearchOpen(true)
                  }
                  onChange={(e) =>
                    setSearchQuery(e.target.value)
                  }
                  placeholder="SEARCH COLLECTION"
                  className="h-10 min-w-0 flex-1 bg-transparent pr-3 font-mono text-[9px] uppercase tracking-[0.18em] text-[#F5F2EB] outline-none placeholder:text-zinc-600"
                />

                {/* Clear */}
                {searchQuery && (
                  <button
                    type="button"
                    aria-label="Clear search"
                    onClick={() => {
                      setSearchQuery('');
                      setIsSearchOpen(false);
                    }}
                    className="mr-3 flex h-5 w-5 items-center justify-center rounded-full text-zinc-500 transition-colors hover:text-white"
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    >
                      <path d="M6 6l12 12" />
                      <path d="M18 6L6 18" />
                    </svg>
                  </button>
                )}
              </div>

              {/* SORT */}
              <div className="relative shrink-0">
                <select
                  value={sortOption}
                  onChange={(e) =>
                    setSortOption(
                      e.target.value as SortOption,
                    )
                  }
                  className="h-10 appearance-none rounded-full border border-white/10 bg-white/[0.025] px-4 pr-9 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-400 outline-none transition-colors hover:border-white/20 hover:text-white"
                >
                  <option
                    value="bestseller"
                    className="bg-[#070707]"
                  >
                    BESTSELLER
                  </option>

                  <option
                    value="discount"
                    className="bg-[#070707]"
                  >
                    DISCOUNT
                  </option>

                  <option
                    value="newest"
                    className="bg-[#070707]"
                  >
                    NEWEST
                  </option>
                </select>

                <svg
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500"
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>
          </div>

          {/* SEARCH RESULT INFO */}
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              searchQuery
                ? 'max-h-8 opacity-100'
                : 'pointer-events-none max-h-0 overflow-hidden opacity-0'
            }`}
          >
            <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-zinc-600">
              SEARCH RESULTS
            </span>

            <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#B5A087]">
              {filteredProducts.length}{' '}
              {filteredProducts.length === 1
                ? 'OBJECT'
                : 'OBJECTS'}
            </span>
          </div>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => {
            const isAdded =
              addedItems.has(product.id);

            const cardImage =
              product.materials[0]?.images[0];

            return (
              <article
                key={product.id}
                className="product-card-item group relative flex flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-[#181715] to-[#0D0C0B] p-4 transition-all duration-500 hover:-translate-y-2.5 hover:border-[#E8D4B9]/40 hover:shadow-[0_30px_70px_rgba(0,0,0,0.95)]"
              >
                {/* Image */}
                <Link
                  href={`/product/${product.slug}`}
                  className="relative block h-[330px] w-full overflow-hidden rounded-2xl bg-[#080808]"
                >
                  {cardImage && (
                    <Image
                      src={cardImage}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center brightness-[0.96] transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  )}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0D0C0B] via-transparent to-black/30 opacity-70" />
                </Link>

                {/* Card Content */}
                <div className="flex flex-1 flex-col justify-between px-2 pb-1 pt-4">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#B5A087]">
                      {product.category}
                    </span>

                    <Link
                      href={`/product/${product.slug}`}
                      className="group/title mt-1.5 block"
                    >
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
                      onClick={(e) =>
                        handleAddToCart(
                          e,
                          product.id,
                        )
                      }
                      className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 font-mono text-[8px] uppercase tracking-[0.2em] text-[#FAF8F5] transition-all hover:bg-[#E8D4B9] hover:text-black"
                    >
                      {isAdded
                        ? '✓ ADDED'
                        : '+ ADD TO CART'}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="flex min-h-[350px] flex-col items-center justify-center text-center">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-zinc-600">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="7"
                />
                <path d="m20 20-4-4" />
              </svg>
            </div>

            <p className="font-serif text-xl uppercase tracking-[0.15em] text-zinc-400">
              NO OBJECTS FOUND
            </p>

            <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.25em] text-zinc-600">
              TRY ANOTHER SEARCH
            </p>
          </div>
        )}
      </div>
    </section>
  );
};