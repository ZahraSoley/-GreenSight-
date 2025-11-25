// OrderSummary.tsx
import type { CartItemType } from "@/types/types";

export default function OrderSummary({ cart, totalQuantity, total }: any) {
    return (
        <aside className="border rounded-sm bg-white/80 backdrop-blur-sm shadow-sm px-4 py-6 md:px-6 md:py-8 flex flex-col gap-6">

            <div className="flex flex-col gap-2">
                <h2 className="text-lg font-medium tracking-wide">Order summary</h2>
                <p className="text-xs text-muted-foreground">
                    {cart.length > 0
                        ? `You have ${totalQuantity} item${totalQuantity > 1 ? "s" : ""} in your cart.`
                        : "No items in your cart."}
                </p>
            </div>

            <div className="flex flex-col gap-4 max-h-[260px] overflow-y-auto pr-1">
                {cart.map((item: CartItemType) => (
                    <div key={item.name} className="flex items-center gap-4">
                        {item.image && (
                            <div className="w-14 aspect-[4/5] rounded-sm overflow-hidden border bg-neutral-50 flex-shrink-0">
                                <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                            </div>
                        )}
                        <div className="flex flex-1 flex-col gap-1">
                            <div className="flex items-center justify-between gap-2">
                                <p className="text-sm font-medium truncate">{item.name}</p>
                                <span className="text-sm tabular-nums">
                                    €
                                    {item.price?.toFixed ? item.price.toFixed(2) : item.price}
                                </span>
                            </div>
                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                                <span>Qty: {item.quantity ?? 1}</span>
                                <span className="tabular-nums">
                                    €{((item.price ?? 0) * (item.quantity ?? 1)).toFixed(2)}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col gap-2 border-t pt-4 text-sm">
                <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="tabular-nums">€
                        {total?.toFixed ? total.toFixed(2) : total}
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
    );
}
