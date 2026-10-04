import type { ProductCategory } from '@/types/product';

export interface ProductDetailField {
  key: string;
  label: string;
}

/*
 * این فایل مشخص می‌کند هر Category
 * چه فیلدهایی در بخش THE DETAILS دارد.
 *
 * خود مقدارها داخل products.ts هستند.
 */
export const productSchemas: Record<
  ProductCategory,
  ProductDetailField[]
> = {
  RINGS: [
    {
      key: 'centerStone',
      label: 'CENTER STONE',
    },
    {
      key: 'caratWeight',
      label: 'CARAT WEIGHT',
    },
    {
      key: 'cut',
      label: 'CUT',
    },
    {
      key: 'color',
      label: 'COLOR',
    },
    {
      key: 'clarity',
      label: 'CLARITY',
    },
    {
      key: 'metal',
      label: 'METAL',
    },
  ],

  BRACELETS: [
    {
      key: 'centerStone',
      label: 'CENTER STONE',
    },
    {
      key: 'caratWeight',
      label: 'CARAT WEIGHT',
    },
    {
      key: 'metal',
      label: 'METAL',
    },
    {
      key: 'braceletStyle',
      label: 'BRACELET STYLE',
    },
    {
      key: 'clasp',
      label: 'CLASP',
    },
  ],

  NECKLACES: [
    {
      key: 'centerStone',
      label: 'CENTER STONE',
    },
    {
      key: 'caratWeight',
      label: 'CARAT WEIGHT',
    },
    {
      key: 'metal',
      label: 'METAL',
    },
    {
      key: 'chainLength',
      label: 'CHAIN LENGTH',
    },
    {
      key: 'clasp',
      label: 'CLASP',
    },
  ],

  EARRINGS: [
    {
      key: 'centerStone',
      label: 'CENTER STONE',
    },
    {
      key: 'caratWeight',
      label: 'CARAT WEIGHT',
    },
    {
      key: 'metal',
      label: 'METAL',
    },
    {
      key: 'closure',
      label: 'CLOSURE',
    },
    {
      key: 'style',
      label: 'STYLE',
    },
  ],
};