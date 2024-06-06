export interface Product {
    id: number;
    price: number;
    name: string;
    category: string;
    description: string;
    image: string;
  }

  export type ProductKey = keyof Product;


