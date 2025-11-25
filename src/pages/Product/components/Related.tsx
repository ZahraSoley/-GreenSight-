import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { useProduct } from "../hook/useProduct";

const Related = () => {

    const { related } = useProduct() //note1

    return (
        <section className="container mx-auto px-4 py-20">
            <h3 className="text-center text-lg mb-10 tracking-tight">You may also like</h3>

            <Carousel className="w-full relative">
                <CarouselContent className="overflow-visible">
                    {related.map((p) => (
                        <CarouselItem key={p.id} className="basis-1/2 md:basis-1/3">
                            <Link
                                to={`/products/${p.name}`}
                                className="group overflow-hidden flex flex-col justify-center drop-shadow-md cursor-pointer"
                            >
                                <div className="relative mb-5 group-hover:scale-98 transition duration-500 ease-in-out">
                                    <img src={p.image} alt={p.name} className="object-cover aspect-[4/5] rounded-sm" />
                                    <div className="absolute bottom-5 right-5 opacity-0 p-2.5 rounded-full text-sm group-hover:opacity-100 transition-transform duration-500 cursor-pointer bg-primary text-white">
                                        view
                                    </div>
                                </div>
                                <span className="ml-2 text-xs md:text-[16px] text-secondary-foreground group-hover:translate-x-3 group-hover:font-semibold font-medium tracking-wide transition ease-in-out duration-500">
                                    {p.name}
                                </span>
                                <span className="ml-2 text-xs md:text-[16px] text-secondary-foreground group-hover:translate-x-3 group-hover:font-semibold font-medium tracking-wide transition ease-in-out duration-500">
                                    from ${p.price}
                                </span>
                            </Link>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <div>
                    <CarouselNext className="absolute top-6 right-2 md:top-8 md:right-4" />
                    <CarouselPrevious className="absolute top-6 left-2 md:top-8 md:left-4" />
                </div>
            </Carousel>
        </section>
    )
}

export default Related


// note1: better to pass it as props 