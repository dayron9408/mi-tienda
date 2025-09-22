import { createContext, useContext } from 'react'
import type { Product } from '../types/product'

export interface CartItem extends Product {
    quantity: number
}

export interface CartContextType {
    cart: CartItem[]
    addToCart: (product: Product) => void
    removeFromCart: (id: number) => void
    clearCart: () => void
    updateQuantity: (id: number, quantity: number) => void
}

export const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) throw new Error('useCart debe estar dentro de CartProvider')
    return context
}
