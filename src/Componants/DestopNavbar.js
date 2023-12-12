import React from "react";
import { AiOutlineUser} from "react-icons/ai";
import { Link } from "react-router-dom";
export const DestopNavbar = () => {
  return (
    <div
      className={`gap-3 flex justify-between relative  justify-items-center place-items-center   max-lg:text-[1rem] max-lx:text-[1.2rem] font-[Roboto]  text-[1.3rem]  mx-xl:mr-[3rem] mr-[4rem]`}
    >
      <Link to="/product"  className="hover:text-blue-400">Product</Link>
      <Link  to="/solution" className="hover:text-blue-400">Solution</Link>
      <Link to="/platform" className="hover:text-blue-400">Platform</Link>
      <Link  to="#"  className="hover:text-blue-400">Knowledge Hub</Link>
      <Link  to="/about-us" className="hover:text-blue-400">About Us</Link>
      <Link  to="/contact"  className="hover:text-blue-400">Contact Us</Link>
      <Link  to='/demo'>
      <button className="bg-[#F39C12] text-[1rem] text-white font-semibold py-1 px-2 rounded-md shadow-md focus:outline-none ">
        BOOK DEMO
      </button>
      </Link>
      
      <p className="flex justify-center">
        <AiOutlineUser className="text-[2rem] max-xl:text-[1rem]" />
      </p>
    </div>
  );
};
