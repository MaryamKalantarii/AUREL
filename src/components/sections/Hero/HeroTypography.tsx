"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface HeroTypographyProps {
  layer: "back" | "front";
}

export function HeroTypography({ layer }: HeroTypographyProps) {
  const leftTextRef = useRef<HTMLDivElement>(null);
  const rightTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      [leftTextRef.current, rightTextRef.current],
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.6, delay: 0.25, ease: "power3.out" }
    );
  }, []);

  // برای جلوگیری از تداخل و شلوغی، تمام متن در لایه پشت انگشتر رندر می‌شود
  if (layer === "front") return null;

  return (
    <div
      className="
        absolute inset-0
        pointer-events-none
        select-none
        flex items-center justify-center
        /* 💡 فاصله دقیق و متوازن بین AUR و EL */
        gap-[20vw] sm:gap-[22vw] md:gap-[24vw]
        z-10
      "
      aria-hidden={false}
    >
      {/* بخش سمت چپ - AUR */}
      <div
        ref={leftTextRef}
        className="
          font-serif font-light text-[#F7F5F0]
          text-[clamp(4rem,9.5vw,9rem)]
          leading-none
          tracking-[0.18em]
        "
      >
        AUR
      </div>

      {/* بخش سمت راست - EL */}
      <div
        ref={rightTextRef}
        className="
          font-serif font-light text-[#F7F5F0]
          text-[clamp(4rem,9.5vw,9rem)]
          leading-none
          tracking-[0.18em]
        "
      >
        EL
      </div>
    </div>
  );
}