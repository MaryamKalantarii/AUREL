'use client';

import React from 'react';
import Image from 'next/image';

import { productSchemas } from '@/data/productSchemas';

import type { Product } from '@/types/product';

interface ProductDetailsProps {
  product: Product;
}

export const ProductDetails = ({
  product,
}: ProductDetailsProps) => {
  const fields =
    productSchemas[product.category];

  return (
    <section className="border-t border-white/5 bg-[#09090b] py-28 text-[#f4f4f5]">

      <div className="mx-auto max-w-[1700px] px-6 sm:px-10 lg:px-14">

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">

          {/* Images */}
          <div className="relative grid grid-cols-12 gap-6 lg:col-span-7">

            <div className="relative col-span-8 aspect-[3/4] overflow-hidden bg-zinc-900">

              {product.detailImages[0] && (
                <Image
                  src={
                    product.detailImages[0]
                  }
                  alt={`${product.name} detail`}
                  fill
                  sizes="(max-width: 1024px) 66vw, 40vw"
                  className="object-cover"
                />
              )}

            </div>

            <div className="relative col-span-4 aspect-[2/3] self-end translate-y-8 overflow-hidden bg-zinc-900">

              {product.detailImages[1] && (
                <Image
                  src={
                    product.detailImages[1]
                  }
                  alt={`${product.name} close up`}
                  fill
                  sizes="(max-width: 1024px) 34vw, 20vw"
                  className="object-cover"
                />
              )}

            </div>

          </div>

          {/* Details */}
          <div className="lg:col-span-5">

            <span className="mb-4 block font-mono text-[9px] uppercase tracking-[0.35em] text-zinc-500">
              THE DETAILS
            </span>

            <h2 className="mb-6 font-serif text-3xl uppercase tracking-[0.05em] text-white sm:text-4xl lg:text-5xl">
              EXCEPTIONAL
              <br />
              IN EVERY ANGLE
            </h2>

            <p className="mb-10 font-serif text-sm leading-relaxed text-zinc-400">
              {product.description}
            </p>

            <div className="divide-y divide-white/10 border-t border-white/10">

              {fields.map((field) => {
                const value =
                  product.details[
                    field.key
                  ];

                /*
                 * اگر این محصول آن field را نداشته باشد،
                 * اصلاً render نمی‌شود.
                 */
                if (!value) return null;

                return (
                  <div
                    key={field.key}
                    className="flex items-center justify-between gap-8 py-4 font-mono text-[10px]"
                  >

                    <span className="uppercase tracking-[0.2em] text-zinc-500">
                      {field.label}
                    </span>

                    <span className="text-right uppercase tracking-[0.15em] text-zinc-200">
                      {value}
                    </span>

                  </div>
                );
              })}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};