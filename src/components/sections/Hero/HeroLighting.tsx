"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export function HeroLighting() {
  const glowRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const raysRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ambient Glow Pulse
    gsap.to(glowRef.current, {
      scale: 1.12,
      opacity: 0.8,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Orbital Light Dot Motion on Curve (Standard GSAP)
    if (orbRef.current) {
      gsap.to(orbRef.current, {
        x: "75vw",
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    // Light Rays subtle motion
    if (raysRef.current) {
      gsap.to(raysRef.current, {
        rotate: 3,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Large Studio Soft Ambient Glow */}
      <div
        ref={glowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] sm:w-[650px] sm:h-[650px] md:w-[850px] md:h-[850px] rounded-full blur-[120px] sm:blur-[160px] opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(235, 232, 225, 0.18) 0%, rgba(140, 138, 130, 0.05) 50%, rgba(5, 5, 5, 0) 75%)",
        }}
      />

      {/* Cinematic Thin Light Rays */}
      <div ref={raysRef} className="absolute inset-0 opacity-15">
        <div className="absolute -top-1/3 left-1/3 w-[1px] h-[170%] bg-gradient-to-b from-transparent via-white/40 to-transparent rotate-[26deg] blur-[1px]" />
        <div className="absolute -top-1/3 right-1/3 w-[1px] h-[170%] bg-gradient-to-b from-transparent via-white/20 to-transparent rotate-[-18deg] blur-[1.5px]" />
      </div>

      {/* Subtle Dust / Sparkle Particles in Atmosphere */}
      <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-white/30 rounded-full blur-[0.5px]" />
      <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-white/25 rounded-full blur-[1px]" />
      <div className="absolute top-1/2 left-2/3 w-1 h-1 bg-white/40 rounded-full blur-[0.5px]" />

      {/* Curved Orbital Light Trail at Bottom */}
      <div className="absolute bottom-12 left-0 right-0 h-[120px] pointer-events-none opacity-40">
        <svg className="w-full h-full" viewBox="0 0 1200 120" fill="none">
          <path
            d="M 0 100 Q 600 200 1200 80"
            stroke="url(#curve-gradient)"
            strokeWidth="0.8"
          />
          <defs>
            <linearGradient id="curve-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.4)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
        {/* Orbital Glowing Light Point */}
        <div
          ref={orbRef}
          className="absolute bottom-10 left-10 w-2 h-2 bg-white rounded-full shadow-[0_0_12px_4px_rgba(255,255,255,0.8)] blur-[0.5px]"
        />
      </div>
    </div>
  );
}