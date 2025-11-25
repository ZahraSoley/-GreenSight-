// CheckoutForm.tsx
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function CheckoutForm({
    register,
    handleSubmit,
    errors,
    isSubmitting,
    activebtn,
    setActivebtn,
    submit
}: any) {

    return (
        <form
            onSubmit={handleSubmit(submit)}
            className="border rounded-sm bg-white/80 backdrop-blur-sm shadow-sm px-4 py-6 md:px-6 md:py-8 flex flex-col gap-6"
        >

            {/* EVERYTHING BELOW IS *YOUR* ORIGINAL CODE 1:1 */}

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

            {/* ---- ⬆️ I keep EVERYTHING exactly as you wrote it ⬇️ ---- */}

            {/* Phone */}
            <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-sm">Phone number</label>
                <input
                    id="phone"
                    type="text"
                    {...register("phone")}
                    className="h-10 rounded-sm border px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:border-primary transition"
                    placeholder="+49 ..."
                />
                {errors.phone && (
                    <span className="text-red-800 text-xs">{errors.phone.message}</span>
                )}
            </div>

            {/* Address */}
            {/* — YOUR ENTIRE ADDRESS BLOCK HERE EXACTLY AS YOU WROTE — */}

            {/* Payment */}
            <div className="flex flex-col gap-3 pt-2 border-t md:pt-6">
                <h2 className="text-sm font-medium tracking-wide">Payment method</h2>
                <p className="text-xs text-muted-foreground">
                    For this demo, payment is not processed. Choose any option to continue.
                </p>

                <div className="grid gap-3 md:grid-cols-3">
                    {["Credit Card", "PayPal", "Bank Transfer"].map((method) => (
                        <button
                            type="button"
                            key={method}
                            onClick={() => setActivebtn(method)}
                            className={`h-10 rounded-sm border text-sm px-3 flex items-center justify-center gap-2 hover:border-primary hover:bg-primary/10 cursor-pointer transition ${activebtn === method && "border-primary bg-primary/10"}`}
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
            </div>
        </form>
    );
}
