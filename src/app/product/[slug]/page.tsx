import { notFound } from 'next/navigation';

import {
  getProductBySlug,
} from '@/data/products';

import ProductDetailClient from './ProductDetailClient';

interface ProductDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;

  const product =
    getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <ProductDetailClient
      product={product}
    />
  );
}