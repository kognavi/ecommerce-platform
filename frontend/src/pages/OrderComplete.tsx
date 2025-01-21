import React from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

interface OrderDetails {
  orderId: string;
  name: string;
  email: string;
  address: string;
  items: { id: string; name: string; quantity: number; price: number }[];
  total: number;
}

export const OrderComplete: React.FC = () => {
  const location = useLocation<{ orderDetails: OrderDetails }>();
  const orderDetails = location.state?.orderDetails;

  // 直接URLにアクセスされた場合はホームにリダイレクト
  if (!orderDetails) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-16 h-16 text-green-500" />
        </div>
        
        <h1 className="text-3xl font-bold mb-4">ご注文ありがとうございます</h1>
        <p className="text-gray-600 mb-8">
          ご注文の確認メールを{orderDetails.email}へ送信いたしました。
        </p>

        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-xl font-semibold mb-4">注文詳細</h2>
          <div className="text-left mb-4">
            <p className="mb-2">
              <span className="font-semibold">注文番号：</span> 
              {orderDetails.orderId}
            </p>
            <p className="mb-2">
              <span className="font-semibold">お名前：</span> 
              {orderDetails.name}
            </p>
            <p className="mb-2">
              <span className="font-semibold">配送先：</span> 
              {orderDetails.address}
            </p>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">注文内容</h3>
            {orderDetails.items && orderDetails.items.length > 0 ? (
              orderDetails.items.map((item) => (
                <div key={item.id} className="flex justify-between mb-2">
                  <span>{item.name} × {item.quantity}</span>
                  <span>¥{item.price * item.quantity}</span>
                </div>
              ))
            ) : (
              <p>注文内容が見つかりません。</p>
            )}
            
            <div className="border-t mt-4 pt-4">
              <div className="flex justify-between font-bold">
                <span>合計</span>
                <span>¥{orderDetails.total}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Link 
            to="/"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors"
            aria-label="ショッピングを続ける"
          >
            ショッピングを続ける
          </Link>
        </div>
      </div>
    </div>
  );
};
