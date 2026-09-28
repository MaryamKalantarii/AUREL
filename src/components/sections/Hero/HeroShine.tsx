"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export function HeroShine() {
  const flareRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!flareRef.current || !glowRef.current) return;

      // انیمیشن پلس و درخشش دوره‌ای الماس
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });

      tl.to(flareRef.current, {
        scale: 1.4,
        opacity: 0.9,
        duration: 0.6,
        ease: "power2.out",
      })
        .to(flareRef.current, {
          scale: 1,
          opacity: 0.3,
          duration: 0.8,
          ease: "power2.inOut",
        })
        .to(
          glowRef.current,
          {
            opacity: 0.6,
            scale: 1.1,
            duration: 0.6,
            ease: "power2.out",
          },
          "<"
        )
        .to(
          glowRef.current,
          {
            opacity: 0.25,
            scale: 1,
            duration: 0.8,
            ease: "power2.inOut",
          },
          ">"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="absolute top-[18%] left-[50%] -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-25">
      {/* 1. Soft Radial Ambient Glow */}
      <div
        ref={glowRef}
        className="w-32 h-32 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.8)_0%,_rgba(247,245,240,0.15)_45%,_transparent_70%)] blur-md opacity-30 transition-all duration-300"
      />

      {/* 2. Star Flare (۴ پره درخشان) */}
      <div
        ref={flareRef}
        className="absolute inset-0 m-auto w-12 h-12 flex items-center justify-center opacity-40 scale-100"
      >
        {/* Vertical Light Streak */}
        <div className="absolute w-[1px] h-14 bg-gradient-to-b from-transparent via-white to-transparent" />
        {/* Horizontal Light Streak */}
        <div className="absolute h-[1px] w-14 bg-gradient-to-r from-transparent via-white to-transparent" />
        {/* Center Bright Core */}
        <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_12px_#ffffff]" />
      </div>
    </div>
  );
}