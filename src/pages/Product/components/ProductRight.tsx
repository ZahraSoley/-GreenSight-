import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { ArrowLeft, Droplets, Leaf, Minus, Plus, SunMedium } from "lucide-react";
import { Link } from "react-router-dom";
import { useProduct } from "../hook/useProduct";
import { useContext, useEffect } from "react";
import { CartContext } from "@/context/CartContext";

const ProductRight = () => {

    const { product, setSelectedRadio, fixedVasePrice, quantity, setQuantity, selectedRadio, activeTab, setActiveTab } = useProduct()

    const { addOne, removeOne, cart } = useContext(CartContext)!

    useEffect(() => {
        console.log(cart)
    }, [cart])

    if (!product) return;
    return (
        <div className="flex flex-col justify-end gap-6">

            <Link
                to="/products"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
            >
                <ArrowLeft className="w-4 h-4" /> Back to Collection
            </Link>

            <div>
                <h1 className="text-2xl font-light tracking-tight">{product.name}</h1>
                <p className="text-sm text-muted-foreground mt-2">
                    {product.size} • {product.type}
                </p>
                <p className="text-lg mt-4 font-normal">${product.price}</p>
            </div>

            {/* Vase Option */}
            <div className="flex justify-between border-t border-muted pt-4">
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="radio"
                        name="price"
                        value="without"
                        checked={selectedRadio === "without"}
                        onChange={(e) => setSelectedRadio(e.target.value as "without")}
                        className="accent-black"
                    />
                    <span>Without vase (${product.price})</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="radio"
                        name="price"
                        value="with"
                        checked={selectedRadio === "with"}
                        onChange={(e) => setSelectedRadio(e.target.value as "with")}
                        className="accent-black"
                    />
                    <span>With vase (${(product.price + fixedVasePrice).toFixed(2)})</span>
                </label>
            </div>

            {/* Quantity Selector + Add to Cart */}
            <div className="flex flex-col gap-4 border-t border-muted pt-4">
                {quantity > 0 && (
                    <div className="flex items-center justify-center gap-5">
                        <Button variant="outline" className="rounded-full" size="icon"
                            onClick={() => {
                                setQuantity((prev) => Math.max(0, prev - 1))
                                removeOne(product)
                            }
                            }>
                            <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-8 text-center">{quantity}</span>
                        <Button variant="outline" className="rounded-full" size="icon"
                            onClick={() => {
                                setQuantity((prev) => prev + 1)
                                addOne(product)
                            }
                            }>
                            <Plus className="w-4 h-4" />
                        </Button>
                    </div>
                )}

                <Button
                    variant="cta"
                    onClick={() => {
                        {
                            setQuantity((q) => (q === 0 ? 1 : q));
                            addOne(product)
                        }

                    }}
                    className="rounded-full text-base px-8"
                >
                    Add to cart
                </Button>
            </div>

            {/* --- Tabs --- */}
            <section className="border-t border-muted pt-4">
                <div className="container mx-auto max-w-3xl">
                    <div className="flex gap-8 mb-4">
                        {(product.care ? ["care", "description", "shipping"] : ["description", "shipping"]).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab as typeof activeTab)}
                                className="pb-1 font-medium text-sm uppercase tracking-wide cursor-pointer"
                            >
                                {tab}
                                <div
                                    className={clsx(
                                        "mt-1 h-[1px] bg-foreground transition-all duration-500",
                                        activeTab === tab ? "w-full" : "w-0"
                                    )}
                                />
                            </button>
                        ))}
                    </div>

                    <div className="text-left text-sm text-muted-foreground leading-relaxed transition-opacity duration-500">
                        {activeTab === "description" && <p>{product.description}</p>}

                        {product.care && activeTab === "care" && (
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-2">
                                    <SunMedium className="w-3.5 h-3" />
                                    <span className="text-sm">{product.care.light} light</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Droplets className="w-3.5 h-3" />
                                    <span className="text-sm">{product.care.water}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Leaf className="w-3.5 h-3" />
                                    <span className="text-sm">{product.care.difficulty}</span>
                                </div>
                            </div>
                        )}

                        {activeTab === "shipping" && (
                            <p>We ship worldwide with eco-friendly packaging. Orders dispatch within 2–3 business days.</p>
                        )}
                    </div>
                </div>
            </section>
        </div >
    )
}

export default ProductRight