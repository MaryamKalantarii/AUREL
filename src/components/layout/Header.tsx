"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-12 py-6 flex items-center justify-between ${
        scrolled ? "bg-black/40 backdrop-blur-md py-4" : "bg-transparent"
      }`}
    >
      {/* سمت چپ: AR — COLLECTION 01 */}
      <div className="flex items-center gap-3 text-xs tracking-widest text-[#B8B6B0] font-mono-luxury">
        <span className="font-bold text-[#F7F5F0]">AR</span>
        <span className="w-4 h-[1px] bg-[#B8B6B0]/40"></span>
        <span className="hidden sm:inline text-[10px] opacity-80">COLLECTION 01</span>
      </div>

      {/* مرکز: لوگوی AUREL */}
      <div className="absolute left-1/2 -translate-x-1/2">
        <Link href="/" className="text-xl md:text-2xl font-serif-editorial tracking-[0.4em] font-light text-[#F7F5F0]">
          AUREL
        </Link>
      </div>

      {/* سمت راست: منو و منوی دایره‌ای */}
      <div className="flex items-center gap-8">
        <nav className="hidden lg:flex items-center gap-8 text-[11px] font-mono-luxury tracking-[0.2em] text-[#E4E1DA]">
          <Link href="/shop" className="hover:text-white transition-colors">COLLECTION</Link>
          <Link href="/about" className="hover:text-white transition-colors">ABOUT</Link>
          <Link href="/atelier" className="hover:text-white transition-colors">CRAFT</Link>
          <Link href="/contact" className="hover:text-white transition-colors">CONTACT</Link>
        </nav>

        {/* دکمه منوی دایره‌ای */}
        <button
          aria-label="Toggle Menu"
          className="w-8 h-8 rounded-full border border-[#B8B6B0]/30 flex items-center justify-center hover:border-white transition-all group cursor-pointer"
        >
          <div className="w-2.5 h-2.5 flex flex-col justify-between items-center group-hover:scale-110 transition-transform">
            <span className="w-full h-[1px] bg-[#F7F5F0]"></span>
            <span className="w-full h-[1px] bg-[#F7F5F0]"></span>
          </div>
        </button>
      </div>
    </header>
  );
};