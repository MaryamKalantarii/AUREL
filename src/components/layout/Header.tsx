"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "COLLECTION", href: "/collection" },
  { label: "PRODUCT", href: "/product" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 w-full z-50 transition-all duration-500
          px-8 sm:px-14 py-6
          flex items-center justify-between
          ${
            scrolled
              ? "bg-[#050505]/80 backdrop-blur-md py-4 border-b border-white/5"
              : "bg-transparent"
          }
        `}
      >
        {/* DESKTOP LEFT: LOGO + EDITION — ORIGINAL STRUCTURE PRESERVED */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm tracking-[0.3em] font-serif font-light text-[#F7F5F0] hover:text-[#D8C2A8] transition-colors duration-300"
          >
            AUREL
          </Link>

          <div className="hidden md:flex items-center gap-2 pl-6 border-l border-white/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
            </span>

            <span className="text-[9px] tracking-[0.25em] text-[#E8E5DF]/50 uppercase font-mono">
              2026 EDITION
            </span>
          </div>
        </div>

        {/* DESKTOP NAVIGATION — UNCHANGED */}
        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="
                relative text-[10px] tracking-[0.25em] text-[#E8E5DF]/70 uppercase font-light
                transition-colors duration-300 hover:text-[#F7F5F0]
                after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px]
                after:bg-white/60 after:transition-all after:duration-300 hover:after:w-full
              "
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT ACTIONS — DESKTOP STRUCTURE PRESERVED */}
        <div className="flex items-center gap-6">
          <Link
            href="/cart"
            aria-label="Shopping Bag"
            className="group relative flex items-center justify-center p-1.5 text-[#E8E5DF]/70 hover:text-[#D8C2A8] transition-colors duration-300"
          >
            <svg
              className="w-5 h-5 stroke-[1.2] transition-transform duration-300 group-hover:scale-110"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 8a4 4 0 0 1 8 0" />
              <rect x="5" y="8" width="14" height="12" rx="3" />
              <circle cx="12" cy="13" r="1" fill="currentColor" />
            </svg>

            <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-[#D8C2A8] opacity-80 group-hover:scale-125 transition-transform" />
          </Link>

          <Link
            href="/login"
            className="px-5 py-1.5 rounded-full border border-white/15 text-[10px] tracking-[0.25em] text-[#E8E5DF] hover:border-[#D8C2A8] hover:text-[#D8C2A8] hover:bg-white/5 transition-all duration-300 uppercase font-light"
          >
            LOGIN
          </Link>
        </div>

        {/* MOBILE HAMBURGER — ONLY VISIBLE ON MOBILE */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="aurel-mobile-navigation"
          className="hidden"
        />
      </header>

      {/* MOBILE NAVIGATION — SEPARATE FROM DESKTOP HEADER */}
      <div className="lg:hidden">
        {/* Mobile top bar */}
        <div className="fixed top-0 inset-x-0 z-[70] flex h-[68px] items-center justify-between border-b border-white/10 bg-[#11100F]/85 px-5 text-[#F7F5F0] backdrop-blur-xl lg:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="aurel-mobile-navigation"
            className="flex h-10 w-10 items-center justify-center"
          >
            <span className="flex w-6 flex-col gap-[6px]">
              <span
                className={`h-px bg-current transition-all duration-300 ${
                  menuOpen
                    ? "w-6 translate-y-[3.5px] rotate-45"
                    : "w-6"
                }`}
              />
              <span
                className={`h-px bg-current transition-all duration-300 ${
                  menuOpen
                    ? "w-6 -translate-y-[3.5px] -rotate-45"
                    : "w-4"
                }`}
              />
            </span>
          </button>

          <Link
            href="/"
            onClick={closeMenu}
            className="absolute left-1/2 -translate-x-1/2 font-serif text-xl font-light tracking-[0.3em]"
          >
            AUREL
          </Link>

          <Link
            href="/login"
            onClick={closeMenu}
            className="text-[9px] tracking-[0.18em] transition-colors hover:text-[#D8C2A8]"
          >
            SIGN IN <span className="ml-1">↗</span>
          </Link>
        </div>

        {/* Full-screen menu */}
        <div
          id="aurel-mobile-navigation"
          aria-hidden={!menuOpen}
          className={`fixed inset-0 z-[65] bg-[#11100F] text-[#F7F5F0] transition-all duration-500 ${
            menuOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-3 pointer-events-none opacity-0"
          }`}
        >
          <div className="flex h-full flex-col justify-center px-7 pb-12 pt-20">
            <p className="mb-8 font-mono text-[9px] tracking-[0.3em] text-white/40">
              AUREL — OBJECTS OF LIGHT.
            </p>

            <nav className="flex flex-col">
              {navItems.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  tabIndex={menuOpen ? 0 : -1}
                  onClick={closeMenu}
                  className="flex items-center justify-between border-b border-white/15 py-5 font-serif text-xl font-light tracking-wide transition-colors hover:text-[#D8C2A8]"
                >
                  <span>{item.label}</span>
                  <span className="font-sans text-[10px] text-white/35">
                    0{index + 1}
                  </span>
                </Link>
              ))}
            </nav>

            <Link
              href="/cart"
              tabIndex={menuOpen ? 0 : -1}
              onClick={closeMenu}
              className="mt-7 flex items-center justify-between border-b border-white/15 py-4 text-[10px] tracking-[0.2em]"
            >
              SHOPPING BAG
              <span>↗</span>
            </Link>

            <Link
              href="/login"
              tabIndex={menuOpen ? 0 : -1}
              onClick={closeMenu}
              className="mt-5 flex items-center justify-between border border-white/25 px-5 py-4 text-[10px] tracking-[0.2em] transition-colors hover:border-[#D8C2A8] hover:text-[#D8C2A8]"
            >
              SIGN IN TO YOUR ACCOUNT
              <span>↗</span>
            </Link>

            <p className="mt-10 font-mono text-[8px] tracking-[0.2em] text-white/30">
              A STUDY IN FORM, MATERIAL & PERMANENCE
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;