import journal1 from '@/assets/main page/journal1.jpg'
import journal2 from '@/assets/main page/journal2.jpg'
import journal3 from '@/assets/main page/journal3.jpg'

const Journal = () => {
    return (
        <section className="lg:mx-8 md:mx-5 mx-3 border-t-2">
            <div className="py-12 px-6 md:px-8 max-w-6xl mx-auto text-center">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">From the Journal</h3>
                <p className="text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                    Reflections on calm living, green design, and the quiet moments that connect us to nature.
                </p>

                {/* Journal cards */}
                <div className="grid gap-8 md:grid-cols-3 text-left mb-20">
                    {[
                        {
                            title: 'The Art of Gentle Growth',
                            desc: 'How tending to your plants can restore balance.',
                            img: journal1,
                        },
                        {
                            title: 'Design in Bloom',
                            desc: 'Pairing greenery with natural textures for effortless harmony.',
                            img: journal2,
                        },
                        {
                            title: 'The Ritual of Watering',
                            desc: 'Finding stillness in daily care.',
                            img: journal3,
                        },
                    ].map((post) => (
                        <a
                            key={post.title}
                            href="#"
                            className="group block"
                        >
                            <div className='relative'>
                                <img
                                    src={post.img}
                                    alt={post.title}
                                    className="w-full aspect-[5/6] object-cover rounded-sm transition-transform duration-200 group-hover:scale-103"
                                />
                                <div className='absolute inset-0 bg-blue-950/10 transition-transform duration-200 group-hover:scale-103'></div>
                            </div>
                            <h4 className="font-medium mt-4 text-foreground group-hover:text-primary transition-colors">
                                {post.title}
                            </h4>
                            <p className="text-muted-foreground text-sm mt-2">{post.desc}</p>
                        </a>
                    ))}
                </div>

                {/* Newsletter */}
                <div className="max-w-md mx-auto text-center">
                    <h4 className="text-xl font-medium mb-4 text-foreground">Stay Rooted in Calm</h4>
                    <p className="text-muted-foreground mb-8">
                        Join our seasonal journal for new stories, arrivals, and calm-living notes.
                    </p>

                    <form className="flex flex-col sm:flex-row gap-4 justify-center">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="w-full px-4 py-3 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <button className="bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90 transition">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </section>

    )
}

export default Journal