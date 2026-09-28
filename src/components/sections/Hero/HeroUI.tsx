"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export function HeroUI() {
  const uiRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        uiRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, delay: 0.8, ease: "power2.out" }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={uiRef}
      className="absolute inset-0 z-40 pointer-events-none select-none p-6 sm:p-12 flex flex-col justify-between"
    >
      {/* سمت چپ: شمارنده اسلاید کمپین */}
      <div className="absolute left-6 sm:left-12 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3">
        <span className="text-[11px] font-mono text-[#F7F5F0] font-medium tracking-widest">01</span>
        <div className="w-[1.5px] h-14 bg-[#B8B6B0]/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/3 bg-[#F7F5F0] shadow-[0_0_8px_#F7F5F0]" />
        </div>
        <span className="text-[10px] font-mono text-[#B8B6B0]/50">/ 10</span>
      </div>

      {/* سمت راست: دکمه تعاملی EXPLORE */}
      <div className="absolute right-6 sm:right-12 top-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer group">
        <button className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#111111]/30 border border-[#E4E1DA]/20 backdrop-blur-md hover:bg-[#F7F5F0]/10 hover:border-[#F7F5F0]/50 transition-all duration-500 shadow-2xl">
          <div className="w-5 h-5 rounded-full border border-[#F7F5F0]/50 flex items-center justify-center group-hover:border-[#F7F5F0] group-hover:scale-110 transition-all duration-300">
            <div className="w-1.5 h-1.5 rounded-full bg-[#F7F5F0] group-hover:bg-[#E4E1DA] transition-colors" />
          </div>
          <span className="text-[10px] font-mono tracking-[0.25em] text-[#F7F5F0] uppercase group-hover:translate-x-0.5 transition-transform duration-300">
            EXPLORE
          </span>
        </button>
      </div>

      {/* سمت چپ پایین: اطلاعات محصول و قیمت (اصلاح گردیده و کاملاً خوانا) */}
      <div className="absolute bottom-8 left-8 sm:left-16 max-w-[280px] space-y-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="block font-mono text-[9px] text-[#B8B6B0] tracking-[0.25em] uppercase">
            AUREL — 001
          </span>
          <span className="w-4 h-[1px] bg-[#B8B6B0]/40" />
        </div>
        <h2 className="text-base sm:text-lg font-serif text-[#F7F5F0] tracking-[0.18em] uppercase font-normal">
          THE LUMIÈRE
        </h2>
        <p className="text-[10px] sm:text-[11px] text-[#E4E1DA]/70 font-light tracking-wider">
          SOLITAIRE RING — PLATINUM / DIAMOND
        </p>
        <p className="text-xs sm:text-sm font-serif text-[#F7F5F0] font-medium pt-1 tracking-widest">
          $3,850
        </p>
      </div>

      {/* مرکز پایین: Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5">
        <span className="text-[8px] sm:text-[9px] font-mono tracking-[0.3em] text-[#E4E1DA]/60 uppercase">
          SCROLL TO DISCOVER
        </span>
        <div className="w-[1px] h-7 bg-gradient-to-b from-[#F7F5F0] via-[#E4E1DA]/40 to-transparent animate-pulse" />
      </div>

      {/* سمت راست پایین: شعار برند */}
      <div className="absolute bottom-8 right-8 sm:right-16 text-right max-w-[210px] hidden sm:block">
        <p className="text-[11px] font-serif italic text-[#E4E1DA]/70 leading-relaxed tracking-wide">
          Jewelry shaped by light, material and movement.
        </p>
      </div>
    </div>
  );
}