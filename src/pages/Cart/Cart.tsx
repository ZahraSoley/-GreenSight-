import { CartContext } from '@/context/CartContext';
import { Button } from "@/components/ui/button";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Main Page/components/Header";
import Footer from "../Main Page/components/Footer";

const Cart = () => {

  const { cart, removeLine, addOne, removeOne, total } = useContext(CartContext)!;

  useEffect(() => {
    console.log(cart)
  }, [cart])

  if (cart.length === 0) {
    return (
      <main className="min-h-[60vh] flex flex-col items-center justify-center gap-6">
        <h1 className="text-xl">Your cart is empty</h1>
        <Button asChild><Link to="/products">Browse products</Link></Button>
      </main>
    );
  }

  return (
    <>
      <Header />
      <main className="container mx-auto max-w-4xl p-4 mb-12 mt-24">
        <h1 className="text-center tracking-tight font-extralight text-4xl text-muted-foreground mb-10">
          shopping cart
        </h1>

        <div className="flex flex-col">
          {cart.map(item => (
            <div key={item.name} className="flex items-center gap-4 border-t py-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 aspect-[4/5] rounded-xs object-cover bg-neutral-200"
              />
              <div className="flex-1">
                <div className="font-medium text-sm">{item.name}</div>
                <div className="text-xs text-muted-foreground">${item.price.toFixed(2)}</div>
              </div>

              <div className="grid mt-5 gap-1">
                <div className="flex items-center gap-2">
                  <Button variant="outline" className="rounded-full" size="icon" onClick={() => removeOne(item)}>−</Button>
                  <div className="w-8 text-center">{item.quantity}</div>
                  <Button variant="outline" className="rounded-full" size="icon" onClick={() => addOne(item)}>+</Button>
                </div>
                <button
                  onClick={() => removeLine(item)}
                  className="text-xs hover:underline cursor-pointer h-5">
                  remove line
                </button>
              </div>

              <div className="w-24 text-right text-sm font-medium text-muted-foreground">
                {/* ******* why do i have to check again? ******** */}
                ${(item.price * (item.quantity ?? 0)).toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-10 border-t flex items-center justify-between">
          <span className="text-lg">Subtotal</span>
          <span className="text-xl font-semibold">${total.toFixed(2)}</span>
        </div>

        <div className="mt-6 flex gap-3">
          <Button asChild variant="outline" className="">
            <Link to="/products">Continue shopping</Link>
          </Button>
          <Button className="ml-auto ">
            <Link to='/checkout'>Checkout</Link>
          </Button>
        </div>
      </main >
      <Footer />
    </>
  );

}

export default Cart


// improvements

// add clear cart
// ad number of items in cart