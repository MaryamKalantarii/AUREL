
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

  // The elements are <article>, so HTMLElement is the appropriate type.
  const columnsRef = useRef<(HTMLElement | null)[]>([]);

  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const updateMotionPreference = () => {
      setReducedMotion(mediaQuery.matches);
    };

    updateMotionPreference();

    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const validColumns = columnsRef.current.filter(
        (column): column is HTMLElement => column !== null
      );

      if (reducedMotion) {
        gsap.set(validColumns, {
          opacity: 1,
          y: 0,
        });

        return;
      }

      gsap.fromTo(
        validColumns,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
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
        relative isolate w-full
        overflow-hidden select-none
        bg-[#100F0E] text-[#F3EFE6]
      "
    >
      {/* Main background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/images/back.jpg"
          alt="AUREL Atmosphere Background"
          fill
          priority
          sizes="100vw"
          className="
            object-cover object-center
            brightness-[0.38] contrast-[1.15]
          "
        />

        <div
          className="
            absolute inset-0
            bg-gradient-to-b
            from-[#100F0E]/75
            via-[#100F0E]/40
            to-[#100F0E]/90
          "
        />
      </div>

      {/* Responsive editorial grid */}
      <div
        className="
          relative z-10 grid w-full
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          divide-y divide-white/[0.12]
          sm:divide-y-0
          sm:divide-x sm:divide-white/[0.12]
        "
      >
        {COLUMNS_DATA.map((col, idx) => (
          <article
            key={col.id}
            ref={(el) => {
              columnsRef.current[idx] = el;
            }}
            className="
              group relative isolate
              flex w-full flex-col justify-end
              min-h-[440px]
              h-[70svh]
              max-h-[760px]
              overflow-hidden
              px-6 py-8
              sm:min-h-[460px]
              sm:h-[58svh]
              sm:px-6 sm:py-8
              md:min-h-[500px]
              md:px-8 md:py-9
              lg:min-h-[600px]
              lg:h-[72vh]
              lg:px-5 lg:py-8
              xl:px-8 xl:py-10
              2xl:px-10 2xl:py-12
            "
          >
            {/* Full-bleed image */}
            <div className="absolute inset-0 z-[-1] overflow-hidden">
              <Image
                src={col.imageSrc}
                alt={col.imageAlt}
                fill
                sizes="
                  (max-width: 639px) 100vw,
                  (max-width: 1023px) 50vw,
                  (max-width: 1535px) 25vw,
                  25vw
                "
                className="
                  object-cover object-center
                  brightness-[0.72] contrast-[1.08]
                  transition-transform duration-700 ease-out
                  motion-safe:group-hover:scale-[1.04]
                  motion-safe:group-hover:brightness-[0.85]
                "
              />

              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-[#100F0E]
                  via-[#100F0E]/45
                  to-[#100F0E]/10
                  opacity-95
                  transition-opacity duration-500
                  motion-safe:group-hover:opacity-80
                "
              />
            </div>

            {/* Text content */}
            <div
              className="
                relative z-10 w-full
                space-y-4
                sm:space-y-4
                lg:space-y-3
                xl:space-y-4
                transition-transform duration-500
                motion-safe:group-hover:-translate-y-1
              "
            >
              <span
                className="
                  block font-mono
                  text-[9px] sm:text-[9px]
                  tracking-[0.25em] sm:tracking-[0.3em]
                  xl:tracking-[0.35em]
                  leading-relaxed
                  text-[#B5A087] uppercase
                "
              >
                {col.tagline}
              </span>

              <h3
                className="
                  font-serif font-light
                  text-[clamp(1.65rem,3.1vw,2.5rem)]
                  lg:text-[clamp(1.45rem,1.9vw,2.1rem)]
                  xl:text-[2.2rem]
                  leading-[1.08]
                  tracking-[-0.035em]
                  text-[#F3EFE6]
                  break-words
                "
              >
                {col.title.map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < col.title.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h3>

              <p
                className="
                  max-w-[280px]
                  text-[10px] sm:text-[10px]
                  lg:text-[9px] xl:text-[10px]
                  font-light
                  tracking-[0.12em] xl:tracking-[0.16em]
                  leading-[1.8]
                  text-[#D8CCB8]
                  uppercase whitespace-pre-line
                "
              >
                {col.description}
              </p>

              {/* Circular action */}
              <div className="pt-2 sm:pt-3">
                <div className="inline-flex items-center gap-3 group/btn">
                  <div
                    className="
                      flex h-9 w-9 shrink-0
                      items-center justify-center
                      rounded-full
                      border border-[#A89379]/60
                      transition-all duration-500
                      motion-safe:group-hover:border-[#F3EFE6]
                      motion-safe:group-hover:bg-[#F3EFE6]/10
                    "
                  >
                    <span
                      className="
                        text-sm text-[#F3EFE6]
                        transition-transform duration-300
                        motion-safe:group-hover:translate-x-0.5
                      "
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>

                  <span
                    className="
                      text-[9px]
                      font-mono
                      tracking-[0.2em] xl:tracking-[0.25em]
                      text-[#D8CCB8] uppercase
                      transition-colors duration-300
                      motion-safe:group-hover:text-[#F3EFE6]
                    "
                  >
                    {col.buttonText}
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CraftSection;
