
import Hero from "@/components/Hero/Hero";
import Bslide from "@/components/Slider/Bslide";







const page = () => {
  return (
    <>
 
 
  
    {/* hero   */}
     <Hero/>
  
  
    <section className="py-6 px-24">
        <Bslide/>
    </section>

    </>
  );
}

export default page;