import React from "react";
import product_img_1 from "../Componants/Assets/product_page_images/product_img_1.png";
import { useInView } from "react-intersection-observer";
import { Card } from "../Componants/productComponents/Card";
import { Macbook } from "../Componants/MacBook";
  import "../index";
import { CoreSolution } from "../Componants/CoreSolution/CoreSolution";

export const Product = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "0px",
  });

  

  const cardContent = [
    {
      color: "#1B6879",
      bgColor: "#40DDFF87",
      title: "Chartering",
      detail:
        "Discover our all-in-one maritime solutions for success through innovation and data excellence.",
      page: "chartering",
      path:"/product/chartering"
    },
    {
      color: "#108731",
      bgColor: "#40FF75B5",
      title: "Operations",
      detail:
        "Enhance maritime operations, optimize routes & ensure successful voyages with our comprehensive solutions.",
      page: "operations",
      path:"/product/operations"
    },
    {
      color: "#932481",
      bgColor: "#FF40E070",
      title: "Finance",
      detail:
        "Enhance voyage fiscal processes and ensure the protection of financial success.",
      page: "finance",
      path:"/product/oceann-finance"
    },
    {
      color: "#1D7958",
      bgColor: "#40FFBAE8",
      title: "Analysis",
      detail:
        "Gain deep insights into your maritime financial performance with our Voyage Financial Report.",
      page: "analysis",
      path:"/product/oceann-analytics"
    },
    {
      color: "#8EA025",
      bgColor: "#E4FF407A",
      title: "Report",
      detail:
        "Welcome to our Report & Analytics section, a dedicated space designed to equip shipping companies.",
      page: "report",
      path:"/product/oceann-analytics"
    },
    {
      color: "#1B6879E3",
      bgColor: "#40DDFF87",
      title: "Mail",
      detail:
        "AI-powered email solution streamlines communication, ensuring that shipping operations run more smoothly and efficiently.",
      page: "Mail",
      path:"/solution/oceann-mail"
    },
  ];

  

  return (
    <>
      <div
        ref={ref}
        className="h-[85vh] w-full flex justify-center items-center relative"
      >
        {inView && (
          <img
            src={product_img_1}
            alt=""
            className="absolute w-full h-[85vh] left-0 top-0 z-0"
          />
        )}
        <div className="flex flex-col items-center justify-center">
        <h3 className="text-[#FEFEFE]  font-bold text-center max-lg:mx-8 max-lg:text-[30px] text-[35px] z-10">
          <span className="text-[#F39C12]">
            Advanced Maritime Solutions 
          </span>
         {" "} for an  interconnected global environment
        </h3>
        <p className="text-[#FEFEFE] mx-[5rem]  text-[20px] font-bold text-center max-lg:mx-10  max-lg:text-[22px] max-sm:text-[18px]  z-10">
          Accelerate your digital journey and navigate the realities of your
          business with a market-leading commercial platform and high-integrity
          insights
        </p>
        </div>
      </div>
      <main>
        <Macbook />
        <CoreSolution />
        <div className=" mt-[1.5rem] flex justify-center">
          <div className="w-[100%]">
            <div className="flex flex-wrap gap-[1rem] w-[100%] items-center justify-center max-sm:flex-col">
              {cardContent.map(({ color, bgColor, title, detail, page ,path}) => {
                return (
                  <Card
                    color={color}
                    bgColor={bgColor}
                    title={title}
                    detail={detail}
                    page={page}
                    path={path}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
