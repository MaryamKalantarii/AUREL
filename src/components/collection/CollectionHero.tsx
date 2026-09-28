'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


// ============================================================
// Sparkle Component
// ============================================================

type SparkleProps = {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
};

const Sparkle = ({
  className = '',
  size = 'md',
}: SparkleProps) => {
  const sizes = {
    sm: {
      wrapper: 'h-[16px] w-[16px]',
      core: 'h-[3px] w-[3px]',
      line: 'h-[24px]',
    },
    md: {
      wrapper: 'h-[28px] w-[28px]',
      core: 'h-[4px] w-[4px]',
      line: 'h-[36px]',
    },
    lg: {
      wrapper: 'h-[42px] w-[42px]',
      core: 'h-[6px] w-[6px]',
      line: 'h-[52px]',
    },
  };

  const s = sizes[size];

  return (
    <span
      className={`
        jewel-star
        pointer-events-none
        absolute
        z-[5]
        ${s.wrapper}
        ${className}
      `}
    >
      {/* Vertical light */}
      <span
        className={`
          absolute
          left-1/2
          top-1/2
          ${s.line}
          w-px
          -translate-x-1/2
          -translate-y-1/2
          bg-gradient-to-b
          from-transparent
          via-[#fff7e8]
          to-transparent
        `}
      />

      {/* Horizontal light */}
      <span
        className="
          absolute
          left-1/2
          top-1/2
          h-px
          w-[38px]
          -translate-x-1/2
          -translate-y-1/2
          bg-gradient-to-r
          from-transparent
          via-[#fff7e8]
          to-transparent
        "
      />

      {/* Soft diagonal glow */}
      <span
        className="
          absolute
          left-1/2
          top-1/2
          h-[28px]
          w-[1px]
          -translate-x-1/2
          -translate-y-1/2
          rotate-45
          bg-gradient-to-b
          from-transparent
          via-white/50
          to-transparent
        "
      />

      {/* Core */}
      <span
        className={`
          absolute
          left-1/2
          top-1/2
          ${s.core}
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white
          shadow-[0_0_14px_5px_rgba(255,238,205,0.8)]
        `}
      />
    </span>
  );
};


// ============================================================
// Small Light Particle
// ============================================================

const LightParticle = ({
  className = '',
}: {
  className?: string;
}) => {
  return (
    <span
      className={`
        jewel-particle
        pointer-events-none
        absolute
        z-[5]
        h-[3px]
        w-[3px]
        rounded-full
        bg-[#fff4dd]
        shadow-[0_0_10px_3px_rgba(255,232,190,0.65)]
        ${className}
      `}
    />
  );
};


// ============================================================
// Collection Hero
// ============================================================

export const CollectionHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // ======================================================
      // INTRO
      // ======================================================

      const tl = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
      });

      tl.from('.hero-collection', {
        opacity: 0,
        y: 15,
        duration: 0.8,
      })
        .from(
          '.hero-title-line',
          {
            opacity: 0,
            y: 45,
            duration: 1.1,
            stagger: 0.12,
          },
          '-=0.45',
        )
        .from(
          '.hero-copy',
          {
            opacity: 0,
            y: 25,
            duration: 0.9,
          },
          '-=0.7',
        )
        .from(
          '.hero-artwork',
          {
            opacity: 0,
            scale: 0.88,
            rotate: -4,
            duration: 1.6,
            ease: 'power4.out',
          },
          '-=1',
        )
        .from(
          '.hero-feature',
          {
            opacity: 0,
            x: 30,
            duration: 1,
          },
          '-=1',
        )
        .from(
          '.hero-bottom',
          {
            opacity: 0,
            y: 15,
            duration: 0.8,
          },
          '-=0.5',
        );


      // ======================================================
      // JEWEL FLOATING
      // ======================================================

      gsap.to('.hero-artwork', {
        y: -9,
        rotate: 1,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });


      // ======================================================
      // WARM AURA
      // ======================================================

      gsap.to('.jewel-aura', {
        opacity: 0.55,
        scale: 1.08,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });


      // ======================================================
      // STARS — TWINKLE
      // ======================================================

      gsap.to('.jewel-star', {
        opacity: 0.25,
        scale: 0.45,
        duration: 1.7,
        repeat: -1,
        yoyo: true,
        stagger: {
          each: 0.3,
          from: 'random',
        },
        ease: 'sine.inOut',
      });


      // ======================================================
      // PARTICLES — SOFT FLICKER
      // ======================================================

      gsap.to('.jewel-particle', {
        opacity: 0.2,
        scale: 0.45,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        stagger: {
          each: 0.35,
          from: 'random',
        },
        ease: 'sine.inOut',
      });


      // ======================================================
      // OUTWARD SPARKLES
      // These feel like light escaping from the jewelry.
      // ======================================================

      const escapingStars = gsap.utils.toArray<HTMLElement>(
        '.escaping-star',
      );

      escapingStars.forEach((star, index) => {
        const x = Number(star.dataset.x || 0);
        const y = Number(star.dataset.y || 0);

        gsap.fromTo(
          star,
          {
            opacity: 0,
            scale: 0.15,
            x: 0,
            y: 0,
          },
          {
            opacity: 0.9,
            scale: 1,
            x,
            y,
            duration: 1.8 + index * 0.15,
            delay: index * 0.45,
            repeat: -1,
            repeatDelay: 1.5,
            ease: 'power2.out',
          },
        );
      });


      // ======================================================
      // CLEANUP
      // ======================================================

      return () => {
        gsap.killTweensOf([
          '.hero-artwork',
          '.jewel-aura',
          '.jewel-star',
          '.jewel-particle',
        ]);

        escapingStars.forEach((star) => {
          gsap.killTweensOf(star);
        });
      };
    },
    {
      scope: containerRef,
    },
  );


  return (
    <section
      ref={containerRef}
      className="
        relative
        min-h-[calc(100vh-80px)]
        w-full
        overflow-hidden
        bg-[#030303]
        text-[#f4f1eb]
      "
    >

      {/* ======================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Deep black atmosphere */}
        <div
          className="
            absolute
            inset-0
            bg-[#030303]
          "
        />

        {/* Soft central glow */}
        {/* Warm champagne atmosphere behind the jewelry */}
        <div
          className="
    absolute
    left-[50%]
    top-[48%]
    h-[650px]
    w-[650px]
    -translate-x-1/2
    -translate-y-1/2
    rounded-full
    bg-[#d8b47a]/[0.045]
    blur-[145px]
  "
        />

        {/* Concentrated cream glow behind the stone */}
        <div
          className="
    absolute
    left-[51%]
    top-[47%]
    h-[430px]
    w-[430px]
    -translate-x-1/2
    -translate-y-1/2
    rounded-full
    bg-[#f4dfbd]/[0.065]
    blur-[105px]
  "
        />

        {/* Small bright champagne core */}
        <div
          className="
    absolute
    left-[52%]
    top-[47%]
    h-[230px]
    w-[230px]
    -translate-x-1/2
    -translate-y-1/2
    rounded-full
    bg-[#fff0d0]/[0.045]
    blur-[70px]
  "
        />

        {/* Warm central atmosphere */}
        <div
          className="
            absolute
            left-[50%]
            top-[48%]
            h-[450px]
            w-[450px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#d9b982]/[0.018]
            blur-[150px]
          "
        />

        {/* Grain */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            [background-image:radial-gradient(#fff_0.6px,transparent_0.6px)]
            [background-size:5px_5px]
          "
        />
      </div>


      {/* ======================================================
          MAIN HERO
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          min-h-[calc(100vh-80px)]
          max-w-[1600px]
          grid-cols-1
          px-6
          pb-20
          pt-20
          sm:px-8
          lg:grid-cols-[minmax(280px,1fr)_minmax(420px,1.3fr)_280px]
          lg:items-center
          lg:px-12
          lg:pb-16
          lg:pt-0
        "
      >


        {/* ====================================================
            LEFT
        ==================================================== */}

        <div
          className="
            relative
            z-20
            flex
            flex-col
            justify-center
            lg:pr-8
          "
        >

          <div className="hero-collection mb-5">
            <span
              className="
                font-mono
                text-[8px]
                uppercase
                tracking-[0.35em]
                text-white/45
              "
            >
              THE COLLECTION
            </span>
          </div>


          <h1
            className="
              mb-7
              font-serif
              text-[54px]
              font-light
              uppercase
              leading-[0.88]
              tracking-[-0.035em]
              text-[#f3f0ea]
              sm:text-[68px]
              md:text-[82px]
              lg:text-[70px]
              xl:text-[82px]
            "
          >
            <span className="hero-title-line block">
              BEYOND
            </span>

            <span className="hero-title-line block">
              ORDINARY
            </span>
          </h1>


          <div className="hero-copy max-w-[270px]">

            <p
              className="
                font-serif
                text-[12px]
                leading-[1.65]
                text-white/45
              "
            >
              A curated selection of extraordinary pieces,
              where timeless craftsmanship meets modern
              elegance.
            </p>


            <button
              type="button"
              className="
                group
                mt-8
                flex
                items-center
                gap-3
                font-mono
                text-[8px]
                tracking-[0.25em]
                text-white/60
                transition-colors
                hover:text-white
              "
            >
              <span
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/25
                  transition-all
                  group-hover:border-white/60
                "
              >
                →
              </span>

              <span>
                EXPLORE ALL
              </span>

              <span className="text-white/30">
                +
              </span>
            </button>

          </div>
        </div>


        {/* ====================================================
            CENTER — JEWEL
        ==================================================== */}

        <div
          className="
            relative
            flex
            h-[430px]
            items-center
            justify-center
            sm:h-[520px]
            lg:h-[650px]
          "
        >

          {/* Orbit 1 */}
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[170px]
              w-[430px]
              -translate-x-1/2
              -translate-y-1/2
              rotate-[-12deg]
              rounded-[50%]
              border
              border-white/[0.10]
              sm:h-[220px]
              sm:w-[540px]
            "
          />


          {/* Orbit 2 */}
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[130px]
              w-[370px]
              -translate-x-1/2
              -translate-y-1/2
              rotate-[20deg]
              rounded-[50%]
              border
              border-white/[0.05]
            "
          />


          {/* ==================================================
              JEWEL ARTWORK
          ================================================== */}

          <div
            className="
              hero-artwork
              relative
              z-10
              h-[370px]
              w-[330px]
              sm:h-[450px]
              sm:w-[400px]
              lg:h-[570px]
              lg:w-[520px]
            "
          >


            {/* =================================================
                WARM CREAM AURA
            ================================================= */}

            <div
              className="
                jewel-aura
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                z-0
                h-[330px]
                w-[330px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#f1ddbd]/[0.075]
                blur-[100px]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-[48%]
                z-0
                h-[220px]
                w-[220px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#fff0cf]/[0.055]
                blur-[65px]
              "
            />


            {/* =================================================
                SPARKLES AROUND THE METAL
                NOT ON THE STONE
            ================================================= */}


            {/* LEFT — main sparkle coming from jewelry */}
            <Sparkle
              size="lg"
              className="
                left-[24%]
                top-[31%]
              "
            />


            {/* LEFT — second sparkle */}
            <Sparkle
              size="md"
              className="
                left-[17%]
                top-[40%]
              "
            />


            {/* LEFT — tiny sparkle */}
            <Sparkle
              size="sm"
              className="
                left-[29%]
                top-[22%]
              "
            />


            {/* RIGHT — main sparkle */}
            <Sparkle
              size="md"
              className="
                left-[77%]
                top-[30%]
              "
            />


            {/* RIGHT — small sparkle */}
            <Sparkle
              size="sm"
              className="
                left-[86%]
                top-[40%]
              "
            />


            {/* LOWER LEFT */}
            <Sparkle
              size="sm"
              className="
                left-[28%]
                top-[66%]
              "
            />


            {/* LOWER RIGHT */}
            <Sparkle
              size="sm"
              className="
                left-[76%]
                top-[67%]
              "
            />


            {/* =================================================
                TINY LIGHT PARTICLES
            ================================================= */}

            <LightParticle
              className="
                left-[13%]
                top-[50%]
              "
            />

            <LightParticle
              className="
                left-[21%]
                top-[24%]
              "
            />

            <LightParticle
              className="
                left-[31%]
                top-[16%]
              "
            />

            <LightParticle
              className="
                left-[72%]
                top-[19%]
              "
            />

            <LightParticle
              className="
                left-[89%]
                top-[34%]
              "
            />

            <LightParticle
              className="
                left-[86%]
                top-[55%]
              "
            />

            <LightParticle
              className="
                left-[67%]
                top-[78%]
              "
            />

            <LightParticle
              className="
                left-[38%]
                top-[76%]
              "
            />



            {/* =================================================
                OUTWARD LIGHT BURSTS
                These start near the jewelry and escape outward.
            ================================================= */}

            <Sparkle
              size="sm"
              className="
                escaping-star
                left-[31%]
                top-[34%]
              "
            />

            <Sparkle
              size="sm"
              className="
                escaping-star
                left-[69%]
                top-[34%]
              "
            />

            <Sparkle
              size="sm"
              className="
                escaping-star
                left-[65%]
                top-[62%]
              "
            />

            <Sparkle
              size="sm"
              className="
                escaping-star
                left-[36%]
                top-[61%]
              "
            />


            {/* =================================================
                JEWEL IMAGE
            ================================================= */}

            <div
              className="
                relative
                z-10
                h-full
                w-full
              "
            >

              <img
                src="/images/stone-necklace.png"
                alt="The Aurora"
                className="
                  relative
                  z-10
                  h-full
                  w-full
                  object-contain
                  brightness-[1.12]
                  contrast-[1.18]
                  saturate-[0.92]
                  drop-shadow-[0_28px_40px_rgba(0,0,0,0.85)]
                  drop-shadow-[0_0_38px_rgba(245,225,190,0.14)]
                "
              />

            </div>

          </div>
        </div>


        {/* ====================================================
            RIGHT — FEATURED PIECE
        ==================================================== */}

        <div
          className="
            hero-feature
            relative
            z-20
            flex
            flex-col
            justify-center
            lg:pl-6
            lg:pt-20
          "
        >

          <span
            className="
              mb-5
              font-mono
              text-[8px]
              uppercase
              tracking-[0.3em]
              text-white/35
            "
          >
            FEATURED PIECE
          </span>


          <h2
            className="
              mb-4
              font-serif
              text-[27px]
              font-light
              uppercase
              tracking-[0.03em]
              text-white/90
              sm:text-[32px]
            "
          >
            THE AURORA
          </h2>


          <p
            className="
              max-w-[210px]
              font-serif
              text-[11px]
              leading-[1.7]
              text-white/40
            "
          >
            A single light, a thousand reflections.
            The Aurora captures the essence of light
            in its purest form.
          </p>


          <button
            type="button"
            className="
              group
              mt-8
              flex
              w-fit
              items-center
              gap-3
              font-mono
              text-[8px]
              tracking-[0.25em]
              text-white/55
              transition-colors
              hover:text-white
            "
          >

            <span
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                transition-all
                group-hover:border-white/60
              "
            >
              →
            </span>

            DISCOVER

          </button>

        </div>

      </div>


      {/* ======================================================
          BOTTOM CONTROLS
      ====================================================== */}

      <div
        className="
          hero-bottom
          absolute
          bottom-6
          left-6
          right-6
          z-30
          flex
          items-end
          justify-between
          sm:left-8
          sm:right-8
          lg:bottom-7
          lg:left-12
          lg:right-12
        "
      >

        {/* Counter */}
        <div className="flex items-center gap-4">

          <span
            className="
              font-mono
              text-[8px]
              tracking-[0.25em]
              text-white/70
            "
          >
            01
          </span>

          <span className="h-px w-7 bg-white/15" />

          <span
            className="
              font-mono
              text-[8px]
              tracking-[0.25em]
              text-white/25
            "
          >
            04
          </span>

        </div>


        {/* Progress */}
        <div className="hidden items-center gap-3 sm:flex">

          <span
            className="
              font-mono
              text-[7px]
              tracking-[0.2em]
              text-white/25
            "
          >
            01
          </span>

          <div className="h-px w-24 bg-white/10">

            <div
              className="
                h-px
                w-1/4
                bg-white/70
              "
            />

          </div>

          <span
            className="
              font-mono
              text-[7px]
              tracking-[0.2em]
              text-white/25
            "
          >
            04
          </span>

        </div>


        {/* Scroll */}
        <div className="flex items-center gap-3">

          <span
            className="
              font-mono
              text-[7px]
              tracking-[0.3em]
              text-white/25
            "
          >
            SCROLL TO EXPLORE
          </span>

          <span
            className="
              text-[11px]
              text-white/40
            "
          >
            ↓
          </span>

        </div>

      </div>

    </section>
  );
};