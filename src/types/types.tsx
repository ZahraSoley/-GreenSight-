export interface ProductType {
  id: string;
  name: string;
  type: string;
  price: number;
  tagline: string;
  description: string;
  image: string;
  inStock: boolean;
  size?: string;
  care?: {
    light: string;
    water: string;
    difficulty: string;
  };
}

export type CartItemType = ProductType & { quantity?: number };