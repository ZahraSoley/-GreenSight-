import plant from '@/assets/main page/monstera.png'
import flower from '@/assets/main page/flower.png'
import planter from '@/assets/main page/planter.png'
import gift from '@/assets/main page/gift.png'
import { ArrowRight } from 'lucide-react'

const collections = [
    { href: '', name: 'plants', pic: plant },
    { href: '', name: 'flowers', pic: flower },
    { href: '', name: 'planters', pic: planter },
    { href: '', name: 'gifts', pic: gift },
]

export const Collections = () => {
    return (
        <section className="lg:mx-8 md:mx-5 mx-3 mt-30">
            <div className="max-w-6xl px-6 md:px-8 mx-auto flex flex-col justify-center items-center">
                <div className="text-center flex flex-col gap-4">
                    <h2 className="text-2xl lg:text-3xl font-semibold text-foreground">Step into a world of quiet greenery</h2>
                    <p className="text-foreground tracking-wider">Each collection is an invitation to bring nature’s balance and gentle rhythm into your home.</p>
                </div>
                <div className="grid grid-cols-2 md:flex md:grid-cols-4 gap-5 mt-5">
                    {collections.map(collection =>
                        <a href="" className="group relative w-full aspect-square bg-secondary hover:bg-muted transition flex flex-col justify-center items-center rounded-xs">
                            <ArrowRight className='absolute opacity-0 -translate-x-1 top-1 right-4 w-4 group-hover:opacity-100 group-hover:translate-x-1 transition ease-in-out duration-200'/>
                            <img src={collection.pic} alt={collection.name} className='w-4/5 aspect-square' />
                            <span className='font-semibold mb-3'>{collection.name}</span>
                        </a>
                    )}
                </div>

            </div>
        </section>
    )
}

