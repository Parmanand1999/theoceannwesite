import React from "react";
import "./oceann-operations.css";
import oceannOperations_Img1 from "../Assets/oceann-operations-img/oceann-operations-img1.png";
import oceannOperations_Img2 from "../Assets/oceann-operations-img/oceann-operations-img2.png";
import oceannOperations_Img3 from "../Assets/oceann-operations-img/oceann-operations-img3.png";
import OceannOperationsSection3Cart from "./Oceann_Operations_Section3_Cart";
import managementImg from "../Assets/oceann-operations-img/management-img.svg";
import compareImg from "../Assets/oceann-operations-img/compare-img.svg";
import dynamicImg from "../Assets/oceann-operations-img/dynamic-img.svg";
import computerImg from "../Assets/oceann-operations-img/computer-img.svg";
import forwardImg from "../Assets/oceann-operations-img/forward-img.svg";

import oceannOperations_Img4 from "../Assets/oceann-operations-img/oceann-operations-img4.png";
import oceannOperations_Img5 from "../Assets/oceann-operations-img/oceann-operations-img5.png";

import oceannOperations_Img7 from "../Assets/oceann-operations-img/oceann-operations-img7.png";
import oceannOperations_Img8 from "../Assets/oceann-operations-img/oceann-operations-img8.png";
import oceannOperations_Img9 from "../Assets/oceann-operations-img/oceann-operations-img9.png";

import oceannOperations_Img10 from "../Assets/oceann-operations-img/oceann-operations-img10.png";
import oceannOperations_Img11 from "../Assets/oceann-operations-img/oceann-operations-img11.png";

