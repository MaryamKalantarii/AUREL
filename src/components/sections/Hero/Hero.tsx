"use client";

import React from "react";
import { HeroBackground } from "./HeroBackground";
import { HeroTypography } from "./HeroTypography";
import { HeroUI } from "./HeroUI";

export function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[760px] overflow-hidden flex items-center justify-center select-none bg-[#111111]">
      {/* لایه ۱: پس‌زمینه سنمایی و مدل به همراه افکت‌های نوری و گرین */}
      <HeroBackground />

      {/* لایه ۲: تایپوگرافی بزرگ و شعار برند */}
      <HeroTypography />

      {/* لایه ۳: عناصر ادیتوریال UI، اسلایدر، دکمه و اطلاعات محصول */}
      <HeroUI />
    </section>
  );
}

export default Hero;