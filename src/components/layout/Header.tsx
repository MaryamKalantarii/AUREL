"use client";

import React, { useState, useEffect } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-500
        px-8 sm:px-14 py-6
        flex items-center justify-between
        ${scrolled ? "bg-[#050505]/70 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent"}
      `}
    >
      {/* سمت چپ: لوگو + نشانگر زنده کلکسیون */}
      <div className="flex items-center gap-6">
        <a href="#" className="text-sm tracking-[0.3em] font-serif font-light text-[#F7F5F0]">
          AUREL
        </a>
        <div className="hidden md:flex items-center gap-2 pl-6 border-l border-white/10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <span className="text-[9px] tracking-[0.25em] text-[#E8E5DF]/50 uppercase font-mono">
            2026 EDITION
          </span>
        </div>
      </div>

      {/* وسط: لینک‌های ناوبری اصلی */}
      <nav className="hidden lg:flex items-center gap-10">
        {["COLLECTION", "ABOUT", "SAVOIR-FAIRE", "CONTACT"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="
              relative text-[10px] tracking-[0.25em] text-[#E8E5DF]/70 uppercase font-light
              transition-colors duration-300 hover:text-[#F7F5F0]
              after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px]
              after:bg-white/60 after:transition-all after:duration-300 hover:after:w-full
            "
          >
            {item}
          </a>
        ))}
      </nav>

      {/* سمت راست: دکمه صدا + منوی همبرگری */}
      <div className="flex items-center gap-6">
        {/* دکمه صدای محیطی */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="hidden sm:flex items-center gap-2 text-[10px] tracking-[0.2em] text-[#E8E5DF]/60 hover:text-white transition-colors duration-300"
        >
          <div className="flex items-end gap-[2px] h-3">
            <span className={`w-[2px] bg-current transition-all duration-300 ${!isMuted ? "h-3 animate-pulse" : "h-1"}`} />
            <span className={`w-[2px] bg-current transition-all duration-300 ${!isMuted ? "h-2 animate-pulse" : "h-2"}`} />
            <span className={`w-[2px] bg-current transition-all duration-300 ${!isMuted ? "h-3.5 animate-pulse" : "h-1"}`} />
          </div>
          <span>{isMuted ? "SOUND OFF" : "SOUND ON"}</span>
        </button>

        {/* دکمه منوی کشویی */}
        <button className="px-4 py-1.5 rounded-full border border-white/15 text-[10px] tracking-[0.2em] text-[#E8E5DF] hover:border-white/40 hover:bg-white/5 transition-all duration-300">
          MENU
        </button>
      </div>
    </header>
  );
}