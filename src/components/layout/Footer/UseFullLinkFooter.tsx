import Link from "next/link";

export default function UsefulLinksSection() {
  const links = ['About', 'News', 'Partners', 'Team', 'Menu', 'Contact'];

  return (
    <div className="w-full max-w-xs px-4 md:px-6 lg:px-8 mb-12">
      <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-6">
        Useful Links
      </h3>
      <ul className="text-sm md:text-base lg:text-lg leading-5 md:leading-6 flex flex-col gap-3 md:gap-4">
        {links.map((link) => (
          <li key={link}>
            <Link
              href="/"
              className="hover:text-[#FF9F0D] transition duration-300"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
