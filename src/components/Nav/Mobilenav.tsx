import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";
import ThemeChangerBtn from "../Theme/ThemeChangerBtn";

const Mobilenav = () => {
    return (
        <>
          <header className=" container p-4 flex justify-between items-center">
            {/* logo */}
            <Link href={"/"}>
            <Image src={"/logo.png"} alt="logo" height={200} width={200}>
            </Image>
            </Link>
            {/* logo */}
            <div className=" flex gap-10">
            {/* sheet  */}
             <Sheet>
        <SheetTrigger className="bg-purple-400 p-2">
          {/* triger icon  */}
          <Menu
            className="text-white"
            size={24}
          />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="flex justify-center border-b-2 pb-4">
              <Link href={"/"}>
                <Image
                  src={"/temporary-logo.png"}
                  alt="Logo"
                  width={100}
                  height={100}
                  className="h-8 w-30"
                />
              </Link>
            </SheetTitle>
          </SheetHeader>
          <div className="grid place-items-center gap-4 font-semibold">
            <Link
              href={"/"}
              className="hover:text-red-400">
              Home
            </Link>
            <Link
              href={"/about"}
              className="hover:text-red-400">
              About
            </Link>
            <Link
              href={"/services"}
              className="hover:text-red-400">
              Services
            </Link>
            <Link
              href={"/projects"}
              className="hover:text-red-400">
              Projects
            </Link>
          </div>
        </SheetContent>
      </Sheet>
            {/* sheet  */}
            {/* btn  */}
            <ThemeChangerBtn/>
            {/* btn  */}
            </div>
            </header>  
        </>
    );
}

export default Mobilenav;