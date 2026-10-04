export type ProductCategory =
  | 'RINGS'
  | 'NECKLACES'
  | 'EARRINGS'
  | 'BRACELETS';

export interface ProductMaterial {
  id: string;
  label: string;
  gradient: string;
  images: string[];
}

export interface ProductOption {
  key: string;
  label: string;
  values: string[];
  guideLabel?: string;
}

export interface ProductShowcaseItem {
  title: string;
  image: string;
}

export interface Product {
  id: string;
  number: string;
  slug: string;

  name: string;
  subTitle: string;

  category: ProductCategory;

  price: string;
  rawPrice: number;

  rating: number;
  reviewsCount: number;

  description: string;

  isBestSeller: boolean;
  isDiscount: boolean;
  isNew: boolean;

  /*
   * متریال‌های قابل انتخاب محصول
   * مثل White Gold / Yellow Gold / Rose Gold
   */
  materials: ProductMaterial[];

  /*
   * اطلاعات ثابت محصول
   * مثل:
   * centerStone
   * caratWeight
   * metal
   * etc.
   */
  details: Record<string, string>;

  /*
   * گزینه‌هایی که کاربر می‌تواند انتخاب کند.
   * مثلاً:
   * Ring Size
   * Bracelet Length
   * Chain Length
   */
  options?: ProductOption[];

  /*
   * تصاویر بخش THE DETAILS
   */
  detailImages: string[];

  /*
   * تصاویر بخش Showcase پایین صفحه
   */
  showcase: ProductShowcaseItem[];

     BrandStory?: {
    leftImage: string;
    rightImage: string;
  };
}