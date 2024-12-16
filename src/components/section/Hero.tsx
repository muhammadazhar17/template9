
import Image from "next/image"
import { Button } from "../ui/button";

export default function Hero() {
    return (

//  <div>

//     <Image className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 bg-white dark:bg-gray-900" src="/hero.png"  alt="vvvvvv" width="w-full "  / >
//  </div>
<div
    className="w-full h-screen bg-cover bg-center bg-no-repeat flex flex-1"
   style={{ backgroundImage: "url('/hero.png')" }}>
    <div className="w-full h-1/2 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16
       dark:bg-gray-900/30">
      {/* Add your content here */}
      <h1 className=" font-bold text-white mt-14 text-8xl">Foodtuck: Your <br /> Mobile <br /> Feast Awaits</h1>
      <p className="text-white text-4xl">Savor the flavors, wherever you go!</p>
  
                <div className="flex mt-4 mr-8 ">
                      <Button variant="outline">Button</Button>

                </div>
 
      </div>
      <div className="mt-20 mr-10">
         <Image src="/heroshortimg.png" alt="hero image" width={700} height={700} />
      </div>
</div>
  
 


  
   
    
    
    );
    };
   
