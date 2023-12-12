import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
export const OceannVmSection = ({ route, title, heading, 
  content, image }) => {
    const navigator = useNavigate()
  return (
    <div className="flex flex-wrap max-sm:flex-col justify-between mt-[5.3rem] max-sm:items-start max-md:mt-10">
      <img src={image} alt=""  className="rounded-md w-[40%] max-sm:w-full"/>
      <div className="w-[50%] max-sm:w-full max-sm:ml-0  ml-4">
        <h3 className="text-md max-sm:text-center max-sm:mt-2 text-left sm:text-lg md:text-lg font-semibold text-[#003E78]  mb-1  md:mb-5  ">
          {heading}
        </h3>
        <p className="mt-3 max-sm:text-center  text-black max-sm:text-sm">
          {content}
        </p>
        <div className="max-sm:flex max-sm:justify-center">
        <button className="flex items-center mb-5 justify-center px-2 py-1 mt-6 max-sm:px-2  max-sm:py-1  bg-[#183165] text-[white] rounded-r-[1rem]">
          <button onClick={() => navigator(route)} className="flex items-center gap-2">
          <FiArrowRight />
          <p>Learn More</p>
          </button>
          {/* <FiArrowRight />
          <p>Learn More</p> */}
        </button>
        </div>
      </div>
    </div>
  );
};
