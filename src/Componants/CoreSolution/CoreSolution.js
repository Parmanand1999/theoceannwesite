import React from "react";
import product_img_3 from "../Assets/product_page_images/product_img_3.png";
import "./CoreSolution.css";
export const CoreSolution = () => {
  const boxShodow = {
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  };

  return (
    <div className="flex  mt-[1.5rem] justify-center">
      <div
        style={boxShodow}
        className="flex justify-start flex-row-reverse flex-wrap max-sm:flex-col-reverse max-sm:gap-4 text-[.9rem] items w-[90%]"
      >
        <div
          className="flex justify-center  w-[50%]
          max-sm:w-[80%]  gap-3 "
        >
          <div>
            <div className="mb-[2rem]">
              <h3 className="text-center text-[1.4rem]">Core Solution's</h3>
              <hr className="bg-[#F39C12] w-[200px] h-[4px]" />
            </div>
            <ul className="flex flex-col pb-[2rem] mb-10 ">
              <li>
                <div className="flex items-center gap-8">
                  <hr className="w-[15px] h-[15px] rounded-full bg-[#2A6C9E]" />
                  <p className="text-[#2A6C9E] text-[1rem]">
                    Pre Trade Intelligence
                  </p>
                </div>
                <div className="w-[5px] ml-[5.2px] h-[45px] bg-[#757575]"></div>
              </li>
              <li>
                <div className="flex items-center gap-8">
                  <hr className="w-[15px] h-[15px] rounded-full bg-[#757575]" />
                  <p className="text-[#757575] text-[1rem]">Decarbonization</p>
                </div>
                <div className="w-[5px] ml-[5.2px] h-[50px] bg-[#757575]"></div>
              </li>
              <li>
                <div className="flex items-center gap-8">
                  <hr className="w-[15px] h-[15px] rounded-full bg-[#757575]" />
                  <p className="text-[#757575] text-[1rem]">Chartering</p>
                </div>
                <div className="w-[5px] ml-[5.2px] h-[50px] bg-[#757575]"></div>
              </li>
              <li>
                <div className="flex items-center gap-8">
                  <hr className="w-[15px] h-[15px] rounded-full bg-[#757575]" />
                  <p className="text-[#757575] text-[1rem]">Finance</p>
                </div>
                <div className="w-[5px] ml-[5.2px] h-[50px] bg-[#757575]"></div>
              </li>
              <li>
                <div className="flex items-center gap-8">
                  <hr className="w-[15px] h-[15px] rounded-full bg-[#757575]" />
                  <p className="text-[#757575] text-[1rem]">Operations</p>
                </div>
                {/* <div className="w-[5px] ml-[8px] h-[50px] bg-[#757575]"></div> */}
              </li>
            </ul>
          </div>
        </div>

        <div className="w-[40%]  max-sm:w-[100%]">
          <img className="h-full" src={product_img_3} alt="" />
        </div>
      </div>
    </div>
  );
};
