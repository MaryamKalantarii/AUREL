"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

// نقاط دقیق تراش‌های الماس تک‌نگین و بازتاب‌های نور پلاتین
const SOLITAIRE_SPARKLE_POSITIONS = [
  { top: "22%", left: "40%", scale: 1.1 },
  { top: "18%", left: "48%", scale: 1.45 }, // مرکز درخشش اصلی الماس
  { top: "25%", left: "57%", scale: 1.0 },
  { top: "33%", left: "34%", scale: 0.85 },
  { top: "30%", left: "49%", scale: 1.25 },
  { top: "12%", left: "54%", scale: 0.8 }, // چنگال فلزی
  { top: "84%", left: "38%", scale: 0.8 }, // انعکاس لبه پایین
];

export function HeroObject() {
  const ringWrapperRef = useRef<HTMLDivElement>(null);
  const lightSweepRef = useRef<HTMLDivElement>(null);
  const sparklesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ringWrapperRef.current) return;

    // ۱. شناوری بسیار آرام و باوقار (Breathing Float)
    gsap.to(ringWrapperRef.current, {
      y: -14,
      rotation: 0.8,
      duration: 5.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // ۲. گذر نرم نور روی پلاتین
    if (lightSweepRef.current) {
      gsap.to(lightSweepRef.current, {
        xPercent: 250,
        opacity: 0.45,
        duration: 6,
        repeat: -1,
        repeatDelay: 3,
        ease: "power2.inOut",
      });
    }

    // ۳. چشمک‌زدن ظریف تراش‌های الماس
    if (sparklesRef.current) {
      const sparkles = sparklesRef.current.querySelectorAll(".diamond-glint");
      sparkles.forEach((sparkle) => {
        gsap.to(sparkle, {
          opacity: "random(0.5, 1)",
          scale: "random(1.1, 1.5)",
          filter: "brightness(1.35)",
          duration: "random(1.2, 2.4)",
          repeat: -1,
          yoyo: true,
          delay: "random(0, 2)",
          ease: "power1.inOut",
        });
      });
    }

    // ۴. پارالاکس نرم تعاملی ماوس
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 22;
      const y = (e.clientY / innerHeight - 0.5) * 22;

      gsap.to(ringWrapperRef.current, {
        x: x * 0.8,
        y: y * 0.8 - 7,
        rotateX: -y * 0.18,
        rotateY: x * 0.18,
        duration: 1.8,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative z-20 flex items-center justify-center [perspective:1000px]">
      <div
        ref={ringWrapperRef}
        className="relative w-[310px] h-[310px] sm:w-[480px] sm:h-[480px] md:w-[590px] md:h-[590px] lg:w-[670px] lg:h-[670px] flex items-center justify-center translate-x-1 sm:translate-x-3 [transform-style:preserve-3d]"
      >
        <div className="relative w-full h-full overflow-hidden rounded-full">
          {/* Asset اصلی انگشتر بدون تغییر زاویه و شکل */}
          <Image
            src="/images/aurel-ring.png"
            alt="AUREL Solitaire Diamond Ring"
            fill
            priority
            sizes="(max-width: 768px) 80vw, 670px"
            className="object-contain drop-shadow-[0_35px_65px_rgba(0,0,0,0.95)] filter brightness-[1.02] contrast-[1.04]"
          />

          {/* گذر استودیویی نور */}
          <div
            ref={lightSweepRef}
            className="absolute -top-1/2 -left-full w-1/2 h-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-[35deg] pointer-events-none blur-sm"
          />
        </div>

        {/* Diamond Sparkle Layer */}
        <div ref={sparklesRef} className="absolute inset-0 pointer-events-none">
          {SOLITAIRE_SPARKLE_POSITIONS.map((pos, idx) => (
            <div
              key={idx}
              className="diamond-glint absolute opacity-25 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                top: pos.top,
                left: pos.left,
                transform: `scale(${pos.scale})`,
              }}
            >
              <div className="relative flex items-center justify-center">
                <div className="absolute w-[20px] h-[1.2px] bg-white rounded-full blur-[0.5px] shadow-[0_0_8px_#ffffff]" />
                <div className="absolute h-[20px] w-[1.2px] bg-white rounded-full blur-[0.5px] shadow-[0_0_8px_#ffffff]" />
                <div className="w-[3.5px] h-[3.5px] bg-white rounded-full shadow-[0_0_10px_3px_rgba(255,255,255,0.9)]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}