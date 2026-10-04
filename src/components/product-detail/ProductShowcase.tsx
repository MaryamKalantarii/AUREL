'use client';

import React from 'react';
import Image from 'next/image';

import type { Product } from '@/types/product';

interface ProductShowcaseProps {
  product: Product;
}

export const ProductShowcase = ({
  product,
}: ProductShowcaseProps) => {
  if (!product.showcase.length) {
    return null;
  }

  return (
    <section className="border-t border-white/5 bg-[#09090b] py-24 text-[#f4f4f5]">

      <div className="mx-auto max-w-[1700px] px-6 sm:px-10 lg:px-14">

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

          {product.showcase.map(
            (item, idx) => (
              <div
                key={`${item.title}-${idx}`}
                className="group relative cursor-pointer"
              >

                <div className="relative mb-4 aspect-[3/4] overflow-hidden bg-zinc-900">

                  <Image
                    src={item.image}
                    alt={`${product.name} — ${item.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                </div>

                <div className="flex items-center justify-between font-mono text-[10px] text-zinc-500 transition-colors group-hover:text-white">

                  <span className="tracking-[0.2em]">
                    {item.title}
                  </span>

                  <span className="tracking-[0.1em]">
                    {String(
                      idx + 1,
                    ).padStart(2, '0')}{' '}
                    /{' '}
                    {String(
                      product.showcase.length,
                    ).padStart(2, '0')}
                  </span>

                </div>

              </div>
            ),
          )}

        </div>
      </div>
    </section>
  );
};