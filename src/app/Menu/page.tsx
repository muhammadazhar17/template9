import Wrapper from "@/components/gadgets/Wrapper";
import MainCourseSection from "@/components/section/Menu/Maincourse";
import Dessert from "@/components/section/Menu/Sec1";
import Drink from "@/components/section/Menu/Sec2";
import StarterMenu from "@/components/section/Menu/startmenu";
import Image from "next/image"




export default function Menu() {
  return (
    <Wrapper>

<div className="bg-white mt-10 ">
    <StarterMenu />
    <MainCourseSection />
        <Image src="/menuclient.png" alt="banner" width="5000" height="2000"></Image>
  <Dessert/>
  <Drink/>	
  <Image  src="/menupartner.png" alt="banner" width="5000" height="2000"></Image>

</div>

    </Wrapper>

  );
}