'use client';

import React from 'react';

export const ProductFooter = () => {
  return (
    <footer className="bg-[#050507] text-[#f4f4f5] border-t border-white/10 pt-20 pb-12">
      <div className="mx-auto max-w-[1700px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Identity */}
          <div className="md:col-span-4">
            <h2 className="font-serif text-3xl tracking-[0.2em] uppercase text-white mb-3">AUREL</h2>
            <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-zinc-500">OBJECTS OF LIGHT.</p>
          </div>

          {/* Links */}
          <div className="md:col-span-2 space-y-3 font-mono text-[10px] text-zinc-400">
            <span className="text-white uppercase tracking-[0.2em] block mb-4">SHOP</span>
            {['Rings', 'Necklaces', 'Earrings', 'Bracelets'].map((link) => (
              <a key={link} href="#" className="block hover:text-white transition-colors">{link}</a>
            ))}
          </div>

          <div className="md:col-span-2 space-y-3 font-mono text-[10px] text-zinc-400">
            <span className="text-white uppercase tracking-[0.2em] block mb-4">ABOUT</span>
            {['Our Story', 'Craftsmanship', 'Sustainability', 'Journal'].map((link) => (
              <a key={link} href="#" className="block hover:text-white transition-colors">{link}</a>
            ))}
          </div>

          <div className="md:col-span-4">
            <span className="font-mono text-[10px] text-white uppercase tracking-[0.2em] block mb-4">NEWSLETTER</span>
            <p className="font-serif text-xs text-zinc-500 mb-6">Be the first to know about new collections, exclusive offers and more.</p>
            <div className="flex border-b border-white/20 pb-2">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-transparent border-none text-xs text-white placeholder-zinc-600 focus:outline-none flex-1 font-serif"
              />
              <button className="font-mono text-xs text-white">→</button>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-white/5 pt-8 font-mono text-[9px] text-zinc-600 gap-4">
          <span>© 2026 AUREL. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-400">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};