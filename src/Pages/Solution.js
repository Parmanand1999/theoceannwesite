import React from "react";
import { BsGraphUp } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { BiMailSend } from "react-icons/bi";
import { RiShipLine } from "react-icons/ri";
import { RiTimerLine } from "react-icons/ri";
import { TbPlayerTrackNext } from "react-icons/tb";

import productimg1 from "../Componants/Assets/Product-img/Productimg-1.png";
import productimg2 from "../Componants/Assets/Product-img/product-img2.png";
import productimg3 from "../Componants/Assets/Product-img/product-img3.png";
import productimg4 from "../Componants/Assets/Product-img/product-img4.png";
import productimg5 from "../Componants/Assets/Product-img/product-img5.png";
import productimg6 from "../Componants/Assets/Product-img/product-img6.png";
import productimg7 from "../Componants/Assets/Product-img/product-img7.png";
import productimg8 from "../Componants/Assets/Product-img/product-img8.png";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Solution = () => {
  const cardData = [
    {
      title: "Oceann AI",
      description:
        "AI-Enabled Trade Intelligence utilizes artificial intelligence to provide advanced data analysis, predictive insights, and tailored solutions for enhancing decision-making, optimizing supply chains, and gaining a competitive edge in the global market.",
      path: "/solution/oceann-ai",
    },
    {
      title: "Oceann VM",
      description:
        "OceannVM, the Integrated Freight Management Platform designed to streamline and enhance your freight operations, no matter where in the world you're sailing.",
      path: "/solution/oceann-vm",
    },
    {
      title: "Oceann ZERO",
      description:
        "OceannZero by The oceann stands as a cutting-edge analytics platform designed to enhance vessel operations.",
      path: "/product/oceann-zero",
    },
    {
      title: "Oceann BI",
      description:
        "In the ever-evolving world of shipping and logistics, informed decision-making is the wind in your sails.",
      path: "/solution/oceann-bi",
    },
    {
      title: "Oceann Mail",
      description:
        "Oceann Mail uses advanced algorithms to sort and prioritize maritime data, delivering users the most pertinent information. This streamlines decision-making, enhances efficiency, and enables rapid responses to changing maritime conditions.",
      path: "/solution/oceann-mail",
    },
    {
      title: "Oceann API",
      description:
        "Ocean API provides custom data. Also used to enable communication between different software systems.",
      path: "/solution/oceann-api",
    },
  ];

  const Navigate = useNavigate();
  return (
    <>
      <div>
        <div className="flex max-md:flex-col justify-between w-full mt-[18%] sm:mt-[8%]">
          <div className="flex flex-col justify-center justify-items-center ml-[5%]">
            <h1 className="text-xl  max-lg:text-lg max-md:text-md max-sm:text-sm font-medium">
              Commercial Shipping
            </h1>
            <h1 className="text-xl max-lg:text-lg max-md:text-md max-sm:text-sm font-medium text-[#003E78]">
              Intelligence Solution
            </h1>
            <p className="text-lg  max-lg:text-md max-md:text-sm mt-2">
              Modernizing global shipping with efficient, secure, and
              eco-friendly solutions
            </p>
            <p
              class="text-md  max-lg:text-sm max-md:text-sm  mt-8 "
              onClick={() => Navigate("/demo")}
            >
              <span class="border border-[#097DA8] text-[#097DA8] px-10 py-3 rounded-3xl">
                Learn More
              </span>
            </p>
          </div>
          <div className="float-right w=[60%]">
            <img src={productimg1} alt="imgSolution" className="bg-cover " />
          </div>
        </div>

        <div class="bg-[#479FBF] w-full flex flex-col items-center justify-center sm:p-0 p-10 ">
          <h1 class="text-white font-medium text-2xl max-sm:text-md max-md:text-lg sm:pb-10 p-5  text-center">
            Solutions which we provide
          </h1>
          <div class="grid grid-cols-3 max-sm:grid-cols-1 md:grid-cols-3  gap-5 justify-center items-center pb-[10%]">
            <div class="flex flex-col justify-center items-center">
              <div class=" sm:w-20 md:w-[6rem] bg-[#2C6983] rounded-full flex justify-center items-center p-10 sm:p-[1.5rem] max-sm:p-[1.5rem] ">
                <BsGraphUp class="text-white text-2xl max-sm:text-lg" />
              </div>
              <span class="text-[#FEFFBC] text-sm md:text-md sm:text-sm mt-2 text-center">
                Advanced Data Analytics
              </span>
            </div>
            <div class="flex flex-col justify-center items-center">
              <div class=" sm:w-20 md:w-[6rem] bg-[#2C6983] rounded-full flex justify-center items-center p-10 sm:p-[1.5rem] max-sm:p-[1.5rem]">
                <GoLocation class="text-white text-2xl max-sm:text-lg" />
              </div>
              <span class="text-[#FEFFBC] text-sm md:text-md sm:text-sm mt-2 text-center">
                Real-Time Monitoring
              </span>
            </div>
            <div class="flex flex-col justify-center items-center">
              <div class=" sm:w-20 md:w-[6rem] bg-[#2C6983] rounded-full flex justify-center items-center p-10 sm:p-[1.5rem] max-sm:p-[1.5rem]">
                <BiMailSend class="text-white text-2xl max-sm:text-lg" />
              </div>
              <span class="text-[#FEFFBC] text-sm md:text-md sm:text-sm mt-2 text-center">
                AI Enabled Mail Sorting
              </span>
            </div>
            <div class="flex flex-col justify-center items-center">
              <div class=" sm:w-20 md:w-[6rem] bg-[#2C6983] rounded-full flex justify-center items-center p-10 sm:p-[1.5rem] max-sm:p-[1.5rem]">
                <RiShipLine class="text-white text-2xl max-sm:text-lg" />
              </div>
              <span class="text-[#FEFFBC] text-sm md:text-md sm:text-sm mt-2 text-center">
                Bunker Planning
              </span>
            </div>
            <div class="flex flex-col justify-center items-center">
              <div class=" sm:w-20 md:w-[6rem] bg-[#2C6983] rounded-full flex justify-center items-center p-10 sm:p-[1.5rem] max-sm:p-[1.5rem]">
                <RiTimerLine class="text-white text-2xl max-sm:text-lg" />
              </div>
              <span class="text-[#FEFFBC] text-sm md:text-md sm:text-sm mt-2 text-center">
                Voyage Scheduling
              </span>
            </div>
            <div class="flex flex-col justify-center items-center">
              <div class=" sm:w-20 md:w-[6rem] bg-[#2C6983] rounded-full flex justify-center items-center p-10 sm:p-[1.5rem] max-sm:p-[1.5rem]">
                <TbPlayerTrackNext class="text-white text-2xl max-sm:text-lg" />
              </div>
              <span class=" text-[#FEFFBC] text-sm md:text-md sm:text-sm mt-2 text-center">
                VSPM (Vessel speed predictive Matrices)
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-items-center justify-center items-center mx-auto">
          <img
            src={productimg2}
            alt="imgproducts2"
            className=" bg-cover h-[200px] md:h-[500px] lg:h-[600px] align-middle "
          />
        </div>
        <h1 className="text-xl max-lg:text-lg max-md:text-md max-sm:text-sm font-bold text-[#212121] mb-[5%] text-center">
          <span className="border-b-8 max-md:border-b-4  border-[#F39C12]">
            {" "}
            Our Intell
          </span>
          igent Solution
        </h1>
        {/* Cards */}
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {/* cards item 1 */}

          {cardData.map(({ title, description, path, index }) => (
            <Link to={path}>
              <div
                class="card hover:shadow-2xl pr-[7%] pl-[7%] pt-[15%] pb-[15%] rounded-3xl relative overflow-hidden hover:scale-105 md:h-96 lg:h-80 group"
                key={index}
              >
                <h1 class="text-xl max-lg:text-lg max-md:text-md font-bold">
                  {title}
                </h1>
                <p class="text-md max-md:text-sm">{description}</p>
                <div class="border-4 max-md:border-b-2 border-[#003E78] w-[90%] absolute bottom-[10%]"></div>
                <div className=" absolute w-24 h-24 bg-yellow-400 rounded-full transition-transform duration-300 transform -top-10 -right-10 group-hover:scale-125 group-hover:w-32 group-hover:h-32 group-hover:bg-yellow-400"></div>
              </div>
            </Link>
          ))}
        </div>

        <div className="shadow-2xl p-[5%] ">
          <h1 className=" text-md text-center sm:text-md md:text-lg lg:text-xl font-semibold text-[#212121] ">
            <span className="border-b-4 border-[#003E78]">Stream</span>lined
            Insights for Strategic Navigation
          </h1>
          <div className="flex max-md:flex-col-reverse justify-center items-center justify-items-center place-items-center w-[87%] mx-auto border-b-2 border-r-2 ">
            <p className="w-[50%] max-md:w-full text-[#747070] text-[1rem] md:text-[1.2 rem] lg:text-[1.5rem]   ">
              TheOceann.com automate all kind of voyage accounting during the
              entire flow of supply chain with all stakeholder. Workflow capture
              the accounting, invoicing, vendor selection, payment transaction
              entry  with systematic and standardise way.
            </p>
            <img
              src={productimg3}
              alt="product-img3"
              className="w-[50%] h-50  md:h-auto max-md:w-full"
            />
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 w-[80%] mx-auto mt-5">
          <div class="relative group">
            <img
              src={productimg4}
              alt="product-img4"
              class="w-full h-64 object-cover"
            />
            <h1 class="  text-lg  max-lg:text-md max-md:text-sm font-bold absolute bottom-0 left-0 right-0 p-4 bg-opacity-50 text-white text-center group-hover:opacity-100  transition-opacity">
              Operations
            </h1>
          </div>

          <div class="relative group">
            <img
              src={productimg5}
              alt="product-img5"
              class="w-full h-64 object-cover"
            />
            <h1 class="  text-lg  max-lg:text-md max-md:text-sm font-bold absolute bottom-0 left-0 right-0 p-4 bg-opacity-50 text-white text-center group-hover:opacity-100  transition-opacity">
              Decarbonization
            </h1>
          </div>

          <div class="relative group">
            <img
              src={productimg6}
              alt="Iproduct-img6"
              class="w-full h-64 object-cover"
            />
            <h1 class="  text-lg  max-lg:text-md max-md:text-sm font-bold  absolute bottom-0 left-0 right-0 p-4 bg-opacity-50 text-white text-center group-hover:opacity-100  transition-opacity">
              AI Enabled Communication
            </h1>
          </div>

          <div class="relative group">
            <img
              src={productimg7}
              alt="product-img7"
              class="w-full h-64 object-cover"
            />
            <h1 class="  text-lg  max-lg:text-md max-md:text-sm font-bold  absolute bottom-0 left-0 right-0 p-4 bg-opacity-50 text-white text-center group-hover:opacity-100  transition-opacity">
              Finance Analysis
            </h1>
          </div>
          <div class="relative group">
            <img
              src={productimg8}
              alt="product-img8"
              class="w-full h-64 object-cover"
            />
            <h1 class=" text-lg  max-lg:text-md max-md:text-sm font-bold absolute bottom-0 left-0 right-0 p-4 bg-opacity-50 text-white text-center group-hover:opacity-100  transition-opacity">
              AI Enabled Mail Sorting
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Solution;
