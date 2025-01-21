// src/App.tsx
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartDrawer } from './components/CartDrawer'
import { ProductList } from './components/ProductList'
import { ShoppingCart, User } from 'lucide-react'
import { useCart } from './contexts/CartContext'
import { OrderHistory } from './pages/OrderHistory'
import { OrderDetail } from './pages/OrderDetail'
import { OrderComplete } from './pages/OrderComplete'
import { Link } from 'react-router-dom'
// 新しくインポートを追加
import { ErrorBoundary } from './components/ErrorBoundary'
import { ErrorPage } from './components/ErrorPage'

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { items } = useCart()

  const Navigation = () => (
    // ... 既存のNavigationコンポーネントのコード ...
  )

  return (
    <Router>
      <CartProvider>
        {/* ErrorBoundaryを追加 */}
        <ErrorBoundary fallback={<ErrorPage />}>
          <div className="min-h-screen bg-gray-100">
            <Navigation />

            <Routes>
              {/* ホームページ（商品一覧） */}
              <Route
                path="/"
                element={
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
                        <ProductList products={filteredProducts} />
                      </div>
                    </div>
                  </main>
                }
              />

              {/* 注文関連のルート */}
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

