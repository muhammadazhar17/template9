

import { Clock } from 'lucide-react';

export default function Aboutfooter() {
  return (
    <div className="w-full max-w-md px-4 md:px-6 lg:px-8 mb-12">
      <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-6 lg:mb-8">
        About Us.
      </h3>
      <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-6 lg:mb-8 leading-6 md:leading-7 lg:leading-8">
        Corporate clients and leisure travelers have been relying on Groundlink
        for dependable, safe, and professional chauffeured car service in major
        cities across the world.
      </p>
      <div className="flex flex-row  items-center">
        <div className="bg-[#FF9F0D] mr-2 p-2 md:p-3 lg:p-4 rounded w-16 h-16 md:w-20 md:h-20 lg:w-[77.23px] lg:h-[70.79px] flex justify-center items-center mb-4">
          <Clock className="text-white w-6 h-6 md:w-8 md:h-8 " />
        </div>
        <div className="text-center">
          <h4 className="font-semibold text-sm md:text-base lg:text-lg">
            Opening Hours
          </h4>
          <p className="text-xs md:text-sm lg:text-base">
            Mon - Sat (8.00 - 6.00)
          </p>
          <p className="text-xs md:text-sm lg:text-base">Sunday - Closed</p>
        </div>
      </div>
    </div>
  );
}
