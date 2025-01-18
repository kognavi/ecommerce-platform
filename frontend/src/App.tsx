// src/App.tsx
// ... 既存のimport文
import { ProductList } from './components/ProductList'

function App() {
  // ... 既存のstate管理とフィルタリングロジック

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white border-b">
          {/* ヘッダーナビゲーション部分 */}
        </nav>

        <main className="max-w-7xl mx-auto py-6 px-4">
          <div className="flex gap-6">
            <aside className="hidden lg:block">
              <CategoryNav
                categories={categories}
                onSelectCategory={setSelectedCategory}
                selectedCategory={selectedCategory}
              />
            </aside>

            <div className="flex-1">
              <ProductFilters
                onFilterChange={(newFilters) =>
                  setFilters((prev) => ({ ...prev, ...newFilters }))
                }
                onSortChange={(sortBy) =>
                  setFilters((prev) => ({ ...prev, sortBy }))
                }
              />

              {/* ProductListコンポーネントを使用 */}
              <ProductList products={filteredProducts} />
            </div>
          </div>
        </main>
      </div>
    </CartProvider>
  )
}

export default App


