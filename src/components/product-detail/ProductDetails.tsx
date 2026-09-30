'use client';

import React from 'react';
import Image from 'next/image';

export const ProductDetails = () => {
  return (
    <section className="py-28 bg-[#09090b] text-[#f4f4f5] border-t border-white/5">
      <div className="mx-auto max-w-[1700px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Asymmetric Close-Up Images */}
          <div className="lg:col-span-7 grid grid-cols-12 gap-6 relative">
            <div className="col-span-8 aspect-[3/4] bg-zinc-900 relative overflow-hidden">
              <Image src="/images/product-detail-6.jpg" alt="" fill className="object-cover" />
            </div>
            <div className="col-span-4 aspect-[2/3] bg-zinc-900 relative overflow-hidden self-end translate-y-8">
              <Image src="/images/product-detail-7.jpg" alt="" fill className="object-cover" />
            </div>
          </div>

          {/* Typography & Specs Table */}
          <div className="lg:col-span-5">
            <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-zinc-500 mb-4 block">
              THE DETAILS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl uppercase tracking-[0.05em] text-white mb-6">
              EXCEPTIONAL <br /> IN EVERY ANGLE
            </h2>
            <p className="font-serif text-sm leading-relaxed text-zinc-400 mb-10">
              Handcrafted with precision, the Lumière Ring features a brilliant-cut diamond set in a sleek, minimal band. Designed to let the light in, and keep it forever.
            </p>

            {/* Specifications Matrix */}
            <div className="border-t border-white/10 divide-y divide-white/10">
              {[
                { label: 'CENTER STONE', val: 'Natural Diamond' },
                { label: 'CARAT WEIGHT', val: '1.00 ct (approx.)' },
                { label: 'CUT', val: 'Brilliant' },
                { label: 'COLOR', val: 'D–F (Colorless)' },
                { label: 'CLARITY', val: 'VVS1 – VS1' },
                { label: 'METAL', val: '18K White Gold / Platinum' },
              ].map((spec, i) => (
                <div key={i} className="py-4 flex justify-between items-center font-mono text-[10px]">
                  <span className="uppercase tracking-[0.2em] text-zinc-500">{spec.label}</span>
                  <span className="uppercase tracking-[0.15em] text-zinc-200">{spec.val}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};