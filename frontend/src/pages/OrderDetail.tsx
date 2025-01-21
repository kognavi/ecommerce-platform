// src/pages/OrderDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Package, Truck, CheckCircle, XCircle } from 'lucide-react';

export const OrderDetail: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const [order, setOrder] = React.useState<Order | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        setIsLoading(true);
        // API呼び出しをここに実装
        const response = await fetch(`/api/orders/${orderId}`);
        const data = await response.json();
        setOrder(data);
      } catch (err) {
        console.error('注文詳細の取得に失敗しました', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  if (isLoading) return <div>読み込み中...</div>;
  if (!order) return <div>注文が見つかりません</div>;

  const trackingSteps = [
    { status: 'pending', icon: Package, label: '注文受付' },
    { status: 'processing', icon: Package, label: '処理中' },
    { status: 'shipped', icon: Truck, label: '発送済み' },
    { status: 'delivered', icon: CheckCircle, label: '配達完了' },
  ];

  const currentStepIndex = trackingSteps.findIndex(step => step.status === order.status);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">注文詳細</h1>

      {/* 配送状況トラッキング */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">配送状況</h2>
        <div className="relative">
          <div className="absolute left-0 top-1/2 w-full h-1 bg-gray-200 -translate-y-1/2" />
          <div className="relative flex justify-between">
            {trackingSteps.map((step, index) => {
              const Icon = step.icon;
              const isCompleted = index <= currentStepIndex;
              const isCurrent = index === currentStepIndex;

              return (
                <div key={step.status} className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center relative z-10 
                      ${isCompleted ? 'bg-green-500' : 'bg-gray-300'}
                      ${isCurrent ? 'ring-4 ring-green-200' : ''}`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm mt-2">{step.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 注文情報 */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">配送先情報</h3>
            <p>{order.name}</p>
            <p>{order.address}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">注文情報</h3>
            <p>注文番号: {order.orderId}</p>
            <p>注文日: {new Date(order.createdAt).toLocaleDateString()}</p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold mb-2">注文内容</h3>
          <div className="space-y-2">
            {order.items.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>{item.name} × {item.quantity}</span>
                <span>¥{item.price * item.quantity}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-4 pt-4 border-t">
            <div className="flex justify-between font-semibold">
              <span>合計</span>
              <span>¥{order.total}</span>
            </div>
          </div>
        </div>

        {order.status === 'pending' && (
          <div className="mt-6 pt-6 border-t">
            <button
              onClick={() => handleCancelOrder(order.orderId)}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              注文をキャンセル
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
