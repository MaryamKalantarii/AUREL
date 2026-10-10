'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export interface WishlistItem {
  id: string;
  title: string;
  category: string;
  price: string;
  inStock: boolean;
  image: string;
}

const mockWishlist: WishlistItem[] = [
  {
    id: 'w1',
    title: 'Aurel Brass Ring Dimmer',
    category: 'LIGHTING CONTROLS',
    price: '$2,100',
    inStock: true,
    image: '/images/account/recentorder.jpg',
  },
  {
    id: 'w2',
    title: 'Sculptural Marble Wall Plate',
    category: 'ARCHITECTURAL HARDWARE',
    price: '$1,450',
    inStock: true,
    image: '/images/account/recentorder2.jpg',
  },
  {
    id: 'w3',
    title: 'Minimalist Linear Pendant',
    category: 'SUSPENSION LIGHTING',
    price: '$3,800',
    inStock: false,
    image: '/images/account/recentorder3.jpg',
  },
];

export const WishlistList: React.FC = () => {
  const [items, setItems] = useState<WishlistItem[]>(mockWishlist);

  const handleRemove = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex justify-between items-center pb-4 border-b border-white/10">
        <div>
          <h2 className="font-serif text-xl font-light tracking-wide text-[#F7F5F0]">
            WISHLIST
          </h2>
          <p className="font-sans text-xs text-[#8A857D] mt-1">
            Your curated collection of saved items.
          </p>
        </div>
        <span className="font-mono text-xs text-[#D8C2A8]">
          {items.length} {items.length === 1 ? 'ITEM' : 'ITEMS'}
        </span>
      </div>

      {/* WISHLIST ITEMS */}
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="group bg-[#0B0B0A] border border-white/10 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#D8C2A8]/40 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-lg overflow-hidden border border-white/10 bg-white/5 flex-none relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#D8C2A8]">
                  {item.category}
                </span>
                <h3 className="font-serif text-base font-light text-[#F7F5F0] mt-0.5">
                  {item.title}
                </h3>
                <div className="flex items-center gap-3 mt-1">
                  <span className="font-serif text-sm text-[#F7F5F0]">{item.price}</span>
                  <span
                    className={`font-sans text-[8px] uppercase tracking-[0.15em] px-2 py-0.5 rounded-full border ${
                      item.inStock
                        ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10'
                        : 'border-white/10 text-[#6A655D]'
                    }`}
                  >
                    {item.inStock ? 'IN STOCK' : 'BACKORDER'}
                  </span>
                </div>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex items-center justify-between sm:justify-end gap-4 pt-3 sm:pt-0 border-t sm:border-t-0 border-white/5">
              <button
                disabled={!item.inStock}
                className={`px-4 py-2.5 rounded-full font-sans text-[9px] uppercase tracking-[0.2em] transition-all duration-300 ${
                  item.inStock
                    ? 'border border-[#D8C2A8]/40 bg-[#D8C2A8]/10 text-[#D8C2A8] hover:bg-[#D8C2A8] hover:text-[#060605]'
                    : 'border border-white/10 text-[#6A655D] cursor-not-allowed opacity-50'
                }`}
              >
                {item.inStock ? 'ADD TO BAG' : 'OUT OF STOCK'}
              </button>

              <button
                onClick={() => handleRemove(item.id)}
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#8A857D] hover:text-red-400 hover:border-red-400/30 transition-all text-xs"
                title="Remove Item"
              >
                ✕
              </button>
            </div>
          </div>
        ))}

        {items.length === 0 && (
          <div className="text-center py-12 border border-dashed border-white/10 rounded-xl">
            <p className="font-sans text-xs text-[#8A857D]">Your wishlist is currently empty.</p>
            <Link
              href="/collection"
              className="inline-block mt-3 font-sans text-[10px] uppercase tracking-[0.2em] text-[#D8C2A8] underline"
            >
              Explore Our Collections
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistList;