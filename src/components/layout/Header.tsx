
import Image from "next/image";
import Link from "next/link";
import Wrapper from "../gadgets/Wrapper";

export default function Header() {
  return (
    <Wrapper>

      <header className="flex flex-col items-center p-5 text-white bg-black">
        {/* Logo Section */}
        <div className="flex justify-center mb-4">
          <Image
            className="w-40 h-auto"
            src="/logo.png"
            alt="logo"
            width={180}
            height={250}
            />
        </div>

        {/* Navigation and Search Section */}
        <section className="flex flex-col lg:flex-row w-full justify-between items-center space-y-4 lg:space-y-0">
          {/* Navigation Section */}
          <nav>
            <ul className="flex flex-wrap justify-center space-x-5 text-sm lg:text-base">
              <li>
                <Link href="/" className="cursor-pointer hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="../Menu" className="cursor-pointer hover:underline">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="../Blogs" className="cursor-pointer hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/" className="cursor-pointer hover:underline">
                  Pages
                </Link>
              </li>
              <li>
                <Link href="/" className="cursor-pointer hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/" className="cursor-pointer hover:underline">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/" className="cursor-pointer hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Search Section */}
          <div className="flex items-center justify-center w-full lg:w-auto space-x-3">
            <div className="relative flex-1 lg:flex-none w-full max-w-sm">
              <input
                type="text"
                placeholder="Search..."
                className="p-2 w-full border bg-black border-orange-500 text-white rounded-full pl-10 focus:outline-none focus:ring focus:ring-orange-300"
                />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="absolute w-6 h-6 top-1/2 left-3 transform -translate-y-1/2 text-orange-500"
                >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
              </svg>
            </div>
           
          </div>
        </section>
      </header>
      </Wrapper>
    
  );
}
