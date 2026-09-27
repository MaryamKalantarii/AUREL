'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export const EditorialStory = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // --------------------------------------------------
      // IMAGE PARALLAX
      // --------------------------------------------------
      gsap.to(imageRef.current, {
        yPercent: 4,
        scale: 1.03,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
      });

      // --------------------------------------------------
      // CONTENT REVEAL
      // --------------------------------------------------
      gsap.from('.story-reveal', {
        opacity: 0,
        y: 18,
        duration: 1.1,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 82%',
          once: true,
        },
      });
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
        w-full
        aspect-[3/1]
        overflow-hidden
        bg-[#100e0c]
        text-[#f4f0e9]
      "
    >
      {/* =====================================================
          BACKGROUND IMAGE
          ===================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          ref={imageRef}
          className="
            absolute
            -inset-[3%]
            w-[106%]
            h-[106%]
          "
        >
          <Image
            src="/images/editorial-story.png"
            alt="AUREL Jewellery Story"
            fill
            priority
            sizes="100vw"
            className="
              object-cover
              object-center
            "
          />
        </div>

      

        {/* Dark left side — exactly like reference */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#100d0b]/95
            via-[#17120f]/20
            to-transparent
          "
        />

        {/* Slight dark vignette on right */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-l
            from-[#090807]/45
            via-transparent
            to-transparent
          "
        />

        {/* Warm brown cinematic tint */}
        <div
          className="
            absolute
            inset-0
            bg-[#4a382b]/10
            mix-blend-color
          "
        />
      </div>

      {/* =====================================================
          CONTENT
          ===================================================== */}
      <div
        className="
          relative
          z-10
          w-full
          h-full
          flex
          items-center
        "
      >
        <div
          className="
            ml-[8.5%]
            w-[28%]
            max-w-[300px]
            flex
            flex-col
            justify-center
          "
        >
          {/* =================================================
              BRAND
              ================================================= */}
          <span
            className="
              story-reveal
              block
              mb-[12px]
              text-[6px]
              sm:text-[7px]
              md:text-[8px]
              tracking-[0.38em]
              uppercase
              font-light
              text-[#c9c0b5]
            "
          >
            AUREL
          </span>

          {/* =================================================
              TITLE
              ================================================= */}
          <h2
            className="
              story-reveal
              m-0
              p-0
              font-serif
              font-light
              uppercase
              text-[#f2eee8]
              text-[27px]
              sm:text-[30px]
              md:text-[33px]
              lg:text-[36px]
              xl:text-[39px]
              leading-[0.9]
              tracking-[-0.035em]
            "
          >
            MORE THAN
            <br />

            <span
              className="
                italic
                font-normal
                tracking-[-0.045em]
              "
            >
              JEWELRY
            </span>
          </h2>

          {/* =================================================
              DESCRIPTION
              ================================================= */}
          <p
            className="
              story-reveal
              mt-[17px]
              mb-0
              max-w-[175px]
              text-[7px]
              sm:text-[8px]
              md:text-[9px]
              lg:text-[8px]
              font-light
              leading-[1.55]
              tracking-[0.01em]
              text-[#c5beb6]
            "
          >
            It&apos;s a feeling. A moment. A memory.
            <br />
            A reminder of what truly matters.
          </p>
        </div>
      </div>

      {/* =====================================================
          WATCH THE STORY — RIGHT SIDE
          ===================================================== */}
      <div
        className="
          story-reveal
          absolute
          right-[7.5%]
          top-1/2
          z-20
          -translate-y-1/2
        "
      >
        <button
          className="
            group
            flex
            items-center
            gap-[9px]
            text-[#e9e4dc]
          "
        >
          {/* PLAY CIRCLE */}
          <span
            className="
              flex
              h-[27px]
              w-[27px]
              items-center
              justify-center
              rounded-full
              border
              border-[#aaa39a]/70
              transition-all
              duration-500
              group-hover:border-[#f5f1eb]
              group-hover:bg-white/5
              group-hover:scale-110
            "
          >
            <span
              className="
                ml-[1px]
                text-[5px]
                text-[#eee9e1]
              "
            >
              ▶
            </span>
          </span>

          {/* TEXT */}
          <span
            className="
              relative
              pb-[2px]
              text-[7px]
              sm:text-[8px]
              tracking-[0.24em]
              uppercase
              font-light
              whitespace-nowrap
            "
          >
            WATCH THE STORY

            <span
              className="
                absolute
                left-0
                bottom-0
                h-px
                w-0
                bg-[#eee9e1]
                transition-all
                duration-500
                group-hover:w-full
              "
            />
          </span>
        </button>
      </div>

      {/* =====================================================
          SUBTLE FILM GRAIN / VIGNETTE
          ===================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-30
          bg-[radial-gradient(
            ellipse_at_center,
            transparent_35%,
            rgba(0,0,0,0.28)_100%
          )]
        "
      />
    </section>
  );
};