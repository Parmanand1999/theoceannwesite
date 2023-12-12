import React from "react";
import img4 from "./Assets/image/Group1350.png";
import SocialMediaiconFooter from "./SocialMediaiconFooter";
import { Link } from "react-router-dom";

const FooterSection = () => {
  const footerStyle = {
    backgroundImage: `url(${img4})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <>
      <footer
        className="bg-white  dark:bg-gray-900 text-white mt-[4rem] "
        style={footerStyle}
      >
        <div className="grid grid-cols-4 gap-8 max-md:gap-4  px-4 w-[90%] mx-auto pt-[5%] md-px-2 max-sm:grid-cols-2 max-md:grid-cols-3 max-lg:grid-cols-4">
          <div className="text-white">
            <h3 className="text-sm sm:text-md md:text-lg w-[90%] text-left  mb-2 ">
              Products
            </h3>
            <ul className="dark:text-gray-400 font-light ">
              <li className=" max-sm:mb-0">
                
                <Link to={"/solution/oceann-mail"} className="hover:underline text-xs sm:text-sm md:text-md">
                  AI Enabled Mail Intelligence
                </Link>
              </li>
              <li className=" max-sm:mb-0">
                <Link
                  to={"/product/pre-trade-intelligence"}
                  className="hover:underline text-[0.9rem] max-md:text-[0.6rem]"
                >
                  AI Enabled Trade Intelligence
                </Link>
              </li>

              <li className=" max-sm:mb-0">
                <Link
                  to={"/solution/oceann-vm"}
                  className="hover:underline text-[0.9rem] max-md:text-[0.6rem]"
                >
                  Integrated Freight Management
                </Link>
              </li>
              <li className=" max-sm:mb-0">
                <Link
                  to={"/solution/oceann-bi"}
                  className="hover:underline text-[0.9rem] max-md:text-[0.6rem]"
                >
                  Report & Analytics
                </Link>
              </li>
              <li className=" max-sm:mb-0">
                <Link
                  to={"product/ocean-zero"}
                  className="hover:underline text-[0.9rem] max-md:text-[0.6rem]"
                >
                  Decarbonization
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-white">
            <h3 className="text-sm sm:text-md md:text-lg w-[90%] text-left  mb-2 ">
              Roles & Industries
            </h3>
            <ul className="dark:text-gray-400 font-light">
              <li className=" max-sm:mb-0 ">
                <Link
                  to={"/product/oceann-finance"}
                  className="hover:underline text-[0.9rem] max-md:text-[0.6rem]"
                >
                  Financial Markets & Trading
                </Link>
              </li>
              <li className=" max-sm:mb-0">
                <Link  to={"/solution/oceann-ai"} className="hover:underline text-[0.9rem] max-md:text-[0.6rem]">
                  Maritime Market Intelligence
                </Link >
              </li><li className=" max-sm:mb-0">
                <Link
                  to={"/product/chartering"}
                  className="hover:underline text-[0.9rem] max-md:text-[0.6rem]"
                >
                  Chartering
                </Link>
              </li>
              
              {/* <li className=" max-sm:mb-0">
                <p className="hover:underline text-[0.9rem] max-md:text-[0.6rem]">
                  Ship Brokers
                </p>
              </li> */}
              <li className=" max-sm:mb-0">
                <Link
                  to={"/product/operations"}
                  className="hover:underline text-[0.9rem] max-md:text-[0.6rem]"
                >
                  Operations
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-white">
            <h3 className="text-sm sm:text-md md:text-lg w-[90%] text-left mb-2  ">
              Explore
            </h3>
            <ul className="dark:text-gray-400 font-light">
              <li className=" max-sm:mb-0">
                <Link
                  to="/plans"
                  className="hover:underline text-[0.9rem] max-md:text-[0.6rem]"
                >
                  Plans
                </Link>
              </li>
              <li className=" max-sm:mb-0 font-light ">
                <p className="hover:underline text-[0.9rem] max-md:text-[0.6rem]">
                  Community
                </p>
              </li>
              <li className=" max-sm:mb-0">
              <Link className="hover:underline text-[0.9rem] max-md:text-[0.6rem]"
                  to={"/career"}
                  >
                
                  Careers
                  </Link>
              </li>
              <li className=" max-sm:mb-0">
              <Link
                  to="/contact"
                  className="hover:underline text-[0.9rem] max-md:text-[0.6rem]"
                >
                  Contact us 
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-white">
            <h3 className="text-sm sm:text-md md:text-lg w-[90%] text-left mb-2">
              Security
            </h3>
            <ul className="dark:text-gray-400 font-light">
              <li className=" max-sm:mb-0">
                <Link
                  to="/privacy"
                  className="hover:underline text-[0.9rem] max-md:text-[0.6rem]"
                >
                  Privacy
                </Link>
              </li>
              {/* <li className=" max-sm:mb-0">
                <Link to='/cookies'  className="hover:underline text-[0.9rem] max-md:text-[0.6rem]">
                  Coi
                </Link >
              </li> */}
            </ul>
          </div>
        </div>

        <SocialMediaiconFooter />
      </footer>
    </>
  );
};

export default FooterSection;
