"use client"
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

const ThemeChangerBtn = () => {
    const {theme , setTheme} = useTheme()
    const handeltheme = ()=>{
        if(theme==="light"){
            setTheme("dark")
        } else{
            setTheme("light")
        }
    }
    return (
        <>
            <Button onClick={handeltheme} variant={"ghost"} className="hover:cursor-pointer">
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            </Button>
        </>
    );
}

export default ThemeChangerBtn;