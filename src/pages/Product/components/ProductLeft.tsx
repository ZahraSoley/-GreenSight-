import { useProduct } from "../hook/useProduct"

const ProductLeft = () => {

    const { setSelectedImage, product, thumbnails, selectedImage } = useProduct()

    if (!product) return;
    return (
        <div className="flex flex-col-reverse md:flex-row gap-1 md:gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 w-20">
                {thumbnails.map((img) => (
<button
  key={img}
  type="button"
  onClick={() => setSelectedImage(img)}
  className={`rounded-md transition-all duration-300 
    ${selectedImage === img 
      ? "ring-1 ring-accent" 
      : "hover:opacity-100"}`
  }
>
  <img
    src={img}
    alt="Product thumbnail"
    className={`w-12 md:w-20 object-cover rounded-md 
      ${selectedImage === img ? "opacity-100" : "opacity-80"}`}
  />
</button>
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
