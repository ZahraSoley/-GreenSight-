import { Button } from "@/components/ui/button"
import { products } from '@/assets/Products'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Link } from "react-router-dom"

const New = ['new1', 'new3', 'new10', 'new14', 'new16', 'new18']

export const NewArrivals = () => {
    return (
        <section className="mt-20 mb-0 lg:mb-18">
            <div className="flex flex-col gap-7 py-15">
                <div className="flex justify-between lg:mx-8 md:mx-5 mx-3">
                    <h3 className="text-xl md:text-2xl font-semibold text-secondary-foreground">New Arrivals</h3>
                    <Button variant='cta' className="px-10">See All</Button>
                </div>
                <Carousel className="w-full relative">
                    <CarouselContent className="overflow-visible">
                        {products.map((plant, index) =>
                            New.includes(plant.id) ? (
                                <CarouselItem key={index} className="basis-1/2 md:basis-1/3">
                                    <Link
                                        to={`/products/${plant.name}`}
                                        className="group overflow-hidden flex flex-col justify-center drop-shadow-md cursor-grab">
                                        <div className="relative mb-5 group-hover:scale-98 transition duration-500 ease-in-out">
                                            <img src={plant.image} alt="" className="object-cover aspect-[4/5] rounded-sm" />
                                            <div className="absolute bottom-5 right-5 opacity-0 p-2.5 rounded-full text-sm group-hover:opacity-100 transition-transform duration-500 cursor-pointer bg-primary text-white">
                                                view
                                            </div>
                                        </div>
                                        <span className="ml-2 text-xs md:text-[16px] text-secondary-foreground group-hover:translate-x-3 group-hover:font-semibold font-medium tracking-wide transition ease-in-out duration-500">{plant.name}</span>
                                        <span className="ml-2 text-xs md:text-[16px] text-secondary-foreground group-hover:translate-x-3 group-hover:font-semibold font-medium tracking-wide transition ease-in-out duration-500">from {plant.price}$</span>
                                    </Link>
                                </CarouselItem>
                            ) : null
                        )}
                    </CarouselContent>
                    <div>
                        <CarouselNext className="absolute top-6 right-3 md:top-10 md:right-8" />
                        <CarouselPrevious className="absolute top-6 left-3 md:top-10 md:left-8" />
                    </div>
                </Carousel>
            </div>
        </section>
    )
}
