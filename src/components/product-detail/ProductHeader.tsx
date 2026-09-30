'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export const ProductHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#09090b]/80 backdrop-blur-md border-b border-white/5">
      <div className="mx-auto flex h-20 max-w-[1700px] items-center justify-between px-6 sm:px-10 lg:px-14">
        {/* Left: Hamburger & Wordmark */}
        <div className="flex items-center gap-8">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 p-1 focus:outline-none group"
            aria-label="Toggle Menu"
          >
            <span className="h-px w-6 bg-white transition-all group-hover:w-8" />
            <span className="h-px w-4 bg-white transition-all group-hover:w-8" />
          </button>

          <Link
            href="/"
            className="font-serif text-2xl tracking-[0.25em] text-white uppercase font-light"
          >
            AUREL
          </Link>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {['SHOP', 'COLLECTIONS', 'ABOUT'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="font-mono text-[10px] tracking-[0.25em] text-zinc-400 hover:text-white transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-6">
          <button className="text-zinc-400 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="text-zinc-400 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
          <button className="text-zinc-400 hover:text-white transition-colors relative">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-white text-[8px] font-mono font-bold text-black">
              1
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};