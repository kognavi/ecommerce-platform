// src/components/ProductList.tsx
import React from 'react'
import { ProductCard } from './ProductCard'
import { Product } from '../types/product' // 型定義を追加

interface ProductListProps {
  products: Product[]
}

export function ProductList({ products }: ProductListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      
      {products.length === 0 && (
        <div className="text-center py-10 text-gray-500">
          条件に一致する商品が見つかりませんでした。
        </div>
      )}
    </div>
  )
}

