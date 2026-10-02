// src/data/products.ts

export type CategoryType = 'RINGS' | 'NECKLACES' | 'EARRINGS' | 'BRACELETS';

export interface Product {
  id: string;
  name: string;
  category: CategoryType;
  price: string;
  description: string;
  heroImages: string[];
  detailImages: string[];
}

export const PRODUCTS_DATA: Record<string, Product> = {
  '1': {
    id: '1',
    name: 'THE LUMIÈRE RING',
    category: 'RINGS',
    price: '$3,850',
    description: 'A timeless expression of pure beauty. The Lumière Ring captures light in its most refined form.',
    heroImages: [
      '/images/product-hero-model1111.jpg',
      '/images/product-detail-2.jpg',
      '/images/product-detail-3.jpg',
    ],
    detailImages: [
      '/images/product-detail-6.jpg',
      '/images/product-detail-7.jpg',
    ],
  },
  '2': {
    id: '2',
    name: 'THE CELESTA BRACELET',
    category: 'BRACELETS',
    price: '$7,420',
    description: 'Engineered for seamless movement and ultimate comfort, clinging gracefully to the wrist.',
    heroImages: [
      '/images/product-detail-2.jpg',
      '/images/product-detail-3.jpg',
    ],
    detailImages: [
      '/images/product-detail-2.jpg',
      '/images/product-detail-3.jpg',
    ],
  },
  '3': {
    id: '3',
    name: 'THE SOLSTICE NECKLACE',
    category: 'NECKLACES',
    price: '$8,760',
    description: 'Designed to rest fluidly along the collarbone, crafted with delicate precision.',
    heroImages: [
      '/images/product-detail-3.jpg',
      '/images/product-detail-4.jpg',
    ],
    detailImages: [
      '/images/product-detail-3.jpg',
      '/images/product-detail-4.jpg',
    ],
  },
  '4': {
    id: '4',
    name: 'THE VÉRITÉ EARRINGS',
    category: 'EARRINGS',
    price: '$6,120',
    description: 'Sculpted to capture light from every angle, featuring ergonomic backs for daily wear.',
    heroImages: [
      '/images/product-detail-4.jpg',
      '/images/product-detail-5.jpg',
    ],
    detailImages: [
      '/images/product-detail-4.jpg',
      '/images/product-detail-5.jpg',
    ],
  },
};