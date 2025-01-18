// src/components/ProductCard.tsx
import { useCart } from '../contexts/CartContext'

interface Product {
  id: number
  title: string
  price: number
  image: string
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart()

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="aspect-w-1 aspect-h-1 w-full">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-900 truncate">
          {product.title}
        </h3>
        <p className="mt-1 text-lg font-medium text-gray-900">
          ¥{product.price.toLocaleString()}
        </p>
        <button
          onClick={() => dispatch({ type: 'ADD_ITEM', payload: product })}
          className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          カートに追加
        </button>
      </div>
    </div>
  )
}
