// src/App.tsx
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartDrawer } from './components/CartDrawer'
import { ProductList } from './components/ProductList'
import { ShoppingCart, User } from 'lucide-react'
import { CartProvider, useCart } from './contexts/CartContext'
import { OrderHistory } from './pages/OrderHistory'
import { OrderDetail } from './pages/OrderDetail'
import { OrderComplete } from './pages/OrderComplete'
import { Link } from 'react-router-dom'
import { ErrorBoundary } from './components/ErrorBoundary'
import { ErrorPage } from './components/ErrorPage'
import { CategoryNav } from './components/CategoryNav'
import { ProductFilters } from './components/ProductFilters'
import { Category } from './types/category'
import { Product, Filters } from './types'

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { items } = useCart()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  // filtersの型を修正
  const [filters, setFilters] = useState<Filters>({
    sortBy: null
  })

  // カテゴリーデータの定義
  const categories: Category[] = [
    {
      id: '1',
      name: 'エレクトロニクス',
      icon: 'Smartphone',
      subcategories: [
        {
          id: '1-1',
          name: 'スマートフォン',
          icon: 'Phone',
        },
        {
          id: '1-2',
          name: 'タブレット',
          icon: 'Tablet',
        },
        {
          id: '1-3',
          name: 'ノートパソコン',
          icon: 'Laptop',
        }
      ]
    },
    // ... 他のカテゴリーは同じ
  ]

  // 型を明示的に指定
  const filteredProducts: Product[] = []  // 実際のデータに置き換え

  const Navigation = () => (
    <nav className="bg-white shadow-lg">
      {/* Navigation の内容は変更なし */}
    </nav>
  )

  return (
    <Router>
      <CartProvider>
        <ErrorBoundary fallback={<ErrorPage />}>
          <div className="min-h-screen bg-gray-100">
            <Navigation />

            <Routes>
              <Route
                path="/"
                element={
                  <main className="max-w-7xl mx-auto py-6 px-4">
                    <div className="flex gap-6">
                      <aside className="hidden lg:block">
                        <CategoryNav
                          categories={categories}
                          onSelectCategory={(categoryId) => setSelectedCategory(categoryId)}
                          selectedCategory={selectedCategory}
                        />
                      </aside>

                      <div className="flex-1">
                        <ProductFilters
                          onFilterChange={(newFilters: Partial<Filters>) =>
                            setFilters((prev) => ({ ...prev, ...newFilters }))
                          }
                          onSortChange={(sortBy: Filters['sortBy']) =>
                            setFilters((prev) => ({ ...prev, sortBy }))
                          }
                        />
                        <ProductList products={filteredProducts} />
                      </div>
                    </div>
                  </main>
                }
              />

              <Route path="/orders" element={<OrderHistory />} />
              <Route path="/orders/:orderId" element={<OrderDetail />} />
              <Route path="/order-complete" element={<OrderComplete />} />
            </Routes>

            <CartDrawer
              isOpen={isCartOpen}
              onClose={() => setIsCartOpen(false)}
            />
          </div>
        </ErrorBoundary>
      </CartProvider>
    </Router>
  )
}

export default App
