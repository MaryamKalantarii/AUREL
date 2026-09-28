"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function EditorialCampaign() {
  const containerRef = useRef<HTMLElement>(null);
  const campaignImageRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const leftMetaRef = useRef<HTMLDivElement>(null);
  const rightInfoRef = useRef<HTMLDivElement>(null);
  const exploreBtnRef = useRef<HTMLAnchorElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  
  const transitionRef = useRef<HTMLDivElement>(null);
  const transitionTextRef = useRef<HTMLHeadingElement>(null);

  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const handleChange = () => setReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      if (reducedMotion) return;

      const campaignTl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      campaignTl.fromTo(
        campaignImageRef.current,
        { scale: 1.05, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.4, ease: "power2.out" }
      );

      if (leftMetaRef.current) {
        campaignTl.fromTo(
          leftMetaRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=1.0"
        );
      }

      if (headlineRef.current?.children) {
        campaignTl.fromTo(
          Array.from(headlineRef.current.children),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.7"
        );
      }

      if (exploreBtnRef.current) {
        campaignTl.fromTo(
          exploreBtnRef.current,
          { opacity: 0, x: -10 },
          { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" },
          "-=0.4"
        );
      }

      if (rightInfoRef.current) {
        campaignTl.fromTo(
          rightInfoRef.current,
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
          "-=0.8"
        );
      }

      if (detailsRef.current) {
        campaignTl.fromTo(
          detailsRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.5"
        );
      }

      gsap.to(campaignImageRef.current, {
        y: 20,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      if (transitionRef.current && transitionTextRef.current) {
        gsap.fromTo(
          transitionTextRef.current,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: transitionRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, container);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#0B0A09] text-[#F7F5F0] overflow-hidden select-none"
    >
      {/* =================================================== */}
      {/* PART 1 — EDITORIAL CAMPAIGN                         */}
      {/* =================================================== */}
      <div className="relative w-full h-[65vh] min-h-[560px] max-h-[800px] flex items-center justify-between px-6 md:px-14 lg:px-20 overflow-hidden">
        
        {/* تصویر هماهنگ‌شده با تم صخره‌ای و فلزی بالا */}
        <div
          ref={campaignImageRef}
          className="absolute inset-0 z-0 w-full h-full will-change-transform"
        >
          <Image
            src="/images/fb72d76c-9be9-41d3-8dca-40fc4d56d6a6.png"
            alt="AUREL Editorial Campaign — Light Becomes Form"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter grayscale-[35%] contrast-[1.12] brightness-[0.80]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0A09]/85 via-[#0B0A09]/20 to-[#0B0A09]/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0A09]/40 via-transparent to-[#0B0A09]/85" />
        </div>

        {/* جزئیات ادیتوریال بالای تصویر */}
        <div
          ref={detailsRef}
          className="absolute top-6 left-6 right-6 md:left-14 md:right-14 lg:left-20 lg:right-20 z-10 flex justify-between items-center text-[9px] font-mono tracking-[0.35em] text-[#E4E1DA]/50 uppercase border-b border-[#F7F5F0]/10 pb-3"
        >
          <span>AUTUMN / WINTER 2026</span>
          <span className="hidden sm:inline">PARIS — MILAN — TOKYO</span>
          <span>N° 01 / 04</span>
        </div>

        {/* سمت چپ: تایپوگرافی ظریف و متناسب با AUREL */}
        <div className="relative z-10 max-w-xl space-y-6 md:space-y-8 pt-8">
          <div ref={leftMetaRef} className="space-y-1">
            <span className="block font-mono text-[9px] md:text-[10px] tracking-[0.4em] text-[#C4B2A2] uppercase">
              01 / EDITORIAL CAMPAIGN
            </span>
          </div>

          <h1
            ref={headlineRef}
            className="font-serif font-extralight tracking-[0.04em] leading-[0.9] text-[#F7F5F0] text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase drop-shadow-sm"
          >
            <span className="block opacity-90">LIGHT</span>
            <span className="block opacity-75">BECOMES</span>
            <span className="block text-[#B6A58C]">FORM</span>
          </h1>

          <div>
            <a
              ref={exploreBtnRef}
              href="#collection"
              className="group inline-flex items-center gap-4 text-[10px] md:text-[11px] font-mono tracking-[0.35em] text-[#F7F5F0] uppercase transition-all duration-300"
            >
              <span className="border-b border-[#B6A58C] pb-1 group-hover:border-[#F7F5F0] group-hover:text-[#B6A58C] transition-colors">
                EXPLORE CAMPAIGN
              </span>
              <span className="inline-block transform group-hover:translate-x-2 transition-transform duration-300 text-[#B6A58C]">
                →
              </span>
            </a>
          </div>
        </div>

        {/* سمت راست: اطلاعات بالانس‌شده */}
        <div
          ref={rightInfoRef}
          className="relative z-10 hidden md:flex flex-col justify-center items-start gap-8 max-w-xs pl-8 border-l border-[#F7F5F0]/10 pt-8 opacity-75 hover:opacity-100 transition-opacity duration-500"
        >
          <p className="text-[11px] md:text-[12px] font-sans font-light tracking-[0.2em] leading-[1.8] text-[#E4E1DA]">
            Aurel is more than jewelry. <br />
            It is a feeling, a light, <br />a presence.
          </p>

          <div className="space-y-2">
            <button
              aria-label="Play Campaign Film Teaser"
              className="group flex items-center gap-4 text-left focus:outline-none"
            >
              <div className="w-10 h-10 rounded-full border border-[#F7F5F0]/30 flex items-center justify-center transition-all duration-300 group-hover:border-[#F7F5F0] group-hover:scale-105 bg-[#0B0A09]/40 backdrop-blur-md">
                <svg
                  width="10"
                  height="12"
                  viewBox="0 0 10 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-0.5 fill-[#F7F5F0] transition-colors group-hover:fill-[#B6A58C]"
                >
                  <path d="M10 6L0 12V0L10 6Z" />
                </svg>
              </div>
              <div>
                <span className="block text-[9px] font-mono tracking-[0.3em] text-[#F7F5F0] group-hover:text-[#B6A58C] transition-colors uppercase">
                  WATCH FILM
                </span>
                <span className="block text-[8px] font-mono tracking-[0.2em] text-[#C4B2A2]/70 uppercase">
                  01:42 MIN — 4K
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* =================================================== */}
      {/* PART 2 — COLLECTION TRANSITION                      */}
      {/* =================================================== */}
      <div
        ref={transitionRef}
        className="relative w-full h-[28vh] min-h-[220px] max-h-[320px] flex items-center justify-center px-6 overflow-hidden bg-[#0B0A09] border-t border-[#272727]/60"
      >
        <div className="absolute inset-0 z-0 pointer-events-none opacity-30 mix-blend-screen">
          <Image
            src="/images/back.jpg"
            alt="Abstract Light Texture"
            fill
            className="object-cover object-center filter grayscale brightness-90 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0A09] via-transparent to-[#0B0A09]" />
        </div>

        <a
          href="#collection"
          className="group relative z-10 text-center focus:outline-none"
        >
          <h2
            ref={transitionTextRef}
            className="font-serif font-extralight text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.05em] text-[#F7F5F0] uppercase transition-colors duration-500 group-hover:text-[#B6A58C]"
          >
            DISCOVER <br />
            <span className="inline-flex items-center gap-3 md:gap-5 pt-1">
              THE COLLECTION
              <span className="inline-block font-sans font-extralight transform group-hover:translate-x-3 transition-transform duration-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#B6A58C] group-hover:text-[#F7F5F0]">
                →
              </span>
            </span>
          </h2>
        </a>
      </div>
    </section>
  );
}

export default EditorialCampaign;