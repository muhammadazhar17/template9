

import Image from 'next/image';
import React from 'react';



const ReviewsSection: React.FC = () => {


  return (

    
    <div>
  <p className='flex font-serif text-orange-400 text-lg ml-10' >Testimonials</p>
  <h2 className="text-3xl font-bold text-left ml-10 text-white mb-10">What Our Clients Are Saying</h2>

  <div className="flex justify-center "> 
    <Image src="/Text.png" alt="aa" width={500} height={300} className='bg-white' />
  </div>

</div>
   
  );
};

export default ReviewsSection;