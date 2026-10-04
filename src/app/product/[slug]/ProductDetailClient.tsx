'use client';

import React from 'react';

import { useLenis } from '@/hooks/useLenis';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

import { BrandStory } from '@/components/product-detail/BrandStory';
import { ProductHero } from '@/components/product-detail/ProductHero';
import { ProductDetails } from '@/components/product-detail/ProductDetails';
import { ProductShowcase } from '@/components/product-detail/ProductShowcase';

import type { Product } from '@/types/product';

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({
  product,
}: ProductDetailClientProps) {
  useLenis();

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#09090b] text-[#f4f4f5] selection:bg-white selection:text-black">

      <Header />

      <ProductHero
        product={product}
      />

      <ProductDetails
        product={product}
      />

      <BrandStory
        product={product}
      />

      <ProductShowcase
        product={product}
      />

      <Footer />

    </main>
  );
}