
"use client";

import React, { useState } from "react";
import Image from "next/image";

interface CollectionItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  materials: string;
  positionClass: string;
}

const COLLECTION_ITEMS: CollectionItem[] = [
  {
    id: "ring",
    number: "01",
    title: "NOCTURNE",
    subtitle: "SOLITAIRE RING",
    materials: "PLATINUM · DIAMOND",
    positionClass: "left-[14%] bottom-[12%]",
  },
  {
    id: "necklace",
    number: "02",
    title: "ÉCLAT",
    subtitle: "DIAMOND NECKLACE",
    materials: "PLATINUM · DIAMOND",
    positionClass: "left-[45%] bottom-[12%]",
  },
  {
    id: "earrings",
    number: "03",
    title: "FORMA",
    subtitle: "SCULPTURAL EARRINGS",
    materials: "WHITE GOLD · DIAMOND",
    positionClass: "left-[76%] bottom-[12%]",
  },
];

export function CollectionSection() {
  const [activeIndex, setActiveIndex] = useState(1);

  const activeItem = COLLECTION_ITEMS[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % COLLECTION_ITEMS.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + COLLECTION_ITEMS.length) % COLLECTION_ITEMS.length
    );
  };

  return (
    <section
      id="collection"
      className="
        relative isolate w-full
        h-[100svh] min-h-[680px]
        md:min-h-[750px]
        overflow-hidden
        bg-[#0B0A09]
        text-[#F7F5F0]
        select-none
      "
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#0B0A09]">
        <Image
          src="/images/bd8e548b-c2ec-4e4b-8a4f-faef911aab61.png"
          alt="AUREL Fine Jewelry Collection"
          fill
          priority
          sizes="100vw"
          className="
            object-contain
            object-center
            brightness-[0.9]
            contrast-[1.05]
            md:object-cover
            md:object-center
          "
        />

        {/* Cinematic overlays */}
        <div
          className="
            pointer-events-none absolute inset-0
            bg-gradient-to-b
            from-[#0B0A09]/65
            via-transparent
            to-[#0B0A09]/70
            md:from-[#0B0A09]/60
            md:via-transparent
            md:to-[#0B0A09]/90
          "
        />

        <div
          className="
            pointer-events-none absolute inset-0
            bg-gradient-to-r
            from-[#0B0A09]/20
            via-transparent
            to-[#0B0A09]/20
          "
        />

        {/* Subtle mobile vignette */}
        <div
          className="
            pointer-events-none absolute inset-0
            bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(11,10,9,0.35)_100%)]
            md:hidden
          "
        />
      </div>

      {/* Top editorial heading */}
      <div
        className="
          absolute z-10
          left-5 top-7
          max-w-[260px]
          space-y-3
          sm:left-8 sm:top-10
          sm:max-w-xs
          md:left-16 md:top-12
        "
      >
        <div className="flex items-center gap-3">
          <span className="font-mono text-[9px] tracking-[0.3em] text-[#B6A58C] sm:text-[10px]">
            04
          </span>

          <span className="h-px w-6 bg-[#B6A58C]/50" />
        </div>

        <h2
          className="
            font-serif font-extralight
            text-[clamp(1.8rem,7vw,2.5rem)]
            leading-[1.08]
            tracking-[0.1em]
            uppercase
            sm:text-4xl
            lg:text-5xl
            lg:tracking-[0.15em]
          "
        >
          THE
          <br />
          COLLECTION
        </h2>

        <p
          className="
            max-w-[220px]
            pt-1
            font-serif font-light
            text-[10px]
            leading-[1.8]
            tracking-[0.08em]
            text-[#E4E1DA]/75
            sm:text-[11px]
            sm:tracking-[0.12em]
          "
        >
          Objects shaped by light,
          <br />
          designed to be remembered.
        </p>
      </div>

      {/* Desktop product labels */}
      <div className="pointer-events-none absolute inset-0 z-10 hidden md:block">
        {COLLECTION_ITEMS.map((item, index) => (
          <div
            key={item.id}
            className={`
              absolute ${item.positionClass}
              space-y-1
              transition-opacity duration-500
              ${activeIndex === index ? "opacity-100" : "opacity-65"}
            `}
          >
            <div className="mb-1 flex items-center gap-2">
              <span className="font-mono text-[10px] tracking-[0.2em] text-[#B6A58C]">
                {item.number}
              </span>

              <span className="h-px w-5 bg-[#B6A58C]/50" />
            </div>

            <h3 className="font-serif text-lg font-light tracking-[0.2em] text-[#F7F5F0]">
              {item.title}
            </h3>

            <p className="font-mono text-[9px] tracking-[0.15em] text-[#E4E1DA]/65">
              {item.subtitle}
            </p>

            <p className="pt-0.5 font-mono text-[8px] tracking-[0.18em] text-[#B6A58C]/90">
              {item.materials}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile active product information */}
      <div
        className="
          absolute z-10
          bottom-[132px]
          left-5 right-16
          md:hidden
        "
        aria-live="polite"
      >
        <div className="mb-3 flex items-center gap-2">
          <span className="font-mono text-[9px] tracking-[0.25em] text-[#B6A58C]">
            {activeItem.number}
          </span>

          <span className="h-px w-7 bg-[#B6A58C]/50" />
        </div>

        <h3 className="font-serif text-2xl font-light tracking-[0.2em]">
          {activeItem.title}
        </h3>

        <p className="mt-1 font-mono text-[9px] tracking-[0.17em] text-[#E4E1DA]/75">
          {activeItem.subtitle}
        </p>

        <p className="mt-2 font-mono text-[8px] tracking-[0.17em] text-[#B6A58C]">
          {activeItem.materials}
        </p>
      </div>

      {/* Right pagination indicator */}
      <div
        className="
          absolute z-10
          right-5 top-1/2
          -translate-y-1/2
          flex flex-col items-center gap-5
          sm:right-8
          md:right-12 md:gap-6
        "
      >
        <span className="font-mono text-[8px] tracking-[0.15em] text-[#E4E1DA]/55">
          01
        </span>

        <div className="relative h-16 w-px bg-[#F7F5F0]/20 sm:h-20">
          <div
            className="
              absolute left-0 w-full
              bg-[#B6A58C]
              transition-[top] duration-500 ease-out
            "
            style={{
              height: `${100 / COLLECTION_ITEMS.length}%`,
              top: `${(activeIndex * 100) / COLLECTION_ITEMS.length}%`,
            }}
          />
        </div>

        <span className="font-mono text-[8px] tracking-[0.15em] text-[#E4E1DA]/55">
          03
        </span>
      </div>

      {/* Bottom navigation */}
      <div
        className="
          absolute z-20
          bottom-6 left-5
          flex items-center gap-4
          sm:bottom-8 sm:left-8 sm:gap-6
          md:bottom-10 md:left-16
        "
      >
        <button
          type="button"
          onClick={handlePrev}
          className="
            flex h-10 w-8 items-center justify-center
            text-lg text-[#E4E1DA]/75
            transition-colors
            hover:text-[#F7F5F0]
            focus-visible:outline
            focus-visible:outline-1
            focus-visible:outline-[#B6A58C]
          "
          aria-label="Previous collection item"
        >
          ←
        </button>

        <span
          className="
            whitespace-nowrap
            font-mono text-[9px]
            tracking-[0.2em]
            text-[#E4E1DA]/85
            sm:text-[10px]
            sm:tracking-[0.3em]
          "
          aria-live="polite"
        >
          0{activeIndex + 1} / 03
        </span>

        <button
          type="button"
          onClick={handleNext}
          className="
            flex h-10 w-8 items-center justify-center
            text-lg text-[#E4E1DA]/75
            transition-colors
            hover:text-[#F7F5F0]
            focus-visible:outline
            focus-visible:outline-1
            focus-visible:outline-[#B6A58C]
          "
          aria-label="Next collection item"
        >
          →
        </button>
      </div>

      {/* Small bottom-right signature */}
      <div
        className="
          absolute bottom-9 right-5 z-10
          hidden sm:block
          md:right-12
        "
      >
        <span className="font-mono text-[8px] tracking-[0.3em] text-[#B6A58C]/65">
          AUREL · OBJECTS OF LIGHT
        </span>
      </div>
    </section>
  );
}

export default CollectionSection;
