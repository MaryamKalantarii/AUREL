'use client';

import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import Image from 'next/image';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import type { Product } from '@/types/product';

interface ProductHeroProps {
  product: Product;
}

export const ProductHero = ({
  product,
}: ProductHeroProps) => {
  const containerRef =
    useRef<HTMLDivElement>(null);

  const [selectedMaterial, setSelectedMaterial] =
    useState(
      product.materials[0]?.id ?? '',
    );

  const [selectedImage, setSelectedImage] =
    useState(0);

  const [selectedOptions, setSelectedOptions] =
    useState<Record<string, string>>(() =>
      Object.fromEntries(
        (product.options ?? []).map(
          (option) => [
            option.key,
            option.values[0] ?? '',
          ],
        ),
      ),
    );

  const [isAdding, setIsAdding] =
    useState(false);

  const [isWishlisted, setIsWishlisted] =
    useState(false);

  const [isFullscreen, setIsFullscreen] =
    useState(false);

  /*
   * وقتی از یک Product به Product دیگری
   * navigation می‌کنیم، stateها reset شوند.
   */
  useEffect(() => {
    setSelectedMaterial(
      product.materials[0]?.id ?? '',
    );

    setSelectedImage(0);

    setSelectedOptions(
      Object.fromEntries(
        (product.options ?? []).map(
          (option) => [
            option.key,
            option.values[0] ?? '',
          ],
        ),
      ),
    );

    setIsAdding(false);
    setIsFullscreen(false);
  }, [
    product.slug,
    product.materials,
    product.options,
  ]);

  const activeMaterial = useMemo(
    () =>
      product.materials.find(
        (material) =>
          material.id === selectedMaterial,
      ) ?? product.materials[0],
    [
      product.materials,
      selectedMaterial,
    ],
  );

  const currentImages =
    activeMaterial?.images ?? [];

  const safeSelectedImage = Math.min(
    selectedImage,
    Math.max(
      currentImages.length - 1,
      0,
    ),
  );

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
      });

      tl.fromTo(
        '.hero-anim-item',
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
        },
      );
    },
    {
      scope: containerRef,
      dependencies: [product.slug],
    },
  );

  const handleAddToCart = () => {
    setIsAdding(true);

    window.setTimeout(() => {
      setIsAdding(false);
    }, 1200);
  };

  const handleOptionChange = (
    key: string,
    value: string,
  ) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <section
      ref={containerRef}
      className="relative bg-[#09090b] pb-20 pt-28 text-[#f4f4f5]"
    >
      <div className="mx-auto max-w-[1700px] px-6 sm:px-10 lg:px-14">

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 xl:gap-16">

          {/* ================================================================ */}
          {/* LEFT - IMAGE GALLERY                                             */}
          {/* ================================================================ */}

          <div className="flex flex-col-reverse gap-6 md:flex-row lg:col-span-7">

            {/* Thumbnails */}
            <div className="no-scrollbar flex shrink-0 gap-3 overflow-x-auto md:w-20 md:flex-col md:overflow-y-auto">

              {currentImages.map(
                (img, idx) => (
                  <button
                    key={`${img}-${idx}`}
                    type="button"
                    onClick={() =>
                      setSelectedImage(idx)
                    }
                    className={`relative h-20 w-20 shrink-0 overflow-hidden border transition-all duration-300 ${
                      safeSelectedImage === idx
                        ? 'border-white opacity-100'
                        : 'border-white/10 opacity-40 hover:opacity-80'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} ${
                        idx + 1
                      }`}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </button>
                ),
              )}

            </div>

            {/* Main image */}
            <div className="group relative aspect-[4/5] flex-1 overflow-hidden bg-zinc-900">

              {currentImages.length > 0 && (
                <Image
                  key={`${selectedMaterial}-${safeSelectedImage}`}
                  src={
                    currentImages[
                      safeSelectedImage
                    ] ??
                    currentImages[0]
                  }
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              )}

              {/* Fullscreen */}
              <button
                type="button"
                aria-label="Open image fullscreen"
                onClick={() =>
                  setIsFullscreen(true)
                }
                className="absolute right-4 top-4 border border-white/10 bg-black/40 p-3 text-white opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                  />
                </svg>
              </button>

            </div>
          </div>

          {/* ================================================================ */}
          {/* RIGHT - PRODUCT INFO                                             */}
          {/* ================================================================ */}

          <div className="flex flex-col justify-center pt-4 lg:col-span-5">

            {/* Breadcrumb */}
            <div className="hero-anim-item mb-6 font-mono text-[9px] uppercase tracking-[0.3em] text-zinc-500">
              SHOP / {product.category} /{' '}
              {product.name}
            </div>

            {/* Title */}
            <h1 className="hero-anim-item mb-3 font-serif text-4xl uppercase leading-none tracking-[0.05em] text-white sm:text-5xl lg:text-6xl">
              {product.name}
            </h1>

            {/* Subtitle */}
            <p className="hero-anim-item mb-6 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-400">
              {product.subTitle}
            </p>

            {/* Description */}
            <p className="hero-anim-item mb-8 max-w-md font-serif text-sm leading-relaxed text-zinc-400">
              {product.description}
            </p>

            {/* Price / Rating */}
            <div className="hero-anim-item mb-8 flex items-center justify-between border-y border-white/10 py-5">

              <span className="font-serif text-2xl tracking-wide text-white">
                {product.price}
              </span>

              <div className="flex items-center gap-2">

                <span
                  className="text-xs text-zinc-300"
                  aria-label={`${product.rating} out of 5 stars`}
                >
                  {'★'.repeat(
                    Math.round(
                      product.rating,
                    ),
                  )}
                </span>

                <span className="font-mono text-[10px] text-zinc-500">
                  {product.rating.toFixed(1)} (
                  {product.reviewsCount}{' '}
                  reviews)
                </span>

              </div>
            </div>

            {/* ============================================================ */}
            {/* MATERIALS                                                    */}
            {/* ============================================================ */}

            {product.materials.length >
              0 && (
              <div className="hero-anim-item mb-8">

                <div className="mb-3 flex items-center justify-between">

                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                    MATERIAL
                  </span>

                  <span className="font-serif text-xs text-zinc-300">
                    {activeMaterial?.label}
                  </span>

                </div>

                <div className="flex items-center gap-3">

                  {product.materials.map(
                    (material) => (
                      <button
                        key={material.id}
                        type="button"
                        onClick={() => {
                          setSelectedMaterial(
                            material.id,
                          );

                          setSelectedImage(
                            0,
                          );
                        }}
                        title={material.label}
                        aria-label={`Select ${material.label}`}
                        className={`relative h-8 w-8 rounded-full p-[2px] transition-all duration-300 ${
                          selectedMaterial ===
                          material.id
                            ? 'scale-110 ring-1 ring-white ring-offset-2 ring-offset-[#09090b]'
                            : 'opacity-40 hover:scale-105 hover:opacity-100'
                        }`}
                      >
                        <div
                          className={`h-full w-full rounded-full bg-gradient-to-br ${material.gradient} shadow-inner`}
                        />
                      </button>
                    ),
                  )}

                </div>
              </div>
            )}

            {/* ============================================================ */}
            {/* DYNAMIC OPTIONS                                              */}
            {/* ============================================================ */}

            {product.options?.map(
              (option) => (
                <div
                  key={option.key}
                  className="hero-anim-item mb-8"
                >

                  <div className="mb-4 flex items-center justify-between">

                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                      {option.label}
                    </span>

                    {option.guideLabel && (
                      <button
                        type="button"
                        className="font-mono text-[9px] uppercase tracking-[0.15em] text-zinc-500 underline hover:text-white"
                      >
                        {option.guideLabel}
                      </button>
                    )}

                  </div>

                  <div className="flex gap-2">

                    {option.values.map(
                      (value) => {
                        const selected =
                          selectedOptions[
                            option.key
                          ] === value;

                        return (
                          <button
                            key={value}
                            type="button"
                            onClick={() =>
                              handleOptionChange(
                                option.key,
                                value,
                              )
                            }
                            className={`h-11 flex-1 border font-mono text-xs transition-all ${
                              selected
                                ? 'border-white bg-white text-black'
                                : 'border-white/10 bg-transparent text-zinc-400 hover:border-white/40'
                            }`}
                          >
                            {value}
                          </button>
                        );
                      },
                    )}

                  </div>
                </div>
              ),
            )}

            {/* ============================================================ */}
            {/* CTA                                                           */}
            {/* ============================================================ */}

            <div className="hero-anim-item mb-12 space-y-4">

              <button
                type="button"
                onClick={
                  handleAddToCart
                }
                disabled={isAdding}
                className="flex h-14 w-full items-center justify-center gap-3 bg-white font-mono text-[10px] uppercase tracking-[0.25em] text-black transition-colors hover:bg-zinc-200 disabled:cursor-wait disabled:opacity-70"
              >
                {isAdding ? (
                  <span className="animate-pulse">
                    ADDING TO CART...
                  </span>
                ) : (
                  <>
                    <span>
                      ADD TO CART
                    </span>
                    <span>→</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() =>
                  setIsWishlisted(
                    (prev) => !prev,
                  )
                }
                className="flex h-12 w-full items-center justify-center gap-2 border border-white/10 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-300 transition-all hover:border-white/30"
              >

                <svg
                  className={`h-4 w-4 transition-colors ${
                    isWishlisted
                      ? 'fill-white stroke-white'
                      : 'fill-none stroke-current'
                  }`}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeWidth={1.5}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>

                <span>
                  {isWishlisted
                    ? 'ADDED TO WISHLIST'
                    : 'ADD TO WISHLIST'}
                </span>

              </button>
            </div>

            {/* Service Benefits */}
            <div className="hero-anim-item grid grid-cols-3 gap-4 border-t border-white/10 pt-8">

              {[
                {
                  title: 'Free Shipping',
                  desc: 'Worldwide complimentary',
                },
                {
                  title: 'Lifetime Warranty',
                  desc: 'Guaranteed authenticity',
                },
                {
                  title: 'Premium Packaging',
                  desc: 'Signature AUREL box',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-center text-center"
                >
                  <span className="mb-1 font-mono text-[9px] uppercase tracking-[0.15em] text-white">
                    {item.title}
                  </span>

                  <span className="font-serif text-[11px] text-zinc-500">
                    {item.desc}
                  </span>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>

      {/* ================================================================== */}
      {/* FULLSCREEN LIGHTBOX                                                */}
      {/* ================================================================== */}

      {isFullscreen &&
        currentImages.length >
          0 && (
          <div className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 p-8 backdrop-blur-xl">

            <div className="flex items-center justify-between text-white">

              <span className="font-mono text-xs tracking-widest">
                {String(
                  safeSelectedImage + 1,
                ).padStart(2, '0')}{' '}
                /{' '}
                {String(
                  currentImages.length,
                ).padStart(2, '0')}
              </span>

              <button
                type="button"
                onClick={() =>
                  setIsFullscreen(false)
                }
                className="font-mono text-xs uppercase tracking-widest hover:text-zinc-400"
              >
                CLOSE [X]
              </button>

            </div>

            <div className="relative mx-auto my-8 w-full max-w-5xl flex-1">

              <Image
                src={
                  currentImages[
                    safeSelectedImage
                  ] ??
                  currentImages[0]
                }
                alt={product.name}
                fill
                sizes="100vw"
                className="object-contain"
              />

            </div>

            <div className="flex justify-center gap-8 font-mono text-xs tracking-widest text-white">

              <button
                type="button"
                onClick={() =>
                  setSelectedImage(
                    (prev) =>
                      prev > 0
                        ? prev - 1
                        : currentImages.length -
                          1,
                  )
                }
                className="hover:text-zinc-400"
              >
                ← PREV
              </button>

              <button
                type="button"
                onClick={() =>
                  setSelectedImage(
                    (prev) =>
                      prev <
                      currentImages.length - 1
                        ? prev + 1
                        : 0,
                  )
                }
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