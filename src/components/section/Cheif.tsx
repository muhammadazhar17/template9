import React from 'react';
import Image from 'next/image';

const imagesData = [
  { src: '/Chef1.png', alt: 'Delicious Pasta' }, 
  { src: '/Chef2.png', alt: 'Tasty Coffee' },
  { src: '/Chef3.png', alt: 'Fresh Salad' },
  { src: '/Chef4.png', alt: 'Desserts' },
];

const ImageSection = () => {
  return (
    <section className="container mx-auto py-16 ">
        <p className='font-serif text-orange-500 flex justify-center'> Chefs</p>
      <h2 className="text-3xl font-bold text-center mb-10 text-white" > <span className='text-orange-600' >Me</span>et Our Chefs</h2>
      <div className="grid grid-cols-1 sm:h-4/5 sm:grid-cols-2 lg:grid-cols-4  gap-6">
        {imagesData.map((image, index) => (
          <div
            key={index}
            className=" w-full h-80 rounded-lg  shadow-lg hover:scale-105 transform transition-all duration-300"
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageSection;

