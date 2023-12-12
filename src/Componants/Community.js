import React from "react";
import { useNavigate } from "react-router-dom";
import mapImg from "./Assets/image/Rectangle4066.png";

export const Community = () => {
  const navigator = useNavigate();
  const image = {
    backgroundImage: `url(${mapImg})`,
  };
  return (
    <section className="max-sm:mx-[1rem] mt-4 mx-[3rem]">
      {/* console.log("888888"); */}
      <div style={image} className="flex flex-col">
        <div className="p-4 max-sm:text-center max-sm:p-0 max-sm:m-0">
          <div className="text-xl mt-2 ml-4 mb-2 max-sm:mx-0">
            <h3 className="text-[#238A9F] max-sm:mx-[1rem] max-sm:text-[1.8rem] font-bold">
              Join the Community
            </h3>
          </div>

          <div className="text-white m-4">
            <p className="font-[Roboto] max-sm:text-[.8rem]">
              Be part of our community where influential clients, shaping global
              trade, unite under one roof. Regardless of their diversity, they
              share a common thread: reliance on TheOceann’s solutions essential
              tools in their daily operations.
            </p>
          </div>

          <div className="flex m-4 flex-col max-sm:gap-[1.5rem] bg-white flex-wrap items-center gap-[2rem] mt-[2rem] justify-center">
            <section>
              <div className="px-4 text-center">
                <div className="grid mt-[1rem]  grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 max-sm:gap-4 ">
                  <div class="bg-white flex flex-col justify-center items-center text-[#183165]  ">
                    <h2 class="text-[2.5rem] max-sm:text-[1.4rem] font-semibold">
                      100+
                    </h2>
                    <p
                      className="text-[1rem] 
                    max-sm:text-[.7rem] text-center"
                    >
                      Vendor
                    </p>
                  </div>
                  <div class="bg-white flex flex-col justify-center items-center text-[#183165]  ">
                    <h2 class="text-[2.5rem] max-sm:text-[1.4rem] font-semibold">
                      312M$+
                    </h2>
                    <p
                      className="text-[1rem] 
                    max-sm:text-[.7rem] text-center"
                    >
                      Freight managed
                    </p>
                  </div>
                  <div class="bg-white flex flex-col justify-center items-center text-[#183165]  ">
                    <h2 class="text-[2.5rem] max-sm:text-[1.4rem] font-semibold">
                      2 M+
                    </h2>
                    <p
                      className="text-[1rem] 
                    max-sm:text-[.7rem] text-center"
                    >
                      Email Volume
                    </p>
                  </div>
                  <div class="bg-white flex flex-col justify-center items-center text-[#183165]  ">
                    <h2 class="text-[2.5rem] max-sm:text-[1.4rem] font-semibold">
                      157+
                    </h2>
                    <p
                      className="text-[1rem] 
                    max-sm:text-[.7rem] text-center"
                    >
                      Tonnage managed
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <p className="text-[#183165] max-sm:px-[1rem] text-center  max-sm:text-[15px]">
              We measure our success by yours.
            </p>

            <div className="text-center justify-center flex flex-col gap-4 bg-white pt-2 pb-6">
              <button
                onClick={() => navigator("/knowledge-Hub/events")}
                className="rounded-[10px] max-sm:text-[10px] max-sm:px-3 px-4  max-sm:py-3 py-4 bg-[#F39C12] text-white"
              >
                Explore Client Success Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
