// src/components/sections/Hero/HeroRing.tsx
"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export function HeroRing() {
  const ringRef = useRef<HTMLDivElement>(null);
  const sparklesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ringRef.current) return;

    const ctx = gsap.context(() => {
      // ۱. شناوری فوق‌العاده نرم انگشتر
      gsap.to(ringRef.current, {
        y: -10,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // ۲. چشمک زدن داینامیک شاین‌های روی بدنه و الماس
      if (sparklesRef.current) {
        const glints = sparklesRef.current.querySelectorAll(".ring-glint");
        glints.forEach((glint) => {
          gsap.to(glint, {
            scale: "random(0.8, 1.4)",
            opacity: "random(0.4, 1)",
            duration: "random(1.2, 2.5)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: "random(0, 1.5)",
          });
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative z-30 flex items-center justify-center pointer-events-none select-none w-full h-full">
      <div
        ref={ringRef}
        className="relative w-[320px] sm:w-[440px] md:w-[520px] lg:w-[560px] aspect-square flex items-center justify-center"
      >
        {/* ۱. هاله نوری طلایی پشت انگشتر برای ایجاد کنتراست شدید */}
        <div className="absolute inset-1/4 rounded-full bg-radial from-amber-200/20 via-amber-500/05 to-transparent blur-3xl pointer-events-none -z-10" />

        {/* ۲. عکس انگشتر با فیلتر افزایش شدت نور، بلوم و گرمای بدنه */}
        <div className="relative w-full h-full filter brightness-[1.12] contrast-[1.18] drop-shadow-[0_0_35px_rgba(255,215,150,0.25)] drop-shadow-[0_30px_60px_rgba(0,0,0,0.95)]">
          <Image
            src="/images/ring.png"
            alt="AUREL Solitaire Diamond Ring"
            fill
            priority
            sizes="(max-width: 640px) 320px, (max-width: 1024px) 480px, 560px"
            className="object-contain"
          />
        </div>

        {/* ۳. نقاط درخشش اختصاصی روی نقاط پرنور انگشتر (مطابق تصویر) */}
        <div ref={sparklesRef} className="absolute inset-0 pointer-events-none z-20">
          {/* درخشش شدید روی تاج الماس (بالا راست) */}
          <div className="ring-glint absolute top-[22%] right-[44%] w-10 h-10 mix-blend-screen">
            <div className="absolute inset-0 m-auto w-3 h-3 rounded-full bg-white shadow-[0_0_20px_6px_rgba(255,255,255,1)]" />
            <div className="absolute top-1/2 left-0 w-full h-[1.5px] -translate-y-1/2 bg-gradient-to-r from-transparent via-white to-transparent" />
            <div className="absolute top-0 left-1/2 h-full w-[1.5px] -translate-x-1/2 bg-gradient-to-b from-transparent via-white to-transparent" />
          </div>

          {/* درخشش طلایی روی بدنه پلاتین (پایین چپ) */}
          <div className="ring-glint absolute bottom-[38%] left-[36%] w-8 h-8 mix-blend-screen">
            <div className="absolute inset-0 m-auto w-2 h-2 rounded-full bg-amber-100 shadow-[0_0_18px_5px_rgba(255,210,140,0.9)]" />
            <div className="absolute top-1/2 left-0 w-full h-[1px] -translate-y-1/2 bg-gradient-to-r from-transparent via-amber-200 to-transparent" />
          </div>

          {/* درخشش طلایی لبه پایین حلقه */}
          <div className="ring-glint absolute bottom-[22%] left-[48%] w-8 h-8 mix-blend-screen">
            <div className="absolute inset-0 m-auto w-2 h-2 rounded-full bg-amber-100 shadow-[0_0_15px_4px_rgba(255,220,160,0.85)]" />
          </div>
        </div>
      </div>
    </div>
  );
}