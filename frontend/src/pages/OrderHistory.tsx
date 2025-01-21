// src/pages/OrderHistory.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Package, XCircle } from 'lucide-react';

export const OrderHistory: React.FC = () => {
  const [orders, setOrders] = React.useState<Order[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchOrders = async () => {
      try {
        setIsLoading(true);
        // API呼び出しをここに実装
        const response = await fetch('/api/orders');
        const data = await response.json();
        setOrders(data);
      } catch (err) {
        setError('注文履歴の取得に失敗しました');
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (isLoading) return <div>読み込み中...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">注文履歴</h1>
      
      {orders.length === 0 ? (
        <div className="text-center py-8">
          <p>注文履歴がありません</p>
          <Link 
            to="/" 
            className="text-blue-600 hover:underline mt-4 inline-block"
          >
            ショッピングを始める
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div 
              key={order.orderId}
              className="bg-white rounded-lg shadow p-6"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="font-semibold">注文番号: {order.orderId}</h2>
                  <p className="text-sm text-gray-600">
                    注文日: {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <OrderStatusBadge status={order.status} />
              </div>

              <div className="border-t pt-4">
                <h3 className="font-semibold mb-2">注文内容</h3>
                {order.items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>{item.name} × {item.quantity}</span>
                    <span>¥{item.price * item.quantity}</span>
                  </div>
                ))}
                
                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between font-semibold">
                    <span>合計</span>
                    <span>¥{order.total}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex gap-4">
                <Link
                  to={`/orders/${order.orderId}`}
                  className="text-blue-600 hover:underline text-sm"
                >
                  詳細を見る
                </Link>
                {order.status === 'pending' && (
                  <button
                    onClick={() => handleCancelOrder(order.orderId)}
                    className="text-red-600 hover:underline text-sm"
                  >
                    注文をキャンセル
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const OrderStatusBadge: React.FC<{ status: Order['status'] }> = ({ status }) => {
  const statusConfig = {
    pending: { color: 'bg-yellow-100 text-yellow-800', label: '処理待ち' },
    processing: { color: 'bg-blue-100 text-blue-800', label: '処理中' },
    shipped: { color: 'bg-green-100 text-green-800', label: '発送済み' },
    delivered: { color: 'bg-gray-100 text-gray-800', label: '配達完了' },
    cancelled: { color: 'bg-red-100 text-red-800', label: 'キャンセル済み' },
  };

  const config = statusConfig[status];

  return (
    <span className={`px-3 py-1 rounded-full text-sm ${config.color}`}>
      {config.label}
    </span>
  );
};
