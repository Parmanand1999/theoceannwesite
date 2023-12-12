import React from "react";
import BookDemoImg_1 from "../Componants/Assets/image/demoPageImg_2.png";
import { useInView } from "react-intersection-observer";

import { InlineWidget } from "react-calendly";

export const BookDemo = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "0px",
  });

  return (
    <>
      <div
        ref={ref}
        className="h-[50vh] w-full flex justify-center items-center relative"
      >
        {inView && (
          <img
            src={BookDemoImg_1}
            alt=""
            className="absolute w-full h-[40vh] left-0 top-0 z-0"
          />
        )}
        <h1 className="text-[#FEFEFE] font-extrabold max-sm:text-[2.5rem] text-[4rem] z-10">
          Book Demo
        </h1>
      </div>
     
     
      <main className="flex justify-center mt-[2rem]">
        <div className=" text-center flex flex-col justify-center items-center">
          <h3 className="text-[2.5rem] max-sm:mx-1 max-sm:text-[1.5rem] font-semibold">
            Engage with our speciality
          </h3>
          <p className="font-medium text-[1rem] max-sm:text-[.8rem]  my-4 max-sm:mx-4  mx-10 font-[roboto]">
            Schedule a demonstration to explore further the capabilities of our
            comprehensive platform and how we can assist you in tackling the
            issue and prospect related to shipping
          </p>
          <div className="flex justify-center mt-4">
            <div>
              <h3 className="text-[2rem] max-sm:text-[1.5rem]   font-semibold ">
                Explore TheOceann
              </h3>
              <hr className="w-[153px] h-[3px] border-none rounded-[30px] bg-[#F39C12]" />
            </div>
          </div>
          <div className="">
            <div>
              <p className="my-4 font-medium text-[1.2rem] max-sm:text-[.8rem]">
                Please fill out the form below to request a personalized
                demonstration.
              </p>
            </div>
            {/* <form action="" className="max-sm:mx-4 mx-[8rem]">
              <div className="flex max-sm:flex-col max-sm:gap-0 justify-between gap-[4rem]">
                <div className="w-[40%] max-sm:w-full text-start flex flex-col gap-2">
                  <div className="flex flex-col gap-1">
                    <label className="max-sm:text-[.8rem]" htmlFor="">First Name *</label>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="text"
                      placeholder="first name"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="max-sm:text-[.8rem]" htmlFor="">Business Email *</label>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="text"
                      placeholder="first name"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="max-sm:text-[.8rem]" htmlFor="">Job title *</label>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="text"
                      placeholder="first name"
                    />
                  </div>
                </div>
                <div className="w-[40%] max-sm:w-full text-start flex flex-col gap-2">
                  <div className="flex flex-col gap-1">
                    <label className="max-sm:text-[.8rem]" htmlFor="">Last Name *</label>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="text"
                      placeholder="first name"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="max-sm:text-[.8rem]" htmlFor="">Phone Number</label>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="text"
                      placeholder="first name"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="max-sm:text-[.8rem]" htmlFor="">Company *</label>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="text"
                      placeholder="first name"
                    />
                  </div>
                </div>
              </div>

              <div className="flex max-sm:flex-col max-sm:gap-[2rem] justify-between gap-[4rem] mt-[2rem]">
                <div className="w-[40%] max-sm:w-full ">
                  <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
                <div className="w-[40%] max-sm:w-full">
                  <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
              </div>
              <div className="mt-[2rem]">
                <div className="w-[40%] max-sm:w-full text-start">
                  <label className="max-sm:text-[.8rem]" htmlFor="">country</label>
                  <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
              </div>
              <div className="w-[100%] mt-[2rem]">
                <textarea
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name=""
                  id=""
                  placeholder="Leave us a message"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <p className="text-start max-sm:text-[.8rem] font-semibold mt-[1rem]">
                I consent to the storage of my data within The Ocean system for
                the purpose of receiving the requested material and occasional
                informative and promotional emails, such as webinar invitation,
                newsletter and other product updates. You have option at any
                time
              </p>
              <div className="flex max-sm:flex-col justify-start mt-[1rem]">
                <label className="inline-flex ">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-indigo-600"
                  />
                  <span className="ml-2 text-gray-700">I agree</span>
                </label>
              </div>
              <button
                type="button"
                class="focus:outline-none sm:w-full mt-5 text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
              >
                Send
              </button>
            </form> */}
           
           <div className="App" >
             <InlineWidget url="https://calendly.com/operation-ezg?hide_landing_page_details=1&hide_gdpr_banner=1" style={{width:"320px", height:"700px "}} className="bookdemoapooinment" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
