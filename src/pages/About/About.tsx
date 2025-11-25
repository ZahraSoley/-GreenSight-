
import Footer from "../Main Page/components/Footer";
import Header from "../Main Page/components/Header";


const members = [
    { name: 'Alice Johnson', role: 'Founder & CEO', img: '/images/team/alice.jpg' },
    { name: 'Michael Smith', role: 'Head of Horticulture', img: '/images/team/michael.jpg' },
    { name: 'Sofia Lee', role: 'Creative Director', img: '/images/team/sofia.jpg' }
];

export default function About() {
    return (
        <>
            <Header />
            <section className="w-full bg-primary px-6 py-24 pt-36">
                <div className="flex flex-col gap-24 max-w-5xl mx-auto">

                    {/* OUR MISSION */}
                    <div className="flex flex-col gap-12">
                        <h2 className="text-3xl font-extralight tracking-tight text-background text-center">
                            Our Mission
                        </h2>
                        <div className="grid gap-6 place-items-center">
                            <p className="text-background/80 leading-relaxed text-lg max-w-3xl">
                                At Green Sight, our mission is to curate living pieces that elevate spaces with
                                a sense of calm, refined beauty. We believe true luxury is quiet: natural textures,
                                thoughtful design, and the presence of something alive. Each plant is hand-selected for its form, longevity,
                                and the effortless elegance it brings into a room — transforming interiors into serene, timeless environments.
                            </p>
                            <p className="text-background/80 leading-relaxed text-lg max-w-3xl">
                                Our philosophy is rooted in a family tradition of tending a single, enduring plant —
                                a small inheritance that became a symbol of patience, care, and understated luxury.
                                Green Sight carries forward this legacy, offering a curated collection that blends
                                natural sophistication with modern craftsmanship, made to enrich your home with effortless grace.
                            </p>
                        </div>
                    </div>

                    {/* MEET OUR TEAM */}
                    <div className="w-full flex flex-col gap-12 ">
                        <div className="w-full grid gap-12 place-items-center">
                            <h2 className="text-3xl font-semibold tracking-tight text-background ">
                                Meet Our Team
                            </h2>

                            <p className="text-background/80 leading-relaxed max-w-3xl text-lg text-center">
                                We are a small team of plant lovers, designers, and growers committed
                                to excellence and modern craftsmanship.
                            </p>
                        </div>

                        <div className="grid grid-cols-1  md:grid-cols-3 gap-12">
                            {members.map((member) =>
                                <div className="flex flex-col items-center text-center gap-4">
                                    <div className="w-40 h-40 rounded-full overflow-hidden bg-neutral-100">
                                        <img
                                            src={member.img}
                                            alt="Team member"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-background">
                                            {member.name}
                                        </h3>
                                        <p className="text-background/80 text-sm">
                                            {member.role}
                                        </p>
                                    </div>
                                </div>
                            )
                            }
                        </div>
                    </div>

                </div>
            </section>
            <Footer />
        </>
    );
}


// improvements

// make the ui more consistent with the main page
// maybe make two seperate sections for mission and team
// add hover effects to team members
// add team member links to linkedin or email
