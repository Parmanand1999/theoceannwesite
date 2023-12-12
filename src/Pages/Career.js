import React from "react";
import careerimg1 from "../Componants/Assets/Career-img/Career-img1.png";
import careerimg2 from "../Componants/Assets/Career-img/Career-img2.png";
import careerimg3 from "../Componants/Assets/Career-img/Career-img3.png";
import careerimg4 from "../Componants/Assets/Career-img/Career-img4.png";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
const Career = () => {
  return (
    <>
      <div>
        <div className=" h-[85vh]">
          <img
            src={careerimg1}
            alt="Description of the"
            className="w-full h-full  object-center  top-0 left-0 z-0"
          />
        </div>

        <div className="w-[85vw]   mx-auto">
          <h1 className="text-md text-center sm:text-lg md:text-xl font-bold text-[#474747]  md:mb-5 p-5">
            <span className="border-b-4 border-[#F39C12]">Welcome to T</span>
            heOceann Career
          </h1>
          <p className=" text-center text-xs sm:text-md md:text-md lg:text-[1.3rem] mx-auto w-[80vw] text-[#434141]" >
            At The Oceann, we believe that the hunger to innovate is a force
            that can conquer the fear of failure. If you are driven by this
            hunger, we invite you to be part of our team a group of passionate,
            aggressive, smart, talented, and result-driven individuals who are
            dedicated to making a significant impact.
          </p>
          <div className="md:flex flex-row-reverse gap-10 mt-[2rem] md:mt-[6rem] mx-auto">
            <img
              src={careerimg2}
              alt="oceannZeroimg4"
              className="md:w-[35%]  mt-10 md:mt-0"
            />
            <div className=" text-sm sm:text-md md:text-md lg:text-lg text-[#003E78]">
              <h1 className="text-md text-left sm:text-lg md:text-xl font-semibold text-[#] mt-5  p-2">
                <span className="border-b-4 border-[#F39C12]">Our Vi</span>
                sion
              </h1>
              <p className="p-2 text-xs sm:text-md md:text-md text-[#353535]">
                We are seeking individuals who are not only passionate but also
                highly motivated to dive into one of the oldest industries with
                the latest technology to bring about positive change. At The
                Oceann, we are committed to embarking on a transformative
                journey and embracing our core values.
              </p>
              <Link to={"/demo"}>
              <button className="p-1 md:p-3 w-[30%] mt-1 md:mt-3 ml-3 md:ml-0 md:w-[30%] lg:w-[20%] text-sm sm:text-md md:text-md bg-[#003E78] text-white rounded-md md:rounded-xl">
                Get Started
              </button>
              </Link>
            </div>
          </div>
          <h1 className="text-md  sm:text-lg md:text-xl font-semibold text-center text-[#003E78] mt-5  p-2">
            <span className="border-b-4 border-[#F39C12]">Our Va</span>
            lues
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  lg:gap-x-16  w-[80%] items-start mx-auto">
            <div className="flex p-10  shadow-xl rounded-lg items-center">
              <div className="text-xs md:text-sm lg:text-md flex gap-5 w-[30%]">
                <FaCheck className="bg-[#003E78] text-white w-10 h-10 p-3 md:w-14 md:h-14 md:p-2 rounded-full" />
              </div>
              <div className="w-[70%]">
                <p className="p-2 text-xs sm:text-md md:text-md lg:text-[1.3rem]">
                  Placing clients at the center & understanding their unique
                  needs.
                </p>
              </div>
            </div>

            <div className="flex p-10  shadow-xl rounded-lg items-center">
              <div className="text-xs md:text-sm lg:text-md flex gap-5 w-[30%]">
                <FaCheck className="bg-[#003E78] text-white w-10 h-10 p-3 md:w-14 md:h-14 md:p-2  rounded-full" />
              </div>
              <div className="w-[70%]">
                <p className="p-2 text-xs sm:text-md md:text-md lg:text-[1.3rem]">
                Upholding honesty, and transparency in all business transactions.
                </p>
              </div>
            </div>

            <div className="flex p-10  shadow-xl rounded-lg items-center">
              <div className="text-xs md:text-sm lg:text-md flex gap-5 w-[30%]">
                <FaCheck className="bg-[#003E78] text-white w-10 h-10 p-3 md:w-14 md:h-14 md:p-2  rounded-full" />
              </div>
              <div className="w-[70%]">
                <p className="p-2 text-xs sm:text-md md:text-md lg:text-[1.3rem]">
                Embracing technological advancements for streamlined shipping processes
                </p>
              </div>
            </div>
            <div className="flex p-10  shadow-xl rounded-lg items-center">
              <div className="text-xs md:text-sm lg:text-md flex gap-5 w-[30%]">
                <FaCheck className="bg-[#003E78] text-white w-10 h-10 p-3 md:w-14 md:h-14 md:p-2 rounded-full" />
              </div>
              <div className="w-[70%]">
                <p className="p-2 text-xs sm:text-md md:text-md lg:text-[1.3rem]">
                Dedicated to maintain reliability
                </p>
              </div>
            </div>
          </div>

          <div className=" md:flex gap-10 mt-[2rem] md:mt-[6rem] p-5 rounded-lg mx-auto bg-[#D9D9D9]">
            <img
              src={careerimg3}
              alt="careerimg3"
              className="  md:w-[35%]  "
            />
            <div >
              <h1 className="text-md text-left sm:text-lg md:text-lg lg:text-xl font-semibold text-[#003E78] mt-1 md:ml-0  md:mt-5  p-2 ">
                <span className="border-b-4 border-[#F39C12]  ">Why C</span>
                hoose Us ?
              </h1>
              <p className="p-2 md:p-5 text-xs sm:text-md md:text-md text-[#747070]">
                When you join The Oceann, you become part of a team that
                comprises world-class colleagues, all working together to
                discover innovative approaches that simplify and make commercial
                shipping more profitable than ever before. We believe in pushing
                the boundaries and exploring new horizons in the maritime
                industry.
              </p>
            </div>
          </div>
          <div className=" relative mt-[2rem] md:mt-[3rem] mx-auto mb-[75%] sm:mb-[50%] md:mb-[40%] lg:mb-[40%] xl:mb-[20%] ">
            <img src={careerimg4} alt="careerimg4" />
            <div className="text-sm absolute top-[70%] md:left-[5%] left-5 sm:text-md md:text-md lg:text-lg bg-white text-[#747070] shadow-2xl pt-2 md:pt-5 rounded-xl mx-auto w-[90%] pl-5">
              <h1 className="text-md text-left sm:text-lg md:text-lg lg:text-xl font-semibold text-[#003E78] mt-1 pl-2 md:pl-5 ">
                <span className="border-b-4 border-[#F39C12]">Ready to </span>
                Make a Difference?
              </h1>
              <div className="flex flex-col justify-center items-center justify-items-center mb-[5%]">
                <p className=" p-2 md:p-5  text-xs sm:text-md md:text-md lg:text-lg text-[#747070]">
                  If you are ready to be part of an exciting journey that values
                  innovation, passion, and tangible results, we encourage you to
                  send your resume to{" "}
                  <span className="underline text-[#003E78]">hr@theoceann.com</span>
                  <br className="md:mb-3" />
                  Join us and be a part of the team that's redefining the future
                  of commercial shipping!
                </p>
                <button className="p-2 w-[40%] sm:w-[30%] md:w-[15%] text-sm sm:text-md text-center md:text-md bg-[#003E78] text-white rounded-xl">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
