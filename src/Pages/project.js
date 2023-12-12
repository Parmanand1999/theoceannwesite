import React from "react";
import projectbgImg from "../Componants/Assets/Project-img/project-bg-img.png";
import planingIcon from "../Componants/Assets/Project-img/planning-img.png";
import realtimeIcon from "../Componants/Assets/Project-img/realtime-img.png";
import riskIcon from "../Componants/Assets/Project-img/risk-img.png";
import specializedImg from "../Componants/Assets/Project-img/specialized-img.png";
import tailoredImg from "../Componants/Assets/Project-img/tailored-img.png";
import supportImg from "../Componants/Assets/Project-img/support-img.png";
import charteringImg from "../Componants/Assets/Project-img/chartering.png";
import operationImg from "../Componants/Assets/Project-img/operation.png";
import financeImg from "../Componants/Assets/Project-img/finance.png";

const Project = () => {
    return (
        <>
            <div className="relative h-[65vh]">
                <img
                    src={projectbgImg}
                    alt="Project"
                    className="w-full h-full object-cover object-center absolute top-0 left-0 z-0"
                />
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center  ">
                    <h1 className="text-md sm:text-md md:text-xl font-semibold text-white">
                        Project
                    </h1>
                </div>
            </div>

            <div className="flex flex-col gap-12 lg:gap-24">
                <div className="flex flex-col gap-8 mx-4 my-4 sm:mx-16 sm:my-16 lg:gap-24 lg:mx-20 lg:my-20">
                    <div className="flex flex-col gap-4 sm:flex-row sm:gap-20 xl:mx-32 sm:mx-16">
                        <div className="flex flex-1 justify-center">
                            <div className="flex flex-col gap-2 justify-center items-start sm:justify-start">
                                <h2 className="flex font-bold text-md leading-4 md:text-lg md:leading-8  xl:text-[28px] xl:leading-8">
                                    Empowering Shipping Ventures with Specialized Solutions
                                </h2>
                                <div className="bg-[#F39C12] h-1 w-20 rounded-md md:w-32"></div>
                            </div>
                        </div>
                        <div className="flex flex-1 text-xs sm:text-sm text-center sm:text-left md:text-[16px]">
                            At TheOceann, we understand that the heart of shipping isn't just about moving standard cargo it's about conquering complex challenges, handling oversize freight, and executing seamless logistics. Our cutting-edge software solutions are tailored to meet the unique demands of shipping projects.
                        </div>
                    </div>
                </div>


                <div className="flex flex-col justify-center items-center gap-8">
                    <div className="flex flex-1 justify-center">
                        <div className="flex flex-col gap-2 justify-center items-start sm:justify-start">
                            <h2 className="flex font-bold text-md leading-4 md:text-lg md:leading-8  xl:text-xl xl:leading-8">
                                Our Approach
                            </h2>
                            <div className="bg-[#F39C12] h-1 w-8 rounded-md md:w-16"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 grid-rows-3 sm:grid-rows-1 sm:grid-cols-3 mx-8 xl:mx-48 gap-4 xl:gap-16">
                        <div className="lg:pl-6 px-4 py-6 border-[1px] border-#e0e0e0 rounded-md gap-2">
                            <img src={planingIcon} alt="Planing" className="mb-2 sm:mb-2 " />
                            <p className="text-sm font-bold">Precision Planning</p>
                            <p className="text-xs sm:text-sm">We believe that a successful project begins with meticulous planning. Our software empowers your team to create detailed project plans, optimizing routes, vessel selection, and resource allocation.</p>
                        </div>
                        <div className="lg:pl-6 px-4 py-6 border-[1px] border-#e0e0e0 rounded-md gap-2">
                            <img src={realtimeIcon} alt="Rea-Time Visibility" className="mb-2 sm:mb-2 " />
                            <p className="text-sm font-bold">Real-Time Visibility</p>
                            <p className="text-xs sm:text-sm">Stay informed every step of the way. Our technology provides real-time tracking and monitoring, giving you complete visibility into your project cargo's journey.</p>
                        </div>
                        <div className="lg:pl-6 px-4 py-6 border-[1px] border-#e0e0e0 rounded-md gap-2">
                            <img src={riskIcon} alt="" className="mb-2 sm:mb-2 " />
                            <p className="text-sm font-bold">Risk Mitigation</p>
                            <p className="text-xs sm:text-sm">We understand the risks inherent in handling non-standard cargo. Our software identifies potential risks and provides proactive solutions, ensuring the safe and secure transportation of your valuable assets.</p>
                        </div>

                    </div>
                </div>


                <div className="flex flex-col xl:mx-32 gap-16">

                    <div className="flex flex-col gap-4 md:gap-16">
                        <div className="flex justify-center items-center mx-4">
                            <div className="flex flex-col justify-center items-start  gap-2">
                                <div className="font-bold text-md leading-4 md:text-lg md:leading-8 xl:text-xl xl:leading-10">
                                What Sets Us Apart
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
                                                Specialized Solutions
                                            </div>
                                        </div>

                                        <div className="flex gap-16 text-sm text-center sm:text-start md:text-start md:text-base lg:text-[18px] xl:leading-16">
                                            We specialize in providing bespoke software solutions designed explicitly for the intricate demands of project cargo. Our technology streamlines every facet of project management, from planning to execution, ensuring precise handling and on-time delivery.
                                        </div>
                                    </div>
                                </div>
                                <div className="flex sm:flex-1 mx-4 my-4 justify-center items-center md:items-start sm:mx-0 sm:my-0">
                                    <img src={specializedImg} alt="specialized solution" className="w-80% rounded-lg" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 lg:gap-16">
                        <div className="flex flex-col gap-4 sm:flex-row lg:gap-20 xl:mx-32">
                            <div className="flex sm:flex-1 mx-4 my-4 justify-center items-center md:items-start sm:mx-0 sm:my-0">
                                <img src={tailoredImg} alt="Tailored for Complexity" className="w-80% rounded-lg" />
                            </div>
                            <div className="flex flex-col gap-4 sm:flex-1">
                                <div className="flex md:flex-col flex-col justify-center items-center gap-2 md:gap-4 sm:items-start">
                                    <div className="flex flex-col justify-center items-start">
                                        <div className="font-bold leading-4 text-sm md:text-md lg:text-lg lg:leading-8 md:leading-6">
                                            Tailored for Complexity
                                        </div>

                                    </div>

                                    <div className="flex gap-16 text-sm text-center sm:text-start md:text-start md:text-base lg:text-[18px] xl:leading-16 ">
                                        Handling oversize or heavy cargo requires a unique approach. Our software is finely tuned to manage the intricacies of project logistics, addressing complexities that standard shipping systems can't handle.
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
                                            Comprehensive Support
                                        </div>
                                    </div>

                                    <div className="flex gap-16 text-sm text-center sm:text-start md:text-start md:text-base lg:text-[18px] xl:leading-16">
                                        TheOceann isn't just about software; it's about partnership. We offer comprehensive support throughout the project lifecycle, ensuring a smooth and efficient operation from start to finish.
                                    </div>
                                </div>
                            </div>
                            <div className="flex sm:flex-1 mx-4 my-4 justify-center items-center md:items-start sm:mx-0 sm:my-0">
                                <img src={supportImg} alt="Comprehensive Support" className=" rounded-lg" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col gap-4 justify-center items-center sm:gap-8 xl:mx-64 sm:mx-16 ">
                        <div className="flex justify-center items-center">
                            <div className="flex flex-2 flex-col justify-center items-start ">
                                <h2 className="flex-1 font-bold text-md leading-4 md:text-lg md:leading-8 xl:text-[28px] xl:leading-8">
                                Our Commitment
                                </h2>
                                <div className="bg-[#F39C12] h-1 w-20 rounded-md md:w-32"></div>
                            </div>
                        </div>
                        <div className="flex-1 text-sm text-center md:text-[16px]">
                        At TheOceann, we are committed to revolutionizing project cargo management through innovative software solutions. Partner with us to experience the future of shipping technology and elevate your project cargo operations to new heights.
Ready to embark on your next shipping project with confidence? Contact us today to discover how TheOceann can transform the way you manage your most challenging shipments.
                        </div>

                        <a href="https://theoceann.com/contact">
                            <button className="bg-[#F39C12] px-3 py-2 md:px-4 rounded-md text-sm md:text-md font-semi-bold text-white hover:shadow-yellow-500/20 hover:shadow-lg hover:bg-[#F39C12]">
                                Contact Us
                            </button>
                        </a>
                    </div>












































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
                                <img src={charteringImg} alt="" className="w-6" />
                                <p className="text-md font-bold lg:text-lg">Chartering</p>
                            </div>
                            <div className="text-sm text-center md:text-md">
                                Voyage chartering  Solutions offer a  whole chartering workflow from Voyage estimation , Optimising voyage planning, Vessel scheduling, Cargo Planning and freight Contract Management process.
                            </div>
                            <a href="https://theoceann.com/product/chartering"><button className="bg-[#F39C12] px-4 py-2 rounded-md text-md font-semi-bold text-white hover:shadow-yellow-500/40 hover:shadow-lg  hover:bg-[#F39C12]">Learn More</button></a>





                        </div>



                        <div className="flex flex-col flex-1 bg-white border-[1px] border-[#e0e0e0] rounded-xl px-4 py-6 justify-around items-center gap-4 md:py-8 lg:px-8 hover:scale-105 hover:shadow-2xl hover:ease-in-out">
                            <div className="flex justify-center items-center">
                                <img src={operationImg} alt="" className="w-6" />
                                <p className="text-md font-bold lg:text-lg">Operation</p>
                            </div>
                            <div className="text-sm text-center md:text-md">
                                Ensure transparent communication both within your team and with external stakeholders, effortlessly monitor your workload and your team's tasks.
                            </div>
                            <a href="https://theoceann.com/product/operations"><button className="bg-[#F39C12] px-4 py-2 rounded-md text-md font-semi-bold text-white hover:shadow-yellow-500/40 hover:shadow-lg  hover:bg-[#F39C12]">Learn More</button></a>





                        </div>



                        <div className="flex flex-col flex-1 bg-white border-[1px] border-[#e0e0e0] rounded-xl px-4 py-6 justify-around items-center gap-4 md:py-8 lg:px-8 hover:scale-105 hover:shadow-2xl hover:ease-in-out">
                            <div className="flex justify-center items-center">
                                <img src={financeImg} alt="" className="w-6" />
                                <p className="text-md font-bold lg:text-lg">Finance</p>
                            </div>
                            <div className="text-sm text-center md:text-md">
                                Let us guide you through the various aspects of ship cargo financing and illuminate the path to financial stability and operational excellence.
                            </div>
                            <a href="https://theoceann.com/product/oceann-finance"><button className="bg-[#F39C12] px-4 py-2 rounded-md text-md font-semi-bold text-white hover:shadow-yellow-500/40 hover:shadow-lg  hover:bg-[#F39C12]">Learn More</button></a>





                        </div>



                    </div>

                </div>









































            </div>
        </>
    );
};

export default Project;
