import Desktopnav from "./Desktopnav";
import Mobilenav from "./Mobilenav";

const Switchnav = () => {
    return (
        <>
          <header>
            {/* desktop  */}
            <div className="text-md hidden items-center  font-semibold lg:flex">
                <Desktopnav/>
            </div>
            {/* desktop  */}
            {/* mobile  */}
            <div className="block lg:hidden">
                <Mobilenav/>
            </div>
            {/* mobile  */}
            </header> 
        </>
    );
}

export default Switchnav;