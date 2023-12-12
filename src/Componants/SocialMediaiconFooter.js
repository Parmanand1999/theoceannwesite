import React from "react";
import indeedicon from "../Componants/Assets/footer-icon/indeed-icon.png";
import twitericon from "../Componants/Assets/footer-icon/twiter-icon.png";
import facebookicon from "../Componants/Assets/footer-icon/facebook-icon.png";

const SocialMediaiconFooter = () => {
  return (
    <>
      <div className="flex max-sm:flex-col mt-[5%] justify-between  items-center pr-[3rem] max-md:pr-[2rem] pl-[3rem] max-md:pl-[2rem] ">
        <div className="flex justify-center justify-items-center  gap-3 ml-[3%] ">
          <a href="https://www.linkedin.com/company/theoceann/" target="_blank" rel="noopener noreferrer">
            <img
              src={indeedicon}
              alt="indeedicon"
              className="w-[3.3rem] h-[3.5rem] max-md:w-[1.6rem] max-md:h-[1.5rem] bg-black p-2 md:p-4 rounded-md"
            />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img
              src={twitericon}
              alt="twitericon"
              className="w-[3.3rem] h-[3.5rem] max-md:w-[1.6rem] max-md:h-[1.5rem] bg-black p-2 md:p-4 rounded-md"
            />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img
              src={facebookicon}
              alt="facebookicon"
              className="w-[3.3rem] h-[3.5rem] max-md:w-[1.6rem] max-md:h-[1.5rem] bg-black p-2 md:p-4 rounded-md"
            />
          </a>
        </div>
        
        <div className="pb-10">&nbsp;</div>
        
      </div>
    </>
  );
};

export default SocialMediaiconFooter;
