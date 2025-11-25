import hero from '@/assets/main page/hero.mp4'
import { Button } from '@/components/ui/button';

export default function Hero() {

    return (
        <section className="relative w-full min-h-screen flex justify-center items-center">
            {/* Background video */}
            <video
                className="absolute top-0 left-0 right-0 w-full h-full object-cover"
                src={hero}
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Content on top */}
            <div className="z-10 flex flex-col justify-center items-center text-white text-center fade-in transition duration-[2000] px-3">

                <h1 className="text-2xl md:text-4xl font-semibold tracking-tight">Elevate with Nature</h1>
                <p className="text-sm md:text-[16px] max-w-xl">
                    Discover serenity and natural elegance in every leaf.
                </p>
                <p className="text-sm md:text-[16px] max-w-xl mb-4">
                    Let greenery transform your space into a living reflection of calm and harmony.
                </p>
                <Button variant='cta' className='shadow-xl md:px-10 px-5'>
                    Explore Our Collection
                </Button>
            </div>
        </section>
    );
}
