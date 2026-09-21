"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export function HeroOrbit() {
  const orbitRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!orbitRef.current) return;

      // 1. چرخش مداوم و بسیار نرم مدار دور انگشتر
      gsap.to(orbitRef.current, {
        rotateZ: 360,
        duration: 35,
        repeat: -1,
        ease: "none",
      });

      // 2. انیمیشن شناوری ذرات نورانی
      if (particlesRef.current) {
        Array.from(particlesRef.current.children).forEach((particle, index) => {
          gsap.to(particle, {
            y: `-=${15 + index * 5}`,
            x: `+=${index % 2 === 0 ? 10 : -10}`,
            opacity: 0.8,
            duration: 3 + index * 0.8,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.3,
          });
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center z-15">
      {/* 1. 3D Elliptical Orbit Ring */}
      <div
        ref={orbitRef}
        className="
          w-[380px] sm:w-[480px] md:w-[580px] aspect-square
          rounded-full border border-white/10
          [transform:rotateX(72deg)_rotateY(-15deg)]
          shadow-[0_0_15px_rgba(255,255,255,0.03)]
          relative flex items-center justify-center
        "
      >
        {/* یک نقطه نورانی کوچک روی محیط مدار */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/80 shadow-[0_0_8px_#ffffff]" />
      </div>

      {/* 2. Ambient Dust Particles (ذرات معلق نورانی) */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[35%] left-[42%] w-1 h-1 bg-white/40 rounded-full blur-[0.5px]" />
        <div className="absolute top-[58%] left-[58%] w-1.5 h-1.5 bg-white/30 rounded-full blur-[0.5px]" />
        <div className="absolute top-[48%] left-[38%] w-1 h-1 bg-white/50 rounded-full blur-[0.5px]" />
        <div className="absolute top-[62%] left-[45%] w-1 h-1 bg-white/25 rounded-full blur-[0.5px]" />
        <div className="absolute top-[30%] left-[55%] w-1 h-1 bg-white/35 rounded-full blur-[0.5px]" />
      </div>
    </div>
  );
}