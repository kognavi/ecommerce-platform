// src/data/products.ts
import { Product } from '../types/product'

export const products: Product[] = [
  {
    id: 1,
    title: "高性能ワイヤレスイヤホン",
    price: 15800,
    image: "https://images.unsplash.com/photo-1606220838315-056192d5e927?auto=format&fit=crop&q=80&w=400",
    categoryId: "earbuds"
  },
  {
    id: 2,
    title: "スマートウォッチ Pro",
    price: 32800,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=400",
    categoryId: "smartwatches"
  },
  {
    id: 3,
    title: "ノイズキャンセリングヘッドホン",
    price: 28600,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400",
    categoryId: "headphones"
  },
  {
    id: 4,
    title: "最新スマートフォン",
    price: 89800,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=400",
    categoryId: "android"
  },
  {
    id: 5,
    title: "Bluetooth スピーカー",
    price: 12800,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80&w=400",
    categoryId: "speakers"
  }
]
