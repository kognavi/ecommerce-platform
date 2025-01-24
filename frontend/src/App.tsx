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

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { items } = useCart()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [filters, setFilters] = useState({
    sortBy: 'newest',
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
    {
      id: '2',
      name: 'ファッション',
      icon: 'Shirt',
      subcategories: [
        {
          id: '2-1',
          name: 'メンズ',
          icon: 'User',
          subcategories: [
            {
              id: '2-1-1',
              name: 'トップス',
              icon: 'Shirt',
            },
            {
              id: '2-1-2',
              name: 'パンツ',
              icon: 'Pants',
            }
          ]
        },
        {
          id: '2-2',
          name: 'レディース',
          icon: 'User',
          subcategories: [
            {
              id: '2-2-1',
              name: 'トップス',
              icon: 'Shirt',
            },
            {
              id: '2-2-2',
              name: 'スカート',
              icon: 'Skirt',
            }
          ]
        }
      ]
    },
    {
      id: '3',
      name: '本・雑誌',
      icon: 'Book',
      subcategories: [
        {
          id: '3-1',
          name: '小説',
          icon: 'BookOpen',
        },
        {
          id: '3-2',
          name: '漫画',
          icon: 'BookOpen',
        }
      ]
    }
  ]

  const filteredProducts = []  // 実際のデータに置き換え

  const Navigation = () => (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold">ECサイト</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/orders" className="p-2 hover:bg-gray-100 rounded-full">
              <User className="h-6 w-6" />
            </Link>
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 hover:bg-gray-100 rounded-full relative"
            >
              <ShoppingCart className="h-6 w-6" />
              {items.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {items.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
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
