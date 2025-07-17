import Link from "next/link";
import Desktopnav from "./Desktopnav";
import Mobilenav from "./Mobilenav";
import Image from "next/image";
import ThemeChangerBtn from "../Theme/ThemeChangerBtn";

const Switchnav = () => {
    return (
        <>
          <header  className="flex justify-between items-center px-16 py-2 shadow-lg bg-white/40 backdrop-blur-md dark:bg-purple-800/20 sticky top-0">

            <Link href={"/"}>
            <Image src={"/logo-img.png"} alt="logo" height={400} width={400} className="h-[65px] w-[200px]"/>
            </Link>


            {/* desktop  */}
            <div className="text-md hidden items-center  font-semibold lg:flex">
                <Desktopnav/>
            </div>
            {/* desktop  */}

            <div className="flex items-center gap-4">
            {/* mobile  */}
            <div className="block lg:hidden">
                <Mobilenav/>
             </div>
            {/* mobile  */}

            {/* mode btn  */}
            <ThemeChangerBtn/>
            {/* mode btn  */}
            </div>
          
            </header> 
        </>
    );
}

export default Switchnav;