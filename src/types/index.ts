export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  isNew?: boolean;
  image: string;
  category: string;
  brand?: string;
  inStock: boolean;
  sizes?: string[];
  colors?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  size?: string;
  color?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface BannerSlide {
  id: number;
  image: string;
  title?: string;
  subtitle?: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  href: string;
}
