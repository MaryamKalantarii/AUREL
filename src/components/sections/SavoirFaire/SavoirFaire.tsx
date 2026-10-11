
"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function SavoirFaire() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const desc1Ref = useRef<HTMLParagraphElement>(null);
  const desc2Ref = useRef<HTMLParagraphElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Responsive image parallax
      mm.add(
        {
          mobile: "(max-width: 639px)",
          tablet: "(min-width: 640px) and (max-width: 1023px)",
          desktop: "(min-width: 1024px)",
        },
        (context) => {
          const conditions = context.conditions as {
            mobile: boolean;
            tablet: boolean;
            desktop: boolean;
          };

          const isMobile = conditions.mobile;
          const isTablet = conditions.tablet;

          gsap.fromTo(
            imageRef.current,
            {
              y: isMobile ? -8 : isTablet ? -15 : -25,
              scale: isMobile ? 1.02 : 1.05,
            },
            {
              y: isMobile ? 8 : isTablet ? 15 : 25,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            }
          );
        }
      );

      // Cinematic entrance animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        imageContainerRef.current,
        {
          opacity: 0,
          clipPath: "inset(0 100% 0 0)",
        },
        {
          opacity: 1,
          clipPath: "inset(0 0% 0 0)",
          duration: 1.3,
          ease: "expo.out",
        }
      )
        .fromTo(
          eyebrowRef.current,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.8"
        )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.6"
        )
        .fromTo(
          [desc1Ref.current, desc2Ref.current],
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.out",
          },
          "-=0.65"
        )
        .fromTo(
          linkRef.current,
          { opacity: 0, y: 12 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
          },
          "-=0.45"
        );

      return () => mm.revert();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative isolate w-full
        overflow-hidden
        bg-[#080807] text-[#F7F5F0]
        py-16
        sm:py-20
        lg:flex lg:min-h-[110vh] lg:items-center
        lg:py-28
        xl:py-32
        select-none
      "
    >
      {/* Background lighting */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div
          className="
            absolute left-1/3 top-1/4
            h-[260px] w-[260px]
            rounded-full bg-[#B6A58C]/[0.035]
            blur-[100px]
            sm:h-[400px] sm:w-[400px]
            lg:h-[500px] lg:w-[500px]
            lg:blur-[140px]
          "
        />

        <div
          className="
            absolute bottom-0 right-0
            h-[250px] w-[250px]
            rounded-full bg-[#171513]/40
            blur-[90px]
            sm:h-[350px] sm:w-[350px]
            lg:h-[400px] lg:w-[400px]
          "
        />
      </div>

      <div
        className="
          relative z-10 mx-auto w-full
          max-w-[1700px]
          px-5
          sm:px-8
          md:px-12
          lg:px-16
          xl:px-20
        "
      >
        <div
          className="
            grid grid-cols-1
            items-center
            gap-9
            sm:gap-12
            lg:grid-cols-12
            lg:gap-12
            xl:gap-16
          "
        >
          {/* Image */}
          <div className="min-w-0 lg:col-span-7">
            <div
              ref={imageContainerRef}
              className="
                relative isolate w-full
                overflow-hidden
                border border-[#F7F5F0]/10
                bg-[#0D0C0B]
                shadow-2xl

                aspect-[4/3]
                min-h-0

                sm:aspect-[16/11]

                lg:aspect-[4/3]
              "
            >
              <div
                ref={imageRef}
                className="absolute inset-0 will-change-transform"
              >
                <Image
                  src="/images/craft-macro.jpg"
                  alt="AUREL Haute Joaillerie Craftsmanship Detail"
                  fill
                  sizes="
                    (max-width: 639px) 100vw,
                    (max-width: 1023px) 100vw,
                    (max-width: 1279px) 58vw,
                    58vw
                  "
                  className="
                    object-cover
                    object-[center_45%]
                    sm:object-center
                    brightness-[0.86]
                    contrast-[1.06]
                  "
                />
              </div>

              {/* Desktop edge blending */}
              <div
                className="
                  pointer-events-none absolute inset-0
                  hidden lg:block
                  bg-gradient-to-r
                  from-transparent
                  via-transparent
                  to-[#080807]/70
                "
              />

              {/* Mobile bottom blending */}
              <div
                className="
                  pointer-events-none absolute inset-0
                  bg-gradient-to-t
                  from-[#080807]/65
                  via-transparent
                  to-transparent
                  lg:hidden
                "
              />

              {/* Soft cinematic overlay */}
              <div
                className="
                  pointer-events-none absolute inset-0
                  bg-gradient-to-br
                  from-white/[0.025]
                  via-transparent
                  to-black/10
                "
              />
            </div>
          </div>

          {/* Editorial content */}
          <div
            className="
              flex min-w-0 flex-col justify-center
              space-y-6
              sm:space-y-7
              lg:col-span-5
              lg:space-y-8
              lg:pl-3
              xl:pl-8
              2xl:pl-10
            "
          >
            {/* Eyebrow */}
            <div>
              <span
                ref={eyebrowRef}
                className="
                  inline-block
                  font-mono
                  text-[9px]
                  tracking-[0.35em]
                  text-[#B6A58C]
                  uppercase
                  sm:text-[10px]
                  sm:tracking-[0.45em]
                "
              >
                SAVOIR-FAIRE
              </span>
            </div>

            {/* Heading */}
            <h2
              ref={titleRef}
              className="
                font-serif font-extralight
                text-[clamp(2.6rem,8vw,3.5rem)]
                leading-[1.04]
                tracking-wide
                text-[#F7F5F0]
                uppercase

                sm:text-5xl
                md:text-6xl
                lg:text-5xl
                xl:text-6xl
              "
            >
              THE ART
              <br />
              <span className="font-light italic text-[#E4E1DA]">
                OF LIGHT
              </span>
            </h2>

            {/* Descriptions */}
            <div className="max-w-xl space-y-4 pt-1 sm:pt-2">
              <p
                ref={desc1Ref}
                className="
                  font-serif font-light
                  text-base
                  leading-relaxed
                  tracking-wide
                  text-[#F7F5F0]/90

                  sm:text-lg
                  xl:text-xl
                "
              >
                Every Aurel piece begins where precision meets imagination.
              </p>

              <p
                ref={desc2Ref}
                className="
                  max-w-md
                  font-sans font-light
                  text-[11px]
                  leading-[1.9]
                  tracking-[0.06em]
                  text-[#E4E1DA]/65

                  sm:text-xs
                  sm:tracking-wider
                  xl:text-sm
                "
              >
                Forged in absolute darkness, refined by master artisans.
                Each diamond facet is calculated to capture, bend, and
                amplify the quietest nuances of ambient light.
              </p>
            </div>

            {/* Discover link */}
            <div className="pt-2 sm:pt-3">
              <a
                ref={linkRef}
                href="#craftsmanship"
                className="
                  group relative inline-flex
                  min-h-11
                  items-center gap-3
                  py-2
                  font-mono
                  text-[9px]
                  tracking-[0.2em]
                  text-[#B6A58C]
                  uppercase
                  transition-colors duration-500
                  hover:text-[#F7F5F0]
                  sm:text-[10px]
                  sm:tracking-[0.3em]
                "
              >
                <span>DISCOVER OUR CRAFT</span>

                <span
                  aria-hidden="true"
                  className="
                    text-sm
                    transition-transform duration-500 ease-out
                    group-hover:translate-x-1.5
                  "
                >
                  →
                </span>

                <span
                  className="
                    absolute bottom-0 left-0
                    h-px w-0
                    bg-[#B6A58C]
                    transition-all duration-500 ease-out
                    group-hover:w-full
                  "
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SavoirFaire;
