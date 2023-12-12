import React from "react";
import product_img_2 from "../Componants/Assets/product_page_images/product_img_2.png";
import { useNavigate } from "react-router";

export const Macbook = () => {
  const Navigate=useNavigate()
  const boxShodow = {
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  };
  return (
    <div className="flex items-center mt-[1.5rem] justify-center ">
      <div
        style={boxShodow}
        className="flex justify-center flex-wrap max-sm:flex-col-reverse max-sm:gap-4 text-[.9rem] items-center w-[90%]"
      >
        <div
          className="flex  flex-col w-[50%]
            max-sm:w-[80%] justify-center gap-3  items-center"
        >
          <div className="flex flex-col gap-2">
            <div className="flex gap-4 ml-[1rem] items-center text-[#848484] font-normal">
              <hr className="h-[3rem] w-[3px] bg-[#0061BA]" />
              <p className="w-[80%]">
                Navigating the Future of Communication: Our AI-Powered Email
                Solution for Shipping{" "}
              </p>
            </div>
            <div className="flex gap-4 ml-[1rem]  items-center text-[#848484] font-normal">
              <hr className="h-[3rem] w-[3px] bg-[#848484]" />
              <p className="w-[80%]">
                Enable Sustainable Shipping through the Power of OCEANZERO.
              </p>
            </div>
            <div className="flex gap-4 ml-[1rem]  items-center text-[#848484] font-normal">
              <hr className="h-[3rem] w-[3px] bg-[#848484]" />
              <p className="w-[80%]">
                Live tracking, bunker data, and real-time port information
                provide an integrated solution for the shipping industry.
              </p>
            </div>
            <div className="flex ml-[1rem] mt-6 justify-start max-sm:flex  w-full pb-[2rem]">
              <button
                type="button"
                class="focus:outline-none text-white w-[40%] bg-[#F39C12] font-medium rounded-lg text-sm px-[2rem] py-2 mr-2 mb-2 "
              onClick={(()=>Navigate("/demo"))}>
                Get Demo
              </button>
              <button
                type="button"
                class="focus:outline-none text-[#F39C12]  w-[40%] bg-[white] border-2 border-[#F39C12] focus:ring-4  font-medium rounded-lg text-sm px-[1rem]  mr-2 mb-2"
              >
                Download Brochure
              </button>
            </div>
          </div>
          {/* <div className="flex gap-4">
            <hr className="h-[3rem] w-[6px] bg-[#0061BA]" />
            <p>
            Live tracking, bunker data, and real-time port information provide an integrated solution for the shipping industry.
            </p>
          </div> */}
        </div>
        <div className="w-[50%] max-sm:w-[90%] h-[9]">
          <img src={product_img_2} alt="" />
        </div>
      </div>
    </div>
  );
};
