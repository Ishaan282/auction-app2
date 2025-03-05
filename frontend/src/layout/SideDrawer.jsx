import React, {useState} from "react";
import { Link } from "react-router-dom";


const SideDrawer = () => {
    const [show, setShow] = useState(false);
    
    <>
        <div
        className={`w-[100%] sm:w-[300px] bg-[#f6f4f0] h-full fixed top-0 ${
          show ? "left-0" : "left-[-100%]"
        } transition-all duration-100 p-4 flex flex-col justify-between lg:left-0 border-r-[1px] border-r-stone-500`}
      >
        <div className="relative">
          <Link to = {"/"}>
          <h4 className="text-2xl font-semibold mb-4">LOGO</h4>
          </Link>
        </div>
      </div>
    </>
};

export default SideDrawer;