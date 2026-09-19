"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroTypography } from "./HeroTypography";
import { HeroObject } from "./HeroObject";
import { HeroLighting } from "./HeroLighting";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll Parallax Effect on Hero Exit
    const ctx = gsap.context(() => {
      gsap.to(".hero-parallax-bg", {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        y: 100,
        opacity: 0.4,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen min-h-[720px] bg-[#0A0A0A] overflow-hidden flex items-center justify-center"
    >
      {/* 1. Background Studio Lighting */}
      <HeroLighting />

      {/* 2. Typography Layer - BACK (پشت انگشتر) */}
      <HeroTypography layer="back" />

      {/* 3. Central Solitaire Ring Object */}
      <HeroObject />

      {/* 4. Typography Layer - FRONT (جلوی انگشتر برای ایجاد Overlap) */}
      <HeroTypography layer="front" />

      {/* 5. Minimal Editorial Labels */}
      {/* Left Top Label */}
      <div className="absolute top-28 left-8 sm:left-14 z-40 text-[11px] tracking-[0.25em] text-[#A09D96] uppercase font-light">
        AR — COLLECTION 01
      </div>

      {/* Left Middle Index */}
      <div className="absolute top-1/2 -translate-y-1/2 left-8 sm:left-14 z-40 text-[11px] tracking-[0.2em] text-[#706E68] font-light">
        01 / 10
      </div>

      {/* Left Bottom Tagline */}
      <div className="absolute bottom-12 left-8 sm:left-14 z-40 text-[11px] tracking-[0.18em] text-[#A09D96] font-light uppercase leading-relaxed max-w-[200px]">
        AUREL <br />
        MORE THAN JEWELRY, <br />
        IT&apos;S A FEELING.
      </div>

      {/* Bottom Center Scroll CTA */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 text-[10px] tracking-[0.3em] text-[#88857F] uppercase font-light">
        SCROLL TO DISCOVER
      </div>

      {/* Bottom Right Explore Widget */}
      <div className="absolute bottom-12 right-8 sm:right-14 z-40 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
        <span className="text-[10px] tracking-[0.25em] text-[#A09D96] uppercase font-light">
          EXPLORE AUREL
        </span>
      </div>
    </section>
  );
}

export default Hero;