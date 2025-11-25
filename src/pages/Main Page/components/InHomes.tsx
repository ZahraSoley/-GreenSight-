import { useState, useEffect } from "react"
import home1 from '@/assets/main page/home1.jpg'
import home2 from '@/assets/main page/home2.jpg'
import home3 from '@/assets/main page/home3.jpg'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    image: home1,
    quote: "“My Peace Lily from Green Sight brightens every morning.”",
    author: "— Yasmin, Berlin",
    product: "Peace Lily",
  },
  {
    id: 2,
    image: home2,
    quote: "“The planter feels like sculpture — quiet, tactile, perfect.”",
    author: "— Daniel, Hamburg",
    product: "Stone Ceramic Planter",
  },
  {
    id: 3,
    image: home3,
    quote: "“It’s more than a plant — it changed how my home feels.”",
    author: "— Amira, Vienna",
    product: "Monstera Deliciosa",
  },
]

export default function InHomes() {

  const [pic, setpic] = useState<number>(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setpic(prev => prev === 3 ? 1 : prev + 1)
    }, 7000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className=''>
      <div className="lg:mx-8 md:mx-5 mx-3 py-12 border-t-2 flex flex-col md:flex-row">
        <div className='flex-1 flex flex-col w-full md:items-end md:justify-center '>
          <div className='w-full md:w-2/3  aspect-square flex flex-col text-center md:text-left justify-center items-center md:items-start '>
            <h3 className="font-semibold text-2xl text-secondary-foreground mb-4">In Your Homes</h3>
            <p className="text-muted-foreground text-sm">
              Every space tells a story — of light, balance, and quiet presence.
              Through the eyes of our community, we see how Green Sight lives beyond design: in the calm corners of real homes, where nature meets daily life with grace.
            </p>
            <Button variant='cta' className=' w-2/3 lg:w-2/3 xl:w-60 text-sm bg-secondary-foreground hover:bg-zinc-700 mt-8'>
              Explore Our Products
            </Button>
          </div>
        </div>
        <div className='flex-1 relative '>
          <div className="relative w-full md:w-3/4 aspect-[4/5] xl:aspect-square m-auto ">
            {testimonials.map(testimonial =>
              <div className={cn("absolute inset-0 w-full h-full rounded-sm overflow-clip transition ease-in-out duration-750", pic === testimonial.id ? 'opacity-100' : 'opacity-0')}>
                <img src={testimonial.image}
                  alt="two plants"
                  className={cn('object-cover absolute inset-0 xl:top-[-10rem]')} />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-6 py-12 text-left text-white">
                  <p className="italic text-sm md:text-base mb-1">{testimonial.quote}</p>
                  <p className="text-xs md:text-sm opacity-80">{testimonial.author}</p>
                  <a
                    href={`/products/${testimonial.product.toLowerCase().replace(/\s+/g, "-")}`}
                    className="inline-block text-xs md:text-sm text-white/90 underline mt-2 hover:text-white"
                  >
                    Shop this piece
                  </a>
                </div>
                <div className="flex justify-center items-center gap-5 absolute bottom-5 w-full z-10">
                  {testimonials.map(testimonial =>
                    <button
                      onClick={() => setpic(testimonial.id)}
                      className={cn("w-2 h-2 rounded-full bg-zinc-500 cursor-pointer transition ease-in-out", pic === testimonial.id && 'bg-zinc-200')}></button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

