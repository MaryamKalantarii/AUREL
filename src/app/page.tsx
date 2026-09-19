"use client";

import { useLenis } from "@/hooks/useLenis";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero/Hero";

export default function Home() {
  // فعال‌سازی Smooth Scroll Lenis
  useLenis();

  return (
    <main className="relative min-h-screen bg-[#0A0A0A] text-[#F7F5F0]">
      <Header />
      <Hero />
      
      {/* فضای نگهدارنده برای بخش‌های بعدی پروژه AUREL */}
      <section className="h-screen flex items-center justify-center border-t border-white/5">
        <p className="font-mono-luxury text-xs tracking-widest text-[#B8B6B0]">
          NEXT SECTION: THE CRAFT & COLLECTION
        </p>
      </section>
    </main>
  );
}