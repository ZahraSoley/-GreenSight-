export const Quality = () => {
    return (
        <section className="lg:mx-8 md:mx-5 mx-3 border-t-2">
            <div className="max-w-6xl mx-auto px-6 md:px-8 text-center py-12 ">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Rooted in Integrity</h3>
                <p className="text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                    Grounded in craftsmanship, guided by nature.
                </p>

                <div className="grid gap-10 md:grid-cols-3 text-left">
                    {[
                        {
                            title: 'Sustainably Grown',
                            text: 'Every plant and flower is cultivated with care and respect for the earth — naturally grown, never rushed.',
                        },
                        {
                            title: 'Mindfully Delivered',
                            text: 'Your order arrives with attention to detail — carefully packaged to ensure your plant’s safe journey home.',
                        },
                        {
                            title: 'Thoughtfully Designed',
                            text: 'From planters to packaging, each piece reflects quiet craftsmanship and refined simplicity.',
                        },
                    ].map((card) => (
                        <div className="group bg-secondary flex justify-center items-center rounded-xs shadow-sm">
                            <div key={card.title} className="p-8 transition hover:scale-98 ease-in-out">
                                <div>
                                    <h4 className="text-lg font-medium mb-1">{card.title}</h4>
                                    <div className="h-[2px] w-0 group-hover:w-full bg-secondary-foreground transition-transform"></div>
                                </div>
                                <p className="text-muted-foreground leading-relaxed mt-2">{card.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

