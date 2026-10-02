// src/components/product-detail/ProductDetails.tsx
'use client';

import React from 'react';
import Image from 'next/image';
export type CategoryType = 'RINGS' | 'NECKLACES' | 'EARRINGS' | 'BRACELETS';

interface ProductDetailsProps {
  category?: CategoryType;
  images?: string[];
  description?: string;
}

const CATEGORY_SPECS: Record<
  CategoryType,
  {
    badge: string;
    title: string;
    defaultDesc: string;
    specs: { label: string; val: string }[];
  }
> = {
  RINGS: {
    badge: 'THE DETAILS — RING',
    title: 'EXCEPTIONAL IN EVERY ANGLE',
    defaultDesc: 'Handcrafted with precision, featuring brilliant diamonds set in a sleek, minimal band.',
    specs: [
      { label: 'CENTER STONE', val: 'Natural Diamond' },
      { label: 'CARAT WEIGHT', val: '1.00 ct (approx.)' },
      { label: 'CUT', val: 'Brilliant' },
      { label: 'COLOR', val: 'D–F (Colorless)' },
      { label: 'CLARITY', val: 'VVS1 – VS1' },
      { label: 'METAL', val: '18K Gold / Platinum' },
      { label: 'AVAILABLE SIZES', val: '48 – 58 (EU) / 4.5 – 8.5 (US)' },
    ],
  },
  NECKLACES: {
    badge: 'THE DETAILS — NECKLACE',
    title: 'GRACEFUL & FLUID ELEGANCE',
    defaultDesc: 'Designed to rest fluidly along the collarbone with delicate precision.',
    specs: [
      { label: 'CHAIN LENGTH', val: '45 cm (Adjustable to 42 cm)' },
      { label: 'CHAIN TYPE', val: 'Venetian Cable Chain' },
      { label: 'PENDANT DROP', val: '12.5 mm' },
      { label: 'CLASP TYPE', val: 'Signature 18K Lobster Clasp' },
      { label: 'DIAMOND CARAT', val: '0.85 tcw' },
      { label: 'METAL', val: '18K Yellow / White Gold' },
    ],
  },
  BRACELETS: {
    badge: 'THE DETAILS — BRACELET',
    title: 'FLUID ARTISTRY ON WRIST',
    defaultDesc: 'Engineered for seamless movement and ultimate comfort, clinging gracefully to the wrist.',
    specs: [
      { label: 'BRACELET LENGTH', val: '17.5 cm (Standard Fit)' },
      { label: 'SETTING STYLE', val: 'Micro-Pavé Line' },
      { label: 'CLOSURE MECHANISM', val: 'Dual-Safety Push Lock' },
      { label: 'WIDTH', val: '3.2 mm Minimal Profile' },
      { label: 'DIAMOND CARAT', val: '2.10 tcw' },
      { label: 'METAL', val: '18K Solid Gold / Platinum' },
    ],
  },
  EARRINGS: {
    badge: 'THE DETAILS — EARRINGS',
    title: 'RADIANT LIGHT & SYMMETRY',
    defaultDesc: 'Sculpted to capture light from every angle, featuring ergonomic backings for ultra-light daily wear.',
    specs: [
      { label: 'EARRING STYLE', val: 'Architectural Drop Pair' },
      { label: 'BACKING TYPE', val: 'Custom 18K Secure Screw Back' },
      { label: 'PAIR WEIGHT', val: '4.2 grams (Ultra Light)' },
      { label: 'STONE COUNT', val: '24 Brilliant Cut Diamonds' },
      { label: 'DIAMOND CARAT', val: '1.30 tcw Pair' },
      { label: 'METAL', val: '18K White / Yellow Gold' },
    ],
  },
};

export const ProductDetails = ({
  category = 'RINGS',
  images,
  description,
}: ProductDetailsProps) => {
  const currentConfig = CATEGORY_SPECS[category] || CATEGORY_SPECS.RINGS;
  const isRing = category === 'RINGS';

  const firstDetailImg = images?.[0] || '/images/product-detail-2.jpg';
  const secondDetailImg = images?.[1] || '/images/product-detail-3.jpg';

  return (
    <section className="py-28 bg-[#09090b] text-[#f4f4f5] border-t border-white/5">
      <div className="mx-auto max-w-[1700px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* چیدمان تصاویر: انگشتر نامتقارن، بقیه متوازن */}
          {isRing ? (
            <div className="lg:col-span-7 grid grid-cols-12 gap-6 relative">
              <div className="col-span-8 aspect-[3/4] bg-zinc-900 relative overflow-hidden rounded-2xl border border-white/10">
                <Image src={firstDetailImg} alt="" fill className="object-cover" />
              </div>
              <div className="col-span-4 aspect-[2/3] bg-zinc-900 relative overflow-hidden rounded-2xl border border-white/10 self-end translate-y-8">
                <Image src={secondDetailImg} alt="" fill className="object-cover" />
              </div>
            </div>
          ) : (
            <div className="lg:col-span-7 grid grid-cols-2 gap-6 relative">
              <div className="aspect-[4/5] bg-zinc-900 relative overflow-hidden rounded-2xl border border-white/10">
                <Image src={firstDetailImg} alt="" fill className="object-cover" />
              </div>
              <div className="aspect-[4/5] bg-zinc-900 relative overflow-hidden rounded-2xl border border-white/10">
                <Image src={secondDetailImg} alt="" fill className="object-cover" />
              </div>
            </div>
          )}

          {/* محتوا و مشخصات */}
          <div className="lg:col-span-5">
            <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-[#E8D4B9] mb-4 block">
              {currentConfig.badge}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl uppercase tracking-[0.05em] text-white mb-6 leading-tight">
              {currentConfig.title}
            </h2>
            <p className="font-serif text-sm leading-relaxed text-zinc-400 mb-10">
              {description || currentConfig.defaultDesc}
            </p>

            {/* جدول مشخصات */}
            <div className="border-t border-white/10 divide-y divide-white/10">
              {currentConfig.specs.map((spec, i) => (
                <div key={i} className="py-4 flex justify-between items-center font-mono text-[10px]">
                  <span className="uppercase tracking-[0.2em] text-zinc-500">{spec.label}</span>
                  <span className="uppercase tracking-[0.15em] text-zinc-200 font-medium">{spec.val}</span>
                </div>
              ))}
            </div>

            {/* راهنمای سایز فقط برای RINGS */}
            {isRing && (
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.15em] text-zinc-400 uppercase">
                  NEED A CUSTOM RING SIZE?
                </span>
                <button
                  type="button"
                  className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#E8D4B9] underline hover:text-white transition-colors"
                >
                  RING SIZE GUIDE
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};