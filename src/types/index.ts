export interface Category {
    id: string;
    name: string;
    icon: any; // lucide-reactのアイコンコンポーネントの型
    subcategories?: Category[];
  }
  
  export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    category: string;
    image: string;
  }
  
  export interface CartItem {
    id: string;
    quantity: number;
    product: Product;
  }
  
  export interface CartState {
    items: CartItem[];
  }
  
  export type CartAction = 
    | { type: 'ADD_ITEM'; payload: Product }
    | { type: 'REMOVE_ITEM'; payload: string }
    | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } };
  