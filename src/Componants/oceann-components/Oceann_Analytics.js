import React from "react";
import "./oceann-analytics.css";
import oceannAnalytics_Img1 from "../Assets/oceann-analytics-img/oceann-analytics-img1.png";
import oceannAnalytics_Img2 from "../Assets/oceann-analytics-img/oceann-analytics-img2.png";
import oceannAnalytics_Img3 from "../Assets/oceann-analytics-img/oceann-analytics-img3.png";
import captureImg from "../Assets/oceann-analytics-img/capture-img.svg";
import contactManagerImg from "../Assets/oceann-analytics-img/contact-manager-img.svg";
import saveImg from "../Assets/oceann-analytics-img/save-img.svg";
import processImg from "../Assets/oceann-analytics-img/process-img.svg";
import dynamicImg from "../Assets/oceann-analytics-img/dynamic-img.svg";
import OceannAnalyticsSection3Cart from "./Oceann_Analytics_Section3_Cart";

import oceannAnalytics_Img4 from "../Assets/oceann-analytics-img/oceann-analytics-img4.png";
import oceannAnalytics_Img5 from "../Assets/oceann-analytics-img/oceann-analytics-img5.png";
import oceannAnalytics_Img6 from "../Assets/oceann-analytics-img/oceann-analytics-img6.png";
import oceannAnalytics_Img7 from "../Assets/oceann-analytics-img/oceann-analytics-img7.png";

import oceannAnalytics_Img8 from "../Assets/oceann-analytics-img/oceann-analytics-img8.png";

