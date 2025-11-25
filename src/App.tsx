// maybe add q and a section

import { Route, Routes } from "react-router-dom"
import { useState } from "react"
import Main from "./pages/Main Page/Main"
import Products from "./pages/Products/Products"
import Product from "./pages/Product/Product"
import Cart from "./pages/Cart/Cart"
import Test from "./Test"
import Checkout from "./pages/Checkout/Checkout"
import About from "./pages/About/About"



const App = () => {

  return (
    <div className="max-w-[1600px] mx-auto overflow-hidden">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productName" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/test" element={<Test />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<div>404 Not Found</div>} />
        <Route path='/about' element={<About />} />
        <Route path='/Our Mission' element={<About />} />
        <Route path='/Meet Our Team' element={<About />} />
      </Routes>
    </div>
  )
}

export default App


// another way :
// interface CartItemInterface extends ProductsInterface {
//   quantity: number
// }

// const [cartItem, setCartItem] = useState<CartItemInterface[]>([])

// const addToCart = (product: ProductsInterface) => {
//   setCartItem(prev => {
//     // check if product is already in the cartItem
//     const existing = prev.find(item => item.id === product.id)

//     if (existing) {
//       // increase quantity if already there
//       return prev.map(item =>
//         item.id === product.id
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       )
//     } else {
//       // add new item with quantity = 1
//       return [...prev, { ...product, quantity: 1 }]
//     }
//   })
// }

// const removeFromCart = (productId: string) => {
//   setCartItem(prev =>
//     prev
//       .map(item =>
//         item.id === productId
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       )
//       // remove item entirely if quantity hits 0
//       .filter(item => item.quantity > 0)
//   )
// }

// const cartQuantity = cartItem.reduce((total, item) => total + item.quantity, 0)





























{/* <div className="flex gap-4 flex-wrap p-6 bg-[#F4F5F3]">
        <div className="w-12 h-12 bg-[#F4F5F3]" title="#F4F5F3 background"></div>
        <div className="w-12 h-12 bg-[#E5E3DC]" title="#E5E3DC card"></div>
        <div className="w-12 h-12 bg-[#C5C8C3]" title="#C5C8C3 muted"></div>
        <div className="w-12 h-12 bg-[#B7B1A3]" title="#B7B1A3 border"></div>
        <div className="w-12 h-12 bg-[#5E6060]" title="#5E6060 muted-foreground"></div>
        <div className="w-12 h-12 bg-[#222322]" title="#222322 text"></div>
      </div>

      <div className="flex gap-4 flex-wrap p-6 bg-[#F4F5F3]">
        <div className="w-12 h-12 bg-[#5A6E5A]" title="#5A6E5A primary"></div>
        <div className="w-12 h-12 bg-[#9AA59A]" title="#9AA59A secondary"></div>
      </div>

      <div className="flex gap-4 flex-wrap p-6 bg-[#F4F5F3]">
        <div className="w-12 h-12 bg-[#8A8375]" title="#8A8375 accent"></div>
        <div className="w-12 h-12 bg-[#7E7769]" title="#7E7769 accent-hover"></div>
        <div className="w-12 h-12 bg-[#958D7F]" title="#958D7F dark variant"></div>
        <div className="w-12 h-12 bg-[#A49786]" title="#A49786 warm light variant"></div>
      </div>
      <div className="flex gap-4 flex-wrap p-6 bg-[#222322]">


        <div className="w-12 h-12 bg-[#222322]" title="#222322 background"></div>
        <div className="w-12 h-12 bg-[#2D2E2D]" title="#2D2E2D card"></div>
        <div className="w-12 h-12 bg-[#5E6060]" title="#5E6060 muted"></div>
        <div className="w-12 h-12 bg-[#3B3C3B]" title="#3B3C3B border"></div>
        <div className="w-12 h-12 bg-[#C1BBB0]" title="#C1BBB0 muted-foreground"></div>
        <div className="w-12 h-12 bg-[#E5E3DC]" title="#E5E3DC text"></div>
      </div>

      <div className="flex gap-4 flex-wrap p-6 bg-[#222322]">

        <div className="w-12 h-12 bg-[#9AA59A]" title="#9AA59A primary"></div>
        <div className="w-12 h-12 bg-[#B7B1A3]" title="#B7B1A3 secondary"></div>
      </div>

      <div className="flex gap-4 flex-wrap p-6 bg-[#222322]">

        <div className="w-12 h-12 bg-[#958D7F]" title="#958D7F accent"></div>
        <div className="w-12 h-12 bg-[#A49786]" title="#A49786 accent-hover"></div>
      </div> */}

{/* <section className="min-h-screen flex flex-col items-center justify-center gap-6 bg-background text-foreground">
        <h1 className="text-6xl font-semibold tracking-tight uppercase">Plus Jakarta Sans</h1>
        <h2 className="text-3xl font-medium tracking-[0.01em]">Modern & Luxurious</h2>
        <p className="max-w-lg text-center text-base font-normal tracking-wide text-foreground/80">
          This is your new global font. Smooth curves, balanced spacing, and elegance that
          matches your muted color palette.
        </p>
        <button className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium tracking-wider uppercase hover:bg-primary/90 transition">
          Test Button
        </button>
      </section> */}