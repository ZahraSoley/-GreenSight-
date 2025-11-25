import Header from "../Main Page/components/Header"
import Footer from "../Main Page/components/Footer"
import pic1 from './productsHero1.png'
import { useState } from "react"
import clsx from "clsx"
import { products } from "@/assets/Products"
import { Accordion, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AccordionContent } from "@radix-ui/react-accordion"
import { ChevronsDownUp, Grid, Grid2X2, ListFilter } from "lucide-react"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom"


const Products = () => {
    const [selected, setSelected] = useState<'plant' | 'flower' | 'planter' | 'gift'>('plant')
    const [minprice, setMinprice] = useState<number>(0)
    const [maxprice, setMaxprice] = useState(1000)
    const [plntSize, setplntSize] = useState(['Small', 'Medium', 'Large'])
    const [difficulty, setDifficulty] = useState(['Very easy', 'Easy', 'Moderate'])
    const [sort, setSort] = useState('Featured')
    const [col, setCol] = useState('three')

    const filtered = products
        .filter(p => p.type === selected)
        .filter(p => p.price >= minprice && p.price <= maxprice)
        .filter(p => p.type === 'gift' ? true : p.size && plntSize.includes(p.size))
        .filter(p => p.type === 'planter' || p.type === 'gift' ? true : p.care && difficulty.includes(p.care.difficulty))

    let sorted;
    if (sort === 'Price ascending') { sorted = filtered.sort((a, b) => a.price - b.price) }
    else if (sort === 'Peice descending') { sorted = filtered.sort((a, b) => b.price - a.price) }
    else if (sort === 'Alphabetically A-Z') { sorted = filtered.sort((a, b) => a.name.localeCompare(b.name)) }
    else { sorted = filtered }

    const resetStates = () => {
        setMinprice(0),
            setMaxprice(1000),
            setplntSize(['Small', 'Medium', 'Large']),
            setDifficulty(['Very easy', 'Easy', 'Moderate'])
    }

    return (
        <main className="min-h-screen bg-neutral-50">
            <Header />

            {/* Hero */}
            <section className="mt-14 md:mt-12 mb-16">
                <div className="bg-secondary/50 flex lg:px-8 md:px-5 px-3 py-8">
                    <div className="relative w-1/3">
                        <img src={pic1} alt="" className="w-full" />
                        <div className="absolute" />
                    </div>
                    <div className="w-2/3 flex justify-center items-center">
                        <div className="md:mr-20">
                            <h2 className="font-semibold md:text-3xl mb-3 md:mb-5">Explore Our Products</h2>
                            <h2 className="md:font-medium text-xs md:text-[16px]">
                                nurish your home and soul with our beautifull flowers and plants
                            </h2>
                        </div>
                    </div>
                </div>
            </section>

            {/*products section*/}
            <section className="mb-20 flex flex-col justify-center items-center gap-20">
                {/* main filter section */}
                <div className="w-full bg-primary text-white lg:px-8 md:px-5 px-3 py-2.5">
                    <div className="max-w-4xl mx-auto flex justify-between md:justify-around items-center">
                        {(['plant', 'flower', 'planter', 'gift'] as const).map(category => (
                            <div key={category}>
                                <button
                                    className="text-xs md:text-[16px] font-medium md:font-semibold uppercase cursor-pointer"
                                    onClick={() => (
                                        setSelected(category),
                                        resetStates()
                                    )
                                    }
                                >
                                    {category}s
                                    <div
                                        className={clsx(
                                            'bg-white h-[1.5px] transition-all duration-300',
                                            category === selected ? 'w-full' : 'w-0'
                                        )}
                                    />
                                </button>

                            </div>
                        ))}
                    </div>
                </div>
                <div className="font-extralight text-4xl tracking-tighter">
                    {selected}s
                </div>

                {/* products grid and left side filter */}
                <div className="w-full flex justify-center">

                    {/* top filter and products grid  */}
                    <div className="w-full">
                        {/* top filter bar*/}
                        <div className="lg:px-8 md:px-5 px-3 py-2.5 border bg-secondary text-zinc-900 flex justify-between">
                            <div className="flex justify-center items-center gap-8">
                                {/* filter */}
                                <Sheet>
                                    <SheetTrigger asChild>
                                        <button className="flex justify-center items-center gap-1 font-medium cursor-pointer hover:scale-105">
                                            filter <ListFilter className="w-3 h-3 mt-1" />
                                        </button>
                                    </SheetTrigger>
                                    <SheetContent side="left" className="">
                                        <h2 className="tracking-tighter text-center pt-2 font-light text-muted-foreground">green sight</h2>
                                        <Accordion type="multiple" className="p-4">
                                            <AccordionItem value="price" className="pb-5">
                                                <AccordionTrigger className="font-semibold text-primary ml-2.5 cursor-pointer">
                                                    Price
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="w-full mt-3 flex gap-5">
                                                        <input type="number"
                                                            placeholder="min"
                                                            onChange={e => setMinprice(Number(e.target.value))}
                                                            className="w-24 rounded-md border border-muted bg-secondary/30 px-2 py-1 text-sm text-primary" />
                                                        <input type="number"
                                                            placeholder="max"
                                                            onChange={e => Number(e.target.value) <= minprice ? setMaxprice(100) : setMaxprice(Number(e.target.value))}
                                                            className="w-24 rounded-md border border-muted bg-secondary/30 px-2 py-1 text-sm text-primary" />
                                                    </div>
                                                </AccordionContent>
                                            </AccordionItem >
                                            {selected != 'gift' &&
                                                <AccordionItem value="size" className="pb-5">
                                                    <AccordionTrigger className="font-semibold text-primary ml-2.5 cursor-pointer">
                                                        Size
                                                    </AccordionTrigger>
                                                    <AccordionContent>
                                                        <div className="mt-3 flex flex-col gap-4">
                                                            {['Small', 'Medium', 'Large'].map(size =>
                                                                <label className="flex gap-2 text-sm">
                                                                    <input
                                                                        className="accent-secondary text-primary"
                                                                        type="checkbox"
                                                                        value={size}
                                                                        checked={plntSize.includes(size)}
                                                                        onChange={e =>
                                                                            plntSize.includes(e.target.value)
                                                                                ? setplntSize(prev => prev.filter(s => s != size))
                                                                                : setplntSize(prev => [...prev, e.target.value])}
                                                                    />
                                                                    {size}
                                                                </label>
                                                            )}
                                                        </div>
                                                    </AccordionContent>
                                                </AccordionItem>}
                                            {selected === 'plant' || selected === 'flower'
                                                ? <AccordionItem value="care" className="pb-5">
                                                    <AccordionTrigger className="font-semibold text-primary ml-2.5 cursor-pointer">
                                                        Care
                                                    </AccordionTrigger>
                                                    <AccordionContent>
                                                        <div className="flex flex-col gap-2.5 mt-3">
                                                            {['Easy', 'Very easy', 'Moderate'].map(dif =>
                                                                <label className="text-sm flex gap-2">
                                                                    <input
                                                                        className="accent-secondary text-primary"
                                                                        type="checkbox"
                                                                        value={dif}
                                                                        checked={difficulty.includes(dif)}
                                                                        onChange={e => difficulty.includes(e.target.value)
                                                                            ? setDifficulty(prev => prev.filter(d => d != e.target.value))
                                                                            : setDifficulty(prev => [...prev, e.target.value])
                                                                        }
                                                                    />
                                                                    {dif}
                                                                </label>
                                                            )}
                                                        </div>
                                                    </AccordionContent>
                                                </AccordionItem>
                                                : null}
                                        </Accordion>
                                    </SheetContent>
                                </Sheet>
                                {/* sort */}
                                <div>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <button className="flex justify-center items-center gap-1 font-medium cursor-pointer hover:text-black">
                                                sort <ChevronsDownUp className="w-3.5 h-3.5 mt-1" />
                                            </button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="w-56 bg-primary" align="start">
                                            {['Featured', 'Price ascending', 'Peice descending', 'Alphabetically A-Z'].map(sortOption =>
                                                <DropdownMenuItem>
                                                    <button
                                                        onClick={() => setSort(sortOption)}
                                                    >
                                                        {sortOption}
                                                    </button>
                                                </DropdownMenuItem>
                                            )}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <button className="cursor-
                                pointer text-zinc-800 hover:text-black" onClick={() => setCol('two')}><Grid2X2 className="w-5" /></button>
                                <button className="cursor-
                                pointer text-zinc-800 hover:text-black" onClick={() => setCol('three')}><Grid className="w-5" /></button>
                            </div>
                        </div>
                        {/* products number */}
                        <div className="mb-14 mt-3 lg:px-8 md:px-5 px-3 text-muted-foreground text-xs">
                            {filtered.length} products
                        </div>
                        {/* products grid */}
                        {filtered.length === 0 ? (
                            <div className="flex items-center justify-center rounded-2xl border border-dashed p-16 text-center">
                                <div>
                                    <p className="text-xl font-medium">Coming soon</p>
                                    <p className="mt-2 text-sm text-neutral-500">
                                        We’re curating {selected}s. Check back later ✨
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className={clsx("grid place-items-baseline gap-2.5 px-2.5", col === 'three' ? 'grid-cols-3' : 'grid-cols-2')}>
                                {
                                    sorted.map(p =>
                                        <Link
                                            to={`/products/${p.name}`}
                                            className=" group overflow-hidden flex flex-col justify-center gap-3 cursor-pointer"
                                            key={p.id + p.name}>
                                            <div className="relative">
                                                <img
                                                    src={p.image}
                                                    alt={p.name}
                                                    className="aspect-[4/5] w-full rounded-sm bg-[#ececec] object-cover"
                                                />
                                                <div className="absolute text-center bottom-0 w-full p-2 opacity-0 rounded-b-sm text-sm group-hover:opacity-100 transition-transform duration-500 cursor-pointer bg-primary text-white">
                                                    view
                                                </div>
                                            </div>
                                            <div className="flex justify-between md:px-2 mb-5 flex-col gap-1.5 md:flex-row md:gap-0">
                                                <span className=" text-xs md:text-[16px] text-secondary-foreground group-hover:font-semibold font-medium tracking-wide transition ease-in-out duration-500">{p.name}</span>
                                                <span className=" text-xs md:text-[16px] text-secondary-foreground group-hover:font-medium tracking-wide transition ease-in-out duration-500 ">{p.price}$</span>
                                            </div>
                                        </Link>
                                    )
                                }
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}

export default Products



// improvements :
// show all / sticky filter bar
// maybe left side filter bar
// ading load more
// fix layout shift in the last grid item
// improve hero section on smaller screens
// fix sort ui
//  add currency selector
