'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const MATERIALS = [
  { 
    id: 'white-gold', 
    label: 'White Gold', 
    gradient: 'from-zinc-300 via-[#e4e4e7] to-zinc-500',
    images: [
      '/images/product-hero-model1111.jpg',
      '/images/product-detail-2.jpg',
      '/images/product-detail-3.jpg',
      '/images/product-detail-4.jpg',
      '/images/product-detail-5.jpg',
    ]
  },
  { 
    id: 'yellow-gold', 
    label: 'Yellow Gold', 
    gradient: 'from-[#ffd700] via-[#d4af37] to-[#996515]',
    images: [
      '/images/product-hero-model2.png',
      '/images/product-detail-2.png',
      '/images/product-detail-3.png',
      '/images/product-detail-4.png',
      '/images/product-detail-5.png',
    ]
  },
  { 
    id: 'rose-gold', 
    label: 'Rose Gold', 
    gradient: 'from-[#e8a598] via-[#f7d6cd] to-[#b76e79]',
    images: [
      '/images/product-hero-model2.png',
      '/images/product-detail-2.png',
      '/images/product-detail-3.png',
      '/images/product-detail-4.png',
      '/images/product-detail-5.png',
    ]
  },
];

export const ProductHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedMaterial, setSelectedMaterial] = useState('white-gold');
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('6');
  const [isAdding, setIsAdding] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const activeMaterialObj = MATERIALS.find((m) => m.id === selectedMaterial) || MATERIALS[0];
  const currentImages = activeMaterialObj.images;

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.hero-anim-item',
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.1 }
      );
    },
    { scope: containerRef }
  );

  const handleAddToCart = () => {
    setIsAdding(true);
    setTimeout(() => {
      setIsAdding(false);
    }, 1200);
  };

  return (
    <section ref={containerRef} className="relative pt-28 pb-20 bg-[#09090b] text-[#f4f4f5]">
      <div className="mx-auto max-w-[1700px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-start">
          
          {/* LEFT: IMAGE GALLERY (7 COLS) */}
          <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-6">
            {/* Vertical Thumbnail Rail */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto no-scrollbar md:w-20 shrink-0">
              {currentImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative h-20 w-20 shrink-0 overflow-hidden border transition-all duration-300 ${
                    selectedImage === idx ? 'border-white opacity-100' : 'border-white/10 opacity-40 hover:opacity-80'
                  }`}
                >
                  <Image src={img} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>

            {/* Main Stage Image */}
            <div className="relative flex-1 aspect-[4/5] bg-zinc-900 overflow-hidden group">
              <Image
                key={`${selectedMaterial}-${selectedImage}`}
                src={currentImages[selectedImage] || MATERIALS[0].images[0]}
                alt="THE LUMIÈRE RING"
                fill
                priority
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Fullscreen Trigger */}
              <button
                onClick={() => setIsFullscreen(true)}
                className="absolute top-4 right-4 p-3 bg-black/40 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </button>
            </div>
          </div>

          {/* RIGHT: PRODUCT INFO (5 COLS) */}
          <div className="lg:col-span-5 flex flex-col justify-center pt-4">
            {/* Breadcrumb */}
            <div className="hero-anim-item font-mono text-[9px] uppercase tracking-[0.3em] text-zinc-500 mb-6">
              SHOP / RINGS / THE LUMIÈRE RING
            </div>

            {/* Title */}
            <h1 className="hero-anim-item font-serif text-4xl sm:text-5xl lg:text-6xl uppercase tracking-[0.05em] text-white leading-none mb-3">
              THE LUMIÈRE <br /> RING
            </h1>

            <p className="hero-anim-item font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-400 mb-6">
              SOLITAIRE DIAMOND RING
            </p>

            {/* Description */}
            <p className="hero-anim-item font-serif text-sm leading-relaxed text-zinc-400 max-w-md mb-8">
              A timeless expression of pure beauty. The Lumière Ring captures light in its most refined form — crafted for a lifetime.
            </p>

            {/* Price & Rating */}
            <div className="hero-anim-item flex items-center justify-between border-y border-white/10 py-5 mb-8">
              <span className="font-serif text-2xl text-white tracking-wide">$3,850</span>
              <div className="flex items-center gap-2">
                <span className="text-zinc-300 text-xs">★★★★★</span>
                <span className="font-mono text-[10px] text-zinc-500">4.9 (124 reviews)</span>
              </div>
            </div>

            {/* Material Selector */}
            <div className="hero-anim-item mb-8">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">MATERIAL</span>
                <span className="font-serif text-xs text-zinc-300">{activeMaterialObj.label}</span>
              </div>
              <div className="flex items-center gap-3">
                {MATERIALS.map((mat) => (
                  <button
                    key={mat.id}
                    onClick={() => {
                      setSelectedMaterial(mat.id);
                      setSelectedImage(0);
                    }}
                    title={mat.label}
                    className={`relative w-8 h-8 rounded-full p-[2px] transition-all duration-300 ${
                      selectedMaterial === mat.id
                        ? 'ring-1 ring-white ring-offset-2 ring-offset-[#09090b] scale-110'
                        : 'opacity-40 hover:opacity-100 hover:scale-105'
                    }`}
                  >
                    <div className={`w-full h-full rounded-full bg-gradient-to-br ${mat.gradient} shadow-inner`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="hero-anim-item mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">RING SIZE</span>
                <button className="font-mono text-[9px] uppercase tracking-[0.15em] text-zinc-500 underline hover:text-white">SIZE GUIDE</button>
              </div>
              <div className="flex gap-2">
                {['4', '5', '6', '7', '8', '9'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`h-11 flex-1 font-mono text-xs transition-all border ${
                      selectedSize === size
                        ? 'border-white bg-white text-black'
                        : 'border-white/10 bg-transparent text-zinc-400 hover:border-white/40'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hero-anim-item space-y-4 mb-12">
              <button
                onClick={handleAddToCart}
                disabled={isAdding}
                className="w-full h-14 bg-white text-black font-mono text-[10px] uppercase tracking-[0.25em] hover:bg-zinc-200 transition-colors flex items-center justify-center gap-3"
              >
                {isAdding ? (
                  <span className="animate-pulse">ADDING TO CART...</span>
                ) : (
                  <>
                    <span>ADD TO CART</span>
                    <span>→</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="w-full h-12 border border-white/10 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-300 hover:border-white/30 transition-all flex items-center justify-center gap-2"
              >
                <svg
                  className={`w-4 h-4 transition-colors ${isWishlisted ? 'fill-white stroke-white' : 'fill-none stroke-current'}`}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span>{isWishlisted ? 'ADDED TO WISHLIST' : 'ADD TO WISHLIST'}</span>
              </button>
            </div>

            {/* Service Benefits */}
            <div className="hero-anim-item grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
              {[
                { title: 'Free Shipping', desc: 'Worldwide complimentary' },
                { title: 'Lifetime Warranty', desc: 'Guaranteed authenticity' },
                { title: 'Premium Packaging', desc: 'Signature AUREL box' }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-white mb-1">{item.title}</span>
                  <span className="font-serif text-[11px] text-zinc-500">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-8">
          <div className="flex justify-between items-center text-white">
            <span className="font-mono text-xs tracking-widest">
              0{selectedImage + 1} / 0{currentImages.length}
            </span>
            <button onClick={() => setIsFullscreen(false)} className="font-mono text-xs uppercase tracking-widest hover:text-zinc-400">
              CLOSE [X]
            </button>
          </div>

          <div className="relative flex-1 my-8 max-w-5xl mx-auto w-full">
            <Image src={currentImages[selectedImage] || MATERIALS[0].images[0]} alt="" fill className="object-contain" />
          </div>

          <div className="flex justify-center gap-8 text-white font-mono text-xs tracking-widest">
            <button
              onClick={() => setSelectedImage((prev) => (prev > 0 ? prev - 1 : currentImages.length - 1))}
              className="hover:text-zinc-400"
            >
              ← PREV
            </button>
            <button
              onClick={() => setSelectedImage((prev) => (prev < currentImages.length - 1 ? prev + 1 : 0))}
              className="hover:text-zinc-400"
            >
              NEXT →
            </button>
          </div>
        </div>
      )}
    </section>
  );
};