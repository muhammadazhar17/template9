import Wrapper from "@/components/gadgets/Wrapper";
import Cheif from "@/components/section/Cheif";
import Hero from "@/components/section/Hero";
import Reviews from "@/components/section/reviews";
import Secondlast from "@/components/section/Secondlast";
import Thirdlast from "@/components/section/Thirdlast";
import Aboutushero from "@/components/section/Aboutushero";
import FoodCategory from "@/components/section/FoodCategory";
import Homemenu from "@/components/section/Homemenu";

export default function Home() {
  return (
    <Wrapper>
      <Hero />
      <Aboutushero />
      <FoodCategory />
      <Cheif />
      <Homemenu />
      <Reviews />
      <Thirdlast />
      <Secondlast />
    </Wrapper>
  );
}
