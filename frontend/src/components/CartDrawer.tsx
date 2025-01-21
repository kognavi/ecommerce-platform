import React from 'react';
import { useCart } from '../contexts/CartContext';

export const CartDrawer: React.FC = () => {
  const { items, removeFromCart, updateQuantity } = useCart();

  return (
    <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg p-4">
      <h2 className="text-xl font-bold mb-4">ショッピングカート</h2>
      {items.length === 0 ? (
        <p>カートは空です</p>
      ) : (
        <div>
          {items.map((item) => (
            <div key={item.id} className="flex gap-4 mb-4 border-b pb-4">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-20 h-20 object-cover"
              />
              <div className="flex-1">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-gray-600">¥{item.price}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-2 py-1 border rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 border rounded"
                  >
                    +
                  </button>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="ml-auto text-red-500"
                  >
                    削除
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between mb-4">
              <span>合計</span>
              <span className="font-bold">
                ¥{items.reduce((sum, item) => sum + item.price * item.quantity, 0)}
              </span>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
              レジに進む
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
