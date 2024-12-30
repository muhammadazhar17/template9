
import React from 'react';

const MiddleSection = () => {
  return (
    <section className="relative h-80  bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/bannerthirdlast.png)' }}>
      <div className=" inset-0 "></div> 

      <div className=" flex flex-col items-end  mr-7 mb-44  mt-10   justify-end text-md">



        <h1 className="text-2xl font-bold text-white mb-4 mt-8"><span className='text-orange-700'>We</span> Document Every Food <br /> Bean Process until it is saved</h1>
      <p className=' text-sm text-white mb-8'>

        Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Voluptatibus, magnam? Accusa
      </p>


       
       
        <div className="flex space-x-8">
          <button className=" border-orange-700 hover:bg-yellow-700 text-white font-bold py-2 px-4  rounded-full">

            Read More
          </button>

          <button className="bg-yellow-500  hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">

            Play Video
          </button>

        </div>
      </div>
    </section>
  );
};

export default MiddleSection;