import React from "react";
import oceannZeroimg1 from "../Componants/Assets/OceannZero-img/oceanzero-img1.png";
import oceannZeroimg2 from "../Componants/Assets/OceannZero-img/oceanzero-img2.png";
// import oceannZeroimg3 from "../Componants/Assets/OceannZero-img/oceanzero-img3.png";
import oceannZeroimg4 from "../Componants/Assets/OceannZero-img/oceanzero-img4.png";
import OurServicesicon1 from "../Componants/Assets/OceannZero-img/OurServices-icon1.png";
import OurServicesicon2 from "../Componants/Assets/OceannZero-img/OurServices-icon2.png";
import OurServicesicon3 from "../Componants/Assets/OceannZero-img/OurServices-icon3.png";
import OurServicesicon4 from "../Componants/Assets/OceannZero-img/OurServices-icon4.png";
import OurServicesicon5 from "../Componants/Assets/OceannZero-img/OurServices-icon5.png";
import featureicon1 from "../Componants/Assets/OceannZero-img/feature-icon1.png";
import featureicon2 from "../Componants/Assets/OceannZero-img/feature-icon2.png";
import featureicon3 from "../Componants/Assets/OceannZero-img/feature-icon3.png";
import featureicon4 from "../Componants/Assets/OceannZero-img/feature-icon4.png";
import featureicon5 from "../Componants/Assets/OceannZero-img/feature-icon5.png";
import featureicon6 from "../Componants/Assets/OceannZero-img/feature-icon6.png";
import Oceannzerocard from "../Componants/OceannZero-Components/Oceannzerocard";
import { Link } from "react-router-dom";

