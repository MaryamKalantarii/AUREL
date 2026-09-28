"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export function HeroBackground() {
  const bgRef = useRef<HTMLDivElement>(null);
  const rayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ۱. انیمیشن زوم و تنفس آرام پس‌زمینه
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        scale: 1.04,
        duration: 14,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    // ۲. افکت پارالاکس شناور بر اساس حرکت موس
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 18;
      const y = (e.clientY / innerHeight - 0.5) * 18;

      if (bgRef.current) {
        gsap.to(bgRef.current, {
          x: x,
          y: y,
          duration: 1.8,
          ease: "power2.out",
        });
      }

      if (rayRef.current) {
        gsap.to(rayRef.current, {
          x: -x * 0.8,
          y: -y * 0.8,
          duration: 2,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-[#111111]">
      {/* تصویر اصلی کمپین لوکس */}
      <div
        ref={bgRef}
        className="relative w-[106%] h-[106%] -left-[3%] -top-[3%] filter brightness-[1.02] contrast-[1.08]"
      >
        <Image
          src="/images/hhh.jpg"
          alt="AUREL High Jewelry Editorial Model"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center md:object-[65%_center]"
        />
      </div>

      {/* پرتو نوری قطری ملایم در بالای صحنه */}
      <div
        ref={rayRef}
        className="absolute -top-10 left-10 w-[70vw] h-[90vh] bg-gradient-to-br from-[#F7F5F0]/10 via-[#E4E1DA]/5 to-transparent rotate-[-18deg] blur-3xl mix-blend-screen opacity-70"
      />

      {/* افکت Film Grain برای ساختار ادیتوریال مجله‌ای */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' h='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* وینیت (Vignette) اطراف کادر برای افزایش تمرکز بر روی تصویر و متون */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#111111]/30 to-[#111111]/90 pointer-events-none" />
    </div>
  );
}