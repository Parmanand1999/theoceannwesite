import React from "react";
import chateringimg from "../../src/Componants/Assets/Pooling-img/chartering.png";
import operationimg from "../../src/Componants/Assets/Pooling-img/operation.png";
import financeimg from "../../src/Componants/Assets/Pooling-img/finance.png";
import poolingbgImg from "../../src/Componants/Assets/Pooling-img/pooling_bg_img.png";
import systematizeImg from "../../src/Componants/Assets/Pooling-img/systematize_para_img.png";
import effectiveImg from "../../src/Componants/Assets/Pooling-img/effective_para_img.png";
import unifiedImg from "../../src/Componants/Assets/Pooling-img/unified_para_img.png";
import efficientlyIcon from "../../src/Componants/Assets/Pooling-img/utilizing_efficient_icon.png";
import enhanceIcon from "../../src/Componants/Assets/Pooling-img/utilizing_enhance_icon.png";
import ensureIcon from "../../src/Componants/Assets/Pooling-img/utilizing_ensure_icon.png";
import establishIcon from "../../src/Componants/Assets/Pooling-img/utilizing_establish_icon.png";
import successfulIcon from "../../src/Componants/Assets/Pooling-img/utilizing_successful_icon.png";
// import styles from "./sxt.css"
const Pooling = () => {
    return (
        <>
            <div className="flex flex-col ">
                <div className="relative h-[65vh]">
                    <img
                        src={poolingbgImg}
                        alt="Pooling"
                        className="w-full h-full object-cover object-center absolute top-0 left-0 z-0"
                    />
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center  ">
                        <h1 className="text-md sm:text-md md:text-xl font-semibold text-white">
                            Pooling
                        </h1>
                    </div>
                </div>

                <div className="flex flex-col gap-12 lg:gap-18">
                    <div className="flex flex-col gap-8 mx-8 my-4 sm:mx-2 sm:my-8 lg:gap-24 lg:mx-16 lg:my-20">
                        <div className="flex flex-col gap-4 sm:flex-row sm:gap-20 xl:mx-32 sm:mx-16">
                            <div className="flex flex-1 justify-center">
                                <div className="flex flex-col justify-center gap-2 items-start sm:justify-start">
                                    <h2 className="font-bold text-md leading-4 md:text-lg md:leading-8  xl:text-[28px] xl:leading-8">
                                        Improve vessel collections and enhance transparency for pool
                                        participants.
                                    </h2>
                                    <div className="bg-[#F39C12] h-1 w-20 rounded-md md:w-32"></div>
                                </div>
                            </div>
                            <div className="flex flex-1 text-sm text-center sm:text-left md:text-[16px]">
                                TheOceann prioritizes building strong relationships with pool
                                participants in the maritime industry. They accelerate
                                operations through automated distribution within these pools,
                                aiming to streamline processes. By doing so, they enhance
                                financial management and integrate thorough performance tracking
                                systems. Essentially, TheOceann's pooling approach centers on
                                fostering connections, automating tasks, and optimizing
                                performance for better efficiency in maritime operations.
                            </div>
                        </div>

                        <div className="flex flex-col-reverse gap-4 sm:flex-row sm:gap-20 xl:mx-32 sm:mx-16">
                            <div className="flex flex-1 text-sm text-center sm:text-left md:text-[16px]">
                                The Pooling system by TheOceann simplifies conventional vessel
                                pool administration and reporting methods, empowering pool
                                managers to enhance member relationships via total openness and
                                a unified, trustworthy information hub.
                            </div>

                            <div className="flex flex-1 justify-center">
                                <div className="flex flex-col justify-center gap-2 items-start sm:justify-start">
                                    <h2 className="font-bold text-cemter text-md leading-4 md:text-lg md:leading-8  xl:text-[28px] xl:leading-8">
                                        Boost effectiveness while fostering interconnection
                                        concurrently.
                                    </h2>
                                    <div className="bg-[#F39C12] h-1 w-20 rounded-md md:w-32"></div>
                                </div>
                            </div>
                        </div>

                        <div className=" flex flex-col gap-4">
                            
                        <div className="flex flex-1 justify-center">
                                <div className="flex flex-col justify-center gap-2 items-start sm:justify-start">
                                    <h2 className="font-bold text-cemter text-md leading-4 md:text-lg md:leading-8 xl:text-xl xl:leading-10">
                                    Utilizing TheOceann's Pooling system enables you to
                                    </h2>
                                    <div className="bg-[#F39C12] h-1 w-20 rounded-md md:w-80"></div>
                                </div>
                            </div>
                           
                            <div className="grid grid-rows-3 grid-cols-1 gap-4 md:grid-rows-1 md:grid-cols-3 mx-4 sm:mx-32 md:mx-24 xl:mx-40">
                                <div className="border-[1px] border-[#e0e0e0] rounded-md py-8 pl-6 pr-2">
                                    <img src={efficientlyIcon} alt="Efficiently" />
                                    <p className="text-sm md:text-md">
                                        Efficiently organize vessel pool supervision utilizing
                                        adaptable, specialized instruments.
                                    </p>
                                </div>
                                <div className="border-[1px] border-[#e0e0e0] rounded-md py-8 pl-6 pr-2">
                                    <img src={enhanceIcon} alt="Enhance" />
                                    <p className="text-sm md:text-md">
                                        Enhance precision by employing automated allocation methods
                                        within maritime pools.
                                    </p>
                                </div>
                                <div className="border-[1px] border-[#e0e0e0] rounded-md py-8 pl-6 pr-2">
                                    <img src={ensureIcon} alt="Ensure" />
                                    <p className="text-sm md:text-md">
                                        Ensure complete openness to members through the integration of
                                        journey pool reports.
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-rows-2 grid-cols-1 gap-4 md:grid-rows-1 md:grid-cols-2 mx-4 sm:mx-32 md:mx-60 xl:mx-72">
                                <div className="border-[1px] border-[#e0e0e0] rounded-md py-8 pl-6 pr-2">
                                    <img src={establishIcon} alt="Establish" />
                                    <p className="text-sm md:text-md">
                                        Establish connections with pertinent associates via a unified,
                                        centralized platform.
                                    </p>
                                </div>
                                <div className="border-[1px] border-[#e0e0e0] rounded-md py-8 pl-6 pr-2">
                                    <img src={successfulIcon} alt="Successful" />
                                    <p className="text-sm md:text-md">
                                        Successfully oversee your pools globally, regardless of your
                                        location.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 md:gap-16">
                            <div className="flex justify-center items-center mx-4 ">
                                <div className="flex flex-col justify-center items-start gap-2">
                                    <div className="font-bold text-md leading-4 md:text-lg md:leading-8 xl:text-xl xl:leading-10">
                                        Enhance managing vessel pools and offer member visibility.
                                    </div>
                                    <div className="bg-[#F39C12] h-1 sm:w-32 w-20 rounded-md md:w-80"></div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 lg:gap-16">
                                <div className="flex flex-col-reverse gap-8 sm:flex-row lg:gap-20 sm:mx-8 md:mx-20 xl:mx-48 ">
                                    <div className="flex flex-col gap-4 sm:flex-1">
                                        <div className="flex md:flex-col flex-col justify-center items-center gap-2 sm:items-start">
                                            <p className="font-bold leading-4 text-center md:text-left text-sm md:text-md lg:text-lg lg:leading-8 md:leading-6">
                                                Systematize Point Allocation in Pools
                                            </p>

                                            <p className="flex gap-16 text-sm text-center sm:text-start md:text-start md:text-md lg:text-[18px] xl:leading-16">
                                                TheOceann Pooling enables the maintenance of fair
                                                distribution in your pool by granting the capability to
                                                automatically allocate and distribute pool points among
                                                participating ships using up-to-date Voyage P&L data.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex sm:flex-1 mx-4 my-4 justify-center items-center md:items-start sm:mx-0 sm:my-0">
                                        <img
                                            src={systematizeImg}
                                            alt="Systematize"
                                            className="w-80% rounded-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 lg:gap-16">
                            <div className="flex flex-col gap-8 sm:flex-row lg:gap-20 sm:mx-8 md:mx-20 xl:mx-48 ">
                                <div className="flex sm:flex-1 mx-4 my-4 justify-center items-center md:items-start sm:mx-0 sm:my-0">
                                    <img
                                        src={effectiveImg}
                                        alt="Effective"
                                        className="w-80% rounded-lg object-cover"
                                    />
                                </div>
                                <div className="flex flex-col gap-4 sm:flex-1">
                                    <div className="flex md:flex-col flex-col justify-center items-center gap-2  sm:items-start">
                                        <p className="font-bold leading-4 text-sm md:text-md lg:text-lg lg:leading-8 md:leading-6">
                                            Effective Financial Supervision
                                        </p>

                                        <p className="flex gap-16 text-sm text-center sm:text-start md:text-start md:text-md lg:text-[18px] xl:leading-16 ">
                                            TheOceann Pooling is crafted to assist in achieving
                                            precise allocations by computing pool profits and deficits
                                            throughout the allocation duration, allotting them to each
                                            ship owner using automatic monthly snapshots.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 lg:gap-16">
                            <div className="flex flex-col-reverse gap-8 sm:flex-row lg:gap-20 sm:mx-8 md:mx-20 xl:mx-48 ">
                                <div className="flex flex-col gap-4 sm:flex-1">
                                    <div className="flex md:flex-col flex-col justify-center items-center gap-2  sm:items-start">
                                        <p className="font-bold leading-4 text-sm md:text-md lg:text-lg lg:leading-8 md:leading-6">
                                            Unified Performance Tracking
                                        </p>

                                        <p className="flex gap-16 text-sm text-center sm:text-start md:text-start md:text-md lg:text-[18px] xl:leading-16">
                                            Incorporating performance reports within TheOceann Pooling
                                            enhances your relationships with counterparts by
                                            conducting real-time vessel pool reporting and
                                            disseminating pool performance data to all pertinent
                                            stakeholders through a unified workspace.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex sm:flex-1 mx-4 my-4 justify-center items-center md:items-start sm:mx-0 sm:my-0">
                                    <img src={unifiedImg} alt="Unified" className="w-80% rounded-lg" />
                                </div>
                            </div>
                        </div>

                        {/* know more */}
                    </div>
                    <div className="flex flex-col gap-2 md:gap-8">
                        <div className="flex justify-center items-center mx-4 ">
                            <div className="flex flex-col justify-center items-start gap-2">
                                <div className="font-bold text-md leading-4 md:text-lg md:leading-8 xl:text-xl xl:leading-10">
                                    Here's more for you to discover
                                </div>
                                <div className="bg-[#F39C12] h-1 w-20 rounded-md md:w-56"></div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 md:flex-row sm:mx-32 lg:mx-16 xl:mx-32 xl:gap-16 my-4 mx-10 ">
                            <div className="flex flex-col flex-1 bg-white border-[1px] border-[#e0e0e0] rounded-xl px-4 py-6 justify-around items-center gap-4 md:py-8 lg:px-8 hover:scale-105 hover:shadow-2xl hover:ease-in-out">
                                <div className="flex justify-center items-center">
                                    <img src={chateringimg} alt="Chartering" className="w-6" />
                                    <p className="text-md font-bold lg:text-lg">Chartering</p>
                                </div>
                                <div className="text-sm text-center md:text-md">
                                    Voyage chartering  Solutions offer a whole chartering workflow
                                    from Voyage estimation , Optimising voyage planning, Vessel
                                    scheduling, Cargo Planning and freight Contract Management
                                    process.
                                </div>
                                <a href="https://theoceann.com/product/chartering">
                                    <button className="bg-[#F39C12] px-4 py-2 rounded-md text-sm md:text-md font-semi-bold text-white hover:shadow-yellow-500/40 hover:shadow-lg">
                                        Learn More
                                    </button>
                                </a>
                            </div>

                            <div className="flex flex-col flex-1 bg-white border-[1px] border-[#e0e0e0] rounded-xl px-4 py-6 justify-around items-center gap-4 md:py-8 lg:px-8 hover:scale-105 hover:shadow-2xl hover:ease-in-out">
                                <div className="flex justify-center items-center">
                                    <img src={operationimg} alt="Operation" className="w-6" />
                                    <p className="text-md font-bold lg:text-lg">Operation</p>
                                </div>
                                <div className="text-sm text-center md:text-md">
                                    Ensure transparent communication both within your team and
                                    with external stakeholders, effortlessly monitor your workload
                                    and your team's tasks.
                                </div>
                                <a href="https://theoceann.com/product/operations">
                                    <button className="bg-[#F39C12] px-4 py-2 rounded-md text-sm md:text-md font-semi-bold text-white hover:shadow-yellow-500/40 hover:shadow-lg">
                                        Learn More
                                    </button>
                                </a>
                            </div>

                            <div className="flex flex-col flex-1 bg-white border-[1px] border-[#e0e0e0] rounded-xl px-4 py-6 justify-around items-center gap-4 md:py-8 lg:px-8 hover:scale-105 hover:shadow-2xl hover:ease-in-out">
                                <div className="flex justify-center items-center">
                                    <img src={financeimg} alt="Finance" className="w-6" />
                                    <p className="text-md font-bold lg:text-lg">Finance</p>
                                </div>
                                <div className="text-sm text-center md:text-md">
                                    Let us guide you through the various aspects of ship cargo
                                    financing and illuminate the path to financial stability and
                                    operational excellence.
                                </div>
                                <a href="https://theoceann.com/product/oceann-finance">
                                    <button className="bg-[#F39C12] px-4 py-2 rounded-md text-sm md:text-md font-semi-bold text-white hover:shadow-yellow-500/40 hover:shadow-lg">
                                        Learn More
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Pooling;
