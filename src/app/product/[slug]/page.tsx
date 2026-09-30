"use client";

import { useLenis } from "@/hooks/useLenis";
import { ProductHeader } from '@/components/product-detail/ProductHeader';
import { ProductHero } from '@/components/product-detail/ProductHero';
import { ProductDetails } from '@/components/product-detail/ProductDetails';
import { BrandStory } from '@/components/product-detail/BrandStory';
import { ProductShowcase } from '@/components/product-detail/ProductShowcase';
import { ProductFooter } from '@/components/product-detail/ProductFooter';

export default function ProductDetailPage() {
  useLenis();

  return (
    <main className="relative w-full bg-[#09090b] min-h-screen overflow-x-hidden text-[#f4f4f5] selection:bg-white selection:text-black">
      <ProductHeader />
      <ProductHero />
      <ProductDetails />
      <BrandStory />
      <ProductShowcase />
      <ProductFooter />
    </main>
  );
}