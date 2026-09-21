"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroShine } from "./HeroShine";

gsap.registerPlugin(ScrollTrigger);

export function HeroRing() {
  const ringContainerRef = useRef<HTMLDivElement>(null);
  const ringImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!ringContainerRef.current || !ringImageRef.current) return;

      // 1. انیمیشن ورودی سنگین و لوکس
      gsap.fromTo(
        ringContainerRef.current,
        { y: -120, scale: 1.25, opacity: 0 },
        { y: 0, scale: 1.1, opacity: 1, duration: 1.8, ease: "power3.out" }
      );

      // 2. اسکرول تریگر برای اندازه شدن دقیق
      gsap.to(ringContainerRef.current, {
        scale: 1,
        y: 30,
        scrollTrigger: {
          trigger: ringContainerRef.current,
          start: "top center",
          end: "bottom top",
          scrub: 1,
        },
      });

      // 3. پارالاکس ماوس
      const handleMouseMove = (e: MouseEvent) => {
        const { innerWidth, innerHeight } = window;
        const mouseX = (e.clientX / innerWidth - 0.5) * 2;
        const mouseY = (e.clientY / innerHeight - 0.5) * 2;

        gsap.to(ringImageRef.current, {
          rotateY: mouseX * 6,
          rotateX: -mouseY * 6,
          x: mouseX * 10,
          y: mouseY * 10,
          duration: 1.2,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, ringContainerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ringContainerRef}
      className="
        relative z-20
        w-[220px] sm:w-[290px] md:w-[350px] lg:w-[380px]
        aspect-square
        flex items-center justify-center
        pointer-events-none select-none
        [perspective:1000px]
      "
    >
      {/* 🔹 مشخصات لوکس سمت چپ (Badge 1) */}
      <div className="hidden lg:flex absolute -left-28 top-1/3 flex-col gap-1 text-left border-l border-white/20 pl-4 pointer-events-auto">
        <span className="text-[9px] tracking-[0.25em] text-[#E8E5DF]/40 font-mono uppercase">DIAMOND</span>
        <span className="text-[11px] tracking-[0.2em] text-[#F7F5F0] font-light">2.50 CARAT</span>
      </div>

      {/* 🔹 مشخصات لوکس سمت راست (Badge 2) */}
      <div className="hidden lg:flex absolute -right-28 bottom-1/3 flex-col gap-1 text-left border-l border-white/20 pl-4 pointer-events-auto">
        <span className="text-[9px] tracking-[0.25em] text-[#E8E5DF]/40 font-mono uppercase">CRAFT</span>
        <span className="text-[11px] tracking-[0.2em] text-[#F7F5F0] font-light">18K WHITE GOLD</span>
      </div>

      <div
        ref={ringImageRef}
        className="relative w-full h-full flex items-center justify-center [transform-style:preserve-3d]"
      >
        {/* افکت درخشش تاج الماس */}
        <HeroShine />

        <Image
          src="/images/ring.png"
          alt="Aurel Lumiere Solitaire Ring"
          fill
          priority
          sizes="(max-width: 768px) 290px, 380px"
          className="object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
        />

        {/* 🔹 سایه سه‌بعدی نرم روی زمین زیر پایه انگشتر */}
        <div className="absolute -bottom-6 w-[70%] h-6 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.85)_0%,_transparent_75%)] blur-md pointer-events-none" />
      </div>
    </div>
  );
}