export default function Oceann_Analytics() {
  return (
    <>
      <main>
        <div
          className="h-[85vh] flex items-center"
          style={{
            backgroundImage: `url(${oceannAnalytics_Img1})`,
            backgroundSize: "cover",
          }}
        >
          <div className="oceann-analytics-section1">
            <div className="flex justify-center">
              <div>
                <img src={oceannAnalytics_Img2} alt="oceannAnalytics_Img2" />
              </div>
              <div className="text-center text-xl  md:text-2xl">Analytics</div>
            </div>
            <div className="font-medium pl-2 pr-2 text-sm md:text-md ">
               Theoceann believes Vessel data is the king in the maritime
              kingdom.
            </div>
          </div>
        </div>
      </main>

      <section>
        <div className="flex pl-6 pr-6 pt-6 items-center">
          <div className="p-6 font-medium section2-child1">
            Analytics is the data-driven heart of voyage management, providing
            insights for informed decision-making. It involves collecting and
            analyzing data on vessel performance, cargo trends, and market
            conditions. Effective analytics leads to optimized routes, cost
            savings, and risk assessment. THE OCEANN leverages cutting-edge
            analytics to enhance voyage management, ensuring efficiency and
            profitability.
          </div>
        </div>
      </section>

      {/* ------------------ section2 -------------- */}
      <section>
        <div className="flex flex-col items-center section2">
          <div className="section2-heading">Analytics</div>

          <div className="flex section2-child2">
            <div className="container mx-auto pt-6 pb-6 pl-6 ">
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
                <div className="img-cls pt-3 mr-2">
                  <img src={oceannAnalytics_Img3} alt="oceannAnalytics_Img3" />
                </div>

                <div className="flex2 pr-8">
                  <div className="heading">
                    Streamlined Insights for Strategic Navigation
                  </div>

                  <div>
                    In the ever-evolving world of shipping and logistics,
                    informed decision-making is the wind in your sails. Welcome
                    to our Report & Analytics section, a dedicated space
                    designed to equip shipping companies with the insights and
                    tools they need to sail confidently through the complex
                    waters of the maritime industry.
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
              <OceannAnalyticsSection3Cart
                img={captureImg}
                alt="captureImg"
                description="Capture the maximum value from all your data with our platform"
              />
              <OceannAnalyticsSection3Cart
                img={contactManagerImg}
                alt="contactManagerImg"
                description="Dynamic P&L accounting view"
              />
              <OceannAnalyticsSection3Cart
                img={saveImg}
                alt="saveImg"
                description="Save time which save cost with better tools"
              />
              <OceannAnalyticsSection3Cart
                img={processImg}
                alt="processImg"
                description="Upload and process the row data into intelligence input."
              />
              <OceannAnalyticsSection3Cart
                img={dynamicImg}
                alt="dynamicImg"
                description="Dynamic Dashboard"
              />
              <OceannAnalyticsSection3Cart
                img={contactManagerImg}
                alt="contactManagerImg"
                description="Pre loaded report and customized report. "
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------ section4 --------------- */}

      {/* <section>
        <div className="flex flex-col items-center section4">
          <div className="section4-heading">Features</div>
          <div className="flex section2-child2">
            <div className="container mx-auto pt-6 pb-6 pl-6 ">
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
                <div className="section4-img-contaoner">
                  <div className="bg-white shadow-lg section-2-cart">
                    <div className="flex flex-col">
                      <img
                        src={oceannAnalytics_Img4}
                        alt="oceannAnalytics_Img4"
                      />
                    </div>
                    <div className="section4-img-contaoner-bottom">
                      <div className="">Market business Intelligence tools</div>
                      <div>
                        Pre-loaded with platform data of voyage and vessel 
                        gives complete visuals for Chartering, Operation and
                        accounting users.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="section4-img-contaoner">
                  <div className="bg-white shadow-lg section-2-cart">
                    <div className="flex flex-col">
                      <img
                        src={oceannAnalytics_Img5}
                        alt="oceannAnalytics_Img5"
                      />
                    </div>
                    <div className="section4-img-contaoner-bottom">
                      <div className="">Report Generation</div>
                      <div>
                        theoceann.com platform enables users to download
                        consolidated reports by selecting the various parameters
                        of fixture, cargo, vessel, operation and accounting.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>



      </section> */}

      <div className="bg-[#242331]  mx-auto mt-10 pb-10">
        <h1 className="text-white font-bold text-md text-center sm:text-md md:text-xl pt-10 m-10">
          Features
        </h1>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-28 p-4 w-[80%] mx-auto h-fit ">
          {/* <!-- Card 1 --> */}
          <div class="bg-white  rounded-2xl border-b-4 border-r-4 border-yellow-500  ">
            <img
              src={oceannAnalytics_Img4}
              alt="oceannAnalytics_Img4"
              className="bg-cover w-full"
            />
            <div class="p-5">
              <h5 class=" font-bold tracking-tight text-md sm:text-md lg:text-lg md:text-xl">
              Market business Intelligence tools
              </h5>
              <p class=" text-xs sm:text-sm md:text-md">
              Pre-loaded with platform data of voyage and vessel 
                        gives complete visuals for Chartering, Operation and
                        accounting users.
              </p>
            </div>
          </div>

          {/* <!-- Card 2 --> */}
          <div class="bg-white  rounded-2xl border-b-4 border-r-4 border-yellow-500">
            <img
             src={oceannAnalytics_Img5}
             alt="oceannAnalytics_Img5"
              className="bg-cover w-full"
            />
            <div class="p-5">
              <h5 class="font-bold tracking-tight text-md sm:text-md lg:text-lg md:text-xl">
              Report Generation
              </h5>
              <p class=" text-xs sm:text-sm md:text-md">
              theoceann.com platform enables users to download
                        consolidated reports by selecting the various parameters
                        of fixture, cargo, vessel, operation and accounting.
              </p>
            </div>
          </div>

          {/* <!-- Card 3 --> */}
          <div class="bg-white  rounded-2xl border-b-4 border-r-4 border-yellow-500">
            <img
              src={oceannAnalytics_Img6}
              alt="oceannOperations_Img7"
              className="bg-cover w-full"
            />
            <div class="p-5">
              <h5 class="font-bold tracking-tight text-md sm:text-md lg:text-lg md:text-xl">
              Cargo Freight related payment
              </h5>
              <p class=" text-xs sm:text-sm md:text-md">
              It caters Cargo Contract, COA Cargo, Sales and purchase of cargo and their freight , Invoice and commission
              </p>
            </div>
          </div>

          {/* <!-- Card 4 --> */}
          <div class="bg-white   rounded-2xl border-b-4 border-r-4 border-yellow-500">
            <img
              src={oceannAnalytics_Img7}
              alt="oceannOperations_Img8"
              className="bg-cover w-full"
            />
            <div class="p-5">
              <h5 class="font-bold tracking-tight text-md sm:text-md lg:text-lg md:text-xl">
              All voyage other revenue/expenses
              </h5>
              <p class="text-xs sm:text-sm md:text-md">
              All other voyage related revenue and expenses invoicing , payment, transaction will be recorded
              </p>
            </div>
          </div>
        </div>
      <div className="mt-10 md:flex md:flex-row-reverse mx-auto bg-white w-[80%] items-center rounded-xl border-b-2 border-yellow-500 mb-10 ">
        <div>
          <img
            src={oceannAnalytics_Img8}
            alt="oceannAnalytics_Img8"
            className="rounded-2xl  "
          />
        </div>
        <div className=" md:w-[60%]  md:border-r-2 p-5 md:pl-10 ">
          <h3 className="text-lg font-semibold">Invoice scheduling</h3>
          <p className="">All invoices can be scheduled with alert and task.</p>
        </div>
      </div>
      </div>
    </>
  );
}
