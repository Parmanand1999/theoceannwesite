import React from "react";
import mapimg from "./Assets/image/mapanimation.gif";

const MapSection = () => {
  return (
    <>
      <div className="mx-[3rem] my-[2rem] max-md:m-[2rem] max-lg:m-[3rem]">
        <div className="text-center">
          <h className="text-[#003E78] flex justify-center font-bold text-[2.93rem] max-xl:text-[2rem] max-md:text-[1.5rem] max-sm:text-[.9rem] mb-[2rem] max-md:mb-[1rem]">
            <span className="mr-1">
              {" "}
              Our streamlined
              <hr className="border-b-2 w-[100%] border-[#F39C12]" />
            </span>{" "}
            market insight solution
          </h>
          <p className="text-[1.25rem] max-lg:text-[1rem] max-md:text-[1rem] max-sm:text-[0.8rem]">
            Voyage planning is a critical aspect of maritime operations
            involving the careful and systematic preparation for a sea journey.
            It is a comprehensive process that mariners and shipping companies
            undertake to ensure the safety, efficiency, and legality of a voyage
            from one port to another.
          </p>
        </div>

        <div className="flex flex-col md:flex-row p-5 w-full">
          <div className="w-full md:w-[65%] md:order-2">
            <img src={mapimg} alt="image2" className="w-full h-[100%] " />
          </div>
          <div className="w-full md:w-[35%] md:order-1 p-5 justify-center justify-items-center flex flex-col mt-5 text-center">
            <div className="mb-7 max-sm:mb-3">
              <p className="text-[1.5rem]  max-md:text-[1rem] max-sm:text-[0.8rem] max-sm:mb-1 mb-2">
                Decarbonization
              </p>
              <hr className="border-b-2 mb-5 max-md:mb-3 max-sm:mb-1 border-[#F39C12]" />
            </div>
            <div className="mb-8 max-sm:mb-3">
              <p className="text-[1.5rem] max-md:text-[1rem] max-sm:text-[0.8rem] mb-2 max-sm:mb-1">
                AI Enabled Trade
              </p>
              <hr className="border-b-2 mb-5 max-md:mb-3 max-sm:mb-1 border-[#002A4A]" />
            </div>
            <div className="mb-8 max-sm:mb-3">
              <p className="text-[1.5rem] max-md:text-[1rem] max-sm:text-[0.8rem] mb-2 max-sm:mb-1">
                Report & Analysis
              </p>
              <hr className="border-b-2 mb-5 max-md:mb-3 max-sm:mb-1 border-[#F39C12]" />
            </div>
            <div className="mb-8 max-sm:mb-3">
              <p className="text-[1.5rem] max-md:text-[1rem] max-sm:text-[0.8rem] mb-2 max-sm:mb-1">
                AI Enabled Communication
              </p>
              <hr className="border-b-2 mb-5 max-md:mb-3 max-sm:mb-1 border-[#002A4A]" />
            </div>
            <div className="mb-8 max-sm:mb-3">
              <p className="text-[1.5rem] max-md:text-[1rem]  max-sm:text-[0.8rem] mb-2 max-sm:mb-1">
                Voyage Management
              </p>
              <hr className="border-b-2 mb-5 max-md:mb-3 max-sm:mb-1 border-[#F39C12]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapSection;
