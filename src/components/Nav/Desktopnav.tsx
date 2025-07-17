import Link from "next/link";

const Desktopnav = () => {
    return (
      <section className="space-x-4">
       <Link
        href={"/"}
        className="hover:text-purple-800 dark:hover:text-blue-300">
        Home
      </Link>

      <Link
        href={"/"}
        className="hover:text-purple-800 dark:hover:text-blue-300">
        Courses
      </Link>
           
      <Link
        href={"/"}
        className="hover:text-purple-800 dark:hover:text-blue-300">
        Mentor
      </Link>

      <Link
        href={"/"}
        className="hover:text-purple-800 dark:hover:text-blue-300">
        Contact Us
      </Link> 
      </section>
    );
}

export default Desktopnav;