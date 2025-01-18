// src/data/categories.ts
import { 
    Smartphone, 
    Headphones, 
    Camera, 
    Watch, 
    Laptop, 
    Speaker, 
    Tv, 
    Gamepad 
  } from 'lucide-react'
  
  export const categories: Category[] = [
    {
      id: 'smartphones',
      name: 'スマートフォン',
      icon: 'Smartphone',
      subcategories: [
        { id: 'android', name: 'Android', icon: 'Smartphone' },
        { id: 'ios', name: 'iOS', icon: 'Smartphone' }
      ]
    },
    {
      id: 'audio',
      name: 'オーディオ',
      icon: 'Headphones',
      subcategories: [
        { id: 'headphones', name: 'ヘッドホン', icon: 'Headphones' },
        { id: 'earbuds', name: 'イヤホン', icon: 'Headphones' },
        { id: 'speakers', name: 'スピーカー', icon: 'Speaker' }
      ]
    },
    {
      id: 'computers',
      name: 'パソコン',
      icon: 'Laptop',
      subcategories: [
        { id: 'laptops', name: 'ノートPC', icon: 'Laptop' },
        { id: 'desktops', name: 'デスクトップPC', icon: 'Tv' }
      ]
    },
    {
      id: 'wearables',
      name: 'ウェアラブル',
      icon: 'Watch',
      subcategories: [
        { id: 'smartwatches', name: 'スマートウォッチ', icon: 'Watch' },
        { id: 'fitness', name: 'フィットネストラッカー', icon: 'Watch' }
      ]
    }
  ]
  