// src/pages/ProductDetail.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productAPI } from '../api/products';
import { Product } from '../types/product';
import { useCart } from '../contexts/CartContext';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (id) {
          const data = await productAPI.getById(id);
          setProduct(data);
        }
      } catch (error) {
        console.error('商品の取得に失敗しました:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div>読み込み中...</div>;
  if (!product) return <div>商品が見つかりません</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="aspect-w-1 aspect-h-1">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl font-bold mt-4">¥{product.price}</p>
          <p className="mt-4 text-gray-600">{product.description}</p>
          
          <button
            onClick={() => addToCart({
              id: product.id,
              name: product.name,
              price: product.price,
              image: product.image,
              quantity: 1
            })}
            className="mt-8 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700"
          >
            カートに追加
          </button>
        </div>
      </div>
    </div>
  );
};
