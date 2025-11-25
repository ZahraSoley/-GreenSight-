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
// so your reasoning is flawless for how the app behaves
// But TypeScript doesn’t remember the way you fill your cart later in the code.
// All it knows is:
// type CartItemType = {
//   name: string
//   image: string
//   quantity?: number // 👈 optional
// }
// So whenever you write found.quantity + 1, TS goes:
// “hmm… but quantity might be undefined — math with undefined isn’t safe.”
// 🌿 What your && does:
// works most of the time — but not perfectly:

// if quantity = 1 → ✅ becomes 2

// if quantity = undefined → ❌ becomes undefined

// if quantity = 0 (rare, but still a number) → ❌ becomes 0

// So the expression can return undefined or 0, which violates your intended “always a number” rule.
// That’s why TypeScript won’t stop complaining — it’s technically right.
// THATS WHY we use the found.quantoty??0 => “If quantity exists, use it. If not, treat it as 0.”
// - your mental model ✅ 100% correct
// - the && works in practice but is not type-safe
// - the ?? 0 form is the clean, professional, TypeScript-approved way

// note2:
// let sum = 0
// for (let i = 0; i < priceArr.length; i++) {
//     sum = sum + priceArr[i]
// }
// return sum

//note 3 const clearCart = setCart([])
// ⚠️ problem: this runs immediately when the component mounts instead of being a callable function.

// ✅ it should be a function that clears the cart when called: const clearCart = () => setCart([])


// way1=:
// const removeOne = (p: CartItemType) => {
//     setCart(prev => {
//         const found = prev.find(item => item.name === p.name)
//         return found?.quantity === 1 // here we have a problem
//             ? prev.filter(item => item.name != found.name)
//             : prev.map(item => item.name === p.name
//                 ? { ...item, quantity: (item.quantity ?? 2) - 1 }
//                 : item
//             );
//     }
//     )
// }
// This is almost fine, but there are two problems:

// ❌ Problem 1 – found might be undefined

// If the product is somehow not in the cart, found is undefined.
// Then found?.quantity === 1 is false,
// and you go to the map branch with found undefined.
// Safer version:
// if (!found) return prev;
// before the ternary.

// ❌ Problem 2 – (item.quantity ?? 2) - 1

// This is a bit wrong logically:
// If quantity is undefined, item.quantity ?? 2 becomes 2
// So 2 - 1 = 1 → okay by accident
// But that “2” is random and confusing
// It should be 0 or 1 depending on how you think:
// For checks like “is it 1?” → use ?? 0 or ?? 1 intentionally
// For decreasing quantity, ?? 1 is okay, but ?? 2 makes no sense


// way2: somehow shorter

/* -------------------- Add item -------------------- */
//   const addOne = (p: CartItemType) => {
//     setCart(prev => {
//       const found = prev.find(item => item.name === p.name)
//       if (!found) {
//         // if item doesn’t exist → add it with quantity 1
//         return [...prev, { ...p, quantity: 1 }]
//       }
//       // else → increase quantity
//       return prev.map(item =>
//         item.name === p.name
//           ? { ...item, quantity: (item.quantity ?? 0) + 1 }
//           : item
//       )
//     })
//   }

//   /* -------------------- Remove item -------------------- */
//   const removeOne = (p: CartItemType) => {
//     setCart(prev => {
//       const found = prev.find(item => item.name === p.name)
//       if (!found) return prev

//       // if quantity = 1 → remove it completely
//       if ((found.quantity ?? 0) === 1) {
//         return prev.filter(item => item.name !== p.name)
//       }

//       // otherwise → decrease quantity
//       return prev.map(item =>
//         item.name === p.name
//           ? { ...item, quantity: (item.quantity ?? 1) - 1 }
//           : item
//       )
//     })
//   }

//   /* -------------------- Clear cart -------------------- */
//   const clearCart = () => setCart([])

//   /* -------------------- Get total -------------------- */
//   const getTotal = () =>
//     cart.reduce((sum, item) => sum + item.price * (item.quantity ?? 0), 0)

//   /* -------------------- Context value -------------------- */
//   const value = {
//     cart,
//     addOne,
//     removeOne,
//     clearCart,
//     getTotal,
//   }



//way 3: very short

// const addOne = (p: CartItemType) => {
//   if (!p) return

//   setCart(prev =>
//     prev.some(item => item.name === p.name)
//       ? prev.map(item =>
//           item.name === p.name
//             ? { ...item, quantity: (item.quantity ?? 0) + 1 }
//             : item
//         )
//       : [...prev, { ...p, quantity: 1 }]
//   )
// }

// const removeOne = (p: CartItemType) => {
//   if (!p) return

//   setCart(prev =>
//     prev
//       .map(item =>
//         item.name === p.name
//           ? { ...item, quantity: (item.quantity ?? 2) - 1 }
//           : item
//       )
//       .filter(item => (item.quantity ?? 0) > 0)
//   )
// }


// get total
// const [total, settotal] = useState<number>(0)

// const getTotal = (cart: CartItemType[]) => {
//   const priceArr = cart.map(item =>
//     item.quantity
//       ? item.quantity * item.price
//       : 0
//   )
//   const total = priceArr.reduce((sum, price) => sum + price, 0)
//   settotal(total)
// }


// original one withe a  bug :
// const addOne = (p: CartItemType) => {
//     const found = cart.find(item => item.name === p.name)

//     if (!found) {
//         const updateditem = { ...p, quantity: 1 };
//         const newcart = [...cart, updateditem]
//         setCart(newcart)
//     }
//     else {
//         const filtered = cart.filter(item => item.name != found.name);
//         const updateditem = { ...found, quantity: (found.quantity ?? 0) + 1 }; //note1
//         const newcart = [...filtered, updateditem]
//         setCart(newcart)
//     }
// }

// const removeOne = (p: CartItemType) => {
//     const found = cart.find(item => item.name === p.name)
//     if (found && found.quantity === 1) {
//         const filtered = cart.filter(item => item.name != found.name)
//         setCart(filtered)
//     }
//     else if (found && found.quantity && found.quantity > 1) {
//         const filtered = cart.filter(item => item.name != found.name)
//         const updateditem = { ...found, quantity: found.quantity - 1 }
//         const newcart = [...filtered, updateditem]
//         setCart(newcart)
//     }
//     else {
//         setCart(cart)
//     }
// }