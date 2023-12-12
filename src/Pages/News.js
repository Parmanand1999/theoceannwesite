import React from "react";
import Newsimg1 from "../Componants/Assets/News-img/News-img1.png";
import Newsimg2 from "../Componants/Assets/News-img/News-img2.png";
import Newsimg3 from "../Componants/Assets/News-img/News-img3.png";
import Newsimg4 from "../Componants/Assets/News-img/News-img4.png";
import Newsimg5 from "../Componants/Assets/News-img/News-img5.png";
const News = () => {
  return (
    <>
      <div className="relative h-[85vh] ">
        <img
          src={Newsimg1}
          alt="Description of the"
          className="w-full h-full object-cover object-center absolute max-w-full"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center  ">
          <h1 className="text-md sm:text-md md:text-xl font-semibold text-white">
            NEWS
          </h1>
          <p className="p-5 text-xs sm:text-sm md:text-md text-white">
            Maritime Matters Unfold: Your Ocean of News{" "}
          </p>
        </div>
      </div>
      <p className="p-5 text-xs sm:text-sm md:text-md text-center">
        Stay Updated on various innovations and breakthroughs happening in
        maritime industry
      </p>
      <div class="flex justify-center items-center mx-auto w-[90vw]">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div class=" bg-sky-100 p-4 rounded-lg">
            <img src={Newsimg2} alt="Newsimg2" class="w-full rounded-lg " />
            <div className="p-5 bg-white mt-2 rounded-lg">
              <h1 className="text-md  text-left sm:text-md md:text-lg font-semibold">
                Endeavour Graduates Share Maritime Journeys
              </h1>
              <p className=" text-xs sm:text-sm md:text-md text-[#747070]">
                Endeavour, a Bermuda-registered charity that builds
                self-confidence and life skills for Bermuda’s youth through
                experiential education, partners with the Bermuda College Athora
                Division
              </p>
            </div>
          </div>

          <div class=" bg-sky-100 p-4 rounded-lg">
            <img src={Newsimg3} alt="Newsimg3" class="w-full rounded-lg" />
            <div className="p-5 bg-white mt-2 rounded-lg">
              <h1 className="text-md  text-left sm:text-md md:text-lg font-semibold">
                THE Alliance slashes capacity to stem container freight rate rot
              </h1>
              <p className=" text-xs sm:text-sm md:text-md text-[#747070]">
                Container freight rates have slightly recovered as another major
                shipping alliance unveiled plans to cut capacity. But the
                freight rate rally could be short-lived, with some forecasts
                thaa
              </p>
            </div>
          </div>

          <div class=" bg-sky-100 p-4 rounded-lg">
            <img src={Newsimg4} alt="Newsimg5" class="w-full rounded-lg" />
            <div className="p-5 bg-white mt-2 rounded-lg">
              <h1 className="text-md  text-left sm:text-md md:text-lg font-semibold">
                Inditex Teams with Maersk to Cut Emissions. Can the Industry
                Commit to its Goals?
              </h1>
              <p className=" text-xs sm:text-sm md:text-md text-[#747070]">
                Zara parent Inditex has partnered with container shipping and
                logistics giant Maersk to reduce its global greenhouse gas (GHG)
                footprint over the ocean by incorporating alternative fuels in
                all inbound routes with the carrier.
              </p>
            </div>
          </div>

          <div class=" bg-sky-100 p-4 rounded-lg">
            <img src={Newsimg5} alt="Newsimg5" class="w-full rounded-lg" />
            <div className="p-5 bg-white mt-2 rounded-lg">
              <h1 className="text-md text-left sm:text-md md:text-lg font-semibold">
              Israel to Pay Compensation for Ships Damaged in Gaza War

                
              </h1>
              <p className="text-xs sm:text-sm md:text-md text-[#747070]">
              Israel will provide compensation for ships that are damaged due to the war in Gaza and the government is taking steps to minimise risks for vessels using the country's ports, government advisories said.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
