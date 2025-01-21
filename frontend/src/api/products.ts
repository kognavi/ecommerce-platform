// src/api/products.ts
import { api } from './client';
import { Product } from '../types/product';

export const productAPI = {
  getAll: async () => {
    const response = await api.get<Product[]>('/products');
    return response.data;
  },
  
  getById: async (id: string) => {
    const response = await api.get<Product>(`/products/${id}`);
    return response.data;
  },
  
  getByCategory: async (categoryId: string) => {
    const response = await api.get<Product[]>(`/products/category/${categoryId}`);
    return response.data;
  }
};
