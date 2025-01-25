export interface Product {
  id: number;           // システムの既存の型に合わせる
  title: string;        // 既存の命名を維持
  description?: string; // オプショナルとして追加
  price: number;
  image: string;
  categoryId: string;   // 既存の参照方式を維持
}
