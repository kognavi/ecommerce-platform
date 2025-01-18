// src/components/CartSummary.tsx
import { useCart } from '../contexts/CartContext'

export function CartSummary() {
  const { items, getTotalQuantity, getTotalPrice, removeItem, updateQuantity } = useCart()

  if (items.length === 0) {
    return <div className="text-gray-500">カートは空です</div>
  }

  return (
    <div className="space-y-4">
      {items.map(item => (
        <div key={item.product.id} className="flex items-center gap-4">
          <img
            src={item.product.image}
            alt={item.product.title}
            className="w-16 h-16 object-cover rounded"
          />
          <div className="flex-1">
            <h4 className="font-semibold">{item.product.title}</h4>
            <p className="text-gray-600">¥{item.product.price.toLocaleString()}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
              className="px-2 py-1 bg-gray-200 rounded"
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
              className="px-2 py-1 bg-gray-200 rounded"
            >
              +
            </button>
            <button
              onClick={() => removeItem(item.product.id)}
              className="text-red-600"
            >
              削除
            </button>
          </div>
        </div>
      ))}
      <div className="border-t pt-4">
        <p className="text-lg font-semibold">
          合計: ¥{getTotalPrice().toLocaleString()} ({getTotalQuantity()}点)
        </p>
      </div>
    </div>
  )
}
