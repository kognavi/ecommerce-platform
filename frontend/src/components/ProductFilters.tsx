// src/components/ProductFilters.tsx
import { useState } from 'react'
import { Filter } from 'lucide-react'

interface ProductFiltersProps {
  onFilterChange: (filters: {
    search: string
    priceRange: { min: number | null; max: number | null }
  }) => void
  onSortChange: (sortBy: 'price_asc' | 'price_desc' | 'name' | null) => void
}

export function ProductFilters({ onFilterChange, onSortChange }: ProductFiltersProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [search, setSearch] = useState('')

  const handleFilterApply = () => {
    onFilterChange({
      search,
      priceRange: {
        min: minPrice ? Number(minPrice) : null,
        max: maxPrice ? Number(maxPrice) : null,
      },
    })
  }

  return (
    <div className="mb-6">
      <div className="flex items-center gap-4 mb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow"
        >
          <Filter className="h-5 w-5" />
          フィルター
        </button>
        <select
          onChange={(e) => onSortChange(e.target.value as any)}
          className="px-4 py-2 bg-white rounded-lg shadow"
        >
          <option value="">並び替え</option>
          <option value="price_asc">価格: 安い順</option>
          <option value="price_desc">価格: 高い順</option>
          <option value="name">名前順</option>
        </select>
      </div>

      {isOpen && (
        <div className="bg-white p-4 rounded-lg shadow mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                価格範囲
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="最小価格"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                />
                <span>-</span>
                <input
                  type="number"
                  placeholder="最大価格"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                商品名で検索
              </label>
              <input
                type="text"
                placeholder="検索..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <button
              onClick={handleFilterApply}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              適用
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
