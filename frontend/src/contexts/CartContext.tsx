// src/contexts/CartContext.tsx
import React, { createContext, useContext, useReducer } from 'react'

// 既存の型定義を拡張
export interface CartItem {
  id: number
  title: string
  price: number
  quantity: number
  image: string
  description?: string
}

interface CartState {
  items: CartItem[]
  total: number
}

// アクションの型定義を拡張
type CartAction =
  | { type: 'ADD_ITEM'; payload: Omit<CartItem, 'quantity'> }
  | { type: 'REMOVE_ITEM'; payload: number }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
  | { type: 'CLEAR_CART' }

// コンテキストの型定義を拡張
interface CartContextType {
  state: CartState
  dispatch: React.Dispatch<CartAction>
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
  getTotal: () => number
}

const CartContext = createContext<CartContextType | null>(null)

// リデューサーを拡張
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.id === action.payload.id)
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          total: state.total + action.payload.price
        }
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
        total: state.total + action.payload.price
      }
    }
    case 'REMOVE_ITEM': {
      const item = state.items.find(item => item.id === action.payload)
      if (!item) return state
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
        total: state.total - (item.price * item.quantity)
      }
    }
    case 'UPDATE_QUANTITY': {
      const item = state.items.find(item => item.id === action.payload.id)
      if (!item) return state
      const quantityDiff = action.payload.quantity - item.quantity
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
        total: state.total + (item.price * quantityDiff)
      }
    }
    case 'CLEAR_CART': {
      return {
        items: [],
        total: 0
      }
    }
    default:
      return state
  }
}

// プロバイダーコンポーネントを拡張
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 })

  // 便利な関数を追加
  const addItem = (item: Omit<CartItem, 'quantity'>) => {
    dispatch({ type: 'ADD_ITEM', payload: item })
  }

  const removeItem = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) {
      removeItem(id)
      return
    }
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const getTotal = () => state.total

  const value: CartContextType = {
    state,
    dispatch,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getTotal
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

// カスタムフックを拡張
export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

// ローカルストレージ用のヘルパー関数（オプション）
export const saveCartToStorage = (items: CartItem[]) => {
  localStorage.setItem('cart', JSON.stringify(items))
}

export const loadCartFromStorage = (): CartItem[] => {
  const savedCart = localStorage.getItem('cart')
  return savedCart ? JSON.parse(savedCart) : []
}
