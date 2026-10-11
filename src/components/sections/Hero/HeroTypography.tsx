
"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

export function HeroTypography() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (reduceMotion) {
        gsap.set(
          [tagRef.current, titleRef.current, copyRef.current],
          { opacity: 1, y: 0, scale: 1 }
        );
        return;
      }

      gsap.fromTo(
        tagRef.current,
        { opacity: 0, y: -12 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 24, scale: 0.985 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.4,
          delay: 0.35,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        copyRef.current,
        { opacity: 0, y: 14 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.65,
          ease: "power3.out",
        }
      );
    }, container);

    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    const handleMouseMove = (event: MouseEvent) => {
      if (
        !finePointer.matches ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return;
      }

      gsap.to(container, {
        x: (event.clientX / window.innerWidth - 0.5) * -8,
        y: (event.clientY / window.innerHeight - 0.5) * -8,
        duration: 1.5,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    if (finePointer.matches && !reduceMotion) {
      window.addEventListener("mousemove", handleMouseMove, {
        passive: true,
      });
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-x-0 top-[18%] z-10 flex flex-col items-center px-4 text-center select-none sm:inset-y-0 sm:top-0 sm:items-start sm:justify-center sm:px-16 sm:text-left md:px-24"
    >
      <div
        ref={tagRef}
        className="mb-3 flex items-center gap-2 sm:mb-6 sm:gap-4 sm:pl-2"
      >
        <span className="h-px w-5 bg-[#E4E1DA]/50 sm:w-12" />

        <span className="whitespace-nowrap font-mono text-[8px] uppercase tracking-[0.2em] text-[#E4E1DA]/90 sm:text-xs sm:tracking-[0.35em]">
          OBJECTS OF LIGHT.
        </span>

        <span className="h-px w-5 bg-[#E4E1DA]/50 sm:hidden" />
      </div>

      <h1
        ref={titleRef}
        className="bg-gradient-to-b from-[#F7F5F0] via-[#E4E1DA]/90 to-[#B8B6B0]/40 bg-clip-text pl-[0.12em] font-serif text-[clamp(3.2rem,15vw,5.2rem)] font-light leading-[0.9] tracking-[0.12em] text-transparent drop-shadow-[0_10px_35px_rgba(0,0,0,0.5)] sm:pl-[0.22em] sm:text-[clamp(4.5rem,14vw,12.5rem)] sm:tracking-[0.22em]"
      >
        AUREL
      </h1>

      <p
        ref={copyRef}
        className="mt-5 max-w-[290px] text-[10px] font-light leading-[1.9] tracking-[0.08em] text-[#F7F5F0]/80 sm:mt-8 sm:max-w-[340px] sm:text-sm sm:leading-7"
      >
        Jewelry shaped by light,
        <br className="sm:hidden" /> defined by feeling.

        <span className="mt-2 block text-[8px] uppercase tracking-[0.19em] text-[#E4E1DA]/60 sm:text-[10px]">
          A study in form, material & permanence
        </span>
      </p>

      <Link
        href="/collections"
        className="pointer-events-auto mt-6 inline-flex items-center gap-4 border-b border-white/40 pb-2 text-[9px] tracking-[0.2em] text-[#F7F5F0] transition-colors hover:border-white sm:mt-8"
      >
        DISCOVER THE COLLECTION
        <span className="text-sm">↗</span>
      </Link>
    </div>
  );
}
