import React, { useState } from "react";
import analytics_img from "./Assets/image/analytics_img.png";
import charteringSection_img from "./Assets/image/charteringSection_img.png";
import financeSection_img from "./Assets/image/financeSection_img.png";
import opertionSection_img from "./Assets/image/operationSection_img.png";
import { OceannVmSection } from "./OceannVmSection";

export const MartimeMasters = () => {
  const [currentSection, setcurrentSection] = useState("Chartering");
  const oceannVmSections = [
    {
      route : "/product/chartering",
      title: "Chartering",
      heading: "MaritimeMasters: Navigating Your Chartering Dreams",
      content:
        "Voyage chartering  Solutions offer a whole chartering workflow from Voyage estimation , Optimising voyage planning, Vessel scheduling, Cargo Planning and freight Contract Management process.",
      image: charteringSection_img,
    },
    {
      route : "/product/operations",
      title: "Operations",
      heading: "OceanNavigo: Seamlessly Managing Maritime Ventures",
      content:
        "theoceann.com capture the complete workflow of Port fixture operation for various kind of time charter and voyage charter contract which increase the productivity of operator by more than 20%.",
      image: opertionSection_img,
    },
    {
      route : "/product/oceann-finance",
      title: "Finance",
      heading: "OceanFunds: Navigating Your Ship Financing Journey",
      content:
        "In this ever-evolving maritime landscape, securing appropriate funding for your ship cargo ventures is paramount. Let us guide you through the various aspects of ship cargo financing and illuminate the path to financial stability and operational excellence.",
      image: financeSection_img,
    },
    {
      route : "/product/oceann-analytics",
      title: "Analytics",
      heading: "Streamlined Insights for Strategic Navigation",
      content:
        "In the ever-evolving world of shipping and logistics, informed decision-making is the wind in your sails. Welcome to our Report & Analytics section, a dedicated space designed to equip shipping companies with the insights and tools they need to sail confidently through the complex waters of the maritime industry.",
      image: analytics_img,
    },
  ];

  return (
    <section className="flex mx-[4rem] max-sm:mx-[1rem] justify-center items-center flex-col  mt-[3rem] max-md:justify-start">
      <div className="flex mb-[3rem] justify-center">
        <div className="text-center">
          <h3 className="text-[#003E78] capitalize font-semibold text-[2rem] mb-2">
            <span className=" border-b-4 border-[#F39C12] ">Oceann </span> VM
          </h3>
          <p className="p-5 text-sm sm:text-md md:text-md font-semibold">
            OceannVM, the Integrated Freight Management Platform designed to
            streamline and enhance your freight operations, no matter where in
            the world you're sailing.
          </p>
        </div>
      </div>
      <main className="flex flex-col items-center">
      
        <div className="text-[#7C8598] max-md:flex-col flex  items-center max-sm:justify-start max-md:bg-white bg-[#EFF2F8] rounded-[29px]">
          {oceannVmSections.map(({ title, heading, content, image }) => {
            return (
              <button
                style={{
                  backgroundColor: currentSection === title && "#F39C12" ,
                  color: currentSection === title ? "#FFFFFF" : "#7C8598",
                }}
                onClick={() => setcurrentSection(title)}
                key={title}
                className="px-14 py-2 max-sm:px-4 max-sm:py-1 text-[white]  rounded-3xl"
              >
                {title}
              </button>
            );
          })}
        </div>
        {oceannVmSections
          .filter(({ route, title, heading, content, image }) => {
            return title === currentSection;
          })
          .map(({ route ,title, heading, content, image }) => {
            return (
              <OceannVmSection
                route={route}
                title={title}
                heading={heading}
                content={content}
                image={image}
                key={title}
              />
            );
          })}
      </main>
    </section>
  );
};
