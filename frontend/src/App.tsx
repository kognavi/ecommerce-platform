import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ShoppingCart } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
}

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [items, setItems] = useState<CartItem[]>([
    { id: '1', name: '商品A', price: 1000, quantity: 1 },
    { id: '2', name: '商品B', price: 2000, quantity: 2 },
  ])

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity } : item
    ))
  }

  const removeFromCart = (id: string) => {
    setItems(items.filter(item => item.id !== id))
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">
                ECサイト
              </span>
            </a>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="h-5 w-5" />
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </Button>
          </div>
        </div>
      </nav>

      <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
        <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
          <SheetHeader className="space-y-2.5 pr-6">
            <SheetTitle>カート</SheetTitle>
            <SheetDescription>
              {items.length > 0
                ? `${items.length}点の商品`
                : "カートは空です"}
            </SheetDescription>
          </SheetHeader>
          {items.length > 0 ? (
            <>
              <ScrollArea className="flex-1 pr-6">
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="space-y-2">
                      <div className="flex items-center space-x-4">
                        <div className="flex-1 space-y-1">
                          <h4 className="font-semibold">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            ¥{item.price.toLocaleString()}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            -
                          </Button>
                          <span>{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <ShoppingCart className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <Separator />
                    </div>
                  ))}
                </div>
              </ScrollArea>
              <div className="pr-6">
                <SheetFooter>
                  <div className="space-y-4 w-full">
                    <Separator />
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">合計</span>
                      <span className="font-semibold">
                        ¥{total.toLocaleString()}
                      </span>
                    </div>
                    <Button className="w-full">
                      レジに進む
                    </Button>
                  </div>
                </SheetFooter>
              </div>
            </>
          ) : (
            <div className="flex h-full flex-col items-center justify-center space-y-2">
              <ShoppingCart className="h-12 w-12 text-muted-foreground" />
              <span className="text-muted-foreground">カートは空です</span>
              <a href="/" className="text-primary underline">
                商品を探す
              </a>
            </div>
          )}
        </SheetContent>
      </Sheet>

      <main className="container py-6">
        {/* メインコンテンツ */}
      </main>
    </div>
  )
}

export default App
