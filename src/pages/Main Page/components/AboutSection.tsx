import twoPlants from '@/assets/main page/twoPlants.jpg'
import { Button } from '@/components/ui/button'

export const AboutSection = () => {
    return (
        <section className=''>
            <div className=" lg:mx-8 md:mx-5 mx-3 py-12 border-t-2 flex flex-col-reverse md:flex-row">
                <div className='md:flex-1 relative flex items-center justify-center'>
                    <img src={twoPlants} alt="two plants" className='rounded-sm w-full md:w-3/4 aspect-[4/5] xl:aspect-square object-cover' />
                </div>
                <div className='md:flex-1 flex flex-col text-center md:text-left md:items-start items-center md:justify-end justify-center'>
                    <div className='w-full md:w-2/3 aspect-square flex flex-col justify-center items-center md:items-start '>
                        <h3 className='font-semibold text-2xl text-secondary-foreground mb-4'>Rooted in Calm</h3>
                        <span className='text-sm text-muted-foreground'>At Green Sight, we believe serenity begins with nature.</span>
                        <span className='text-sm text-muted-foreground'>Each piece in our collection is chosen to bring quiet luxury and living balance into your home.</span>
                        <Button variant='cta' className='w-3/4 lg:w-2/3 xl:w-60 text-sm bg-secondary-foreground hover:bg-zinc-700 mt-8'>
                            About Us
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}



