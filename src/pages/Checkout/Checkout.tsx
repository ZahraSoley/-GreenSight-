import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "@/CartContext";
import { Button } from "@/components/ui/button";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import type { CartItemType } from "@/types/types";

const schema = z.object({
    fullName: z.string().min(3, "Full name must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    addressLine1: z
        .string()
        .min(5, "Address line 1 must be at least 5 characters"),
    addressLine2: z.string().optional(),
    postalCode: z
        .string()
        .min(5, "Postal code must be at least 5 characters"),
    city: z.string().min(3, "City must be at least 3 characters"),
    country: z.string().min(2, "Country must be at least 2 characters"),
});

type FormType = z.infer<typeof schema>;

export default function Checkout() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormType>({
        resolver: zodResolver(schema),
        mode: "all",
    });

    const { cart, totalQuantity, total, clearCart } = useContext(CartContext)!;
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [activebtn, setActivebtn] = useState("");

    const submit: SubmitHandler<FormType> = async (data) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));
            console.log(data);
            setIsSubmitted(true);
            clearCart();
            throw new Error();
        } catch (error) {
            console.log("Submission failed");
        }
    };

    if (cart.length === 0) {
        if (isSubmitted) {
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
        else return (
            <main className="min-h-[60vh] flex flex-col items-center justify-center gap-6 px-4">
                <h1 className="text-xl font-light tracking-wide">
                    Your cart is empty
                </h1>
                <Button asChild>
                    <Link to="/products">Browse plants</Link>
                </Button>
            </main>

        );
    }

    return (
        <main className="px-4 py-12 lg:px-8">
            <div className="max-w-6xl mx-auto flex flex-col gap-8">
                {/* Header */}
                <header className="flex flex-col gap-3">
                    <Link
                        to="/cart"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
                    >
                        <span className="text-lg">←</span>
                        Back to cart
                    </Link>
                    <h1 className="text-2xl md:text-3xl font-light tracking-tight">
                        Checkout
                    </h1>
                    <p className="text-sm text-muted-foreground max-w-xl">
                        Enter the required information to complete your order.
                    </p>
                </header>

                <section className="grid gap-8 lg:grid-cols-[2fr_1fr] items-start">
                    {/* Left: Customer info form */}
                    <form
                        onSubmit={handleSubmit(submit)}
                        className="border rounded-sm bg-white/80 backdrop-blur-sm shadow-sm px-4 py-6 md:px-6 md:py-8 flex flex-col gap-6"
                    >
                        <div className="flex flex-col gap-2">
                            <h2 className="text-lg font-medium tracking-wide">
                                Customer information
                            </h2>
                            <p className="text-xs text-muted-foreground">
                                We&apos;ll only use this information to process your order.
                            </p>
                        </div>

                        {/* Name + email */}
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="fullName" className="text-sm">
                                    Full name<span className="text-red-500"> *</span>
                                </label>
                                <input
                                    id="fullName"
                                    {...register("fullName")}
                                    type="text"
                                    className="h-10 rounded-sm border px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:border-primary transition"
                                    placeholder="Jane Doe"
                                />
                                {errors.fullName && (
                                    <span className="text-red-800 text-xs">
                                        {errors.fullName.message}
                                    </span>
                                )}
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="email" className="text-sm">
                                    Email<span className="text-red-500"> *</span>
                                </label>
                                <input
                                    id="email"
                                    type="text"
                                    {...register("email")}
                                    className="h-10 rounded-sm border px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:border-primary transition"
                                    placeholder="you@example.com"
                                />
                                {errors.email && (
                                    <span className="text-red-800 text-xs">
                                        {errors.email.message}
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="phone" className="text-sm">
                                Phone number
                            </label>
                            <input
                                id="phone"
                                type="text"
                                {...register("phone")}
                                className="h-10 rounded-sm border px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:border-primary transition"
                                placeholder="+49 ..."
                            />
                            {errors.phone && (
                                <span className="text-red-800 text-xs">
                                    {errors.phone.message}
                                </span>
                            )}
                        </div>

                        {/* Address */}
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="addressLine1" className="text-sm">
                                    Address line 1<span className="text-red-500"> *</span>
                                </label>
                                <input
                                    id="addressLine1"
                                    type="text"
                                    {...register("addressLine1")}
                                    className="h-10 rounded-sm border px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:border-primary transition"
                                    placeholder="Street and house number"
                                />
                                {errors.addressLine1 && (
                                    <span className="text-red-800 text-xs">
                                        {errors.addressLine1.message}
                                    </span>
                                )}
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="addressLine2" className="text-sm">
                                    Address line 2 (optional)
                                </label>
                                <input
                                    id="addressLine2"
                                    type="text"
                                    {...register("addressLine2")}
                                    className="h-10 rounded-sm border px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:border-primary transition"
                                    placeholder="Apartment, floor, etc."
                                />
                                {errors.addressLine2 && (
                                    <span className="text-red-800 text-xs">
                                        {errors.addressLine2.message}
                                    </span>
                                )}
                            </div>

                            <div className="grid gap-4 md:grid-cols-3">
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="postalCode" className="text-sm">
                                        Postal code<span className="text-red-500"> *</span>
                                    </label>
                                    <input
                                        id="postalCode"
                                        type="text"
                                        {...register("postalCode")}
                                        className="h-10 rounded-sm border px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:border-primary transition"
                                        placeholder="12345"
                                    />
                                    {errors.postalCode && (
                                        <span className="text-red-800 text-xs">
                                            {errors.postalCode.message}
                                        </span>
                                    )}
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="city" className="text-sm">
                                        City<span className="text-red-500"> *</span>
                                    </label>
                                    <input
                                        id="city"
                                        type="text"
                                        {...register("city")}
                                        className="h-10 rounded-sm border px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:border-primary transition"
                                        placeholder="Berlin"
                                    />
                                    {errors.city && (
                                        <span className="text-red-800 text-xs">
                                            {errors.city.message}
                                        </span>
                                    )}
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="country" className="text-sm">
                                        Country
                                    </label>
                                    <input
                                        id="country"
                                        type="text"
                                        {...register("country")}
                                        className="h-10 rounded-sm border px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:border-primary transition"
                                    />
                                    {errors.country && (
                                        <span className="text-red-800 text-xs">
                                            {errors.country.message}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Payment (UI only) */}
                        <div className="flex flex-col gap-3 pt-2 border-t md:pt-6">
                            <h2 className="text-sm font-medium tracking-wide">
                                Payment method
                            </h2>
                            <p className="text-xs text-muted-foreground">
                                For this demo, payment is not processed. Choose any option to
                                continue.
                            </p>

                            <div className="grid gap-3 md:grid-cols-3">
                                {["Credit Card", "PayPal", "Bank Transfer"].map((method) => (
                                    <button
                                        type="button"
                                        key={method}
                                        onClick={() => setActivebtn(method)}
                                        className={`h-10 rounded-sm border text-sm px-3 flex items-center justify-center gap-2 hover:border-primary hover:bg-primary/10 cursor-pointer transition ${activebtn === method &&
                                            "border-primary bg-primary/10"

                                            }`}
                                    >
                                        {method}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Submit */}
                        <div className="flex items-center justify-between pt-4 gap-4 flex-wrap">
                            <p className="text-xs text-muted-foreground">
                                By placing your order, you agree to our terms and conditions.
                            </p>
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="rounded-sm px-6"
                            >
                                {isSubmitting ? "Placing order..." : "Place order"}
                            </Button>
                            {/* {
                                errors.root && (
                                    <span className="text-red-800 text-xs">
                                        {errors.root.message}
                                    </span>
                                )
                            } */}
                        </div>
                    </form>

                    {/* Right: Order summary */}
                    <aside className="border rounded-sm bg-white/80 backdrop-blur-sm shadow-sm px-4 py-6 md:px-6 md:py-8 flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-lg font-medium tracking-wide">
                                Order summary
                            </h2>
                            <p className="text-xs text-muted-foreground">
                                {cart.length > 0
                                    ? `You have ${totalQuantity} item${totalQuantity > 1 ? "s" : ""
                                    } in your cart.`
                                    : "No items in your cart."}
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 max-h-[260px] overflow-y-auto pr-1">
                            {cart.map((item: CartItemType) => (
                                <div
                                    key={item.name}
                                    className="flex items-center gap-4"
                                >
                                    {item.image && (
                                        <div className="w-14 aspect-[4/5] rounded-sm overflow-hidden border bg-neutral-50 flex-shrink-0">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    )}
                                    <div className="flex flex-1 flex-col gap-1">
                                        <div className="flex items-center justify-between gap-2">
                                            <p className="text-sm font-medium truncate">
                                                {item.name}
                                            </p>
                                            <span className="text-sm tabular-nums">
                                                €
                                                {item.price?.toFixed
                                                    ? item.price.toFixed(2)
                                                    : item.price}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                                            <span>Qty: {item.quantity ?? 1}</span>
                                            <span className="tabular-nums">
                                                €
                                                {(
                                                    (item.price ?? 0) * (item.quantity ?? 1)
                                                ).toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {cart.length === 0 && !isSubmitted && (
                                <p className="text-xs text-muted-foreground">
                                    Your cart is empty. Add some plants to see them here.
                                </p>
                            )}
                        </div>

                        {/* Totals */}
                        <div className="flex flex-col gap-2 border-t pt-4 text-sm">
                            <div className="flex items-center justify-between">
                                <span className="text-muted-foreground">Subtotal</span>
                                <span className="tabular-nums">
                                    €{total?.toFixed ? total.toFixed(2) : total}
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-muted-foreground">Shipping</span>
                                <span className="tabular-nums">€4.00</span>
                            </div>
                            <div className="flex items-center justify-between pt-2 font-medium">
                                <span>Total</span>
                                <span className="tabular-nums">
                                    €{((total ?? 0) + 4).toFixed(2)}
                                </span>
                            </div>
                        </div>
                    </aside>
                </section>
            </div>
        </main>
    );
}
