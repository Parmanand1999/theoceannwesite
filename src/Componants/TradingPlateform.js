import React from "react";
import backgroundImage2 from "./Assets/image/Frame3.png"
const TradingPlateform = () => {
  // const divStyle = {
  //   backgroundImage: `url(${backgroundImage2})`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
   
  //   display: "flex",
  //   justifyContent: "center",
    
  // };

  return (
    <>
      <div className="p-0 my-[1.5rem]  mx-[3rem] max-sm:mx-[1rem]  bg-cover  bg-center  max-md:ml-[3rem] max-md:mr-[3rem] max-sm:ml-[1rem] max-sm:mr-[1rem]  relative "  >
        <img src={backgroundImage2} alt="abcimg"/>
        
        
        <p className=" absolute top-0 left-0 right-0 text-[2.6rem] max-sm:text-[0.8rem] max-md:text-[1rem] max-lg:text-[1.5rem]   max-sm:mt-[0.8rem] mt-[2.3rem] m-[1.2rem] text-center text-white">An Inclusive Trading Platform<span className="text-[#F39C12]"> {" "} catering To all stakeholders</span></p>
      </div>
    </>
  );
};

export default TradingPlateform;

