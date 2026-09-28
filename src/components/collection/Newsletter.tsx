'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export const Newsletter = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // -----------------------------------------
      // CONTENT REVEAL
      // -----------------------------------------
      gsap.from('.newsletter-item', {
        opacity: 0,
        y: 18,
        duration: 1.2,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      });

      // -----------------------------------------
      // SUBTLE BACKGROUND MOVEMENT
      // -----------------------------------------
      gsap.to('.newsletter-bg', {
        scale: 1.035,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      });
    },
    {
      scope: sectionRef,
    }
  );

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        aspect-[3/1]
        min-h-[300px]
        overflow-hidden
        bg-[#050505]
        text-[#eee9e1]
      "
    >
      {/* =====================================================
          BACKGROUND
          ===================================================== */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="newsletter-bg absolute -inset-[2%]">
          <Image
            src="/images/newsletter-bg.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="
              object-cover
              object-center
            "
          />
        </div>

        {/* Very subtle dark overlay */}
        <div
          className="
            absolute
            inset-0
            bg-black/10
          "
        />
      </div>

      {/* =====================================================
          CENTER CONTENT
          ===================================================== */}

      <div
        className="
          relative
          z-10
          flex
          h-full
          w-full
          items-center
          justify-center
          text-center
        "
      >
        <div
          className="
            flex
            w-full
            max-w-[430px]
            flex-col
            items-center
            px-6
          "
        >
          {/* -----------------------------------------------
              EYEBROW
          ------------------------------------------------ */}

          <span
            className="
              newsletter-item
              mb-[10px]
              text-[6px]
              sm:text-[7px]
              md:text-[8px]
              font-light
              uppercase
              tracking-[0.34em]
              text-[#a9a29a]
            "
          >
            STAY CONNECTED
          </span>

          {/* -----------------------------------------------
              TITLE
          ------------------------------------------------ */}

          <h2
            className="
              newsletter-item
              m-0
              font-serif
              text-[25px]
              sm:text-[29px]
              md:text-[32px]
              lg:text-[35px]
              xl:text-[38px]
              font-light
              uppercase
              leading-[0.95]
              tracking-[-0.025em]
              text-[#eeeae4]
            "
          >
            JOIN OUR WORLD
          </h2>

          {/* -----------------------------------------------
              DESCRIPTION
          ------------------------------------------------ */}

          <p
            className="
              newsletter-item
              mt-[11px]
              mb-0
              max-w-[245px]
            text-[8px]
            sm:text-[9px]
            md:text-[10px]
              font-light
              leading-[1.55]
              text-[#aaa49d]
            "
          >
            Be the first to know about new collections,
            <br />
            exclusive previews and special events.
          </p>

          {/* -----------------------------------------------
              EMAIL FORM
          ------------------------------------------------ */}

          <form
            onSubmit={(e) => e.preventDefault()}
            className="
              newsletter-item
              mt-[17px]
              flex
            w-[245px]
            sm:w-[270px]
            md:w-[290px]
              items-center
              border-b
              border-[#77716b]/70
              pb-[9px]
            "
          >
            <input
              type="email"
              placeholder="Your email address"
              className="
                w-full
                bg-transparent
                border-none
                outline-none
                p-0
               text-[8px]
                sm:text-[9px]
                md:text-[10px]
                font-light
                tracking-[0.01em]
                text-[#d9d3ca]
                placeholder:text-[#77716f]
              "
            />

            <button
              type="submit"
              aria-label="Subscribe"
              className="
                group
                ml-3
                flex
                shrink-0
                items-center
                justify-center
              "
            >
              <span
                className="
                  text-[14px]
                  sm:text-[15px]
                  font-light
                  leading-none
                  text-[#c7c1b9]
                  transition-all
                  duration-500
                  group-hover:translate-x-1
                  group-hover:text-white
                "
              >
                →
              </span>
            </button>
          </form>
        </div>
      </div>

      {/* =====================================================
          SUBTLE BOTTOM LINE
          ===================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          z-20
          h-px
          bg-white/10
        "
      />
    </section>
  );
};