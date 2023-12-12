import React from "react";
import oceannApi_img_1 from "../Assets/oceannApi_assests/oceannApi_img_1.png";
import oceannApi_img_2 from "../Assets/oceannApi_assests/oceann_api_img_2.png";
import oceannApi_img_3 from "../Assets/oceannApi_assests/oceannApi_img_3.png";
import oceannApi_img_4 from "../Assets/oceannApi_assests/oceannApi_img_4.png";
import oceannApi_img_5 from "../Assets/oceannApi_assests/oceannApi_img_5.png";
import { useInView } from "react-intersection-observer";
export const OceannApi = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "0px",
  });

  return (
    <>
      {/* Oceann API */}
      <div
        ref={ref}
        className="h-[85vh] w-full flex justify-center items-center relative"
      >
        {inView && (
          <img
            src={oceannApi_img_1}
            alt=""
            className="absolute w-full h-[85vh] left-0 top-0 z-0"
          />
        )}

        <div className="text-[#FEFEFE] flex  flex-col justify-center  font-extrabold max-sm:text-[2rem] text-[3rem] z-10">
          <h1 className="text-center"> Oceann API</h1>
          <p className="text-center text-[1.5rem] max-sm:text-[1rem]">
            Connecting digital voids with effective bridges
          </p>
        </div>
      </div>

      <div className="w-[80%] mx-auto">
        {/* Establish your unique ties */}
        <div className="flex flex-col text-center max-md:text-center  mx-auto mt-[10%]">
          <h1 className="max-md:mb-[5%]  text-xl max-lg:text-lg max-md:text-md  font-extrabold  ">
            <span className="border-b-4 border-yellow-500"> Establish</span> {" "}your unique ties
          </h1>
          <p className="text-md mt-4 max-lg:text-sm max-md:text-xs">
            Exchange information between TheOceann and external third-party
            solutions via two-way connections, offering endless integration
            opportunities and complete flexibility. This is a fundamental aspect
            of leveraging APIs for maritime management within TheOceann.
          </p>
        </div>

        {/* Retrieve and send data in real-time
         */}
        <div className="flex max-sm:text-center   max-md:flex-col-reverse mt-[10%] sm:justify-between gap-[5%]">
          <div className="w-[50%] max-md:w-[100%]">
            <h1 className="text-xl max-lg:text-lg max-md:text-md   font-extrabold mb-[5%] text-black max-md:m-[10%] max-md:text-center">
              {" "}
              Retrieve and send <br />
              <span className="border-b-4 border-[#F39C12] ">data in</span>{" "}
              real-time
            </h1>
            <p className="text-md max-md:w-[100%] max-lg:text-sm max-md:text-xs">
              The maritime commerce API module at TheOceann equips IT
              professionals and maritime decision-makers with the ability to
              effortlessly exchange real-time data with a multitude of external
              solutions. This empowerment serves the interests of vital
              stakeholders, streamlines operational efficiency, and enables
              data-informed decision-making.
            </p>
          </div>
          <img
            src={oceannApi_img_2}
            alt="imagesAbout"
            className="rounded-2xl w-[40%] max-md:w-[100%]"
          ></img>
        </div>

        {/* We offer authentication for our APIs. */}
        <h1 className=" text-xl mt-[5%] text-center max-lg:text-lg max-md:text-md  font-extrabold  ">
          <span className="border-b-4 border-[#F39C12] "> Attrib</span>
          utes of Oceann API’s
        </h1>

        {/* Two-Path Data Interaction*/}
        <div className="flex flex-col text-md  max-lg:text-sm max-md:text-xs  gap-4 mt-6">
          <div className="flex flex-col max-sm:items-center sm:flex-row justify-between gap-4">
            <div className="flex p-[1rem]  max-sm:w-[100%]  w-[40%] h-[130px] items-center gap-2 rounded-lg border border-opacity-56 border-gray-300 bg-white shadow-md">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 61 60"
                fill="none"
              >
                <g clip-path="url(#clip0_732_418)">
                  <path
                    d="M31.5 55C17.6925 55 6.5 43.8075 6.5 30C6.5 16.1925 17.6925 5 31.5 5C45.3075 5 56.5 16.1925 56.5 30C56.5 43.8075 45.3075 55 31.5 55ZM29.0075 40L46.6825 22.3225L43.1475 18.7875L29.0075 32.93L21.935 25.8575L18.4 29.3925L29.0075 40Z"
                    fill="#003E78"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_732_418">
                    <rect
                      width="60"
                      height="60"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="61"
                height="60"
                viewBox="0 0 61 60"
                fill="none"
                className="w-[50px] h-[50px]"
              >
                <g clip-path="url(#clip0_732_418)">
                  <path
                    d="M31.5 55C17.6925 55 6.5 43.8075 6.5 30C6.5 16.1925 17.6925 5 31.5 5C45.3075 5 56.5 16.1925 56.5 30C56.5 43.8075 45.3075 55 31.5 55ZM29.0075 40L46.6825 22.3225L43.1475 18.7875L29.0075 32.93L21.935 25.8575L18.4 29.3925L29.0075 40Z"
                    fill="#003E78"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_732_418">
                    <rect
                      width="60"
                      height="60"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <p className="w-[70%]">We offer authentication for our APIs.</p>
            </div>
            <div className="flex p-[1rem]  max-sm:w-[100%]  w-[40%] h-[130px] items-center gap-2 rounded-lg border border-opacity-56 border-gray-300 bg-white shadow-md">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 61 60"
                fill="none"
              >
                <g clip-path="url(#clip0_732_418)">
                  <path
                    d="M31.5 55C17.6925 55 6.5 43.8075 6.5 30C6.5 16.1925 17.6925 5 31.5 5C45.3075 5 56.5 16.1925 56.5 30C56.5 43.8075 45.3075 55 31.5 55ZM29.0075 40L46.6825 22.3225L43.1475 18.7875L29.0075 32.93L21.935 25.8575L18.4 29.3925L29.0075 40Z"
                    fill="#003E78"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_732_418">
                    <rect
                      width="60"
                      height="60"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="61"
                height="60"
                viewBox="0 0 61 60"
                fill="none"
                className="w-[50px] h-[50px]"
              >
                <g clip-path="url(#clip0_732_418)">
                  <path
                    d="M31.5 55C17.6925 55 6.5 43.8075 6.5 30C6.5 16.1925 17.6925 5 31.5 5C45.3075 5 56.5 16.1925 56.5 30C56.5 43.8075 45.3075 55 31.5 55ZM29.0075 40L46.6825 22.3225L43.1475 18.7875L29.0075 32.93L21.935 25.8575L18.4 29.3925L29.0075 40Z"
                    fill="#003E78"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_732_418">
                    <rect
                      width="60"
                      height="60"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <p className="w-[70%]">We furnish comprehensive API documentation.</p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex p-[1rem]  w-[40%] max-sm:w-[100%] h-[130px] items-center gap-2 rounded-lg border border-opacity-56 border-gray-300 bg-white shadow-md">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 61 60"
                fill="none"
              >
                <g clip-path="url(#clip0_732_418)">
                  <path
                    d="M31.5 55C17.6925 55 6.5 43.8075 6.5 30C6.5 16.1925 17.6925 5 31.5 5C45.3075 5 56.5 16.1925 56.5 30C56.5 43.8075 45.3075 55 31.5 55ZM29.0075 40L46.6825 22.3225L43.1475 18.7875L29.0075 32.93L21.935 25.8575L18.4 29.3925L29.0075 40Z"
                    fill="#003E78"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_732_418">
                    <rect
                      width="60"
                      height="60"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="61"
                height="60"
                viewBox="0 0 61 60"
                fill="none"
                className="w-[50px] h-[50px]"
              >
                <g clip-path="url(#clip0_732_418)">
                  <path
                    d="M31.5 55C17.6925 55 6.5 43.8075 6.5 30C6.5 16.1925 17.6925 5 31.5 5C45.3075 5 56.5 16.1925 56.5 30C56.5 43.8075 45.3075 55 31.5 55ZM29.0075 40L46.6825 22.3225L43.1475 18.7875L29.0075 32.93L21.935 25.8575L18.4 29.3925L29.0075 40Z"
                    fill="#003E78"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_732_418">
                    <rect
                      width="60"
                      height="60"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <p className="w-[70%]">
                We deliver real-time capabilities to improve product request and
                response, complete with a context menu.'
              </p>
            </div>
          </div>
        </div>

        {/* Enable a comprehensive array of integrations.*/}
        <div className="flex mt-[10%] mb-[10%] sm:justify-between gap-[5%] max-md:flex-col">
          <img
            src={oceannApi_img_3}
            alt="imagesAbout"
            className="rounded-2xl w-[40%]  max-md:w-[100%]"
          ></img>

          <div className="w-[50%] max-md:w-[100%]">
            <h1 className="text-xl max-lg:text-lg max-md:text-md   font-extrabold mb-[5%] text-black max-md:m-[10%] max-md:text-center">
              {" "}
              Two-Path Data <br />
              <span className="border-b-4 border-[#F39C12] ">Intera</span>ction
            </h1>
            <p className="text-md max-md:w-[100%] max-lg:text-sm max-md:text-xs">
              TheOceann's APIs are equipped for two-way integration, enabling
              you to not only collect essential inputs from your third-party
              solutions but also deliver timely data outputs from TheOceann.
              This synchronization ensures that your solutions are empowered by
              the same timely and precise data, promoting well-informed
              decision-making.
            </p>
          </div>
        </div>

        {/* Grow Your Network as Technology Evolves */}
        <div className=" md:flex md:flex-row-reverse ">
        <img
            src={oceannApi_img_4}
            alt="imagesAbout"
            className="rounded-2xl max-sm:mt-[2rem] md:w-[40%] "
          ></img>
          <div>
          <h1 className="text-xl max-lg:text-lg max-md:text-md   font-extrabold mb-[5%] text-black max-md:m-[10%] max-md:text-center">
            {" "}
            Enable a comprehensive <br />
            <span className="border-b-4 border-[#F39C12] ">array</span>
            {" "} of integrations.
          </h1>
          <p className="text-md max-md:w-[100%] max-lg:text-sm max-md:text-xs">
            The REST APIs provided by TheOceann offer versatility, accommodating
            both GET and POST requests. This empowers you with the freedom to
            forge your unique data connections with a diverse spectrum of
            external solutions.
          </p>
          </div>
        </div>

        <div className=" md:flex  md:flex-row-reverse mt-[10%] sm:justify-between gap-[5%]">
          
          <div className="w-[50%] max-md:w-[100%]">
            <h1 className="text-xl max-lg:text-lg max-md:text-md   font-extrabold mb-[5%] text-black max-md:m-[10%] max-md:text-center">
              {" "}
              Grow Your Network as
              <br />
              <span className="border-b-4 border-[#F39C12] ">Techn</span>ology
              Evolves
            </h1>
            <p className="text-md  max-md:w-[100%] max-lg:text-sm max-md:text-xs">
              TheOceann APIs module empowers continuous connection growth,
              keeping you at the forefront of evolving technology and laying the
              foundation for a comprehensive, high-caliber solution centered
              around TheOceann.
            </p>
          </div>
          <img
            src={oceannApi_img_5}
            alt="imagesAbout"
            className="rounded-2xl max-sm:mt-[2rem] w-[40%] max-md:w-[100%]"
          ></img>
        </div>
      </div>
    </>
  );
};
