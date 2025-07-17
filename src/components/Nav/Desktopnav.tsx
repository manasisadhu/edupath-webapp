import Link from "next/link";

const Desktopnav = () => {
    return (
      <section className="space-x-4">
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
      </section>
    );
}

export default Desktopnav;