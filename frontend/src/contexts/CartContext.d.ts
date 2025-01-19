import React from 'react';
interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
    image: string;
}
interface CartState {
    items: CartItem[];
    total: number;
}
type CartAction = {
    type: 'ADD_ITEM';
    payload: Omit<CartItem, 'quantity'>;
} | {
    type: 'REMOVE_ITEM';
    payload: number;
} | {
    type: 'UPDATE_QUANTITY';
    payload: {
        id: number;
        quantity: number;
    };
};
export declare const CartProvider: React.FC<{
    children: React.ReactNode;
}>;
export declare const useCart: () => {
    state: CartState;
    dispatch: React.Dispatch<CartAction>;
};
export {};
