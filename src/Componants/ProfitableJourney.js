import React from "react";
import shipImg from "./Assets/image/home_last_img.png";
import { useNavigate } from "react-router-dom";

const ProfitableJourney = () => {
  const navigate  = useNavigate()
  return (
    <>
      <div className="mx-[3rem] max-sm:mx-[1rem] mt-[2rem]">
        <div className="flex max-sm:flex-col max-sm:mx-[0rem] mt-3">
          <img src={shipImg} alt="oceanuimg2" className="rounded-lg max-sm:w-full " />
          <div className="flex max-sm:mx-[0rem] ml-[3rem] flex-col max-sm:items-center items-start">
            <h1 className="font-semibold text-[2rem] max-sm:w-full max-sm:my-[1rem] max-sm:text-center text-[#003E78] max-md:text-[1.5rem] mb-5">
              Profitable Journey,
              Sustainable Future
            </h1>
            <p className="text-black max-md:text-[.8rem] max-sm:text-[.8rem] max-sm:text-center">
              Explore the transformative power of advanced technology in
              maritime operations. Immerse yourself in data-driven insights to
              enhance voyages, harmonizing sustainability and profitability.
            </p>
            <button onClick={() => navigate("/demo")} className="max-sm:p-2 max-sm:mt-3 mt-4 px-6 py-2 rounded-lg text-xs sm:text-sm md:text-md text-white bg-yellow-500">
              BOOK DEMO
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfitableJourney;
