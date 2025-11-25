import { Button } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Menu } from "lucide-react"
import { User, ShoppingBasket } from "lucide-react"
import clsx from "clsx"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "@/context/CartContext"


const links = [
    { to: '#', lable: 'Products', items: ['Plants', 'Flowers', 'Planters', 'Gifts', 'Care'] },
    { to: '#', lable: 'About', items: ['Our Mission', 'Meet Our Team'] },
    { to: '#', lable: 'Contact' }
]

export default function Header() {

    const { totalQuantity } = useContext(CartContext)!;

    return (
        <header className="fixed top-0 right-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md">
            <nav className="max-w-[1600px] mx-auto flex items-center justify-between lg:px-8 md:px-5 px-3 py-2.5 shadow-sm">

                {/* Left: Logo */}
                <div className="flex items-center">
                    <img src="" alt="" />
                    <Link to="/" className="text-primary font-bold text-xl">Green Sight</Link>
                </div>

                {/* navigation menu */}

                <NavigationMenu className="hidden md:block">
                    <NavigationMenuList className="gap-7">
                        {links.map(link =>
                            link.items
                                ? <NavigationMenuItem>
                                    <NavigationMenuTrigger className="focus:shadow-none">
                                        {link.lable}
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent className="shadow-sm">
                                        <ul className={clsx('flex gap-3 md:w-[400px] lg:w-[500px] py-2')}>
                                            {link.lable === 'Products' &&
                                                <li className="flex-3">
                                                    <NavigationMenuLink asChild className="border-r border-zinc-400 h-full">
                                                        <Link to="/products" className="hover:bg-transparent focus:bg-transparent">
                                                            <span className="text-lg font-medium text-zinc-800 text-left hover:text-black">
                                                                All items
                                                            </span>
                                                            <p className="text-muted-foreground text-sm leading-tight text-left">
                                                                Handcrafted carpets and decors made from timeless weaves.
                                                            </p>
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </li>}
                                            <ul className="flex-4 flex flex-col justify-end ">
                                                {link.items.map(item =>
                                                    <li className="text-left font-medium">
                                                        <NavigationMenuLink asChild className="rounded-sm">
                                                            <Link to={`/${link.lable}`} >
                                                                <span>{item}</span>
                                                            </Link>
                                                        </NavigationMenuLink>
                                                    </li>
                                                )}
                                            </ul>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                : <NavigationMenuItem>
                                    <NavigationMenuLink asChild className='p-0 text-[16px] font-medium text-zinc-800 cursor-pointer focus:text-black hover:text-black hover:bg-transparent transition focus:bg-transparent '>
                                        <Link to={`/${link.lable}`}>{link.lable}</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                        )}
                    </NavigationMenuList>
                    <NavigationMenuViewport className="w-screen left-0" />
                </NavigationMenu>

                {/* right : avatar, shopping basket, hamburger menu */}

                <div className="flex justify-center items-center gap-3">

                    {/* user */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild className="cursor-pointer">
                            <button>
                                <User />
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="p-2 bg-background/90 shadow-sm text-black" align="end">
                            <span className="text-sm ">my account</span>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>sign in/Register</DropdownMenuItem>
                            <DropdownMenuItem>orders</DropdownMenuItem>
                            <DropdownMenuItem>wishlist</DropdownMenuItem>
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-muted-foreground">
                                Log out
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* shopping basket */}
                    <div className="relative flex justify-center items-center">
                        <Link to='/cart'>
                            <ShoppingBasket />
                        </Link>
                        <span className="absolute text-xs font-bold right-[-12px] bottom-3.5">
                            {totalQuantity}
                        </span>
                    </div>

                    {/* Mobile: Hamburger + Search?? */}
                    <div className="flex items-center gap-2 md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="p-2">

                                {/* Mobile accordion nav */}
                                <Accordion type="single" collapsible className="pr-2 mt-8 border-t">
                                    {links.map(link =>
                                        link.items && link.items.length > 0 &&
                                        <AccordionItem value={link.lable} key={link.lable} className="border-0">
                                            <AccordionTrigger>{link.lable}</AccordionTrigger>
                                            <AccordionContent className="flex flex-col gap-3">
                                                {link.lable === 'Products' &&
                                                    <Link to="">all products</Link>
                                                }
                                                {link.items.map(item =>
                                                    <Link to="/">{item}</Link>
                                                )}
                                            </AccordionContent>
                                        </AccordionItem>
                                    )}
                                </Accordion>
                                {
                                    links.map(link =>
                                        !link.items &&
                                        <Link to="/" key={link.lable} className="font-medium text-sm">{link.lable}</Link>
                                    )
                                }

                            </SheetContent>
                        </Sheet>
                    </div>

                </div>

            </nav>
        </header >
    )
}



// improvements

// fix layout shift caused by dropdown menu
// add scrollintoview behavior to navigation menu links
// fix the click problem of navigation menu 
// considering search option

