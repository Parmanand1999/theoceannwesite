import React from "react";
import backgroundImage2 from "./Assets/image/home_img_2.png";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigator = useNavigate()
  const divStyle = {
    backgroundImage: `url(${backgroundImage2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width:"90%",
    margin:"auto"
  };

  return (
    <div
      style={divStyle}
      className="mx-[3rem] max-sm:max-[1rem] text-white  max-lg:m-[3rem] mb-[3rem] max-md:m-[2rem]"
    >
      <div className="flex flex-col gap-5 max-sm:gap-3 text-center h-[80%] py-[3rem]">
        <h2 className=" text-[47px] max-md:[30px] max-sm:text-[25px] font-semibold">
          The <span className="text-[#00C8FF]">O</span>ceann
        </h2>
        <h3 className="text-[25px] mx-[2rem] max-sm:mx-[1rem] max-md:text-[22px] max-sm:text-[15px]">
          Welcome to our thriving Bulk Trading community!
        </h3>
        <p className="text-[18px] max-md:[15px] max-sm:text-[12px] mx-[1rem] max-sm:[1rem]">
          Celebrate the forefront of maritime digitization with The Oceann. Our
          tailored, state-of-the-art solutions empower industry leaders,
          promoting sustainability and enhancing operational profitability
        </p>
        <div>
          <button onClick={() => navigator("/knowledge-Hub/news")} className="bg-[#F39C12] mt-2 py-2 px-5  max-sm:px-4 max-sm:py-1 rounded-xl">LEARN MORE</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
