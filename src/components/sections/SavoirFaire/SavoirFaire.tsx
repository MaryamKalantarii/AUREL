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
    // بررسی تنظیمات prefers-reduced-motion برای احترام به کاربر
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. انیمیشن Parallax نرم برای تصویر ماکرو
      gsap.fromTo(
        imageRef.current,
        { y: -30, scale: 1.05 },
        {
          y: 30,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      );

      // 2. انیمیشن ظهور لایه‌ای و سینمایی متون و تصویر (Timeline)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        imageContainerRef.current,
        { opacity: 0, clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" },
        {
          opacity: 1,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 1.6,
          ease: "expo.out",
        }
      )
        .fromTo(
          eyebrowRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
          "-=1.1"
        )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" },
          "-=0.8"
        )
        .fromTo(
          [desc1Ref.current, desc2Ref.current],
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.8"
        )
        .fromTo(
          linkRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" },
          "-=0.6"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen lg:min-h-[110vh] bg-[#080807] text-[#F7F5F0] overflow-hidden py-24 lg:py-32 flex items-center select-none"
    >
      {/* نورپردازی و افکت‌های بسیار ملایم پس‌زمینه */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#B6A58C]/[0.02] rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#171513]/40 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1700px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* سمت چپ: تصویر ماکرو و انتزاعی با برش سینمایی */}
          <div className="lg:col-span-7 relative">
            <div
              ref={imageContainerRef}
              className="relative w-full aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/3] overflow-hidden bg-[#0D0C0B] border border-[#F7F5F0]/10 shadow-2xl"
            >
              <div ref={imageRef} className="absolute inset-0 w-full h-full">
                <Image
                  src="/images/craft-macro.jpg"
                  alt="AUREL Haute Joaillerie Craftsmanship Detail"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-center brightness-[0.82] contrast-[1.1]"
                  priority={false}
                />
              </div>

              {/* سایه‌روشن ملایم روی لبه‌های تصویر جهت ترکیب با پس‌زمینه */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#080807]/80 pointer-events-none hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080807] via-transparent to-transparent pointer-events-none lg:hidden" />
            </div>
          </div>

          {/* سمت راست: تایپوگرافی ایدیتوریال و مینیمال */}
          <div className="lg:col-span-5 flex flex-col justify-center lg:pl-6 xl:pl-10 space-y-8">
            
            {/* ابرو / ایبرو */}
            <div>
              <span
                ref={eyebrowRef}
                className="inline-block font-mono text-[10px] sm:text-[11px] tracking-[0.45em] text-[#B6A58C] uppercase"
              >
                SAVOIR-FAIRE
              </span>
            </div>

            {/* تیتر اصلی بزرگ و ظریف */}
            <h2
              ref={titleRef}
              className="font-serif font-extralight text-4xl sm:text-5xl xl:text-6xl text-[#F7F5F0] tracking-wide leading-[1.1] uppercase"
            >
              THE ART <br />
              <span className="italic font-light text-[#E4E1DA]">OF LIGHT</span>
            </h2>

            {/* توضیحات مینیمال */}
            <div className="space-y-4 pt-2">
              <p
                ref={desc1Ref}
                className="font-serif text-lg sm:text-xl text-[#F7F5F0]/90 font-light leading-relaxed tracking-wide"
              >
                Every Aurel piece begins where precision meets imagination.
              </p>

              <p
                ref={desc2Ref}
                className="font-sans text-xs sm:text-sm text-[#E4E1DA]/60 leading-relaxed tracking-wider font-light max-w-md"
              >
                Forged in absolute darkness, refined by master artisans. Each diamond facet is calculated to capture, bend, and amplify the quietest nuances of ambient light.
              </p>
            </div>

            {/* لینک تعاملی و ظریف (Micro-interaction) */}
            <div className="pt-4">
              <a
                ref={linkRef}
                href="#craftsmanship"
                className="group relative inline-flex items-center gap-3 py-2 text-xs font-mono tracking-[0.35em] text-[#B6A58C] hover:text-[#F7F5F0] transition-colors duration-500 uppercase"
              >
                <span>DISCOVER OUR CRAFT</span>
                <span className="transform group-hover:translate-x-2 transition-transform duration-500 ease-out text-sm">
                  →
                </span>
                
                {/* خط زیرین ظریف که در هنگام هوور گسترش می‌یابد */}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#B6A58C] group-hover:w-full transition-all duration-500 ease-out" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default SavoirFaire;