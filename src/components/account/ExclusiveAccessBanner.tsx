'use client';

import React from 'react';

export const ExclusiveAccessBanner: React.FC = () => {
  return (
    <aside className="lg:col-span-4 relative rounded-2xl overflow-hidden border border-white/10 h-full flex flex-col justify-between p-8 bg-[#0B0B0A] group">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/account/ACCESSmain.jpg"
          alt="Exclusive Access"
          className="w-full h-full object-cover opacity-60 filter grayscale group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060605] via-[#060605]/40 to-transparent" />
      </div>

      <div className="relative z-10">
        <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#F7F5F0] leading-snug">
          EXCLUSIVE ACCESS
        </h3>
        <p className="font-sans text-xs font-light text-[#A8A39A] leading-relaxed mt-3 max-w-xs">
          Be the first to know about new collections, private events and exclusive offers.
        </p>

        <button className="mt-6 px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-md font-sans text-[10px] uppercase tracking-[0.25em] text-[#F7F5F0] hover:bg-[#D8C2A8] hover:text-[#060605] hover:border-[#D8C2A8] transition-all duration-500">
          MANAGE PREFERENCES →
        </button>
      </div>

      <div className="relative z-10 pt-12 border-t border-white/10 flex justify-between items-center">
        <span className="font-serif text-xs italic text-[#D8C2A8]">AUREL ATELIER</span>
        <span className="font-mono text-[9px] text-[#6A655D] uppercase tracking-[0.2em]">OBJECTS OF LIGHT.</span>
      </div>
    </aside>
  );
};