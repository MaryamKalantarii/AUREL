"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-[#0D0C0B] text-[#F3EFE6] select-none font-sans overflow-hidden">
      {/* ------------------------------------------------------------- */}
      {/* 1. بخش بالای فوتر (CTA Banner با تصویر پس‌زمینه) */}
      {/* ------------------------------------------------------------- */}
      <section className="relative w-full h-[260px] md:h-[320px] flex items-center justify-between px-6 md:px-16 lg:px-24 overflow-hidden border-b border-white/[0.08]">
        {/* تصویر پس‌زمینه سنگی و تاریک */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/footer.png"
            alt="AUREL Atmosphere"
            fill
            priority
            className="object-cover object-center brightness-[0.3] contrast-[1.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0C0B]/90 via-transparent to-[#0D0C0B]/90" />
        </div>

        {/* عنوان بزرگ سمت چپ */}
        <div className="relative z-10">
          <Link
            href="/collection"
            className="group inline-flex items-center gap-4 text-3xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight text-[#F3EFE6] transition-colors duration-300 hover:text-[#D8CCB8]"
          >
            <span>
              DISCOVER <br />
              THE COLLECTION
            </span>
            <span className="text-3xl md:text-5xl font-sans font-extralight transform transition-transform duration-500 group-hover:translate-x-3">
              →
            </span>
          </Link>
        </div>

        {/* لوگو و اسلوگان سمت راست بالای فوتر */}
        <div className="relative z-10 hidden sm:flex flex-col items-end space-y-1">
          <span className="font-serif tracking-[0.4em] text-lg md:text-xl text-[#F3EFE6] uppercase">
            A U R E L
          </span>
          <span className="text-[8px] md:text-[9px] font-mono tracking-[0.35em] text-[#A89379] uppercase">
            OBJECTS OF LIGHT.
          </span>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. بخش اصلی لینک‌ها و ناوبری فوتر */}
      {/* ------------------------------------------------------------- */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-20 pt-16 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8 pb-16 border-b border-white/[0.08]">
          {/* ستون اول: برند و لوگو */}
          <div className="col-span-2 md:col-span-1 space-y-3">
            <h2 className="font-serif tracking-[0.35em] text-xl text-[#F3EFE6] uppercase">
              A U R E L
            </h2>
            <p className="text-[9px] font-mono tracking-[0.3em] text-[#A89379] uppercase">
              OBJECTS OF LIGHT.
            </p>
          </div>

          {/* ستون دوم: SHOP */}
          <div className="space-y-4">
            <h3 className="text-[10px] font-mono tracking-[0.3em] text-[#A89379] uppercase">
              SHOP
            </h3>
            <ul className="space-y-2.5 text-[11px] font-light tracking-[0.05em] text-[#D8CCB8]/80">
              <li>
                <Link href="#" className="hover:text-[#F3EFE6] transition-colors">
                  Rings
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#F3EFE6] transition-colors">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#F3EFE6] transition-colors">
                  Earrings
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#F3EFE6] transition-colors">
                  Bracelets
                </Link>
              </li>
            </ul>
          </div>

          {/* ستون سوم: ABOUT */}
          <div className="space-y-4">
            <h3 className="text-[10px] font-mono tracking-[0.3em] text-[#A89379] uppercase">
              ABOUT
            </h3>
            <ul className="space-y-2.5 text-[11px] font-light tracking-[0.05em] text-[#D8CCB8]/80">
              <li>
                <Link href="#" className="hover:text-[#F3EFE6] transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#F3EFE6] transition-colors">
                  Craftsmanship
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#F3EFE6] transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#F3EFE6] transition-colors">
                  Journal
                </Link>
              </li>
            </ul>
          </div>

          {/* ستون چهارم: SUPPORT */}
          <div className="space-y-4">
            <h3 className="text-[10px] font-mono tracking-[0.3em] text-[#A89379] uppercase">
              SUPPORT
            </h3>
            <ul className="space-y-2.5 text-[11px] font-light tracking-[0.05em] text-[#D8CCB8]/80">
              <li>
                <Link href="#" className="hover:text-[#F3EFE6] transition-colors">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#F3EFE6] transition-colors">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#F3EFE6] transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#F3EFE6] transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* ستون پنجم: FOLLOW US (جایگزین آیکون‌های شبکه اجتماعی با SVG اختصاصی) */}
          <div className="space-y-4 col-span-2 md:col-span-1">
            <h3 className="text-[10px] font-mono tracking-[0.3em] text-[#A89379] uppercase">
              FOLLOW US
            </h3>
            <div className="flex items-center gap-4 text-[#D8CCB8]/80">
              {/* Instagram */}
              <Link href="#" aria-label="Instagram" className="hover:text-[#F3EFE6] transition-colors">
                <svg className="w-4 h-4 fill-none stroke-current stroke-[1.5]" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </Link>
              {/* Pinterest */}
              <Link href="#" aria-label="Pinterest" className="hover:text-[#F3EFE6] transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026l.032-.026z" />
                </svg>
              </Link>
              {/* Facebook */}
              <Link href="#" aria-label="Facebook" className="hover:text-[#F3EFE6] transition-colors">
                <svg className="w-4 h-4 fill-none stroke-current stroke-[1.5]" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              {/* X / Twitter */}
              <Link href="#" aria-label="X" className="hover:text-[#F3EFE6] transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 3. کپی‌رایت و لینک‌های پایین فوتر */}
        {/* ------------------------------------------------------------- */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-[#A89379]/70 tracking-[0.15em] gap-4">
          <div>
            © {new Date().getFullYear()} AUREL. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-[#F3EFE6] transition-colors">
              Terms & Conditions
            </Link>
            <Link href="#" className="hover:text-[#F3EFE6] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;