import { useProduct } from "../hook/useProduct"

const Story = () => {

    const { product } = useProduct()

    if (!product) return;
    return (
        <section className="bg-accent/30 py-16">
            <div className="container mx-auto px-4 max-w-3xl text-center space-y-6">
                <h2 className="text-xl font-medium">About this plant</h2>
                <p className="text-muted-foreground leading-relaxed">
                    Each {product.name.toLowerCase()} in our collection is selected for its serene form and timeless beauty.
                    Hand-nurtured under natural light, it embodies the calm balance that defines every Green Sight space.
                </p>
            </div>
        </section>
    )
}

export default Story