import { PRODUCTS_FILTER } from "./consts";

export interface Product {
    id: number;
    price: number;
    name: string;
    category: string;
    description: string;
    image: string;
  }

export type FilterValue = typeof PRODUCTS_FILTER[keyof typeof PRODUCTS_FILTER]