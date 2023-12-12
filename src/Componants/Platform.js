import React from "react";
import platformImg1 from "./Assets/Platform-img/platform-img-1.png";
import businessProcessImg from "./Assets/Platform-img/stack-line 1.svg";
import deliveryTimelyImg from "./Assets/Platform-img/timer-line 1.svg";
import technologyImg from "./Assets/Platform-img/lightbulb-line 1.svg";
import innovationImg from "./Assets/Platform-img/Vector.svg";
import PlatformSection2Carts from "./Platform_section2_carts";
import checkBoxCircleImg from "./Assets/Platform-img/checkbox-circle-fill 1.svg";
import PlatformSection3Carts from "./Platform_section3_carts";
import businessLogicImg from "./Assets/Platform-img/businessLogicImg.svg";
import capabilitiesImg from "./Assets/Platform-img/capabilitiesImg.svg";
import architectureImg from "./Assets/Platform-img/architectureImg.svg";
import PlatformSection4Carts from "./Platform_section4_carts";
import section5Img from "./Assets/Platform-img/section5Img.png";
import { Link } from "react-router-dom";

export default function Platform() {
  return (
    <>
      {/* --------- section 1------------ */}
      <div
        className="h-[85vh] flex items-center"
        style={{
          backgroundImage: `url(${platformImg1})`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col justify-between max-w-2xl ml-12">
          <div className="first-child">
            <div
              style={{
                fontSize: "47px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "normal",
                textTransform: "capitalize",
              }}
            >
              <h1>Setting Sail for Seamless</h1>
              <h1 style={{ color: "#F39C12" }}>Ship Trading</h1>
            </div>
          </div>

          <div className="second-child flex">
            <div
              style={{
                color: "#9F7272",
                fontFamily: "Inter",
                fontSize: "16px",
                fontStyle: "normal",
                lineHeight: "131.9%",
              }}
            >
              <div className="max-w-xl">
                Built by a team with 50+ years of experience in maritime
                chartering, commercial, and trade areas with a proven record.
              </div>
              <Link to="/demo">
                <button
                  style={{
                    borderRadius: "10px",
                    backgroundColor: "#F39C12",
                    width: "184px",
                    height: "49px",
                    flexShrink: 0,
                    fontWeight: 600,
                    color: "white",
                    marginTop: "1.5rem",
                  }}
                >
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* --------- section 2------------ */}

      <div>
        <div className="section-2 flex flex-col items-center">
          <div
            className="first-child1"
            style={{
              fontFamily: "Poppins",
              fontSize: "40px",
              fontWeight: "500",
            }}
          >
            <h1 className="section-heading">Why theoceann.com?</h1>
          </div>
          <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 section-2-cart">
              <PlatformSection2Carts
                img={businessProcessImg}
                imgAlt="businessProcessImg"
                heading="Business Process"
                info="Built by team of 50+ years of Experience in maritime
                  chartering, commercial and trade area with proven record."
              />

              <PlatformSection2Carts
                img={innovationImg}
                imgAlt="innovationImg"
                heading="Innovation"
                info="Innovation was the key of evolution for ocean solver. Team is
                continuously dedicated to provide the best solutions to the
                industry."
              />

              <PlatformSection2Carts
                img={technologyImg}
                imgAlt="technologyImg"
                heading="Technology"
                info="With agile structure  and cloud based robust architect with
                highest security of Data with AWS cloud support."
              />

              <PlatformSection2Carts
                img={deliveryTimelyImg}
                imgAlt="deliveryTimelyImg"
                heading="Deliver timely & reliably"
                info="Cost for  integrated platform is lower the immediate offering."
              />
            </div>
          </div>
        </div>
      </div>

      {/* --------- section 3------------ */}
      <div>
        <div className="section-3 flex flex-col items-center">
          <div
            className="child1"
            style={
              {
                // fontFamily: "Poppins",
                // fontSize: "40px",
                // fontWeight: "500",
              }
            }
          >
            <h1 className="section-heading">Our Core Values</h1>
          </div>
          <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
              <PlatformSection3Carts
                img={checkBoxCircleImg}
                imgAlt="checkBoxCircleImg"
                heading="Innovation in Technology"
                info="Harnessing the latest tech trends to enhance and simplify maritime
                commercial operations."
              />

              <PlatformSection3Carts
                img={checkBoxCircleImg}
                imgAlt="checkBoxCircleImg"
                heading="Integrity in Every Deal"
                info="Ensuring every business interaction is governed by truthfulness, openness, and fairness."
              />

              <PlatformSection3Carts
                img={checkBoxCircleImg}
                imgAlt="checkBoxCircleImg"
                heading="Consistent Reliability"
                info="Our commitment to delivering dependable services every time."
              />

              <PlatformSection3Carts
                img={checkBoxCircleImg}
                imgAlt="checkBoxCircleImg"
                heading="Client-Centric Approach"
                info="Prioritizing our clients and tailoring solutions to cater to their specific maritime needs."
              />
            </div>
          </div>
        </div>
      </div>

      {/* --------- section 4------------ */}

      <div>
        <div className="section-2 flex flex-col items-center">
          <div
            className="first-child1"
            style={{
              fontFamily: "Poppins",
              fontSize: "40px",
              fontWeight: "500",
            }}
          >
            <h1 className="ml-4 section-heading">What makes us unique?</h1>
          </div>
          <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 section-2-cart">
              <PlatformSection4Carts
                img={businessLogicImg}
                imgAlt="businessLogicImg"
                firstHeading="Proven"
                heading="Business Logic"
                info="theoceann.com business logic, refined over two decades by a leading maritime organization, has been thoroughly tested and validated."
              />

              <PlatformSection4Carts
                img={capabilitiesImg}
                imgAlt="capabilitiesImg"
                firstHeading="Comprehensive"
                heading="Capabilities"
                info="With our agile and cloud-based architecture, enables remote access, advanced data sharing, and seamless integration, meeting the sophisticated data needs of modern maritime businesses"
              />

              <PlatformSection4Carts
                img={architectureImg}
                imgAlt="architectureImg"
                firstHeading="Agile"
                heading="Architecture"
                info="theoceann.com deliver the most complete suite of commercial capabilities available, and handles complex workflows like no other platform can. "
              />
            </div>
          </div>
        </div>
      </div>

      {/* --------- section 5------------ */}
      <div className=" md:flex md:flex-row-reverse w-[90%] mx-auto p-5 justify-items-center justify-between items-center">
        
        
            <div className="flex justify-center pt-3 pb-6 md:w-[30%]">
              <img
                src={section5Img}
                alt="section5Img"
                className=" h-80 items-center"
              />
            </div>
          
        
        <div className="md:w-[60%] items-center mx-auto md:mx-0">
          <h1 className="text-md  sm:text-lg md:text-xl font-semibold">
            Our Services
          </h1>
          <p>
            Navigate your way to great deals! Explore a vast ocean of
            opportunities on our ship trading website - where every voyage
            begins with the perfect vessel.
          </p>
          <Link to='/demo'>
          <button
            style={{
              borderRadius: "10px",
              backgroundColor: "#F39C12",
              width: "184px",
              height: "49px",
              flexShrink: 0,
              color: "white",
              marginTop: "1.5rem",
              fontWeight: 600,
            }}
          >
            Let's Talk
          </button>
          </Link>
          
        </div>
      </div>
    </>
  );
}
