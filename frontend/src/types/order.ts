// src/types/order.ts
export interface OrderItem {
    id: string;
    name: string;
    quantity: number;
    price: number;
  }
  
  export interface Order {
    orderId: string;
    userId: string;
    name: string;
    email: string;
    address: string;
    items: OrderItem[];
    total: number;
    status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
    createdAt: string;
    updatedAt: string;
  }
  