// src/components/sections/Hero/HeroLighting.tsx
"use client";

import React from "react";

export function HeroLighting() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* پس‌زمینه مشکی عمیق */}
      <div className="absolute inset-0 bg-[#080706]" />

      {/* پرتو نوری قطری از بالا سمت راست (Sun Rays) */}
      <div className="absolute -top-20 right-0 w-[80vw] h-[120vh] bg-gradient-to-bl from-amber-100/15 via-white/5 to-transparent rotate-[-25deg] blur-3xl mix-blend-screen" />

      {/* هاله طلایی مرکز صحنه */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial from-amber-200/10 via-transparent to-transparent blur-3xl mix-blend-screen" />
    </div>
  );
}