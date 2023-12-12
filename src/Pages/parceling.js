import React from 'react'
import parcelingImg from "../Componants/Assets/Parceling-img/parceling-img.png"
import segmentationImg from "../Componants/Assets/Parceling-img/segmentation-img.png"
import charteringimg from "../Componants/Assets/Parceling-img/chartering.png"
import operationimg from "../Componants/Assets/Parceling-img/operation.png"
import financeimg from "../Componants/Assets/Parceling-img/finance.png"
import optimizeImg from "../Componants/Assets/Parceling-img/optimize-img.png"
import flexibilityImg from "../Componants/Assets/Parceling-img/flexibility-img.png"
import handlingImg from "../Componants/Assets/Parceling-img/locationHandling-img.png"

const Parceling = () => {
    return (
        <>
            <div className="flex flex-col ">
                <div className="relative h-[65vh]">
                    <img
                        src={parcelingImg}
                        alt="Parceling"
                        className="w-full h-full object-cover object-center absolute top-0 left-0 z-0"
                    />
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center  ">
                        <h1 className="text-md sm:text-md md:text-xl font-semibold text-white">
                            Parceling
                        </h1>
                        <p className="text-xs sm:text-md font-semibold text-white">Optimizing Shipping Logistics with TheOceann</p>
                    </div>
                </div>

                <div className="flex flex-col gap-12 lg:gap-18">

                    <div className="flex flex-col gap-8 mx-4 my-4 sm:mx-16 sm:my-16 lg:gap-24 lg:mx-20 lg:my-20">
                        <div className="flex flex-col gap-4 sm:flex-row sm:gap-20 xl:mx-32 sm:mx-16">
                            <div className="flex justify-center">
                                <div className="flex flex-2 flex-col justify-center items-start sm:justify-start">
                                    <h2 className="flex-1 font-bold text-md leading-4 md:text-lg md:leading-8 xl:text-[28px] xl:leading-8">
                                        Streamlined Division for <br />Efficient Marine Shipping
                                    </h2>
                                    <div className="bg-[#F39C12] h-1 w-20 rounded-md md:w-32"></div>
                                </div>
                            </div>
                            <div className="flex-1 text-sm text-center sm:text-left md:text-[16px]">
                                At TheOceann, our Parceling services redefine maritime logistics by strategically breaking down large cargo shipments into smaller, more manageable parcels, optimizing the efficiency of marine shipping operations.
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 md:gap-16">
                            <div className="flex justify-center items-center mx-4">
                                <div className="flex flex-col justify-center items-start  gap-2">
                                    <div className="font-bold text-md leading-4 md:text-lg md:leading-8 xl:text-xl xl:leading-10">
                                        Parceling in Marine Shipping
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
                                                    Tailored Segmentation
                                                </div>
                                            </div>

                                            <div className="flex gap-16 text-sm text-center sm:text-start md:text-start md:text-base lg:text-[18px] xl:leading-16">
                                                We specialize in creating personalized segmentation plans, breaking down large cargo shipments into smaller parcels for smoother handling and transport within the maritime sector. Our focus is on devising tailored strategies that streamline the movement of goods, simplifying logistics and improving efficiency in maritime transportation.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex sm:flex-1 mx-4 my-4 justify-center items-center md:items-start sm:mx-0 sm:my-0">
                                        <img src={segmentationImg} alt="Tailored segmentation" className="w-80% rounded-lg" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 lg:gap-16">
                            <div className="flex flex-col gap-4 sm:flex-row lg:gap-20 xl:mx-32">
                                <div className="flex sm:flex-1 mx-4 my-4 justify-center items-center md:items-start sm:mx-0 sm:my-0">
                                    <img src={optimizeImg} alt="Optimized Transport" className="w-80% rounded-lg" />
                                </div>
                                <div className="flex flex-col gap-4 sm:flex-1">
                                    <div className="flex md:flex-col flex-col justify-center items-center gap-2 md:gap-4 sm:items-start">
                                        <div className="flex flex-col justify-center items-start">
                                            <div className="font-bold leading-4 text-sm md:text-md lg:text-lg lg:leading-8 md:leading-6">
                                                Optimized Transport
                                            </div>

                                        </div>

                                        <div className="flex gap-16 text-sm text-center sm:text-start md:text-start md:text-base lg:text-[18px] xl:leading-16 ">
                                            Our process involves sizing and assigning parcels to match specific vessels or destinations, enhancing the efficiency and smoothness of marine transport operations. By tailoring parcels to fit particular vessels or locations, we optimize the logistics, ensuring a streamlined and effective transportation process at sea.
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
                                                Flexibility for Shipping Needs
                                            </div>
                                        </div>

                                        <div className="flex gap-16 text-sm text-center sm:text-start md:text-start md:text-base lg:text-[18px] xl:leading-16">
                                            TheOceann's Parceling services provide adaptable solutions for a range of recipients, cargo sizes, and precise delivery needs within the maritime network. We ensure flexibility to accommodate diverse consignees, varying cargo dimensions, and specific delivery prerequisites, enhancing our service's versatility within the maritime industry.
                                        </div>
                                    </div>
                                </div>
                                <div className="flex sm:flex-1 mx-4 my-4 justify-center items-center md:items-start sm:mx-0 sm:my-0">
                                    <img src={flexibilityImg} alt="Flexibility for shipping needs" className=" rounded-lg" />
                                </div>
                            </div>
                        </div>




                        <div className="flex flex-col gap-4 lg:gap-16">
                            <div className="flex flex-col gap-4 sm:flex-row lg:gap-20 xl:mx-32">
                                <div className="flex sm:flex-1 mx-4 my-4 justify-center items-center md:items-start sm:mx-0 sm:my-0">
                                    <img src={handlingImg} alt="Meticulous handling" className="w-80% rounded-lg" />
                                </div>
                                <div className="flex flex-col gap-4 sm:flex-1">
                                    <div className="flex md:flex-col flex-col justify-center items-center gap-2 md:gap-4 sm:items-start">
                                        <div className="flex flex-col justify-center items-start">
                                            <div className="font-bold leading-4 text-sm md:text-md lg:text-lg lg:leading-8 md:leading-6">
                                                Meticulous Handling
                                            </div>

                                        </div>

                                        <div className="flex gap-16 text-sm text-center sm:text-start md:text-start md:text-base lg:text-[18px] xl:leading-16 ">
                                            Our emphasis remains on careful handling and precise tracking, ensuring the secure and punctual delivery of every parcel within the maritime shipping domain. We prioritize thorough handling procedures and continuous tracking systems to assure the safe and timely arrival of each package in the maritime shipping environment.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>




                        {/* know more */}



                        <div className="flex flex-col gap-4 justify-center items-center sm:gap-8 xl:mx-64 sm:mx-16 ">
                        <div className="flex justify-center items-center">
                            <div className="flex flex-2 flex-col justify-center items-start ">
                                <h2 className="flex-1 font-bold text-md leading-4 md:text-lg md:leading-8 xl:text-[28px] xl:leading-8">
                                    TheOceann's Distinctive Approach
                                </h2>
                                <div className="bg-[#F39C12] h-1 w-20 rounded-md md:w-32"></div>
                            </div>
                        </div>
                        <div className="flex-1 text-sm text-center md:text-[16px]">
                            Our commitment to excellence and innovation distinguishes us in the field of maritime logistics. TheOceann's Parceling services are designed to revolutionize marine shipping by providing tailored solutions that enhance efficiency and reliability. <br /> <br />
                            Contact us today to explore how our Parceling services can transform your marine shipping logistics, ensuring smoother and more effective cargo transportation
                        </div>

                        <a href="https://theoceann.com/contact">
                            <button className="bg-[#F39C12] px-3 py-2 md:px-4 rounded-md text-sm md:text-md font-semi-bold text-white hover:shadow-yellow-500/20 hover:shadow-lg hover:bg-[#F39C12]">
                                Learn More
                            </button>
                        </a>
                    </div>





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
                                    <img src={charteringimg} alt="Chartering" className="w-6" />
                                    <p className="text-md font-bold lg:text-lg">Chartering</p>
                                </div>
                                <div className="text-sm text-center md:text-md">
                                    Voyage chartering  Solutions offer a  whole chartering workflow from Voyage estimation , Optimising voyage planning, Vessel scheduling, Cargo Planning and freight Contract Management process.
                                </div>
                                <a href="https://theoceann.com/product/chartering"><button className="bg-[#F39C12] px-4 py-2 rounded-md text-md font-semi-bold text-white hover:shadow-yellow-500/40 hover:shadow-lg  hover:bg-[#F39C12]">Learn More</button></a>





                            </div>



                            <div className="flex flex-col flex-1 bg-white border-[1px] border-[#e0e0e0] rounded-xl px-4 py-6 justify-around items-center gap-4 md:py-8 lg:px-8 hover:scale-105 hover:shadow-2xl hover:ease-in-out">
                                <div className="flex justify-center items-center">
                                    <img src={operationimg} alt="Operation" className="w-6" />
                                    <p className="text-md font-bold lg:text-lg">Operation</p>
                                </div>
                                <div className="text-sm text-center md:text-md">
                                    Ensure transparent communication both within your team and with external stakeholders, effortlessly monitor your workload and your team's tasks.
                                </div>
                                <a href="https://theoceann.com/product/operations"><button className="bg-[#F39C12] px-4 py-2 rounded-md text-md font-semi-bold text-white hover:shadow-yellow-500/40 hover:shadow-lg  hover:bg-[#F39C12]">Learn More</button></a>





                            </div>



                            <div className="flex flex-col flex-1 bg-white border-[1px] border-[#e0e0e0] rounded-xl px-4 py-6 justify-around items-center gap-4 md:py-8 lg:px-8 hover:scale-105 hover:shadow-2xl hover:ease-in-out">
                                <div className="flex justify-center items-center">
                                    <img src={financeimg} alt="Finance" className="w-6" />
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
            </div>
        </ >
    )
}

export default Parceling