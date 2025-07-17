import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";

const Mobilenav = () => {
    return (
        <>
         
       
           
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
                <Image src={"/logo-img.png"} alt="logo" height={400} width={400} className="h-[65px] w-[200px]"/>
                          
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
            
           
        </>
    );
}

export default Mobilenav;