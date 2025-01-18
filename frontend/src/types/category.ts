// src/types/category.ts
export interface Category {
    id: string
    name: string
    icon: string // Lucide-Reactのアイコン名
    subcategories?: Category[]
  }
  