
"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export function HeroUI() {
  const uiRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = uiRef.current;
    if (!element) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (reduceMotion) {
        gsap.set(element, { opacity: 1 });
        return;
      }

      gsap.fromTo(
        element,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.25,
          delay: 0.5,
          ease: "power2.out",
        }
      );
    }, element);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={uiRef}
      className="pointer-events-none absolute inset-0 z-20 select-none p-4 sm:p-12"
    >
      {/* Campaign counter: desktop */}
      <div className="absolute left-6 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-3 sm:left-12 sm:flex">
        <span className="font-mono text-[11px] font-medium tracking-widest text-[#F7F5F0]">
          01
        </span>

        <div className="relative h-14 w-px overflow-hidden bg-[#B8B6B0]/20">
          <div className="absolute left-0 top-0 h-1/3 w-full bg-[#F7F5F0] shadow-[0_0_8px_#F7F5F0]" />
        </div>

        <span className="font-mono text-[10px] text-[#B8B6B0]/60">
          / 10
        </span>
      </div>

      {/* Product information */}
      <div className="absolute bottom-[62px] left-4 right-4 max-w-[260px] space-y-1 sm:bottom-8 sm:left-16 sm:right-auto">
        <div className="mb-1 flex items-center gap-2">
          <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-[#B8B6B0] sm:text-[9px] sm:tracking-[0.25em]">
            AUREL — 001
          </span>
          <span className="h-px w-4 bg-[#B8B6B0]/40" />
        </div>

        <h2 className="font-serif text-[13px] font-normal uppercase tracking-[0.11em] text-[#F7F5F0] sm:text-lg sm:tracking-[0.18em]">
          THE LUMIÈRE
        </h2>

        <p className="max-w-[260px] text-[7px] font-light leading-relaxed tracking-[0.09em] text-[#E4E1DA]/85 sm:text-[11px] sm:tracking-wider">
          SOLITAIRE RING — PLATINUM / DIAMOND
        </p>

        <p className="pt-1 font-serif text-[11px] font-medium tracking-widest text-[#F7F5F0] sm:text-sm">
          $3,850
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 whitespace-nowrap sm:bottom-6 sm:gap-2.5">
        <span className="font-mono text-[6px] uppercase tracking-[0.16em] text-[#E4E1DA]/80 sm:text-[9px] sm:tracking-[0.3em]">
          SCROLL TO DISCOVER
        </span>

        <div className="h-3 w-px animate-pulse bg-gradient-to-b from-[#F7F5F0] via-[#E4E1DA]/40 to-transparent sm:h-7" />
      </div>

      {/* Desktop editorial caption */}
      <div className="absolute bottom-8 right-16 hidden max-w-[210px] text-right sm:block">
        <p className="font-serif text-[11px] italic leading-relaxed tracking-wide text-[#E4E1DA]/70">
          Jewelry shaped by light, material and movement.
        </p>
      </div>
    </div>
  );
}
