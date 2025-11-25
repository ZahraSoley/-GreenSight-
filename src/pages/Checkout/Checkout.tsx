import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCheckout } from "./hook/useCheckout";
import CheckoutForm from "./components/Form";
import OrderSummary from "./components/OrderSummary";

export default function Checkout() {
    const c = useCheckout();

    if (c.cart.length === 0) {
        if (c.isSubmitted) {
            return (
                <main className="lg:mx-8 md:mx-5 mx-3 min-h-[60vh] flex flex-col items-center justify-center gap-6">
                    <h1 className="text-xl">Thank you for your order!</h1>
                    <p className="text-center text-sm text-muted-foreground max-w-md">
                        Your order has been successfully placed. You will receive a confirmation email shortly.
                    </p>
                    <Button asChild>
                        <Link to="/">To main page</Link>
                    </Button>
                </main>
            );
        }
        return (
            <main className="min-h-[60vh] flex flex-col items-center justify-center gap-6 px-4">
                <h1 className="text-xl font-light tracking-wide">Your cart is empty</h1>
                <Button asChild>
                    <Link to="/products">Browse plants</Link>
                </Button>
            </main>
        );
    }

    return (
        <main className="px-4 py-12 lg:px-8">
            <div className="max-w-6xl mx-auto flex flex-col gap-8">
                <header className="flex flex-col gap-3">
                    <Link
                        to="/cart"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
                    >
                        <span className="text-lg">←</span>
                        Back to cart
                    </Link>
                    <h1 className="text-2xl md:text-3xl font-light tracking-tight">Checkout</h1>
                    <p className="text-sm text-muted-foreground max-w-xl">
                        Enter the required information to complete your order.
                    </p>
                </header>

                <section className="grid gap-8 lg:grid-cols-[2fr_1fr] items-start">
                    <CheckoutForm {...c} />
                    <OrderSummary {...c} />
                </section>
            </div>
        </main>
    );
}
