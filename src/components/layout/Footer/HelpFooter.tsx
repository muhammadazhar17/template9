

export default function HelpSection() {
  const links = ['FAQ', 'Term & Condition', 'Reporting', 'Documentation', 'Support Policy', 'Privacy'];

  return (
    <div className="w-full max-w-xs px-4 md:px-6 lg:px-8 mb-12">
      <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-6">
        Help?
      </h3>
      <ul className="text-sm md:text-base lg:text-lg leading-5 md:leading-6 flex flex-col gap-3 md:gap-4">
        {links.map((link) => (
          <li key={link}>
            <a
              href="../Faqs"
              className="hover:text-[#FF9F0D] transition duration-300"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
