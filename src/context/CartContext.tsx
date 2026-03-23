import { createContext, useEffect, useState } from "react";
import type { CartItemType } from '@/types/types';

type CartContextType = {
    cart: CartItemType[]
    addOne: (p: CartItemType) => void
    removeOne: (p: CartItemType) => void
    removeLine: (p: CartItemType) => void
    clearCart: () => void
    total: number,
    totalQuantity: number
}

export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<CartItemType[]>(() => {
        if (typeof window === "undefined") return [];
        const stored = window.localStorage.getItem("cart");
        if (!stored) return [];
        try {
            return JSON.parse(stored) as CartItemType[];
        } catch {
            return [];
        }
    });


    const addOne = (p: CartItemType) => {
        if (!p) return

        setCart(prev =>
            prev.some(item => item.name === p.name)
                ? prev.map(item =>
                    item.name === p.name
                        ? { ...item, quantity: (item.quantity ?? 0) + 1 }
                        : item
                )
                : [...prev, { ...p, quantity: 1 }]
        )
    }

    const removeOne = (p: CartItemType) => {
        if (!p) return

        setCart(prev =>
            prev
                .map(item =>
                    item.name === p.name
                        ? { ...item, quantity: (item.quantity ?? 1) - 1 }
                        : item
                )
                .filter(item => (item.quantity ?? 0) > 0)
        )
    }

    const removeLine = (p: CartItemType) => {
        if (!p) return
        setCart(prev =>
            prev.filter(item => item.name != p.name)
        )
    }

    const clearCart = () => setCart([]) //note3


    const priceArr = cart.map(item =>
        item.quantity
            ? item.quantity * item.price
            : 0
    )
    const total = priceArr.reduce((sum, price) => sum + price, 0) //note2

    const quantityArr = cart.map(item =>
        item.quantity
            ? item.quantity
            : 0)
    const totalQuantity = quantityArr.reduce((sum, qty) => sum + qty, 0)

    useEffect(() => {
        if (typeof window === "undefined") return;
        window.localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const values = { cart, addOne, removeOne, removeLine, clearCart, total, totalQuantity }


    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    )
}


// improvements
//add default value to context to avoid null checks in consumers and later fix the use of context in consumers



// notes
// note1: in runtime, yes, every found in your cart will already have a quantity: 1 (because you add it that way).
