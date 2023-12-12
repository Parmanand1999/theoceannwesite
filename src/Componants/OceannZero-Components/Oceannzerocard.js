import React from "react";
import oceannZeroimg3 from "../Assets/OceannZero-img/oceanzero-img3.png";
import oceanzeroicon3 from "../Assets/OceannZero-img/oceanzero-icon3.png";
import oceanzeroicon4 from "../Assets/OceannZero-img/oceanzero-icon4.png";
import oceanzeroicon5 from "../Assets/OceannZero-img/oceanzero-icon5.png";
import oceanzeroicon6 from "../Assets/OceannZero-img/oceanzero-icon6.png";

import { BsSpeedometer2 } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
const Oceannzerocard = () => {
  return (
    <>
      
        <div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
          style={{
            backgroundImage: `url(${oceannZeroimg3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* 1 card */}
          <div className="relative flex justify-items-center justify-center bg-white py-6 px-6 rounded-3xl  my-4 hover:shadow-xl hover:scale-105 overflow-hidden ">
            <div className=" text-white flex items-center absolute rounded-full py-5 px-5  shadow-xl bg-[#33A317] -top-4">
              <BsSpeedometer2 className="h-8 w-8" />
            </div>
            <div className="mt-8">
              <h1 className="text-md sm:text-md md:text-lg font-semibold my-2 text-center ">
                Voyage Optimisation
              </h1>
              <p className="text-xs sm:text-sm md:text-md text-[#747070] ">
                Theoceann’s platform offers advanced route planning that is
                unrivaled in its capacity to empower operators in overseeing
                commercial voyages without compromising safety, profitability,
                or sustainability.
              </p>
            </div>
          </div>
          {/* 2 card */}
          <div className="relative flex justify-items-center justify-center bg-white py-6 px-6 rounded-3xl  my-4 hover:shadow-xl hover:scale-105 overflow-hidden">
            <div className=" text-white flex items-center absolute rounded-full py-5 px-5  shadow-xl bg-[#33A317] -top-4">
              <BsGlobe className="h-8 w-8" />
            </div>
            <div className="mt-8">
              <h1 className="text-md sm:text-md md:text-lg font-semibold my-2 text-center ">
                Noon Report Validation
              </h1>
              <p className="text-xs sm:text-sm md:text-md text-[#747070] ">
                The approach for Data Collection, Verification, and Reporting
                with the implementation of regulations is now more critical than
                ever forship owners and charterers to identify effective and
                trustworthy techniques for gathering,validating, and reporting
                emissions data.
              </p>
            </div>
          </div>
          {/* 3 card */}
          <div className="relative flex justify-items-center justify-center bg-white py-6 px-6 rounded-3xl  my-4 hover:shadow-xl hover:scale-105 overflow-hidden">
            <div className=" text-white flex items-center absolute rounded-full py-5 px-5  shadow-xl bg-[#33A317] -top-4">
              <img
                src={oceanzeroicon3}
                alt="oceanzero-icon3"
                className="h-8 w-8"
              />
            </div>
            <div className="mt-8">
              <h1 className="text-md sm:text-md md:text-lg font-semibold my-2 text-center ">
                Weather Optimisation
              </h1>
              <p className="text-xs sm:text-sm md:text-md text-[#747070] ">
                Seamless Real-Time Weather Route Optimization is our goal. Given
                the ever-changing nature ofweather, Theoceann’s weather
                optimization module, complete with integrated weather
                routing,delivers real-time data updates with a fresh forecast
                every six hours.
              </p>
            </div>
          </div>
          {/* 4 card */}
          <div className="relative flex justify-items-center justify-center bg-white py-6 px-6 rounded-3xl  my-4 hover:shadow-xl hover:scale-105 overflow-hidden">
            <div className=" text-white flex items-center absolute rounded-full py-5 px-5  shadow-xl bg-[#33A317] -top-4">
              <img
                src={oceanzeroicon4}
                alt="oceanzero-icon4"
                className="h-8 w-8"
              />
            </div>
            <div className="mt-8">
              <h1 className="text-md sm:text-md md:text-lg font-semibold my-2 text-center ">
                CII Dashboard
              </h1>
              <p className="text-xs sm:text-sm md:text-md text-[#747070] ">
                Carbon Emissions OptimisationThe oceann’s Emissions Analytics
                delivers complete visibility into the performance of both your
                fleet and individual vessels in terms of Carbon Intensity
                Indicator (CII).
              </p>
            </div>
          </div>
          {/* 5 card */}
          <div className="relative flex justify-items-center justify-center bg-white py-6 px-6 rounded-3xl  my-4 hover:shadow-xl hover:scale-105 overflow-hidden">
            <div className=" text-white flex items-center absolute rounded-full py-5 px-5  shadow-xl bg-[#33A317] -top-4">
              <img
                src={oceanzeroicon5}
                alt="oceanzero-icon5"
                className="h-8 w-8"
              />
            </div>
            <div className="mt-8">
              <h1 className="text-md sm:text-md md:text-lg font-semibold my-2 text-center ">
                Predictive CII, EU ETS
              </h1>
              <p className="text-xs sm:text-sm md:text-md text-[#747070] ">
                Our team of hydrodynamics experts demonstrates excellence in
                monitoring vessel performanceand fuel consumption.
              </p>
            </div>
          </div>
          {/* 6 card */}
          <div className="relative flex justify-items-center justify-center bg-white py-6 px-6 rounded-3xl  my-4 hover:shadow-xl hover:scale-105 overflow-hidden">
            <div className=" text-white flex items-center absolute rounded-full py-5 px-5 shadow-xl bg-[#33A317] -top-4">
              <img
                src={oceanzeroicon6}
                alt="oceanzero-icon5"
                className="h-8 w-8"
              />
            </div>
            <div className="mt-8">
              <h1 className="text-md sm:text-md md:text-lg font-semibold my-2 text-center ">
                EU/UK MRV & Compliance
              </h1>
              <p className="text-xs sm:text-sm md:text-md text-[#747070] ">
                A suite of services dedicated to evaluating Monitoring Plans
                (MP), validating Emission Reports (ER), and issuing the Document
                of Compliance (DOC) in alignment with the EU-MRV Regulation.We
                provide flawless service in report generation.
              </p>
            </div>
          </div>
        </div>
     
    </>
  );
};

export default Oceannzerocard;
