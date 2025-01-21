// src/api/orders.ts
import { api } from './client';

interface OrderData {
  items: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
  }>;
  total: number;
  customerInfo: {
    name: string;
    email: string;
    address: string;
    phone: string;
  };
}

export const submitOrder = async (orderData: OrderData) => {
  const response = await api.post('/orders', orderData);
  return response.data;
};
