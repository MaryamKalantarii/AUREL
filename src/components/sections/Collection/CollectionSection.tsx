"use client";

import React, { useState } from "react";
import Image from "next/image";

interface CollectionItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  materials: string;
  positionClass: string; // موقعیت متن زیر هر قطعه
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

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % COLLECTION_ITEMS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? COLLECTION_ITEMS.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="collection"
      className="relative w-full h-screen min-h-[750px] bg-[#0B0A09] text-[#F7F5F0] overflow-hidden select-none"
    >
      {/* پس‌زمینه اصلی: تصویر ۴ قطعه جواهر روی پلتفرم معماری */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src="/images/bd8e548b-c2ec-4e4b-8a4f-faef911aab61.png"
          alt="AUREL Collection"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.9] contrast-[1.05]"
        />
        {/* سایه ملایم جهت خوانایی متون */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A09]/90 via-transparent to-[#0B0A09]/60 pointer-events-none" />
      </div>

      {/* ۱. بخش بالا سمت چپ: تیتر اصلی THE COLLECTION */}
      <div className="absolute top-12 left-8 md:left-16 z-10 space-y-3 max-w-xs">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#B6A58C]">
            04
          </span>
          <span className="w-6 h-[1px] bg-[#B6A58C]/40" />
        </div>

        <h2 className="font-serif font-extralight text-3xl md:text-4xl lg:text-5xl tracking-[0.15em] leading-[1.1] text-[#F7F5F0] uppercase">
          THE <br />
          COLLECTION
        </h2>

        <p className="font-serif text-[11px] tracking-[0.15em] text-[#E4E1DA]/60 leading-relaxed font-light pt-2">
          Objects shaped by light, <br />
          designed to be remembered.
        </p>
      </div>

      {/* ۲. برچسب‌های متنی زیر هر قطعه جواهر */}
      <div className="hidden md:block absolute inset-0 z-10 pointer-events-none">
        {COLLECTION_ITEMS.map((item) => (
          <div
            key={item.id}
            className={`absolute ${item.positionClass} space-y-1 text-left transition-opacity duration-500`}
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-[10px] text-[#B6A58C] tracking-[0.2em]">
                {item.number}
              </span>
              <span className="w-5 h-[1px] bg-[#B6A58C]/40" />
            </div>

            <h3 className="font-serif text-lg tracking-[0.25em] text-[#F7F5F0] uppercase font-light">
              {item.title}
            </h3>

            <p className="font-mono text-[9px] tracking-[0.2em] text-[#E4E1DA]/60 uppercase">
              {item.subtitle}
            </p>

            <p className="font-mono text-[8px] tracking-[0.25em] text-[#B6A58C]/80 uppercase pt-0.5">
              {item.materials}
            </p>
          </div>
        ))}
      </div>

      {/* ۳. نشانگر عمودی سمت راست (Pagination Bar) */}
      <div className="absolute right-8 md:right-12 top-1/2 -translate-y-1/2 z-10 flex flex-col items-center space-y-6">
        <span className="font-mono text-[9px] tracking-[0.2em] text-[#E4E1DA]/40">
          01
        </span>
        <div className="relative w-[1px] h-20 bg-[#F7F5F0]/15">
          <div
            className="absolute left-0 w-full bg-[#B6A58C] transition-all duration-500"
            style={{
              height: "33.33%",
              top: `${activeIndex * 33.33}%`,
            }}
          />
        </div>
        <span className="font-mono text-[9px] tracking-[0.2em] text-[#E4E1DA]/40">
          03
        </span>
      </div>

      {/* ۴. کنترل‌های ناوبری پایین سمت چپ (Arrows) */}
      <div className="absolute bottom-10 left-8 md:left-16 z-10 flex items-center gap-6">
        <div className="flex items-center gap-4">
          <button
            onClick={handlePrev}
            className="text-[#E4E1DA]/70 hover:text-[#F7F5F0] transition-colors p-2 -ml-2"
            aria-label="Previous Item"
          >
            ←
          </button>

          <span className="font-mono text-[10px] tracking-[0.3em] text-[#E4E1DA]/80">
            0{activeIndex + 1} / 03
          </span>

          <button
            onClick={handleNext}
            className="text-[#E4E1DA]/70 hover:text-[#F7F5F0] transition-colors p-2"
            aria-label="Next Item"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export default CollectionSection;