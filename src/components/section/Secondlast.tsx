import React from 'react';
import Image from "next/image"

const NewsAndBlogSection = () => {
  return (
    <section className="container mx-auto py-16 bg-black max-w-full">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">Latest News & Blog</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">


        <div className="bg-black p-6 rounded-lg shadow-md">

          <Image src="/Blogcard1.png" alt="Blog Post 1" width={500} height={500} className=" mb-4 rounded-lg" ></Image >
          <p className="text-gray-700">Pellentesque non efficitur mi. Morbi sodales tellus elit, in aliquam convallis mi quis</p>
        </div>


        <div className="bg-black p-6 rounded-lg shadow-md">
          <Image src="/Blogcard2.png" alt="Blog Post 2" width={500} height={500} className=" mb-4 rounded-lg" />
          <p className="text-gray-700">Morbi sodales tellus elit, in blandit risus suscipit a</p>
        </div>


        <div className="bg-black p-6 rounded-lg shadow-md">
          <Image src="/Blogcard3.png" alt="Blog Post 3" width={500} height={500} className=" mb-4 rounded-lg" />
          <p className="text-gray-700">Curabitur rutrum velit vel congue malesuada</p>
        </div>


      </div>
    </section>
  );
};

export default NewsAndBlogSection;