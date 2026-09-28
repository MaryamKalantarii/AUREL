// src/components/sections/Craft/Craft.tsx
"use client";

import React from "react";
import Image from "next/image";

export function Craft() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#080706] text-[#F3EFE6] select-none py-20">
      {/* ۱. تصویر پس‌زمینه همراه با اورلی تیره‌کننده جهت خوانایی متون */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/craft-bg.jpg" // تصویر پس‌زمینه خورشیدی و صخره‌ای
          alt="AUREL Craft Background"
          fill
          priority
          className="object-cover object-center brightness-[0.85] contrast-[1.08]"
        />
        {/* اورلی گرادینت مشکی برای افزایش خوانایی متون سمت چپ و راست */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080706]/85 via-transparent to-[#080706]/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080706]/60 via-transparent to-[#080706]/80" />
      </div>

      {/* ۲. محتوای اصلی بخش CRAFT */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-12 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* سمت چپ: عنوان بزرگ THE CRAFT و توضیحات */}
        <div className="w-full lg:w-1/3 space-y-6 text-left">
          <div className="space-y-2">
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#F3EFE6]/60 uppercase block">
              SAVOIR-FAIRE
            </span>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-serif font-light tracking-[0.15em] text-[#F3EFE6] leading-none uppercase">
              THE<br />CRAFT
            </h2>
          </div>

          <p className="text-xs sm:text-sm font-light leading-relaxed text-[#F3EFE6]/80 max-w-sm tracking-wide">
            EVERY CURVE, EVERY REFLECTION, EVERY DETAIL IS THE RESULT OF A RELENTLESS PURSUIT OF PERFECTION.
          </p>

          <div className="pt-4">
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#F3EFE6]/50 uppercase block">
              PRECISION &mdash; 002
            </span>
          </div>
        </div>

        {/* مرکز: انگشتر درخشان / مدل یا تصویر محصول */}
        <div className="w-full lg:w-1/3 flex items-center justify-center relative aspect-square max-w-[480px]">
          {/* هاله نوری پشت انگشتر */}
          <div className="absolute inset-1/4 rounded-full bg-radial from-amber-100/20 via-white/5 to-transparent blur-3xl pointer-events-none" />
          
          <div className="relative w-full h-full filter brightness-[1.08] contrast-[1.12] drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)]">
            <Image
              src="/images/ring.png"
              alt="AUREL Ring Craft"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* سمت راست: جزئیات فنی و مشخصات محصول */}
        <div className="w-full lg:w-1/3 text-left lg:text-right space-y-6">
          <div>
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#F3EFE6]/60 uppercase block">
              AUREL &mdash; CRAFT EDITION
            </span>
            <h3 className="text-2xl font-serif tracking-[0.2em] text-[#F3EFE6] uppercase mt-1">
              THE LUMIÈRE
            </h3>
            <p className="text-[11px] font-mono text-[#F3EFE6]/70 tracking-widest mt-1">
              SOLITAIRE RING &mdash; PLATINUM / DIAMOND
            </p>
          </div>

          <div className="pt-2">
            <span className="text-xl font-serif text-[#F3EFE6] block">
              $ 3,850
            </span>
          </div>

          <div className="pt-4 border-t border-[#F3EFE6]/20 inline-block lg:ml-auto">
            <p className="text-[11px] font-serif italic text-[#F3EFE6]/80 leading-relaxed max-w-xs">
              Jewelry shaped by light, material, and movement.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Craft;