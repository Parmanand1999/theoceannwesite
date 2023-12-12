import React from "react";
import oceann_finance_img_4 from '../Assets/finance_imgaes/Oceann_Finance_img_4.png';
import oceann_finance_1 from "../Assets/image/Oceann_Finance_bg_img.png";
import oceann_finance_img_5 from '../Assets/finance_imgaes/Oceann_Finance_img_5.png';
import oceann_finance_img_2 from '../Assets/image/Oceann_finance_img_2.png';
import OceannVMSection3Cart from "./Oceann_VM_Section3_Cart";
import "./oceann-vm.css";

import logo_1 from '../Assets/Fiance_logoes/finance_logo_1.png';
import logo_2 from '../Assets/Fiance_logoes/finance_logo_2.png';
import logo_3 from '../Assets/Fiance_logoes/finance_logo_3.png';
import logo_4 from '../Assets/Fiance_logoes/finance_logo_4.png';
import logo_5 from '../Assets/Fiance_logoes/finance_logo_5.png';
import logo_6 from '../Assets/Fiance_logoes/finance_logo_6.png';
import financeicon from '../Assets/Fiance_logoes/finance-icon.png';


export const Finance = () => {
  return (
    <div>
      <main>
        <div
          className="h-[85vh] flex items-center"
          style={{
            backgroundImage: `url(${oceann_finance_1})`,
            backgroundSize: "cover",
          }}
        >
          <div className="oceann-vm-section1">
           <div className="flex">
           <img src={financeicon} alt="icon" className="w-10 mt-3 h-10"/>
            <div className="text-center text-6xl">Finance</div>
           </div>
            <div className="font-medium ">Control your voyage accounting</div>
          </div>
        </div>
      </main>

      <section>
        <div className="flex">
          <div className="p-6 font-medium section2-child1">
            Finance play a pivotal role in voyage management, affecting
            profitability and cost control. This encompasses budgeting for fuel,
            crew, maintenance, and port fees. Effective financial planning
            ensures optimal resource allocation and risk mitigation. At THE
            OCEANN, we offer expertise in financial management for streamlined
            and cost-effective voyage planning.
          </div>
        </div>
      </section>
      {/* ------------------ section2 -------------- */}
      <section>
        <div className="flex flex-col items-center section2">
          <div className="section2-heading">Finance</div>

          <div className="flex section2-child2">
            <div className="w-[80%] mx-auto pt-6 pb-6 pl-6 ">
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5">
                <div className="img-cls pt-3 mr-2">
                  <img src={oceann_finance_img_2} alt="oceannVM_Img2" />
                </div>

                <div className="flex2 pr-8">
                  <div className="heading">
                    OceanFunds: Navigating Your Ship Financing Journey
                  </div>

                  <div>
                    In this ever-evolving maritime landscape, securing
                    appropriate funding for your ship cargo ventures is
                    paramount. Let us guide you through the various aspects of
                    ship cargo financing and illuminate the path to financial
                    stability and operational excellence.
                  </div>
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
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4">
              <OceannVMSection3Cart
                img={logo_1}
                alt="trendImg"
                description="Capture the maximum value from all your data with our platform
                "
              />
              <OceannVMSection3Cart
                img={logo_2}
                alt="analysisImg"
                description="Dynamic P&L accounting view

                "
              />
              <OceannVMSection3Cart
                img={logo_3}
                alt="contactManagerImg"
                description="Upload and process the row data into intelligence input.


                "
              />
              <OceannVMSection3Cart
                img={logo_4}
                alt="calculatorImg"
                description="Analytical accounting dashboard
                "
              />
              <OceannVMSection3Cart
                img={logo_5}
                alt="calenderImg"
                description="Dynamic Dashboard"
              />
              <OceannVMSection3Cart
                img={logo_6}
                alt="calenderImg"
                description="Pre loaded report and customized report."
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
              src={oceann_finance_img_4} alt="oceannVM_Img3"
              className="bg-cover w-full"
            />
            <div class="p-5">
              <h5 class=" font-bold tracking-tight text-md sm:text-md lg:text-lg md:text-xl">
              Dynamic P & L for each Voyage
              </h5>
              <p class=" text-xs sm:text-sm md:text-md">
              Voyage accounting has an important role to play in the maritime accounting process. Each Cost & revenue element  is captured under various contracts for proper entry into voyage accounting for accurate P&L.
              </p>
            </div>
          </div>

          {/* <!-- Card 2 --> */}
          <div class="bg-white  rounded-2xl border-b-4 border-r-4 border-yellow-500">
            <img
             src={oceann_finance_img_5} alt="oceannVM_Img4"
              className="bg-cover w-full"
            />
            <div class="p-5">
              <h5 class="font-bold tracking-tight text-md sm:text-md lg:text-lg md:text-xl">
              Time charter payment
              </h5>
              <p class=" text-xs sm:text-sm md:text-md">
              Our platform caters entire workflow for f financial, invoicing, payment, and record keeping for various time charter i.e TCI, TCO, Time charter voyage out, Owned  vessel, TC relet.
              </p>
            </div>
          </div>

          
         
        </div>
     
      </div>



    </div>
  );
};

