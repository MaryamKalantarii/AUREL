'use client';

import React, { use } from 'react';
import { useLenis } from "@/hooks/useLenis";
import { ProductHero } from '@/components/product-detail/ProductHero';
import { ProductDetails } from '@/components/product-detail/ProductDetails';
import { BrandStory } from '@/components/product-detail/BrandStory';
import { ProductShowcase } from '@/components/product-detail/ProductShowcase';
import { Header } from "@/components/layout/Header"; 
import { Footer } from "@/components/layout/Footer";
import { CategoryType } from '@/components/product-detail/ProductDetails';

interface ProductItem {
  slug: string;
  name: string;
  category: CategoryType;
  images: string[];
  description: string;
}

// دیتای موقت بر اساس slug هر محصول
const PRODUCTS_MOCK: Record<string, ProductItem> = {
  'lumiere-ring': {
    slug: 'lumiere-ring',
    name: 'THE LUMIÈRE RING',
    category: 'RINGS',
    images: ['/images/product-detail-6.jpg', '/images/product-detail-7.jpg'],
    description: 'Handcrafted with precision, featuring brilliant diamonds set in a sleek, minimal band.'
  },
  'solstice-necklace': {
    slug: 'solstice-necklace',
    name: 'THE SOLSTICE NECKLACE',
    category: 'NECKLACES',
    images: ['/images/product-detail-2.jpg', '/images/product-detail-3.jpg'],
    description: 'Designed to rest fluidly along the collarbone, crafted with delicate precision and balanced proportions.'
  },
  'celesta-bracelet': {
    slug: 'celesta-bracelet',
    name: 'THE CELESTA BRACELET',
    category: 'BRACELETS',
    images: ['/images/product-detail-4.jpg', '/images/product-detail-5.jpg'],
    description: 'Engineered for seamless movement and ultimate comfort, clinging gracefully to the wrist with a secure lock.'
  },
  'verite-earrings': {
    slug: 'verite-earrings',
    name: 'THE VÉRITÉ EARRINGS',
    category: 'EARRINGS',
    images: ['/images/product-detail-2.jpg', '/images/product-detail-4.jpg'],
    description: 'Sculpted to capture light from every angle, featuring ergonomic backs designed for light weight and daily wear.'
  }
};

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  useLenis();

  // گرفتن پارامتر slug از URL
  const resolvedParams = use(params);
  const slug = resolvedParams?.slug;

  // پیدا کردن محصول براساس slug (در صورت عدم تطابق، لومی‌یر رینگ به عنوان فال‌بک لود می‌شود)
  const currentProduct = PRODUCTS_MOCK[slug] || PRODUCTS_MOCK['lumiere-ring'];

  return (
    <main className="relative w-full bg-[#09090b] min-h-screen overflow-x-hidden text-[#f4f4f5] selection:bg-white selection:text-black">
      <Header />
      <ProductHero />

      {/* پاس دادن مشخصات و کتگوری متناظر با slug به کامپوننت جزئیات */}
      <ProductDetails 
        category={currentProduct.category}
        images={currentProduct.images}
        description={currentProduct.description}
      />

      <BrandStory />
      <ProductShowcase />
      <Footer />
    </main>
  );
}