// src/components/sections/Hero/HeroOrbit.tsx
"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export function HeroOrbit() {
  const orbitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (orbitRef.current) {
      gsap.to(orbitRef.current, {
        rotation: 360,
        duration: 90,
        repeat: -1,
        ease: "none",
      });
    }
  }, []);

  return (
    <div className="absolute inset-0 z-15 pointer-events-none flex items-center justify-center overflow-hidden">
      {/* بیضی مدار نوری دور انگشتر */}
      <div
        ref={orbitRef}
        className="relative w-[580px] h-[280px] sm:w-[780px] sm:h-[360px] md:w-[950px] md:h-[420px] rounded-[50%] border border-[#FFE8C8]/30 rotate-[-14deg] [transform-style:preserve-3d]"
        style={{
          boxShadow: "0 0 20px rgba(255, 215, 150, 0.15), inset 0 0 20px rgba(255, 215, 150, 0.15)",
        }}
      >
        {/* نقاط درخشان و پرنور روی مدار (Sparkle Points on Orbit) */}
        <div className="absolute -top-[4px] left-[20%] w-2 h-2 rounded-full bg-[#FFF6E5] shadow-[0_0_15px_6px_rgba(255,225,160,0.9)]" />
        <div className="absolute -bottom-[4px] right-[18%] w-2.5 h-2.5 rounded-full bg-[#FFFFFF] shadow-[0_0_18px_8px_rgba(255,235,180,1)]" />
        <div className="absolute top-[45%] -right-[4px] w-1.5 h-1.5 rounded-full bg-[#FFE3B5] shadow-[0_0_12px_4px_rgba(255,200,120,0.8)]" />
      </div>

      {/* ذرات شناور معلق طلایی (Golden Dust Particles) */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute top-1/3 left-1/3 w-1.5 h-1.5 bg-[#FFE0B2] rounded-full blur-[0.5px] shadow-[0_0_8px_#FFE0B2]" />
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-[#FFF3E0] rounded-full blur-[0.5px] shadow-[0_0_6px_#FFF3E0]" />
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-[#FFECB3] rounded-full blur-[1px] shadow-[0_0_10px_#FFECB3]" />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-[#FFE0B2] rounded-full blur-[0.5px]" />
      </div>
    </div>
  );
}