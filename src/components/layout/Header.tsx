import Image from "next/image"
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button"


export default function Header() {
    return (
     <>
     <header className="flex items-center justify-between ">
        <div>
            <Image className="mt-5 ml-5" src="/Foodtuck.png" alt="logo" width="180" height="250"/>
        </div>
        <nav className="flex mt-6 ">
            <ul className="flex  space-x-5">
                <Link href="/"> <li>Home</li>
                </Link>

                <Link href="/"><li>Menu</li>
                </Link>

                <Link href="/"><li>Blog</li>
                 </Link>

                <Link href="/"> <li>Pages</li>
                 </Link>

                <Link href="/"><li>About</li>
                 </Link>

                <Link href="/"><li>Shop</li>
                </Link>

                <Link href="/"><li>Contact</li>
                 </Link>

                
            </ul>
        </nav>

        <div className="flex mt-4 mr-8 bg-slate-500">
        <Button variant="outline">Button</Button>

        </div>
     </header>
     </>
    );
  }

