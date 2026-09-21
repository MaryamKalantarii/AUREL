"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export function HeroTypography() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 30, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 2,
          delay: 0.2,
          ease: "power3.out",
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={textRef}
      className="
        absolute inset-0 pointer-events-none select-none
        flex items-center justify-center z-10
      "
    >
      <h1
        className="
          font-serif font-light leading-none tracking-[0.25em]
          text-[clamp(4.5rem,13vw,12rem)]
          /* ایجاد حالت نورانی شیک و شفافیت عالی برای پشت سوژه */
          text-transparent bg-clip-text
          bg-gradient-to-b from-[#F7F5F0]/30 via-[#F7F5F0]/15 to-transparent
          drop-shadow-[0_10px_30px_rgba(255,255,255,0.03)]
        "
      >
        AUREL
      </h1>
    </div>
  );
}