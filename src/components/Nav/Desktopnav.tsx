import Image from "next/image";
import Link from "next/link";
import ThemeChangerBtn from "../Theme/ThemeChangerBtn";

const Desktopnav = () => {
    return (
        <>
         <header className="container  flex justify-between items-center shadow-2xl">
           {/* logo   */}
           <Link href={"/"}>
            <Image src={"/logo.png"} alt="logo" height={200} width={200}>
            </Image>
            </Link>
           {/* logo   */}
           {/* opt  */}
           <div className="flex gap-5">
           <Link
        href={"/"}
        className="hover:text-purple-800 text-black dark:text-white">
        Home
      </Link>
           <Link
        href={"/"}
        className="hover:text-purple-800 text-black dark:text-white">
        Courses
      </Link>
           <Link
        href={"/"}
        className="hover:text-purple-800 text-black dark:text-white">
        Mentor
      </Link>
           <Link
        href={"/"}
        className="hover:text-purple-800 text-black dark:text-white">
        Contact Us
      </Link>
      </div>
           {/* opt  */}
           {/* btn  */}
           <ThemeChangerBtn/>
           {/* btn  */}
            </header>   
        </>
    );
}

export default Desktopnav;