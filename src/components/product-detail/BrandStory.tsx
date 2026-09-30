'use client';

import React from 'react';
import Image from 'next/image';

export const BrandStory = () => {
  return (
    <section className="py-32 bg-[#09090b] text-[#f4f4f5] border-t border-white/5">
      <div className="mx-auto max-w-[1700px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          {/* Left: Model Hand */}
          <div className="aspect-[4/5] bg-zinc-900 relative overflow-hidden">
            <Image src="/images/product-detail-8.jpg" alt="" fill className="object-cover" />
          </div>

          {/* Center: Editorial Message */}
          <div className="text-center px-4">
            <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-zinc-500 mb-4 block">
              CRAFTED FOR YOUR MOST PRECIOUS MOMENTS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl uppercase tracking-[0.08em] text-white leading-snug mb-6">
              MORE THAN <br /> A JEWELRY.
            </h2>
            <p className="font-serif italic text-base text-zinc-400 mb-8 max-w-sm mx-auto">
              "It's a symbol of your story. Of the moments that matter. Of the light that never fades."
            </p>
            <a
              href="/collections"
              className="inline-block font-mono text-[9px] uppercase tracking-[0.25em] text-white border-b border-white/30 pb-1 hover:border-white transition-colors"
            >
              EXPLORE COLLECTION →
            </a>
          </div>

          {/* Right: Packaging */}
          <div className="aspect-[4/5] bg-zinc-900 relative overflow-hidden">
            <Image src="/images/product-detail-9.jpg" alt="" fill className="object-cover" />
          </div>

        </div>
      </div>
    </section>
  );
};