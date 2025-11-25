import { useProduct } from "../hook/useProduct"

const ProductLeft = () => {

    const { setSelectedImage, product, thumbnails, selectedImage } = useProduct()

    if (!product) return;
    return (
        <div className="flex flex-col-reverse md:flex-row gap-1 md:gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 w-20">
                {thumbnails.map((img) => (
                    <img
                        key={img}
                        src={img}
                        alt="thumbnail"
                        onClick={() => setSelectedImage(img)}
                        className={`w-12 md:w-20 object-cover rounded-md cursor-pointer transition-all duration-300 ${selectedImage === img ? "opacity-100 ring-1 ring-accent" : "opacity-80 hover:opacity-100"}`}
                    />
                ))}
            </div>

            {/* Main Image */}
            <div className="w-full overflow-hidden rounded-sm shadow-2xs">
                <img
                    src={selectedImage}
                    alt={product.name}
                    className="w-full aspect-[4/5] object-cover rounded-sm transition-all duration-500 bg-[#ececec]"
                />
            </div>
        </div>
    )
}

export default ProductLeft