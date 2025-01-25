// src/types/index.ts
export interface Product {
    id: string;
    title: string;
    price: number;
    image: string;
    // 他の必要なフィールド
  }
  
  export interface Order {
    orderId: string;
    status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
    items: OrderItem[];
    // 他の必要なフィールド
  }
  
  export interface Category {
    id: string;
    name: string;
    icon: string;
    subcategories?: Category[];
  }
  