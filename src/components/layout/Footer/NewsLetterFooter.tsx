


export default function NewsLetterSection() {
  return (
    <div className="w-full max-w-6xl mx-auto text-center  px-4 sm:px-6 lg:px-8 mb-12">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-12">
        {/* Text Content */}
        <div className="flex flex-col items-center sm:items-start">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            <span className="text-[#FF9F0D]">Sti</span>ll You Need Our Support?
          </h2>
          <p className="mb-6 text-base sm:text-lg">
            Donot wait make a smart & logical choice here. It is pretty easy.
          </p>
        </div>

        {/* Newsletter Form */}
        <form className="w-full max-w-[459px] flex sm:flex-nowrap flex-col sm:flex-row items-center justify-center">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="flex-grow bg-[#FF9F0D] text-white placeholder-white placeholder-opacity-60 px-4 py-2 rounded-l-md focus:outline-none mb-2 sm:mb-0 sm:w-auto"
          />
          <button
            type="submit"
            className="bg-white text-[#FF9F0D] px-6 py-2 rounded-r-md font-semibold hover:bg-[#FF9F0D] hover:text-white transition duration-300 sm:ml-0 sm:w-auto"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </div>
  );
}

