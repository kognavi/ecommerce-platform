// src/components/CartDrawer.tsx
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { X as CloseIcon, Minus, Plus, ShoppingBag } from "lucide-react"
import { useCart } from '../contexts/CartContext'

interface CartDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CartDrawer({ open, onOpenChange }: CartDrawerProps) {
  const { items, removeFromCart, updateQuantity } = useCart()

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = Math.floor(subtotal * 0.1)
  const total = subtotal + tax

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="flex flex-col w-full sm:max-w-md p-0">
        <SheetHeader className="px-6 py-4 border-b">
          <SheetTitle className="flex items-center">
            <ShoppingBag className="mr-2 h-5 w-5" />
            ショッピングカート
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <ShoppingBag className="h-12 w-12 text-gray-300 mb-4" />
            <p className="text-gray-500">カートは空です</p>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1">
              <div className="p-6 space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 pb-4 border-b last:border-0"
                  >
                    <div className="relative w-20 h-20 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <h3 className="font-medium text-sm truncate pr-4">
                          {item.name}
                        </h3>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 text-gray-400 hover:text-gray-500"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <CloseIcon className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <p className="text-gray-600 mt-1">
                        ¥{item.price.toLocaleString()}
                      </p>
                      
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="border-t p-6 bg-gray-50">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>小計</span>
                  <span>¥{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>消費税（10%）</span>
                  <span>¥{tax.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-medium pt-2 border-t">
                  <span>合計</span>
                  <span>¥{total.toLocaleString()}</span>
                </div>
              </div>
              <Button className="w-full mt-4">
                レジに進む
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
