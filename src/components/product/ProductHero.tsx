'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const ProductHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
      });

      tl.fromTo(
        '.hero-image',
        {
          opacity: 0,
          scale: 1.04,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1.8,
          ease: 'power2.out',
        }
      )
        .fromTo(
          '.hero-eyebrow',
          {
            opacity: 0,
            y: 16,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          '-=1'
        )
        .fromTo(
          '.hero-title',
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
          },
          '-=0.55'
        )
        .fromTo(
          '.hero-description',
          {
            opacity: 0,
            y: 18,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          '-=0.65'
        )
        .fromTo(
          '.hero-cta',
          {
            opacity: 0,
            y: 15,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          '-=0.5'
        )
        .fromTo(
          '.hero-pagination',
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.8,
          },
          '-=0.6'
        );
    },
    {
      scope: containerRef,
    }
  );

  return (
    <section
      ref={containerRef}
      className="
        relative
        min-h-[680px]
        h-[100svh]
        w-full
        overflow-hidden
        bg-[#080706]
        text-[#f4f0e8]
        isolate
      "
    >
      {/* Hero image */}
      <div className="hero-image absolute inset-0 overflow-hidden bg-[#080706]">
        <Image
          src="/images/product-hero-model2.png"
          alt="Timeless Beauty in Every Detail"
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-[62%_center]
            brightness-[0.98]
            contrast-[1.04]
            saturate-[0.96]
            transform-gpu
          "
        />
      </div>

      {/* Soft left-side readability gradient */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-r
          from-[#050403]/[0.58]
          via-[#050403]/[0.32]
          via-[36%]
          to-transparent
        "
      />

      {/* Very soft bottom cinematic fade */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-t
          from-[#050403]/[0.30]
          via-transparent
          to-transparent
        "
      />

      {/* Warm cinematic atmosphere */}
      <div
        className="
          pointer-events-none
          absolute
          left-[38%]
          top-[43%]
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#a8753d]/[0.08]
          blur-[130px]
        "
      />

      {/* Subtle warm glow around the jewelry area */}
      <div
        className="
          pointer-events-none
          absolute
          right-[27%]
          top-[42%]
          h-[360px]
          w-[360px]
          -translate-y-1/2
          rounded-full
          bg-[#c18b4d]/[0.045]
          blur-[110px]
        "
      />

      {/* Main content */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          h-full
          w-full
          max-w-[1700px]
          items-center
          px-7
          pb-10
          pt-20
          sm:px-10
          lg:px-14
          xl:px-16
        "
      >
        <div
          className="
            hero-content
            w-full
            max-w-[520px]
            -translate-y-2
            sm:max-w-[560px]
            lg:-translate-y-5
          "
        >
          {/* Eyebrow */}
          <div className="hero-eyebrow mb-5 flex items-center gap-4 sm:mb-6">
            <span className="h-px w-7 bg-[#d2c5ad]/60" />

            <span
              className="
                font-mono-luxury
                text-[8px]
                uppercase
                tracking-[0.34em]
                text-[#d7cfc1]
                sm:text-[9px]
              "
            >
              OBJECTS OF LIGHT.
            </span>
          </div>

          {/* Main title */}
          <h1
            className="
              hero-title
              max-w-[560px]
              font-serif-editorial
              text-[43px]
              font-light
              uppercase
              leading-[0.98]
              tracking-[0.015em]
              text-[#f5f1e9]
              sm:text-[52px]
              md:text-[58px]
              lg:text-[62px]
              xl:text-[66px]
            "
          >
            TIMELESS BEAUTY
            <br />
            IN EVERY DETAIL.
          </h1>

          {/* Description */}
          <p
            className="
              hero-description
              mt-6
              max-w-[330px]
              font-serif-editorial
              text-[12px]
              font-light
              leading-[1.65]
              tracking-[0.015em]
              text-[#d0c9bf]
              sm:mt-7
              sm:text-[13px]
            "
          >
            Exquisite jewelry, crafted for those who
            <br className="hidden sm:block" />
            see beauty in every moment.
          </p>

          {/* CTA */}
          <div className="hero-cta mt-8 sm:mt-9">
            <a
              href="#collection-grid"
              className="
                group
                inline-flex
                items-center
                gap-4
                font-mono-luxury
                text-[8px]
                uppercase
                tracking-[0.22em]
                text-[#e2dbd0]
                transition-colors
                duration-500
                hover:text-white
                sm:text-[9px]
              "
            >
              <span>EXPLORE COLLECTION</span>

              <span
                className="
                  relative
                  flex
                  h-7
                  w-10
                  items-center
                  justify-center
                  overflow-hidden
                  border-b
                  border-[#aaa196]/60
                  transition-all
                  duration-500
                  group-hover:w-12
                  group-hover:border-[#e1d5bf]
                "
              >
                <span
                  className="
                    absolute
                    left-0
                    h-px
                    w-5
                    bg-[#d7cbbb]
                    transition-all
                    duration-500
                    group-hover:w-7
                  "
                />

                <span
                  className="
                    absolute
                    right-0
                    text-[11px]
                    transition-transform
                    duration-500
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Right-side pagination */}
      <div
        className="
          hero-pagination
          absolute
          right-6
          top-1/2
          z-20
          hidden
          -translate-y-1/2
          flex-col
          items-center
          gap-4
          lg:right-8
          lg:flex
          xl:right-10
        "
      >
        <span
          className="
            font-mono-luxury
            text-[8px]
            tracking-[0.12em]
            text-[#eee8dd]
          "
        >
          01
        </span>

        <div
          className="
            relative
            h-20
            w-px
            overflow-hidden
            bg-white/[0.16]
          "
        >
          <span
            className="
              absolute
              left-0
              top-0
              h-[42%]
              w-full
              bg-[#ddd2bd]
            "
          />
        </div>

        <span
          className="
            font-mono-luxury
            text-[8px]
            tracking-[0.12em]
            text-[#827d75]
          "
        >
          04
        </span>
      </div>
    </section>
  );
};