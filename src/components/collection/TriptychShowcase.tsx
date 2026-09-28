'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const showcaseItems = [
  {
    id: 'rings',
    eyebrow: 'TIMELESS CLASSICS',
    title: 'ICONIC RINGS',
    description: 'Symbols of love, crafted for eternity.',
    action: 'VIEW COLLECTION',
    link: '/collection/rings',
    image: '/images/triptych-ring.png',
  },
  {
    id: 'necklaces',
    eyebrow: 'FINE NECKLACES',
    title: 'ELEGANCE IN EVERY DETAIL',
    description:
      'Designed to move with you, from everyday moments to extraordinary ones.',
    action: 'DISCOVER',
    link: '/collection/necklaces',
    image: '/images/triptych-necklace.png',
  },
  {
    id: 'craft',
    eyebrow: 'OUR CRAFT',
    title: 'ARTISANAL EXCELLENCE',
    description:
      'Every piece is a result of passion, precision, and generations of expertise.',
    action: 'LEARN MORE',
    link: '/craft',
    image: '/images/triptych-craft.png',
  },
];

export const TriptychShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>('.triptych-card');
      const stars = gsap.utils.toArray<HTMLElement>('.gold-star');
      const glows = gsap.utils.toArray<HTMLElement>('.gold-glow');
      const shootingStars =
        gsap.utils.toArray<HTMLElement>('.shooting-star');
      const galaxy = document.querySelector('.galaxy-light');

      /* =====================================================
         CARD ENTRANCE
      ====================================================== */

      gsap.from(cards, {
        opacity: 0,
        y: 60,
        duration: 1.3,
        stagger: 0.18,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
      });

      /* =====================================================
         GOLDEN STARS
      ====================================================== */

      stars.forEach((star, index) => {
        const moveX = gsap.utils.random(-120, 120);
        const moveY = gsap.utils.random(-80, 80);

        // Floating movement
        gsap.to(star, {
          x: moveX,
          y: moveY,
          scale: gsap.utils.random(1.2, 2.8),
          duration: gsap.utils.random(3, 7),
          delay: index * 0.04,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });

        // Independent blinking
        gsap.to(star, {
          opacity: gsap.utils.random(0.15, 0.95),
          duration: gsap.utils.random(0.8, 2.2),
          delay: gsap.utils.random(0, 2),
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      });

      /* =====================================================
         MOVING GOLDEN GLOW
      ====================================================== */

      glows.forEach((glow, index) => {
        gsap.to(glow, {
          x: index % 2 === 0 ? 180 : -180,
          y: index % 2 === 0 ? -90 : 100,
          scale: 1.35,
          opacity: 0.55,
          duration: 8 + index * 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      });

      /* =====================================================
         ROTATING GALAXY
      ====================================================== */

      if (galaxy) {
        gsap.to(galaxy, {
          rotation: 360,
          scale: 1.2,
          duration: 40,
          repeat: -1,
          ease: 'none',
        });
      }

      /* =====================================================
         SHOOTING STARS
      ====================================================== */

      shootingStars.forEach((star, index) => {
        gsap.set(star, {
          x: '-20vw',
          opacity: 0,
          rotate: -25,
        });

        gsap.to(star, {
          x: '125vw',
          y: `+=${gsap.utils.random(80, 220)}`,
          opacity: 1,
          duration: gsap.utils.random(3.5, 6),
          delay: index * 2.5,
          repeat: -1,
          repeatDelay: gsap.utils.random(2, 5),
          ease: 'power1.in',
        });

        gsap.to(star, {
          opacity: 0,
          duration: 1,
          delay: index * 2.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="
        relative
        w-full
        overflow-hidden
        text-[#F7F5F0]
        py-20
        px-4
        md:px-8
        lg:px-16
        border-t
        border-[#4a351e]
        bg-[#070605]
      "
    >

      {/* =====================================================
          GALAXY BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* BLACK + BROWN BASE */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(
              ellipse_at_center,
              #3b2618 0%,
              #24160d 30%,
              #120c08 58%,
              #050403 100%
            )]
          "
        />

        {/* MAIN ROTATING GALAXY */}
        <div
          className="
            galaxy-light
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[1300px]
            h-[700px]
            rounded-[50%]
            opacity-50
            blur-[80px]
            bg-[conic-gradient(
              from_0deg,
              transparent 0deg,
              rgba(231,183,82,0.20) 45deg,
              transparent 90deg,
              rgba(177,119,40,0.16) 150deg,
              transparent 220deg,
              rgba(238,193,96,0.18) 290deg,
              transparent 360deg
            )]
          "
        />

        {/* TOP GOLDEN GLOW */}
        <div
          className="
            gold-glow
            absolute
            -top-[30%]
            left-[5%]
            w-[90%]
            h-[70%]
            rounded-full
            blur-[90px]
            opacity-40
            bg-[radial-gradient(
              circle,
              rgba(240,192,91,0.24),
              rgba(185,126,42,0.10) 40%,
              transparent 72%
            )]
          "
        />

        {/* RIGHT GLOW */}
        <div
          className="
            gold-glow
            absolute
            top-[20%]
            -right-[20%]
            w-[65%]
            h-[65%]
            rounded-full
            blur-[100px]
            opacity-35
            bg-[radial-gradient(
              circle,
              rgba(232,178,73,0.20),
              transparent 70%
            )]
          "
        />

        {/* LEFT GLOW */}
        <div
          className="
            gold-glow
            absolute
            bottom-[-30%]
            -left-[20%]
            w-[65%]
            h-[65%]
            rounded-full
            blur-[100px]
            opacity-35
            bg-[radial-gradient(
              circle,
              rgba(190,132,47,0.18),
              transparent 70%
            )]
          "
        />

        {/* =====================================================
            80 GOLDEN PARTICLES
        ====================================================== */}

        <div className="absolute inset-0">

          {Array.from({ length: 80 }).map((_, i) => (
            <span
              key={i}
              className="gold-star absolute rounded-full bg-[#f4d28a]"
              style={{
                left: `${(i * 37.7) % 100}%`,
                top: `${(i * 61.3) % 100}%`,
                width: `${i % 9 === 0 ? 4 : i % 4 === 0 ? 2.5 : 1.5}px`,
                height: `${i % 9 === 0 ? 4 : i % 4 === 0 ? 2.5 : 1.5}px`,
                boxShadow:
                  i % 9 === 0
                    ? '0 0 22px 7px rgba(255,220,140,0.85)'
                    : '0 0 10px 3px rgba(240,202,126,0.65)',
                opacity: 0.55,
              }}
            />
          ))}

        </div>

        {/* =====================================================
            LARGE LUXURY STARS
        ====================================================== */}

        <span
          className="
            gold-star
            absolute left-[10%] top-[18%]
            w-[5px] h-[5px]
            rounded-full
            bg-[#fff0bd]
            shadow-[0_0_25px_9px_rgba(255,221,145,0.85)]
          "
        />

        <span
          className="
            gold-star
            absolute left-[27%] top-[76%]
            w-[4px] h-[4px]
            rounded-full
            bg-[#ffe7a4]
            shadow-[0_0_24px_8px_rgba(255,215,125,0.8)]
          "
        />

        <span
          className="
            gold-star
            absolute left-[49%] top-[12%]
            w-[5px] h-[5px]
            rounded-full
            bg-[#fff2c5]
            shadow-[0_0_28px_10px_rgba(255,222,145,0.9)]
          "
        />

        <span
          className="
            gold-star
            absolute left-[70%] top-[69%]
            w-[5px] h-[5px]
            rounded-full
            bg-[#ffe6a0]
            shadow-[0_0_25px_9px_rgba(255,213,119,0.85)]
          "
        />

        <span
          className="
            gold-star
            absolute left-[88%] top-[24%]
            w-[5px] h-[5px]
            rounded-full
            bg-[#fff1bd]
            shadow-[0_0_28px_10px_rgba(255,225,155,0.9)]
          "
        />

        {/* =====================================================
            SHOOTING STARS
        ====================================================== */}

        <span
          className="
            shooting-star
            absolute
            left-[-20vw]
            top-[15%]
            w-[220px]
            h-[2px]
            rounded-full
            bg-gradient-to-r
            from-transparent
            via-[#e9bd67]
            to-[#fff1c2]
            shadow-[0_0_14px_4px_rgba(239,199,112,0.75)]
          "
        />

        <span
          className="
            shooting-star
            absolute
            left-[-20vw]
            top-[47%]
            w-[280px]
            h-[2px]
            rounded-full
            bg-gradient-to-r
            from-transparent
            via-[#f0c875]
            to-[#fff2c7]
            shadow-[0_0_16px_4px_rgba(241,200,111,0.8)]
          "
        />

        <span
          className="
            shooting-star
            absolute
            left-[-20vw]
            top-[78%]
            w-[180px]
            h-[2px]
            rounded-full
            bg-gradient-to-r
            from-transparent
            via-[#e5b65b]
            to-[#ffefbd]
            shadow-[0_0_14px_4px_rgba(231,185,91,0.8)]
          "
        />

      </div>

      {/* =====================================================
          CARDS
      ====================================================== */}

      <div
        className="
          relative z-10
          max-w-[1400px]
          mx-auto
          grid
          grid-cols-1
          lg:grid-cols-3
          gap-6
          lg:gap-8
        "
      >
        {showcaseItems.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className="
              triptych-card
              group
              relative
              block
              h-[500px]
              md:h-[600px]
              w-full
              overflow-hidden
              rounded-sm
              bg-[#130e09]
              border
              border-[#624725]/60
              shadow-[0_20px_60px_rgba(0,0,0,0.50)]
            "
          >

            {/* IMAGE */}
            <div className="absolute inset-0 z-0 overflow-hidden">

              <Image
                src={item.image}
                alt={item.title}
                fill
                className="
                  object-cover
                  object-center
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-105
                  brightness-[0.98]
                "
              />

              {/* Very subtle warm glow */}
              <div
                className="
                  absolute inset-0
                  bg-[radial-gradient(
                    circle_at_50%_35%,
                    rgba(224,178,88,0.10),
                    transparent 58%
                  )]
                  mix-blend-screen
                "
              />

              {/* ONLY bottom darkness */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-[#070504]/70
                  via-transparent
                  to-transparent
                "
              />

            </div>

            {/* CONTENT */}
            <div
              className="
                relative z-10
                h-full
                p-8
                md:p-10
                flex
                flex-col
                justify-between
              "
            >

              <div>

                <span
                  className="
                    text-[10px]
                    md:text-xs
                    uppercase
                    tracking-[0.3em]
                    font-mono
                    text-[#d6b875]
                    block
                    mb-2
                  "
                >
                  {item.eyebrow}
                </span>

                <h3
                  className="
                    font-serif
                    text-2xl
                    md:text-3xl
                    font-light
                    tracking-wide
                    text-[#F7F5F0]
                    uppercase
                    leading-tight
                    drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]
                  "
                >
                  {item.title}
                </h3>

              </div>

              <div className="space-y-6">

                <p
                  className="
                    text-xs
                    md:text-sm
                    font-light
                    text-[#d4cec3]
                    leading-relaxed
                    max-w-xs
                  "
                >
                  {item.description}
                </p>

                <div
                  className="
                    flex
                    items-center
                    space-x-3
                    text-xs
                    tracking-[0.25em]
                    uppercase
                    text-[#F7F5F0]
                  "
                >

                  <span
                    className="
                      w-8
                      h-8
                      rounded-full
                      border
                      border-[#a17a42]/70
                      group-hover:border-[#f0d18b]
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:shadow-[0_0_20px_rgba(237,201,126,0.4)]
                    "
                  >
                    →
                  </span>

                  <span
                    className="
                      transition-colors
                      duration-300
                      group-hover:text-[#efd18a]
                    "
                  >
                    {item.action}
                  </span>

                </div>

              </div>
            </div>

          </a>
        ))}
      </div>

    </section>
  );
};


