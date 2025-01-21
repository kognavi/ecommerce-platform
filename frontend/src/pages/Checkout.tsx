// src/pages/Checkout.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useAsync } from '../hooks/useAsync';
import { validateCheckoutForm } from '../utils/validation';
import { submitOrder } from '../api/orders';
import type { ValidationError } from '../utils/validation';

interface CheckoutForm {
  name: string;
  email: string;
  address: string;
  phone: string;
}

export const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { items, clearCart } = useCart();
  const { loading, error, execute } = useAsync();
  const [form, setForm] = useState<CheckoutForm>({
    name: '',
    email: '',
    address: '',
    phone: '',
  });
  const [validationErrors, setValidationErrors] = useState<ValidationError[]>([]);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const getFieldError = (field: keyof CheckoutForm) => {
    return validationErrors.find(error => error.field === field)?.message;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const errors = validateCheckoutForm(form);
    if (errors.length > 0) {
      setValidationErrors(errors);
      return;
    }

    try {
      const orderData = {
        items,
        total,
        customerInfo: form,
      };

      const response = await execute(submitOrder(orderData));
      clearCart();
      
      // 注文完了ページへ注文情報を渡しながらリダイレクト
      navigate('/order-complete', {
        state: {
          orderDetails: {
            orderId: response.orderId,
            email: form.email,
            name: form.name,
            address: form.address,
            items,
            total,
          }
        },
        replace: true
      });
    } catch (error) {
      console.error('注文処理に失敗しました:', error);
    }
  };

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <p className="text-center text-gray-600">カートが空です</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">チェックアウト</h1>
      
      {error && (
        <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-6">
          <p className="text-red-600">{error.message}</p>
        </div>
      )}

      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">注文内容</h2>
        {items.map(item => (
          <div key={item.id} className="flex justify-between mb-2">
            <span>{item.name} × {item.quantity}</span>
            <span>¥{item.price * item.quantity}</span>
          </div>
        ))}
        <div className="border-t mt-4 pt-4">
          <div className="flex justify-between font-bold">
            <span>合計</span>
            <span>¥{total}</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">お名前 *</label>
          <input
            type="text"
            required
            className={`w-full border rounded-lg p-2 ${
              getFieldError('name') ? 'border-red-500' : 'border-gray-300'
            }`}
            value={form.name}
            onChange={e => setForm({...form, name: e.target.value})}
          />
          {getFieldError('name') && (
            <p className="text-red-500 text-sm mt-1">{getFieldError('name')}</p>
          )}
        </div>

        <div>
          <label className="block mb-1">メールアドレス *</label>
          <input
            type="email"
            required
            className={`w-full border rounded-lg p-2 ${
              getFieldError('email') ? 'border-red-500' : 'border-gray-300'
            }`}
            value={form.email}
            onChange={e => setForm({...form, email: e.target.value})}
          />
          {getFieldError('email') && (
            <p className="text-red-500 text-sm mt-1">{getFieldError('email')}</p>
          )}
        </div>

        <div>
          <label className="block mb-1">住所 *</label>
          <input
            type="text"
            required
            className={`w-full border rounded-lg p-2 ${
              getFieldError('address') ? 'border-red-500' : 'border-gray-300'
            }`}
            value={form.address}
            onChange={e => setForm({...form, address: e.target.value})}
          />
          {getFieldError('address') && (
            <p className="text-red-500 text-sm mt-1">{getFieldError('address')}</p>
          )}
        </div>

        <div>
          <label className="block mb-1">電話番号 *</label>
          <input
            type="tel"
            required
            className={`w-full border rounded-lg p-2 ${
              getFieldError('phone') ? 'border-red-500' : 'border-gray-300'
            }`}
            value={form.phone}
            onChange={e => setForm({...form, phone: e.target.value})}
          />
          {getFieldError('phone') && (
            <p className="text-red-500 text-sm mt-1">{getFieldError('phone')}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-blue-600 text-white py-3 rounded-lg ${
            loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
          }`}
        >
          {loading ? '処理中...' : '注文を確定する'}
        </button>
      </form>
    </div>
  );
};

