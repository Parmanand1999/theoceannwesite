import React from "react";
import tankimg from "../../src/Componants/Assets/tanker-img/tanker_bg_img.png";
import overseeimg from "../../src/Componants/Assets/tanker-img/oversee_journey_tank.png";
import proactiveimg from "../../src/Componants/Assets/tanker-img/pro_active_tank.png";
import preciselyimg from "../../src/Componants/Assets/tanker-img/precisely_assign_tank.png";
import chateringimg from "../../src/Componants/Assets/tanker-img/chartering.png";
import operationimg from "../../src/Componants/Assets/tanker-img/operation.png";
import financeimg from "../../src/Componants/Assets/tanker-img/finance.png";






const Tanker = () => {
  return (
    <>
      <div className="flex flex-col ">
        <div className="relative h-[65vh]">
          <img
            src={tankimg}
            alt="Tank Trade"
            className="w-full h-full object-cover object-center absolute top-0 left-0 z-0"
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center  ">
            <h1 className="text-md sm:text-md md:text-xl font-semibold text-white">
              Tanker Trade
            </h1>
          </div>
        </div>

        <div className="flex flex-col gap-12 lg:gap-18">

          <div className="flex flex-col gap-8 mx-4 my-4 sm:mx-16 sm:my-16 lg:gap-24 lg:mx-20 lg:my-20">
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-20 xl:mx-32 sm:mx-16">
              <div className="flex flex-2 justify-center">
                <div className="flex flex-col justify-center items-start sm:justify-start">
                  <h2 className="flex font-bold text-md leading-4 md:text-lg md:leading-8  xl:text-[28px] xl:leading-8">
                    Handle tanker trade <br /> intricacies like never <br /> seen
                    before.
                  </h2>
                  <div className="bg-[#F39C12] h-1 w-20 rounded-md md:w-32"></div>
                </div>
              </div>
              <div className="flex flex-1 text-sm text-center sm:text-left md:text-[16px]">
                Navigating the Tanker shipping domain involves intricately
                structured contracts and ongoing market shifts demanding meticulous
                management for every commercial journey. Tailored to tackle the
                intricacies and market-driven aspects of liquid commodities, our
                product presents a resilient set of features enabling leaders in the
                sector to simplify their commercial maritime processes, automate
                expense distribution, and adjust to the constantly evolving market
                dynamics.
                <br />
                <br />
                Introducing "The Oceann" a comprehensive and innovative software
                solution tailored specifically for the intricate world of ship
                chartering. This product has been meticulously designed to address
                the unique challenges and demands associated with the commercial
                activities of tanker ships.
              </div>
            </div>

            <div className="flex flex-col gap-4 md:gap-16">
              <div className="flex justify-center items-center mx-4">
                <div className="flex flex-col justify-center items-start  gap-2">
                  <div className="font-bold text-md leading-4 md:text-lg md:leading-8 xl:text-xl xl:leading-10">
                    Specialized liquid commodity transport solution.
                  </div>
                  <div className="bg-[#F39C12] h-1 w-20 rounded-md md:w-56"></div>
                </div>
              </div>
              <div className="flex flex-col gap-4 lg:gap-16">
                <div className="flex flex-col-reverse gap-4 sm:flex-row lg:gap-20 xl:mx-32">
                  <div className="flex flex-col gap-4 sm:flex-1">
                    <div className="flex md:flex-col flex-col justify-center items-center gap-2 md:gap-4 sm:items-start">
                      <div className="flex flex-col justify-center items-start">
                        <div className="font-bold leading-4 text-sm md:text-md lg:text-lg lg:leading-8 md:leading-6">
                          Proactive measures to oversee <br />
                          and address risks and exposures.
                        </div>
                        
                      </div>

                      <div className="flex gap-16 text-sm text-center sm:text-start md:text-start md:text-base lg:text-[18px] xl:leading-16">
                        In the face of heightened volatility, significant risks
                        emerge. Utilizing the The Oceann platform, professionals in
                        crude oil shipping can consistently oversee and mitigate
                        risks associated with their freight and fuel contracts. The
                        platform offers integrated mark-to-market performance
                        tracking, index-linked pricing, and bench marking, along
                        with potent "what if" scenario testing and robust analytical
                        tools, enabling comprehensive risk monitoring and
                        management.
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-1 mx-4 my-4 justify-center items-center md:items-start sm:mx-0 sm:my-0">
                    <img src={proactiveimg} alt="Proactive Measure" className="w-80% rounded-lg" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 lg:gap-16">
              <div className="flex flex-col gap-4 sm:flex-row lg:gap-20 xl:mx-32">
                <div className="flex sm:flex-1 mx-4 my-4 justify-center items-center md:items-start sm:mx-0 sm:my-0">
                  <img src={preciselyimg} alt="Precisely assign expenses" className="w-80% rounded-lg" />
                </div>
                <div className="flex flex-col gap-4 sm:flex-1">
                  <div className="flex md:flex-col flex-col justify-center items-center gap-2 md:gap-4 sm:items-start">
                    <div className="flex flex-col justify-center items-start">
                      <div className="font-bold leading-4 text-sm md:text-md lg:text-lg lg:leading-8 md:leading-6">
                        Precisely assign expenses.
                      </div>
                      
                    </div>

                    <div className="flex gap-16 text-sm text-center sm:text-start md:text-start md:text-base lg:text-[18px] xl:leading-16 ">
                      The intricate corporate frameworks of crude oil industry
                      leaders demand meticulous cost allocation for each vessel and
                      throughout every voyage. Whether you operate as a prominent
                      tanker owner-operator or a major global energy player, The
                      oceann centrally handles the diverse Profit and Loss (P&L)
                      considerations for each journey across subsidiaries and
                      product lines. It seamlessly integrates with your current
                      systems, providing a unified source of truth.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 lg:gap-16">
              <div className="flex flex-col-reverse gap-4 sm:flex-row lg:gap-20 xl:mx-32">
                <div className="flex flex-col gap-4 sm:flex-1">
                  <div className="flex md:flex-col flex-col justify-center items-center gap-2 md:gap-4 sm:items-start">
                    <div className="flex flex-col justify-center items-start">
                      <div className="font-bold leading-4 text-sm md:text-md lg:text-lg lg:leading-8 md:leading-6">
                        Oversee journeys comprehensively <br /> from initiation to
                        completion.
                      </div>
                      
                    </div>

                    <div className="flex gap-16 text-sm text-center sm:text-start md:text-start md:text-base lg:text-[18px] xl:leading-16">
                      Enhance operational and financial efficiency by centrally
                      overseeing all your dynamic, index-linked contracts within a
                      unified and comprehensive workspace. Eradicate information
                      gaps, guesswork, and operational burdens at every phase of the
                      voyage lifecycle through dynamic tools encompassing
                      scheduling, demurrage and claims management, voyage reporting,
                      and beyond.
                    </div>
                  </div>
                </div>
                <div className="flex sm:flex-1 mx-4 my-4 justify-center items-center md:items-start sm:mx-0 sm:my-0">
                  <img src={overseeimg} alt="Oversee journey" className=" rounded-lg" />
                </div>
              </div>
            </div>






            {/* know more */}









          </div >
          <div className="flex flex-col gap-2 md:gap-8">
            <div className="flex justify-center items-center mx-4 ">
              <div className="flex flex-col justify-center items-start">
                <div className="font-bold text-md leading-4 md:text-lg md:leading-8 xl:text-xl xl:leading-10">
                  Here's more for you to discover
                </div>
                <div className="bg-[#F39C12] h-1 w-20 rounded-md md:w-32"></div>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row xl:mx-32 xl:gap-16 my-4 mx-6 ">
              <div className="flex flex-col flex-1 bg-white border-[1px] border-[#e0e0e0] rounded-xl px-4 py-6 justify-around items-center gap-4 md:py-8 lg:px-8 hover:scale-105 hover:shadow-2xl hover:ease-in-out">
                <div className="flex justify-center items-center">
                  <img src={chateringimg} alt="Chartering" className="w-6" />
                  <p className="text-md font-bold lg:text-lg">Chartering</p>
                </div>
                <div className="text-sm text-center md:text-md">
                  Voyage chartering  Solutions offer a  whole chartering workflow from Voyage estimation , Optimising voyage planning, Vessel scheduling, Cargo Planning and freight Contract Management process.
                </div>
                <a href="https://theoceann.com/product/chartering"><button className="bg-[#F39C12] px-4 py-2 rounded-md text-md font-semi-bold text-white hover:shadow-yellow-500/40 hover:shadow-lg">Learn More</button></a>





              </div>



              <div className="flex flex-col flex-1 bg-white border-[1px] border-[#e0e0e0] rounded-xl px-4 py-6 justify-around items-center gap-4 md:py-8 lg:px-8 hover:scale-105 hover:shadow-2xl hover:ease-in-out">
                <div className="flex justify-center items-center">
                  <img src={operationimg} alt="Operation" className="w-6" />
                  <p className="text-md font-bold lg:text-lg">Operation</p>
                </div>
                <div className="text-sm text-center md:text-md">
                  Ensure transparent communication both within your team and with external stakeholders, effortlessly monitor your workload and your team's tasks.
                </div>
                <a href="https://theoceann.com/product/operations"><button className="bg-[#F39C12] px-4 py-2 rounded-md text-md font-semi-bold text-white hover:shadow-yellow-500/40 hover:shadow-lg">Learn More</button></a>





              </div>



              <div className="flex flex-col flex-1 bg-white border-[1px] border-[#e0e0e0] rounded-xl px-4 py-6 justify-around items-center gap-4 md:py-8 lg:px-8 hover:scale-105 hover:shadow-2xl hover:ease-in-out">
                <div className="flex justify-center items-center">
                  <img src={financeimg} alt="Finance" className="w-6" />
                  <p className="text-md font-bold lg:text-lg">Finance</p>
                </div>
                <div className="text-sm text-center md:text-md">
                  Let us guide you through the various aspects of ship cargo financing and illuminate the path to financial stability and operational excellence.
                </div>
                <a href="https://theoceann.com/product/oceann-finance"><button className="bg-[#F39C12] px-4 py-2 rounded-md text-md font-semi-bold text-white hover:shadow-yellow-500/40 hover:shadow-lg">Learn More</button></a>





              </div>



            </div>

          </div>
        </div>
      </div>
    </ >




  )
}




export default Tanker;
