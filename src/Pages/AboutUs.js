import React from "react";
import Aboutimage1 from "../Componants/Assets/About-img/About-img-1.png";
import Aboutimage2 from "../Componants/Assets/About-img/About-img-2.png";
import Aboutimage3 from "../Componants/Assets/About-img/About-img-3.png";
import Aboutimage4 from "../Componants/Assets/About-img/About-img-4.png";

const AboutUs = () => {
  return (
    <>
      <div className="w-[80%] mx-auto mt-[15vh]">
        {/* <div className=""> */}
          <div className=" text-center mx-auto ">
            <h1 className="text-2xl max-lg:text-xl max-md:text-lg font-bold text-center mb-[1rem]">
              About Us
            </h1>
            <p className="text-[#797979] w-[60%] max-md:w-[100%] mx-auto text-center text-md max-lg:text-sm max-md:text-xs">
              We are here to help maritime kingdom to digitalise ,standardise
              and simplify the whole process of Dry and Liquid Bulk commodities
              commercial trade and maritime fleet management with high level of
              market intelligence enterprise platform.
            </p>
          </div>
          <div className="flex gap-2 justify-center mt-[2rem]">
            <img
              src={Aboutimage1}
              alt="cdfxv"
              className="w-[33rem] rounded-2xl"
            />
            <img
              src={Aboutimage2}
              alt=""
              className="w-[16rem] rounded-2xl max-md:hidden"
            />
          </div>
        {/* </div> */}
        <div className="flex max-md:flex-col max-md:text-center  mx-auto mt-[10%] gap-5">
          <h1 className="w-[20%] max-md:w-[100%] max-md:mb-[5%]  text-xl max-lg:text-lg max-md:text-md  font-extrabold  ">
           <span className="border-b-4 border-[#F39C12] "> What w</span>e do
            
          </h1>
          <p className="text-md w-[80%] max-md:w-[100%] p-3  max-lg:text-sm max-md:text-xs">
            At TheOceann, we take immense pride in being your go-to enterprise
            platform, carefully crafted by the expertise of Maritime Info Lab
            Limited, to cater to the unique needs of ship owners, charterers,
            operators, cargo traders, and brokers. Let us delve deeper into our
            story.
          </p>
        </div>

        <div className="flex  max-md:flex-col-reverse mt-[10%] gap-[5%]">
          <div className="w-[50%] max-md:w-[100%]">
            <h1 className="text-xl max-lg:text-lg max-md:text-md   font-extrabold mb-[5%] text-black max-md:m-[10%] max-md:text-center">
              {" "}
              <span className="border-b-4 border-[#F39C12] ">Our Or</span>igin
             
            </h1>
            <p className="text-md max-md:w-[100%] max-lg:text-sm max-md:text-xs">
              TheOceann was conceived by a dedicated team of young maritime
              professionals who share a profound background in the shipping
              industry. Driven by the desire to revolutionize the digital
              landscape for commercial freight management, our platform was
              born. We recognized the evolving demands of ship owners,
              charterers, cargo traders, brokers, and this realization fueled
              our commitment to creating a dynamic, digital solution that meets
              their every requirement.
            </p>
          </div>
          <img
            src={Aboutimage3}
            alt="imagesAbout"
            className="rounded-2xl w-[35%] max-md:w-[100%]"
          ></img>
        </div>

        <div className="flex mt-[10%] mb-[10%] gap-[5%] max-md:flex-col">
          <img
            src={Aboutimage4}
            alt="imagesAbout"
            className="rounded-2xl w-[35%]  max-md:w-[100%]"
          ></img>

          {/* <div className="w-[50%] max-md:w-[100%]">
            <div className="flex  flex-col justify-items-center m-[10%]">
              <div className="flex  flex-col justify-items-center items-center">
                <h1 className="text-xl max-lg:text-lg max-md:text-md  font-extrabold  text-black  max-md:text-center">
                  Our Expertise
                </h1>
                <div className="border-b-4 w-[20%]  border-[#F39C12] "></div>
              </div>
            </div>
            <p className="text-md max-lg:text-sm max-md:text-xs">
              We're proud to be guided by industry specialists who have amassed
              decades of experience in the maritime sector. This accumulated
              knowledge serves as the cornerstone of our platform's excellence.
              It empowers us to continuously deliver innovative solutions and
              stay at the forefront of the ever-changing industry, all while
              maintaining an unwavering passion for our craft.
            </p>
            <p className="text-md max-lg:text-sm max-md:text-xs">
              In essence, TheOceann represents a blend of youthful dynamism and
              seasoned expertise, united by a common mission to provide
              comprehensive, cutting-edge solutions for all your maritime needs.
            </p>
          </div> */}

          <div className="w-[50%] max-md:w-[100%]">
            <h1 className="text-xl max-lg:text-lg max-md:text-md  font-extrabold mb-[5%] text-black max-md:m-[10%] max-md:text-center">
              <span className="border-b-4 border-[#F39C12] ">Our Ex</span>pertise
            
            </h1>
            <p className="text-md max-lg:text-sm max-md:text-xs">
              We're proud to be guided by industry specialists who have amassed
              decades of experience in the maritime sector. This accumulated
              knowledge serves as the cornerstone of our platform's excellence.
              It empowers us to continuously deliver innovative solutions and
              stay at the forefront of the ever-changing industry, all while
              maintaining an unwavering passion for our craft.
            </p>
            <p className="text-md max-lg:text-sm max-md:text-xs">
              In essence, TheOceann represents a blend of youthful dynamism and
              seasoned expertise, united by a common mission to provide
              comprehensive, cutting-edge solutions for all your maritime needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
