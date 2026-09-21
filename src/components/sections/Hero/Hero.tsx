"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroTypography } from "./HeroTypography";
import { HeroRing } from "./HeroRing";
import { HeroLighting } from "./HeroLighting";
import { HeroOrbit } from "./HeroOrbit";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {}, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen min-h-[720px] bg-[#050505] overflow-hidden flex items-center justify-center"
    >
      {/* 1. Background Studio Lighting */}
      <div className="absolute inset-0 z-0 hero-parallax-bg">
        <HeroLighting />
      </div>

      {/* 2. 3D Orbit Rings & Dust Particles (Z-Index 5) */}
      <HeroOrbit />

      {/* 3. Background Typography - تک‌لایه شیک و یک‌دست در پس‌زمینه (Z-Index 10) */}
      <HeroTypography />

      {/* 4. Central Solitaire Ring Object (Z-Index 20) */}
      <HeroRing />

      {/* 5. Minimal Editorial Labels */}
      <div className="absolute top-1/2 -translate-y-1/2 left-8 sm:left-14 z-50 text-[11px] tracking-[0.2em] text-[#E8E5DF]/40 font-mono font-light pointer-events-none select-none">
        01 / 10
      </div>

      <div className="absolute bottom-12 left-8 sm:left-14 z-50 text-[10px] tracking-[0.2em] text-[#E8E5DF]/70 font-light uppercase leading-relaxed max-w-[200px] pointer-events-none select-none">
        AUREL <br />
        OBJECTS OF LIGHT
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-3 pointer-events-none select-none">
        <span className="text-[10px] tracking-[0.3em] text-[#E8E5DF]/60 uppercase font-light">
          SCROLL TO DISCOVER
        </span>
        <div className="relative w-[1px] h-10 bg-white/10 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-pulse" />
        </div>
      </div>

      <a
        href="#explore"
        className="absolute bottom-12 right-8 sm:right-14 z-50 flex items-center gap-4 group pointer-events-auto cursor-pointer"
      >
        <div className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:border-white/30">
          <div className="w-1.5 h-1.5 bg-white rounded-full transition-all duration-500 group-hover:scale-125" />
        </div>
        <span className="text-[10px] tracking-[0.25em] text-[#E8E5DF]/80 uppercase font-light transition-colors duration-300 group-hover:text-[#F7F5F0]">
          EXPLORE AUREL
        </span>
      </a>
    </section>
  );
}

export default Hero;