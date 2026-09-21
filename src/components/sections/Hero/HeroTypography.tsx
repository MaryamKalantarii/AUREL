"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface HeroTypographyProps {
  layer: "back" | "front";
}

export function HeroTypography({ layer }: HeroTypographyProps) {
  const leftTextRef = useRef<HTMLDivElement | null>(null);
  const rightTextRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // چون لایه front چیزی render نمی‌کند،
    // نباید GSAP روی refهای null اجرا شود.
    if (layer === "front") return;

    const left = leftTextRef.current;
    const right = rightTextRef.current;

    if (!left || !right) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        [left, right],
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.6,
          delay: 0.25,
          ease: "power3.out",
        }
      );
    });

    return () => ctx.revert();
  }, [layer]);

  if (layer === "front") return null;

  return (
    <div
      className="
        absolute inset-0
        pointer-events-none
        select-none
        flex items-center justify-center
        gap-[20vw] sm:gap-[22vw] md:gap-[24vw]
        z-10
      "
      aria-hidden="true"
    >
      {/* سمت چپ */}
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

      {/* سمت راست */}
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