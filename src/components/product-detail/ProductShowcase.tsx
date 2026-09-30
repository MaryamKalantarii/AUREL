'use client';

import React from 'react';
import Image from 'next/image';

const SHOWCASE_ITEMS = [
  { title: 'FRONT VIEW', num: '01 / 03', img: '/images/product-detail-10.jpg' },
  { title: 'SIDE VIEW', num: '02 / 03', img: '/images/product-detail-11.jpg' },
  { title: 'ON HAND', num: '03 / 03', img: '/images/product-detail-12.jpg' },
];

export const ProductShowcase = () => {
  return (
    <section className="py-24 bg-[#09090b] text-[#f4f4f5] border-t border-white/5">
      <div className="mx-auto max-w-[1700px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SHOWCASE_ITEMS.map((item, idx) => (
            <div key={idx} className="group relative cursor-pointer">
              <div className="aspect-[3/4] bg-zinc-900 relative overflow-hidden mb-4">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-center font-mono text-[10px] text-zinc-500 group-hover:text-white transition-colors">
                <span className="tracking-[0.2em]">{item.title}</span>
                <span className="tracking-[0.1em]">{item.num}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};