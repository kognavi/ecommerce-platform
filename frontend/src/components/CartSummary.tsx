// src/components/CartSummary.tsx
import { useCart } from '../contexts/CartContext'
import { Button } from './ui/button'
import { X as CloseIcon, Minus, Plus } from 'lucide-react'

export function CartSummary() {
  const { 
    items, 
    getTotalQuantity, 
    getTotalPrice, 
    removeFromCart, // removeItem から removeFromCart に名前を合わせる
    updateQuantity 
  } = useCart()

  if (items.length === 0) {
    return (
      <div className="p-6 text-center">
        <p className="text-gray-500">カートは空です</p>
      </div>
    )
  }

  const subtotal = getTotalPrice()
  const tax = Math.floor(subtotal * 0.1)
  const total = subtotal + tax

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-auto p-4 space-y-4">
        {items.map((item) => (
          <div 
            key={item.id}  // product.id から item.id に変更
            className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg"
          >
            <div className="relative w-16 h-16 flex-shrink-0">
              <img
                src={item.product.image}
                alt={item.product.title}
                className="w-full h-full object-cover rounded"
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-sm truncate">{item.product.title}</h4>
              <p className="text-gray-600 mt-1">¥{item.product.price.toLocaleString()}</p>
              
              <div className="flex items-center gap-2 mt-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center">{item.quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-gray-500"
              onClick={() => removeFromCart(item.product.id)}
            >
              <CloseIcon className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 p-4 bg-gray-50">
        <div className="flex justify-between mb-2">
          <span>小計 ({getTotalQuantity()} 点)</span>
          <span>¥{subtotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between mb-4">
          <span>消費税（10%）</span>
          <span>¥{tax.toLocaleString()}</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span>合計</span>
          <span>¥{total.toLocaleString()}</span>
        </div>
        <Button className="w-full mt-4">
          レジに進む
        </Button>
      </div>
    </div>
  )
}

