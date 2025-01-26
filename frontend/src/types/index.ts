// src/types/index.ts
export interface Product {
    id: string;
    title: string;
    price: number;
    image: string;
    description?: string;
    category?: string;  // 追加
}

export interface CartItem {
    id: string;
    product: Product;
    quantity: number;
}

// 既存のCartContextType（残す）
export interface CartContextType {
    items: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    getTotalQuantity: () => number;
    getTotalPrice: () => number;
}

export interface Order {
    orderId: string;
    status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
    items: OrderItem[];
    totalAmount: number;
    createdAt: string;
}

export interface OrderItem {
    product: Product;
    quantity: number;
}

// Filtersを拡張
export interface Filters {
    sortBy: 'name' | 'price_asc' | 'price_desc' | null;
    category?: string;  // 追加
    priceRange?: {     // 追加
        min: number;
        max: number;
    };
}

// OrderDetailsは新規追加（必要な場合）
export interface OrderDetails {
    orderId: string;
    items: OrderItem[];
    totalAmount: number;
    status: Order['status'];
}