const OceannZero = () => {
  return (
    <>
      <div>
        <div className="relative h-[85vh]">
          <img
            src={oceannZeroimg1}
            alt="Description of the"
            className="w-full h-full object-cover object-center absolute top-0 left-0 z-0"
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center  ">
            <h1 className="text-md sm:text-md md:text-xl font-semibold text-white">
              Chartering A Greener path for worldwide trade
            </h1>
            <p className="text-xs sm:text-sm md:text-md w-[60%] text-white">
              The ocean’s latest product Oceannzero delves into the formidable
              task of decarbonization in the maritime industry, and the
              strategies for the short, intermediate, and long haul that can
              guide us toward the correct course 
            </p>
            <Link  to='/demo'>
            <button className="bg-[#F39C12] text-xs sm:text-sm md:text-md text-white  px-4 py-2 mt-4 rounded-2xl">
              Get Started
            </button>
            </Link>
          </div>
        </div>
        <div className="w-[90vw]   mx-auto">
          <div>
            <h1 className="text-md text-center sm:text-md md:text-xl font-semibold text-[#003E78] mt-5 mb-5">
              <span className="border-b-4 border-[#F39C12]  ">Our Or</span>igin
            </h1>
            <div className=" md:flex gap-5 mt-3 mx-auto">
              <img
                src={oceannZeroimg2}
                alt="oceanuimg2"
                className="  md:w-[50%]  "
              />
              <p className="p-5 text-xs sm:text-sm md:text-md text-[#747070]">
                OceannZero acknowledges the varied roles within the maritime
                sector. Whether you're an owner, operator, charterer, trader,
                broker, or supplier, our platform is customized to cater to your
                specific requirements. It fosters effortless collaboration and
                enables well-informed decision-making across the industry.
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-md text-center sm:text-md md:text-xl font-semibold text-[#003E78] mt-5 mb-5">
              <span className="border-b-4 border-[#F39C12]  ">Oceann</span> Zero
            </h1>

            {/* oceann Zero card component */}
          <Oceannzerocard/>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h1 className="text-md text-center sm:text-md md:text-xl font-semibold text-[#003E78] mt-5 mb-5">
                AI Driven Performanc
                <span className="border-b-4 border-[#F39C12]">
                  e Optimization
                </span>
              </h1>
              <div className="md:flex flex-row-reverse gap-5 mt-3 mx-auto">
                <img
                  src={oceannZeroimg4}
                  alt="oceannZeroimg4"
                  className="md:w-[40%] "
                />
                <div className="text-sm sm:text-md md:text-md flex items-center lg:text-lg text-[#747070]">
                  <p>
                    Our machine learning & algorithm-powered route planning
                    solution instantly generates the shortest and most
                    cost-efficient routes based on 100s of business, service,
                    order, and vehicle constraints to achieve optimal
                    operational efficiency. We can also provide guidance on
                    minimizing fuel usage to lower emissions and achieve an
                    elevated CII rating.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-md text-center sm:text-md md:text-xl font-semibold text-[#003E78] mt-5 mb-10">
                Our Se
                <span className="border-b-4 border-[#F39C12]">rvices</span>
              </h1>
            </div>
          </div>
          {/* OurServiceCard */}

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {/* Card 1 */}
            <div className="shadow-xl rounded-2xl  bg-blue-600 flex flex-col justify-center items-center mt-10 relative">
              <div className="bg-blue-600 rounded-2xl h-1/2 flex flex-col items-center justify-center relative">
                <div className="rounded-full bg-blue-600 w-32 h-32 border-2 flex flex-col items-center justify-center border-white absolute  -mt-20 md:-mt-32 mx-auto mb-4">
                  <img
                    src={OurServicesicon1}
                    alt="OurServicesicon1"
                    className="w-1/2"
                  />
                </div>
                <div className=" justify-center justify-items-center relative">
                  <p className="text-white text-xs sm:text-sm md:text-md text-center bottom-2 p-3 mb-2 mt-20 ">
                    Regulatory & Environmental Compliance
                  </p>
                </div>
              </div>
              <div className="bg-white h-1/2 w-full  rounded-b-2xl flex flex-col pt-1 ">
                <ul className="list-disc pl-6 pr-6 text-xs sm:text-sm md:text-md top-0">
                  <li>EU ETS, FuelEU</li>
                  <li>Regulatory</li>
                  <li>Reporting IMO DCS, EU & UK MRV</li>
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div className="shadow-xl rounded-2xl  bg-[#119BBf] flex flex-col justify-center items-center mt-10 relative">
              <div className="bg-[#119BBf] rounded-2xl h-1/2 flex flex-col items-center justify-center relative">
                <div className="rounded-full bg-[#119BBf] w-32 h-32 border-2 flex flex-col items-center justify-center border-white absolute  -mt-20 md:-mt-32 mx-auto mb-4">
                  <img
                    src={OurServicesicon2}
                    alt="OurServicesicon1"
                    className="w-1/2"
                  />
                </div>
                <div className=" justify-center justify-items-center relative">
                  <p className="text-white text-xs sm:text-sm md:text-md text-center bottom-2 p-3 mb-2 mt-20 ">
                    Fleet Performance Analytics
                  </p>
                </div>
              </div>
              <div className="bg-white h-1/2 w-full  rounded-b-2xl flex flex-col  pt-1">
                <ul className="list-disc pr-6 pl-6 text-xs sm:text-sm md:text-md">
                  <li>Fleet Overview with Performance Indicators</li>
                  <li>Fuel Model Visualisation</li>
                  <li>Performance Optimization</li>
                </ul>
              </div>
            </div>
            {/* Card 3 */}
            <div className="shadow-xl rounded-2xl  bg-[#22AD86] flex flex-col justify-center items-center mt-10 relative">
              <div className="bg-[#22AD86] rounded-2xl h-1/2 flex flex-col items-center justify-center relative">
                <div className="rounded-full bg-[#22AD86] w-32 h-32 border-2 flex flex-col items-center justify-center border-white absolute  -mt-20 md:-mt-32 mx-auto mb-4">
                  <img
                    src={OurServicesicon3}
                    alt="OurServicesicon3"
                    className="w-1/2"
                  />
                </div>
                <div className=" justify-center justify-items-center relative">
                  <p className="text-white text-xs sm:text-sm md:text-md text-center bottom-2 p-3 mt-20 ">
                    Post Voyage Analysis
                  </p>
                </div>
              </div>
              <div className="bg-white h-1/2 w-full  rounded-b-2xl flex flex-col justify-items-center justify-center">
                <ul className="list-disc p-6 text-xs sm:text-sm md:text-md">
                  <li>Vessel performance monitoring and its management.</li>
                  <li> Decarbonisation solutions.</li>
                  <li>Analyses speed & consumption .</li>
                </ul>
              </div>
            </div>

            {/* Card 4 */}
            <div className="shadow-xl rounded-2xl  bg-[#6AB737] flex flex-col justify-center items-center mt-10 relative">
              <div className="bg-[#6AB737] rounded-2xl h-1/2 flex flex-col items-center justify-center relative">
                <div className="rounded-full bg-[#6AB737] w-32 h-32 border-2 flex flex-col items-center justify-center border-white absolute  -mt-20 md:-mt-32 mx-auto mb-4">
                  <img
                    src={OurServicesicon4}
                    alt="OurServicesicon4"
                    className="w-1/2"
                  />
                </div>
                <div className=" justify-center justify-items-center relative">
                  <p className="text-white text-xs sm:text-sm md:text-md text-center bottom-2 p-3 mb-2 mt-20 ">
                    Hull Performance Monitoring 
                  </p>
                </div>
              </div>
              <div className="bg-white h-1/2 w-full  rounded-b-2xl flex flex-col  ">
                <ul className="list-disc pr-6 pl-6 pt-2 text-xs sm:text-sm md:text-md">
                  <li>Hull degradation monitoring</li>
                  <li>Real time hull fouling risk alerts.</li>
                </ul>
              </div>
            </div>

            {/* Card 5 */}
            <div className="shadow-xl rounded-2xl  bg-[#003E78] flex flex-col justify-center items-center mt-10 relative">
              <div className="bg-[#003E78] rounded-2xl h-1/2 flex flex-col items-center justify-center relative">
                <div className="rounded-full bg-[#003E78] w-32 h-32 border-2 flex flex-col items-center justify-center border-white absolute  -mt-20 md:-mt-32 mx-auto mb-4">
                  <img
                    src={OurServicesicon5}
                    alt="OurServicesicon5"
                    className="w-1/2"
                  />
                </div>
                <div className=" justify-center justify-items-center relative">
                  <p className="text-white text-xs sm:text-sm md:text-md text-center bottom-2 p-3 mb-2  mt-20 ">
                    Emission Optimization
                  </p>
                </div>
              </div>
              <div className="bg-white h-1/2 w-full  rounded-b-2xl flex flex-col pt-2">
                <ul className="list-disc pr-6 pl-6 text-xs sm:text-sm md:text-md">
                  <li>Alternative Fuels and Technologies</li>
                  <li>Maintenance and Engine Tuning</li>
                </ul>
              </div>
            </div>
          </div>

          <div className=" md:flex gap-5 mt-10 md:mt-20 mx-auto">
            <img
              src={oceannZeroimg1}
              alt="oceanuimg2"
              className="  md:w-[50%] rounded-3xl  "
            />
            <div>
              <h1 className="text-md text-center sm:text-md md:text-xl font-semibold text-[#003E78] mt-5 mb-5">
                <span className="border-b-4 border-[#F39C12]  ">Why C</span>
                hoose Us ?
              </h1>
              <p className="p-5 text-xs sm:text-sm md:text-md text-[#747070]">
                TheOceann is committed to providing concrete, measurable
                advantages through result-driven procedures, utilizing our
                worldwide connections and economies of scale. TheOceann
                functions as an extension of your in-house team, dedicated to
                assisting you in data interpretation and the maintenance of
                control and efficiency. Our focus is on delivering tailored
                reports to empower you in adapting to and successfully
                addressing the ever-evolving market intricacies and business
                requirements.
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-md text-center sm:text-md md:text-xl font-semibold text-[#003E78] mt-5 mb-5">
              <span className="border-b-4 border-[#F39C12]">Featur</span>
              es
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4">
              {/* <!-- Card 1 --> */}
              <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
                <img src={featureicon1} alt="featureicon1" className="w-1/4" />
                <div className=" py-4">
                  <h1 className="font-semibold text-xs md:text-sm xl:text-md mb-2">
                    Emission Tracking
                  </h1>
                </div>
              </div>

              {/* <!-- Card 2 --> */}
              <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
                <img src={featureicon2} alt="featureicon2" className="w-1/4" />
                <div className=" py-4">
                  <h1 className="font-semibold text-xs md:text-sm xl:text-md mb-2">
                    Renewable Energy Integration
                  </h1>
                </div>
              </div>

              {/* <!-- Card 3 --> */}
              <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
                <img src={featureicon3} alt="featureicon3" className="w-1/4" />
                <div className=" py-4">
                  <h1 className="font-semibold text-xs md:text-sm xl:text-md mb-2">
                    Dashboard Visualization
                  </h1>
                </div>
              </div>

              {/* <!-- Card 4 --> */}
              <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
                <img src={featureicon4} alt="featureicon4" className="w-1/4" />
                <div className=" py-4">
                  <h1 className="font-semibold text-xs md:text-sm xl:text-md mb-2">
                    Predictive Analysis
                  </h1>
                </div>
              </div>

              {/* <!-- Card 5 --> */}
              <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
                <img src={featureicon5} alt="featureicon5" className="w-1/4" />
                <div className=" py-4">
                  <h1 className="font-semibold text-xs md:text-sm xl:text-md mb-2">
                    Geo spatial Analysis
                  </h1>
                </div>
              </div>

              {/* <!-- Card 6 --> */}
              <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
                <img src={featureicon6} alt="featureicon6" className="w-1/4" />
                <div className=" py-4">
                  <h1 className="font-semibold text-xs md:text-sm xl:text-md mb-2">
                    Machine Learning For Anomaly Detection
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OceannZero;
