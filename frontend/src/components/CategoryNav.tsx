// src/components/CategoryNav.tsx
import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import * as Icons from 'lucide-react'
import { Category } from '../types/category'

interface CategoryNavProps {
  categories: Category[]
  onSelectCategory: (categoryId: string) => void
  selectedCategory: string | null
}

export function CategoryNav({ 
  categories, 
  onSelectCategory, 
  selectedCategory 
}: CategoryNavProps) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([])

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    )
  }

  const renderCategory = (category: Category, level: number = 0) => {
    const isExpanded = expandedCategories.includes(category.id)
    const isSelected = selectedCategory === category.id
    const IconComponent = Icons[category.icon as keyof typeof Icons]

    return (
      <div key={category.id} className="w-full">
        <button
          onClick={() => {
            onSelectCategory(category.id)
            if (category.subcategories?.length) {
              toggleCategory(category.id)
            }
          }}
          className={`
            w-full flex items-center px-4 py-2 text-left
            ${isSelected ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}
            ${level > 0 ? 'pl-' + (level * 4 + 4) : ''}
          `}
        >
          <IconComponent className="w-5 h-5 mr-2" />
          <span className="flex-1">{category.name}</span>
          {category.subcategories?.length > 0 && (
            isExpanded ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )
          )}
        </button>
        
        {isExpanded && category.subcategories?.map(subcategory =>
          renderCategory(subcategory, level + 1)
        )}
      </div>
    )
  }

  return (
    <div className="w-64 bg-white shadow rounded-lg overflow-hidden">
      <div className="p-4 border-b">
        <h2 className="font-semibold text-lg">カテゴリー</h2>
      </div>
      <div className="py-2">
        {categories.map(category => renderCategory(category))}
      </div>
    </div>
  )
}
