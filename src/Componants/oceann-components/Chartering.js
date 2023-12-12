import React from "react";
import chartering_img_1 from "../Assets/chartering/img_1.png";
import chartering_img_2 from "../Assets/chartering/img_2.png";
import chartering_img_3 from "../Assets/chartering/img_3.png";
import chartering_img_4 from "../Assets/chartering/img_4.png";
import chartering_img_5 from "../Assets/chartering/img_5.png";
import chartering_img_6 from "../Assets/chartering/img_6.png";
import chartering_img_7 from "../Assets/chartering/img_7.png";
import chartering_img_8 from "../Assets/chartering/img_8.png";
import analysisImg from "../Assets/ocean-vm-img/analysis-img.svg";
import calculatorImg from "../Assets/ocean-vm-img/calculator-img.svg";
import calenderImg from "../Assets/ocean-vm-img/calender-img.svg";
import contactManagerImg from "../Assets/ocean-vm-img/contact-manager-img.svg";
import trendImg from "../Assets/ocean-vm-img/trend-img.svg";
import OceannVMSection3Cart from "./Oceann_VM_Section3_Cart";
import "./oceann-vm.css";
import chatringlogo from "../Assets/chartering/Chatring-logo.png";

export const Chartering = () => {
  return (
    <>
      <div className="relative h-[85vh]">
        <img
          src={chartering_img_1}
          alt="Description of the"
          className="w-full h-full  object-center absolute top-0 left-0 z-0"
        />
        <div className="relative z-10 flex flex-col items-center justify-center  h-full text-center">
          <div className="flex text-center scale-125 gap-3">
            <img
              src={chatringlogo}
              alt="chatringlogo"
              className="h-5 w-5 md:h-10 md:w-10 mt-2 md:mt-4"
            />
            <h1 className="text-lg sm:text-xl md:text-2xl font-semibold  text-white">
              Chartering
            </h1>
          </div>
          <p className="text-xs sm:text-sm md:text-md w-[50vw] text-white">
            Chartering the Perfect Course for Your Ultimate Ocean Escape -
            Because Your Journey Deserves the Best.
          </p>
        </div>
      </div>

      <section>
        <div className="flex">
          <div className="p-6 font-medium text-center section2-child1">
            Chartering is the cornerstone of voyage management, ensuring vessels
            are strategically allocated for specific maritime journeys. It
            grants flexibility, cost control, and risk management, vital in the
            shipping industry. Explore how THEOCEANN excels in voyage management
            and chartering to optimize your shipping operations.
          </div>
        </div>
      </section>
      {/* ------------------ section2 -------------- */}
      <section>
        <div className="flex flex-col items-center section2 mt-10">
          <div className="section2-heading m-10">
            Embracing the Digital Era with our Dynamic Voyage Charters{" "}
          </div>

          <div className=" md:flex w-[80%] m-10">
            <div className=" pt-3 mr-2 md:w-[50%] ">
              <img
                src={chartering_img_2}
                alt="oceannVM_Img2"
                className=" h-72 w-full md:w-[85%] rounded-2xl "
              />
            </div>

            <div className="flex2 pr-8 md:w-[50%]">
              <div className="heading">
                MaritimeMasters:
                <br />
                Navigating Your
                <br /> Chartering Dreams
              </div>

              <p>
                Voyage Chartering  Solutions offer a whole chartering workflow
                from Voyage estimation , Optimizing voyage planning, Vessel
                scheduling, Cargo Planning and freight Contract Management
                process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------ section3 --------------- */}

      <section>
        <div className="flex flex-col items-center section2 section3">
          <div className="section3-heading">Benefits</div>

          <div className="container mx-auto pt-6 pb-6 pl-6 pr-2">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 ">
              <OceannVMSection3Cart
                img={trendImg}
                alt="trendImg"
                description="Faster Decision Making"
              />
              <OceannVMSection3Cart
                img={analysisImg}
                alt="analysisImg"
                description="Dynamic Analytical dashboard"
              />
              <OceannVMSection3Cart
                img={contactManagerImg}
                alt="contactManagerImg"
                description="Contract Management"
              />
              <OceannVMSection3Cart
                img={calculatorImg}
                alt="calculatorImg"
                description="Claim /Laytime Calculator"
              />
              <OceannVMSection3Cart
                img={calenderImg}
                alt="calenderImg"
                description="Bunker Planning"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------ section4 --------------- */}

     
      <div className="bg-[#242331]  mx-auto mt-10 pb-10">
        <h1 className="text-white font-bold text-md text-center sm:text-md md:text-xl pt-10 m-10">Features</h1>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-28 p-4 w-[80%] mx-auto h-fit ">
          {/* <!-- Card 1 --> */}
          <div class="bg-white  rounded-2xl border-b-4 border-r-4 border-yellow-500  ">
            <img src={chartering_img_3} alt="oceannVM_Img3" className="bg-cover w-full"/>
            <div class="p-5">
              <h5 class=" font-bold tracking-tight text-md sm:text-md lg:text-lg md:text-xl">
                Analytical trade Dashboard
              </h5>
              <p class=" text-xs sm:text-sm md:text-md">
                This will give a complete outlook of market trade  for each
                trader. A quick view of their fixtures, P&L, Planning and report
                will save plenty of time for traders
              </p>
            </div>
          </div>

          {/* <!-- Card 2 --> */}
          <div class="bg-white  rounded-2xl border-b-4 border-r-4 border-yellow-500">
            <img src={chartering_img_4} alt="oceannVM_Img4"  className="bg-cover w-full" />
            <div class="p-5">
              <h5 class="font-bold tracking-tight text-md sm:text-md lg:text-lg md:text-xl">
                Voyage Estimation and voyage Optimisation
              </h5>
              <p class=" text-xs sm:text-sm md:text-md">
                Designed to support all types of voyage calculations associated
                to a Voyage Estimation.
              </p>
            </div>
          </div>

          {/* <!-- Card 3 --> */}
          <div class="bg-white  rounded-2xl border-b-4 border-r-4 border-yellow-500">
            <img src={chartering_img_5} alt="oceannVM_Img4"   className="bg-cover w-full"/>
            <div class="p-5">
              <h5 class="font-bold tracking-tight text-md sm:text-md lg:text-lg md:text-xl">
                Voyage Scheduling
              </h5>
              <p class=" text-xs sm:text-sm md:text-md">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>

          {/* <!-- Card 4 --> */}
          <div class="bg-white  rounded-2xl border-b-4 border-r-4 border-yellow-500">
            <img src={chartering_img_6} alt="oceannVM_Img4"  className="bg-cover w-full" />
            <div class="p-5">
              <h5 class="font-bold tracking-tight text-md sm:text-md lg:text-lg md:text-xl">
                Freight Contract Management
              </h5>
              <p class="text-xs sm:text-sm md:text-md">
                This captures each data element , term and condition of various
                kind of cargo and vessel fixtures i.e Time chartered In, Time
                Charter out, Time charter voyage Out , Cargo COA, Single
                contract
              </p>
            </div>
          </div>

          {/* <!-- Card 5 --> */}
          <div class="bg-white  rounded-2xl border-b-4 border-r-4 border-yellow-500">
            <img src={chartering_img_7} alt="oceannVM_Img4"  className="bg-cover w-full"/>
            <div class="p-5">
              <h5 class="font-bold tracking-tight text-md sm:text-md lg:text-lg md:text-xl">
                Port-Sea distance Calculator
                {/* <div className="">&nbsp;</div> */}
              </h5>
              <p class=" text-xs sm:text-sm md:text-md">
                Distance Table is highly acclaimed for its extensiveness and
                accuracy. The database currently holds more than 7,000 ports and
                maritime locations, and more than 80,000 waypoints contribute to
                the accuracy of the calculation.
              </p>
            </div>
          </div>

          {/* <!-- Card 6 --> */}
          <div class="bg-white  rounded-2xl border-b-4 border-r-4 border-yellow-500">
            <img src={chartering_img_8} alt="oceannVM_Img4" className="bg-cover w-full"/>
            <div class="p-5">
              <h5 class="font-bold tracking-tight text-md sm:text-md lg:text-lg md:text-xl">
                Port congestion Inside
              </h5>
              <p class=" text-xs sm:text-sm md:text-md">
                This captures each data element , term and condition of various
                kind of cargo and vessel fixtures i.e Time chartered In, Time
                Charter out, Time charter voyage Out , Cargo COA, Single
                contract
              </p>
            </div>
          </div>
        </div>
      </div>
      
  

    </>
  );
};
