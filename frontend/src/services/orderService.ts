// src/services/orderService.ts
export const cancelOrder = async (orderId: string): Promise<void> => {
    try {
      const response = await fetch(`/api/orders/${orderId}/cancel`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('注文のキャンセルに失敗しました');
      }
    } catch (error) {
      console.error('注文キャンセルエラー:', error);
      throw error;
    }
  };
  