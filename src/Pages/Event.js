import React from "react";
import Eventsimg1 from "../Componants/Assets/Events-img/event-img1.png";
import Eventsimg2 from "../Componants/Assets/Events-img/Events-img2.png";
import Eventsimg3 from "../Componants/Assets/Events-img/Events-img3.png";
import { Link } from "react-router-dom";
const Event = () => {
  return (
    <>
      <div className=" flex flex-col justify-center md:flex-row-reverse items-center  gap-5 mt-3 mx-auto h-[85vh]">
        <img
          src={Eventsimg1}
          alt="oceanuimg2"
          className="bg-contain h-64 md:h-[70%] md:max-w-[40%] md:pr-10 "
        />
        <div className="flex flex-col justify-center items-start pl-10">
          <h1 className="text-md text-left sm:text-md md:text-xl font-semibold  mt-5 mb-5">
            For those,
            <br />
            who seek more
          </h1>
          <p className=" text-xs sm:text-sm md:text-md w-[80%]">
            A concise overview of the current events and trends in the maritime
            industry that you should stay informed about.
          </p>
          <Link to="/contact">
          <button className="text-white p-2 rounded-lg mt-4 bg-[#F39C12]">
            Contact us
          </button>
          </Link>
         
        </div>
      </div>
      <div className="w-[90vw] mx-auto flex flex-col justify-center items-center mt-[20%]  md:mt-0">
        <h1 className="text-md text-center sm:text-md md:text-xl font-semibold  mt-5 mb-5">
          Global Maritime Summit 2023 scheduled on 17-19 <br />
          Oct : Sarbananda Sonowal
        </h1>
        <div className=" md:flex gap-5 mt-3 mx-auto">
          <img src={Eventsimg2} alt="oceanuimg2" className="  md:w-[40%] h-96 mx-auto " />
          <ul className="text-xs sm:text-sm md:text-md  list-disc items-start w-[85%] text-left mt-5 ml-[3%]">
            <li className="text-xs sm:text-sm md:text-md ">
              Event will focus upon new investments opportunities along with
              collaborations for knowledge and technology, enhancing trade
              between nations and to promote Ease-of-Doing-Business
            </li>
            <li className="text-xs sm:text-sm md:text-md  ">
              The official brochure for the 'Global Maritime India Summit'
              unveiled
            </li>
            <li className="text-xs sm:text-sm md:text-md  ">
              More than 30 countries are expected to participate during the main
              event.
            </li>
          </ul>
        </div>
        <p className=" text-xs sm:text-sm md:text-md m-5">
          Mumbai - Shri Sarbananda Sonowal, Union Minister, MOPSW officially
          announced the Global Maritime Summit 2023 in the presence of Shri
          Shripad Naik, MOS, MOPSW and Govt Officials, Industry Experts,
          Stakeholders & others in Mumbai. GMIS 2023 is scheduled on 17th-19th
          October 2023.
        </p>
        <hr className="border-2 md:border-4 justify-start border-[#F39C12] mt-5 mb-5 w-[95%]" />
        <h1 className="text-md text-center sm:text-md md:text-xl font-semibold  mt-5 mb-5">
          SMN Tokyo : Japan scheduled on 30 August 2023
        </h1>
        <div className=" md:flex md:flex-row-reverse gap-5  mx-auto mt-[5%]">
          <img src={Eventsimg3} alt="oceanuimg2" className="  md:w-[40%]  " />

          <p className=" text-xs sm:text-sm md:text-md mt-5 md:mr-[10%]">
            The Smart Maritime Network Tokyo conference will focus on the
            digital transformation (DX) and green energy transition (GX)
            strategies in Japan's maritime industry. The conference aims to
            define and understand the essence of DX and its impact on the
            maritime sector. It also focuses on the GX strategy and its
            significance in promoting sustainable practices and adopting green
            technologies in shipping.
          </p>
        </div>
      </div>
    </>
  );
};

export default Event;
