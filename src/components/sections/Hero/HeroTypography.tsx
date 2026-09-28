"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export function HeroTypography() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // انیمیشن ورود تایپوگرافی هنگام لود صفحه
      gsap.fromTo(
        tagRef.current,
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 1.4, delay: 0.3, ease: "power3.out" }
      );

      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 1.8, delay: 0.5, ease: "power3.out" }
      );
    });

    // افکت پارالاکس تایپوگرافی با موس
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * -12;
      const y = (e.clientY / innerHeight - 0.5) * -12;

      if (containerRef.current) {
        gsap.to(containerRef.current, {
          x: x,
          y: y,
          duration: 1.5,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none select-none z-10 flex flex-col justify-center items-start px-8 sm:px-16 md:px-24"
    >
      {/* برچسب ادیتوریال بالای لوگو */}
      <div
        ref={tagRef}
        className="flex items-center gap-4 mb-3 sm:mb-6 pl-2"
      >
        <span className="w-8 sm:w-12 h-[1px] bg-[#E4E1DA]/40" />
        <span className="text-[10px] sm:text-[12px] font-mono tracking-[0.35em] text-[#E4E1DA]/80 uppercase">
          OBJECTS OF LIGHT.
        </span>
      </div>

      {/* نام برند AUREL */}
      <h1
        ref={titleRef}
        className="
          font-serif font-light leading-none tracking-[0.22em] pl-[0.22em]
          text-[clamp(4.5rem,14vw,12.5rem)]
          text-transparent bg-clip-text
          bg-gradient-to-b from-[#F7F5F0] via-[#E4E1DA]/90 to-[#B8B6B0]/40
          drop-shadow-[0_10px_35px_rgba(0,0,0,0.5)]
        "
      >
        AUREL
      </h1>
    </div>
  );
}