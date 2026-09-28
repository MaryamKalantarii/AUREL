"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ColumnData {
  id: string;
  tagline: string;
  title: string[];
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

const COLUMNS_DATA: ColumnData[] = [
  {
    id: "01",
    tagline: "TIMELESS CLASSICS",
    title: ["ICONIC", "RINGS"],
    description: "Symbols of love,\ncrafted for eternity.",
    buttonText: "VIEW COLLECTION",
    imageSrc: "/images/ring.jpg",
    imageAlt: "AUREL Iconic Diamond Solitaire Ring",
  },
  {
    id: "02",
    tagline: "FINE NECKLACES",
    title: ["ELEGANCE", "IN EVERY", "DETAIL"],
    description:
      "Designed to move with you,\nfrom everyday moments to\nextraordinary ones.",
    buttonText: "DISCOVER",
    imageSrc: "/images/necklace.jpg",
    imageAlt: "AUREL Fine Diamond Necklace",
  },
  {
    id: "03",
    tagline: "OUR CRAFT",
    title: ["ARTISANAL", "EXCELLENCE"],
    description:
      "Every piece is a result of\npassion, precision, and\ngenerations of expertise.",
    buttonText: "LEARN MORE",
    imageSrc: "/images/bracelet.jpg",
    imageAlt: "AUREL Artisanal Platinum Bracelet",
  },
  {
    id: "04",
    tagline: "HIGH JEWELRY",
    title: ["PURE", "LUMINESCENCE"],
    description:
      "A harmonious blend of\nrare diamonds and\nmasterful proportion.",
    buttonText: "EXPLORE MORE",
    imageSrc: "/images/earrings.jpg",
    imageAlt: "AUREL High Jewelry Diamond Collection",
  },
];

export function CraftSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const columnsRef = useRef<(HTMLDivElement | null)[]>([]);

  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const handleChange = () => setReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Staggered Entrance ScrollTrigger Animation
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const validCols = columnsRef.current.filter(Boolean);

      gsap.fromTo(
        validCols,
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        min-h-[550px]
        h-[68vh]
        max-h-[850px]
        overflow-hidden
        select-none
        bg-[#100F0E]
        text-[#F3EFE6]
      "
    >
      {/* ------------------------------------------------------------- */}
      {/* لایه پس‌زمینه اصلی */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/back.jpg"
          alt="AUREL Atmosphere Background"
          fill
          priority
          className="object-cover object-center brightness-[0.38] contrast-[1.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#100F0E]/70 via-[#100F0E]/30 to-[#100F0E]/85" />
      </div>

      {/* ------------------------------------------------------------- */}
      {/* گرید ۴ ستونه Editorial Luxury */}
      {/* ------------------------------------------------------------- */}
      <div className="relative z-10 w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 lg:divide-x divide-white/[0.12]">
        {COLUMNS_DATA.map((col, idx) => (
          <div
            key={col.id}
            ref={(el) => {
              columnsRef.current[idx] = el;
            }}
            className="
              group
              relative
              w-full
              h-full
              min-h-[50vh]
              lg:min-h-full
              flex
              flex-col
              justify-end
              p-6
              md:p-8
              lg:p-10
              xl:p-12
              overflow-hidden
              cursor-pointer
            "
          >
            {/* تصویر Full Bleed هر ستون */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image
                src={col.imageSrc}
                alt={col.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="
                  object-cover
                  object-center
                  brightness-[0.72]
                  contrast-[1.08]
                  transition-all
                  duration-700
                  ease-out
                  group-hover:scale-[1.04]
                  group-hover:brightness-[0.85]
                "
              />
              {/* اورلی گرادیان برای خوانایی متون */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#100F0E] via-[#100F0E]/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-75" />
            </div>

            {/* محتوای متنی و دکمه */}
            <div className="relative z-10 space-y-5 transform transition-transform duration-500 group-hover:-translate-y-1">
              {/* Tagline */}
              <span className="block text-[9px] font-mono tracking-[0.35em] text-[#A89379] uppercase">
                {col.tagline}
              </span>

              {/* Heading اصلی */}
              <h3 className="font-serif font-light text-2xl md:text-3xl lg:text-3xl xl:text-[2.2rem] leading-[1.08] tracking-[-0.02em] text-[#F3EFE6]">
                {col.title.map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < col.title.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h3>

              {/* توضیحات */}
              <p className="text-[9px] md:text-[10px] font-light tracking-[0.18em] leading-[1.75] text-[#D8CCB8] uppercase whitespace-pre-line max-w-xs">
                {col.description}
              </p>

              {/* دکمه اختصاصی دایره‌ای */}
              <div className="pt-2">
                <div className="inline-flex items-center gap-3.5 group/btn">
                  <div
                    className="
                      w-8
                      h-8
                      rounded-full
                      border
                      border-[#A89379]/60
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-500
                      group-hover:border-[#F3EFE6]
                      group-hover:bg-[#F3EFE6]/10
                    "
                  >
                    <span className="text-xs text-[#F3EFE6] transform transition-transform duration-300 group-hover:translate-x-0.5">
                      →
                    </span>
                  </div>
                  <span className="text-[8.5px] font-mono tracking-[0.28em] text-[#D8CCB8] uppercase transition-colors duration-300 group-hover:text-[#F3EFE6]">
                    {col.buttonText}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CraftSection;