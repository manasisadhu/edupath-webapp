import { BadgeCheck,  SquareCheckBig } from "lucide-react";
import Image from "next/image";

const Hero = () => {
    return (
        <>
        <div className="lg:flex justify-between items-center px-20">
        {/* tick */}
        <div className="">
         <div className="flex items-center justify-center p-4 ">
            <div className=""> <BadgeCheck className="text-green-800" size={34}/> </div>
            <div className="font-bold text-green-800">Get 30% of on first enroll</div>
            </div>  
        {/* tick */}
        {/* head  */}
        <div className="text-5xl font-bold text-black text-center lg:text-left">Learn engineering <br /> from top exprets</div>
        {/* head  */}
        {/* quote  */}
        <div className="text-[18px] text-center font-medium mt-6">Build skills with our courses and mentor from world class companies</div>
        {/* quote  */}
        
        {/* tick card*/}
<div className="flex justify-center items-center gap-7 mt-4">
    <div className="flex justify-center items-center gap-3">
        <div className=""><SquareCheckBig className="text-blue-600" size={24}/></div>
        <div className="text-[18px]">Flexible Schedule</div>
    </div>

    <div className="flex justify-center items-center gap-3">
        <div className=""><SquareCheckBig className="text-blue-600" size={24}/></div>
        <div className="text-[18px]">Guided Learning paths</div>
    </div>
    
</div>
        {/* tick card*/}
        </div>
        {/* img  */}
        <Image src={"/mahila.webp"} alt="" height={1200} width={1200} className="mt-6 lg:h-[600] w-[600]"/>
        {/* img  */}
        </div>

        </>
    );
}

export default Hero;