export default function Oceann_Operations() {
  return (
    <>
      <main>
        <div
          className="h-[85vh] flex items-center"
          style={{
            backgroundImage: `url(${oceannOperations_Img1})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
           
          }}
        >
          <div className="oceann-operations-section1">
            <div className="flex justify-center">
              <div>
                <img src={oceannOperations_Img2} alt="oceannOperations_Img2" />
              </div>
              <div className="text-center text-xl  md:text-2xl">Operations</div>
            </div>
            <div className="font-medium pl-2 pr-2 text-sm md:text-md ">
                If Maritime is Kingdom then Vessel DATA is the King.
            </div>
          </div>
        </div>
      </main>

      <section>
        <div className="flex pl-6 pr-6 pt-6 items-center">
          <div className="p-6 font-medium section2-child1">
            Operations in voyage management involve the execution and
            coordination of maritime journeys. This includes vessel scheduling,
            cargo handling, and navigation. Efficient operations enhance
            cost-effectiveness and minimize risks. THE OCEANN specializes in
            seamless voyage management operations, ensuring successful and
            cost-efficient shipping.
          </div>
        </div>
      </section>

      {/* ------------------ section2 -------------- */}
      <section>
        <div className="flex flex-col items-center section2">
          <div className="section2-heading">Operation</div>

          <div className="flex section2-child2">
            <div className="container mx-auto pt-6 pb-6 pl-6 ">
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
                <div className="flex2 pr-8">
                  <div className="heading">
                    OceanNavigo: Seamlessly Managing Maritime Ventures
                  </div>

                  <div>
                    theoceann.com capture the complete workflow of Port fixture
                    operation for various kind of time charter and voyage
                    charter contract which increase the productivity of operator
                    by more than 20%.
                  </div>
                </div>

                <div className="img-cls pt-3 mr-2">
                  <img
                    src={oceannOperations_Img3}
                    alt="oceannOperations_Img3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------ section3 --------------- */}

      <section>
        <div className="flex flex-col items-center section2 section3">
          <div className="section3-heading">Benefits</div>

          <div className="container mx-auto pt-6 pb-6 pl-6 pr-2">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 text-black">
              <OceannOperationsSection3Cart
                img={managementImg}
                alt="managementImg"
                description="Access live P & L report and variance "
              />
              <OceannOperationsSection3Cart
                img={compareImg}
                alt="compareImg"
                description="Compare live operation data with trader estimate"
              />
              <OceannOperationsSection3Cart
                img={dynamicImg}
                alt="dynamicImg"
                description="Dynamic Personalised Dashboard"
              />
              <OceannOperationsSection3Cart
                img={computerImg}
                alt="computerImg"
                description="Directly Manage, monitor and optimised voyage performance."
              />
              <OceannOperationsSection3Cart
                img={managementImg}
                alt="managementImg"
                description="Access & download various report for voyage performance"
              />
              <OceannOperationsSection3Cart
                img={forwardImg}
                alt="forwardImg"
                description="Vessel Speed Dynamic features automate the noon reporting"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------ section4 --------------- */}

      <div className="bg-[#242331]  mx-auto mt-10 pb-10">
        <h1 className="text-white font-bold text-md text-center sm:text-md md:text-xl pt-10 m-10">
          Features
        </h1>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-28 p-4 w-[80%] mx-auto h-fit ">
          {/* <!-- Card 1 --> */}
          <div class="bg-white  rounded-2xl border-b-4 border-r-4 border-yellow-500  ">
            <img
              src={oceannOperations_Img4}
              alt="oceannOperations_Img4"
              className="bg-cover w-full"
            />
            <div class="p-5">
              <h5 class=" font-bold tracking-tight text-md sm:text-md lg:text-lg md:text-xl">
                P&L variance and reporting
              </h5>
              <p class=" text-xs sm:text-sm md:text-md">
                The oceann captures each element in the operation workflow which
                enables users to compare P &L data with estimates on a minute to
                minute basis.
              </p>
            </div>
          </div>

          {/* <!-- Card 2 --> */}
          <div class="bg-white  rounded-2xl border-b-4 border-r-4 border-yellow-500">
            <img
              src={oceannOperations_Img5}
              alt="oceannOperations_Img5"
              className="bg-cover w-full"
            />
            <div class="p-5">
              <h5 class="font-bold tracking-tight text-md sm:text-md lg:text-lg md:text-xl">
                Voyage management
              </h5>
              <p class=" text-xs sm:text-sm md:text-md">
                These features provide everything a user needs to optimize the
                voyage management and operational workflow.
              </p>
            </div>
          </div>

          {/* <!-- Card 3 --> */}
          <div class="bg-white  rounded-2xl border-b-4 border-r-4 border-yellow-500">
            <img
              src={oceannOperations_Img7}
              alt="oceannOperations_Img7"
              className="bg-cover w-full"
            />
            <div class="p-5">
              <h5 class="font-bold tracking-tight text-md sm:text-md lg:text-lg md:text-xl">
                Bunker Planning
              </h5>
              <p class=" text-xs sm:text-sm md:text-md">
                This module includes in depth functionality which covers port
                and bunker cost estimation, bunker optimal intake and comparison
                of costs against different available offers.
              </p>
            </div>
          </div>

          {/* <!-- Card 4 --> */}
          <div class="bg-white  rounded-2xl border-b-4 border-r-4 border-yellow-500">
            <img
              src={oceannOperations_Img8}
              alt="oceannOperations_Img8"
              className="bg-cover w-full"
            />
            <div class="p-5">
              <h5 class="font-bold tracking-tight text-md sm:text-md lg:text-lg md:text-xl">
                Laytime & claim Management
              </h5>
              <p class="text-xs sm:text-sm md:text-md">
                The objective of the Laytime program is to provide owners,
                charterers and operators with the means to prepare laytime and
                claim rapidly and accurately.
              </p>
            </div>
          </div>

          {/* <!-- Card 5 --> */}
          <div class="bg-white  rounded-2xl border-b-4 border-r-4 border-yellow-500">
            <img
              src={oceannOperations_Img9}
              alt="oceannOperations_Img9"
              className="bg-cover w-full"
            />
            <div class="p-5">
              <h5 class="font-bold tracking-tight text-md sm:text-md lg:text-lg md:text-xl">
                VSPM ( Vessel Speed Predictive matrices)
                {/* <div className="">&nbsp;</div> */}
              </h5>
              <p class=" text-xs sm:text-sm md:text-md">
                The oceann captures each element in the operation workflow which
                enables users to compare P &L data with estimates on a minute to
                minute basis.
              </p>
            </div>
          </div>

          {/* <!-- Card 6 --> */}
          <div class="bg-white  rounded-2xl border-b-4 border-r-4 border-yellow-500">
            <img
              src={oceannOperations_Img10}
              alt="oceannOperations_Img10"
              className="bg-cover w-full"
            />
            <div class="p-5">
              <h5 class="font-bold tracking-tight text-md sm:text-md lg:text-lg md:text-xl">
                Data Analysis
              </h5>
              <p class=" text-xs sm:text-sm md:text-md">
                This integrated module offers a complete analytical chart and
                visualization of each voyage performance on various facts and
                figures.
              </p>
            </div>
          </div>
        </div>

        <div className=" mt-10 md:flex md:flex-row-reverse bg-white w-[80%] items-center rounded-xl border-b-2 border-yellow-500 mb-10 mx-auto ">
          <div className="md:w-[50%] border-l-2">
            <img
              src={oceannOperations_Img11}
              alt="oceannOperations_Img11"
              className="rounded-2xl "
            />
          </div>
          <div className=" md:w-[50%]  md:border-r-2 p-5  ">
            <h3 className="text-lg font-semibold">Task and Alerts</h3>
            <p class="item-left text-xs sm:text-sm md:text-md">
              Monitoring various fixtures and voyage, require automated task and
              alert based system for quick action. User can list various
              instruction set, task and alert for each voyage before scheduling
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
