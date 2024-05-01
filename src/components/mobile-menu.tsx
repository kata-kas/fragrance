'use client';

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {FlowerIcon} from "@/components/icons/flower-icon";
import {ShoppingCartIcon} from "@/components/icons/shopping-cart-icon";
import {TreesIcon} from "@/components/icons/trees-icon";
import {HamburgerMenuIcon} from "@radix-ui/react-icons";

export const MobileMenu = (props:any) => {
    return (
        <div {...props}>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost">
                        <HamburgerMenuIcon />
                    </Button>
                </SheetTrigger>
                <SheetContent className="p-0">
                        <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
                            <div className="border-r bg-gray-100/40 dark:bg-gray-800/40">
                                <div className="flex h-full max-h-screen flex-col gap-2">
                                    <div className="flex h-[60px] items-center border-b px-6">
                                        <Link className="flex items-center gap-2 font-semibold" href="#">
                                            <FlowerIcon className="h-6 w-6"/>
                                            <span className="">Fragrance Atelier</span>
                                        </Link>
                                    </div>
                                    <div className="flex-1 overflow-auto py-2">
                                        <nav className="grid items-start px-4 text-sm font-medium">
                                            <Link
                                                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                                                href="#"
                                            >
                                                <ShoppingCartIcon className="h-4 w-4"/>
                                                Shop
                                            </Link>
                                            <Link
                                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                                href="#"
                                            >
                                                <FlowerIcon className="h-4 w-4"/>
                                                Floral
                                            </Link>
                                            <Link
                                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                                href="#"
                                            >
                                                <TreesIcon className="h-4 w-4"/>
                                                Woody
                                            </Link>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}
