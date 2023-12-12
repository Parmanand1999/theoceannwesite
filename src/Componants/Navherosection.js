import React from "react";
import baground_video from "./Assets/videos/home_video.mp4";
import { useNavigate } from "react-router-dom";
// import gifimage from "./Assets/videos/Frontpage Gif.gif"
const Navherosection = () => {
  const navigator = useNavigate();
  return (
    <>
      <div className="h-[85vh] flex items-start justify-center relative">
        {/* <img src={gifimage} 
        className="w-full h-full  object-center  absolute top-0 left-0 "
        alt="gif"/> */}
        <video
          loop
          autoPlay
          muted
          className="absolute w-full h-full object-cover object-center top-0 left-0"
          style={{
            minHeight: "85vh",
            minWidth: "100%",
            width: "100%",
            height: "auto",
          }}
        >
          <source src={baground_video} type="video/mp4"></source>
        </video>
        <div className="text-center text-[#FFF] text-2xl z-10">
          <div className="mb-[4rem] mt-48 sm:mt-32">
            <h2 className="font-extrabold max-sm:text-[1.3rem] mb-4 ml-5 mr-5 ">
              Transforming Bulk Maritime Trading with <br />
              <span className="text-[#F39C12] max-sm:text-[1.3rem]  mb-4 ml-4 max-sm:mx-2  font-extrabold">
                Intelligence Innovation
              </span>
            </h2>

            <button
              onClick={() => navigator("/demo")}
              className="bg-[#F39C12] rounded-full text-white text-[1.2rem]   max-sm:text-[1rem]  px-6 py-2"
            >
              Get started
            </button>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default Navherosection;
