import React from "react";
import dryBgImg from "../../src/Componants/Assets/Dry-img/dry-bg-img.png";
import dryFrontImg from "../../src/Componants/Assets/Dry-img/dry_frontpage_img.png";
import shippingImg from "../../src/Componants/Assets/Dry-img/shipping_solution_img.png";
import logisticImg from "../../src/Componants/Assets/Dry-img/logistic_img.png";
import vesselImg from "../../src/Componants/Assets/Dry-img/vessel_img.png";
import cargoImg from "../../src/Componants/Assets/Dry-img/cargo_img.png";
import gainImg from "../../src/Componants/Assets/Dry-img/gain_complex_img.png";
import effectiveOneImg from "../../src/Componants/Assets/Dry-img/effective_one_img.png";
import effectiveTwoImg from "../../src/Componants/Assets/Dry-img/effective_two_img.png";
import effectiveThreeImg from "../../src/Componants/Assets/Dry-img/effective_three_img.png";
import captureIcon from "../../src/Componants/Assets/Dry-img/capture_icon.png";
import voyageIcon from "../../src/Componants/Assets/Dry-img/voyage_planning_icon.png";
import costIcon from "../../src/Componants/Assets/Dry-img/cost_management_icon.png";
import integrationIcon from "../../src/Componants/Assets/Dry-img/integration_icon.png";
import performanceIcon from "../../src/Componants/Assets/Dry-img/performance_icon.png";
import riskIcon from "../../src/Componants/Assets/Dry-img/risk_management_icon.png";
import complianceIcon from "../../src/Componants/Assets/Dry-img/compliance_icon.png";
const Dry = () => {
    return (
        <>
            <div className="relative h-[60vh] lg:h-[100vh] md:h-[80vh] mb-[20%] sm:mb-[30%] md:mb-[18%] xl:mb-[12%]">
                <img
                    src={dryBgImg}
                    alt="Dry Bulk"
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute z-1 top-[6%] left-0 right-0 flex justify-center items-center mx-6 my-2 md:mx-24">
                    <div className="flex flex-col justify-center items-center gap-6">
                        <h1 className="text-md sm:text-lg lg:text-xl font-bold text-white text-center">
                            Your Premier Dry Bulk Solutions <br />
                            Provider
                        </h1>

                        <p className="text-xs sm:text-sm leading-2 md:leading-6  text-white text-center">
                            At TheOceann, we specialize in delivering comprehensive dry bulk
                            shipping solutions tailored to meet the diverse needs of our
                            clients across industries. <br />
                            With a relentless commitment to efficiency, reliability, and
                            safety, we stand as your trusted partner in transporting dry bulk
                            commodities across the globe.
                        </p>
                        <a href="https://theoceann.com/contact">
                            <button className="bg-[#F39C12] px-3 py-2 md:px-4 rounded-md text-sm md:text-md font-semi-bold text-white hover:shadow-yellow-500/20 hover:shadow-lg hover:bg-[#F39C12]">
                                Learn More
                            </button>
                        </a>
                        <img
                            src={dryFrontImg}
                            alt="Dry Bulk"
                            className="mt-[6%] w-[80%] rounded-md shadow-xl"
                        />
                    </div>
                </div>
            </div>



            <div className="flex flex-col justify-center items-center gap-16 md:gap-32">
                <div className="flex flex-col gap-4">
                    <h2 className="text-md sm:text-lg font-bold text-center">
                        Our Services
                    </h2>
                    <p className=" text-xs sm:text-sm md:text-md text-center">
                        At TheOceann, we offer a wide range of services to accommodate your
                        specific dry bulk shipping requirements
                    </p>

                    <div className="grid grid-rows-4 grid-cols-1 gap-6 sm:gap-y-2 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-4 md:grid-rows-1 sm:mx-20">
                        <div className="flex flex-col justify-center items-center">
                            <img src={shippingImg} alt="Shipping" className=" rounded-lg w-[40%] sm:w-[60%] md:w-[80%]" />
                            <p className="text-xs sm:text-sm font-bold ">Shipping Solution</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img src={logisticImg} alt="Logistic" className=" rounded-lg w-[40%] sm:w-[60%] md:w-[80%]" />
                            <p className="text-xs sm:text-sm font-bold ">Logistic Management</p>
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <img src={vesselImg} alt="Vessel" className=" rounded-lg w-[40%] sm:w-[60%] md:w-[80%]" />
                            <p className="text-xs sm:text-sm font-bold ">Vessel Chartering</p>
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <img src={cargoImg} alt="Cargo Handling" className=" rounded-lg w-[40%] sm:w-[60%] md:w-[80%]" />
                            <p className="text-xs sm:text-sm font-bold ">Cargo Handling</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center md:justify-start md:items-start gap-4 md:gap-8">
                    <div className="flex flex-1 justify-center items-center sm:justify-start sm:items-start">
                        <img src={gainImg} alt="supervision" className="w-[80%]" />
                    </div>

                    <div className="flex flex-1 flex-col sm:mt-[4%] md:mr-[8%] gap-2">
                        <p className="text-md leading-4 lg:leading-6 sm:text-md lg:text-lg font-bold text-center sm:text-left">
                            Gain complete supervision and authority throughout the entirety
                            of the dry bulk journey.
                        </p>
                        <p className=" text-xs sm:text-sm lg:text-md text-center sm:text-left">
                            The specific needs in dry bulk chartering, risk management, and
                            operations require a commercial solution that's fundamentally
                            crafted to handle significant complexity and scale. As the
                            leading platform for commercial freight and fleet management in
                            the industry, The Oceann offers indispensable elements such as
                            comprehensive contract management, complete visibility from
                            start to finish, strong claims handling, and performance
                            tracking driven by data, all crucial for dry bulk shippers.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col-reverse sm:flex-row justify-center items-center md:justify-start md:items-start gap-4 md:gap-8 mx-2 lg:mx-[10%]">
                    <div className="flex flex-1 flex-col sm:mt-[0%] md:mr-[8%] gap-2">
                        <p className="text-md leading-4 lg:leading-6 sm:text-md lg:text-lg font-bold text-center sm:text-left">
                            Effectively manage contract acquisition and monitor the
                            financial performance of voyages
                        </p>
                        <p className=" text-xs sm:text-sm lg:text-md text-center sm:text-left">
                            Dry bulk shipments entail adhering to contractual obligations
                            that necessitate meticulous attention throughout the entire dry
                            bulk voyage management process. TheOceann offers comprehensive
                            tools enabling the effective management of every facet of your
                            voyage, encompassing sturdy dry bulk chartering, contract
                            oversight, and adaptable P&L functionalities specifically
                            tailored to address both operational and commercial intricacies
                            associated with dry bulk voyages.
                        </p>
                    </div>
                    <div className="flex flex-1">
                        <div className=" grid grid-cols-[30%,30%] gap-2 md:gap-4 grid-rows-[55%,37%] justify-center items-center ">
                            <div className="rounded-sm md:rounded-md col-span-2">
                                <img
                                    src={effectiveOneImg}
                                    alt="shipping"
                                    className=" rounded-md object-cover"
                                />
                            </div>

                            <div className="rounded-sm md:rounded-md">
                                <img src={effectiveTwoImg} alt="shipping" className=" rounded-md " />
                            </div>
                            <div className="rounded-sm md:rounded-md">
                                <img src={effectiveThreeImg} alt="shipping" className="rounded-md " />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <p className="font-bold text-center sm:text-lg">
                        "Integrated Solutions for Streamlined Commercial Voyage <br />
                        Management in Dry Bulk Shipping"
                    </p>

                    <p className="text-xs sm:text-sm text-center">
                        By implementing these strategies and utilizing technology
                        solutions, we can enhance the efficiency and accuracy of <br />
                        managing contract capture and voyage P&L in maritime operations.
                    </p>

                    <div className="grid grid-rows-4 sm:grid-rows-4 sm:grid-cols-2 md:grid-rows-2 md:grid-cols-4 gap-4 mx-8 mt-10 lg:mx-24 lg:gap-8">
                        <div className="px-4 pt-6 pb-6 lg:pl-6 border-[1px] border-#e0e0e0 rounded-md gap-2">
                            <img src={captureIcon} alt="Capture" className="mb-2 sm:mb-2 " />
                            <p className="text-sm font-bold">Contract Capture</p>
                            <p className="text-xs sm:text-sm">
                                Maintaining a centralized database or
                                <br /> system to store all contract information.
                            </p>
                        </div>

                        <div className="px-4 pt-6 pb-6 lg:pl-6 border-[1px] border-#e0e0e0 rounded-md gap-2">
                            <img src={voyageIcon} alt="Voyage" className="mb-2 sm:mb-2" />
                            <p className="text-sm font-bold">Voyage Planning</p>
                            <p className="text-xs sm:text-sm">
                                Planning the voyage route to optimize fuel efficiency and
                                minimize costs.
                            </p>
                        </div>

                        <div className="px-4 pt-6 pb-6 lg:pl-6 border-[1px] border-#e0e0e0 rounded-md gap-2">
                            <img src={costIcon} alt="Cost" className="mb-2 sm:mb-2" />
                            <p className="text-sm font-bold">Cost Management</p>
                            <p className="text-xs sm:text-sm">
                                Implementing a system for tracking all expenses related to
                                each voyage.
                            </p>
                        </div>

                        <div className="px-4 pt-6 pb-6 lg:pl-6 border-[1px] border-#e0e0e0 rounded-md gap-2">
                            <img src={integrationIcon} alt="Integration" className="mb-2 sm:mb-2" />
                            <p className="text-sm font-bold">Integration with Financial Systems</p>
                            <p className="text-xs sm:text-sm">
                              
                                Ensuring seamless integration between the contract capture and
                                voyage P&L management systems and broader financial systems.
                            </p>
                        </div>

                        <div className="px-4 pt-6 pb-6 lg:pl-6 border-[1px] border-#e0e0e0 rounded-md gap-2">
                            <img src={captureIcon} alt="capture" className="mb-2 sm:mb-2" />
                            <p className="text-sm font-bold">Revenue Management</p>
                            <p className="text-xs sm:text-sm">
                                Continuously evaluating and optimize freight rates based on
                                market conditions.
                            </p>
                        </div>
                        <div className="px-4 pt-6 pb-6 lg:pl-6 border-[1px] border-#e0e0e0 rounded-md gap-2">
                            <img src={performanceIcon} alt="performance" className="mb-2 sm:mb-2" />
                            <p className="text-sm font-bold">Performance Analytics</p>
                            <p className="text-xs sm:text-sm">
                                Defining and monitoring KPIs related to voyage P&L, such as
                                revenue per ton-mile, net profit margin, and on-time
                                performance.
                            </p>
                        </div>

                        <div className="px-4 pt-6 pb-6 lg:pl-6 border-[1px] border-#e0e0e0 rounded-md gap-2">
                            <img src={riskIcon} alt="risk" className="mb-2 sm:mb-2" />
                            <p className="text-sm font-bold">Risk Management</p>
                            <p className="text-xs sm:text-sm">
                                Implementing risk management strategies, such as fuel hedging,
                                to mitigate the impact of volatile market conditions on costs.
                            </p>
                        </div>

                        <div className="px-4 pt-6 pb-6 lg:pl-6 border-[1px] border-#e0e0e0 rounded-md gap-2">
                            <img src={complianceIcon} alt="compliance" className="mb-2 sm:mb-2" />
                            <p className="text-sm font-bold">Compliance</p>
                            <p className="text-xs sm:text-sm">
                                Staying informed about and complying with relevant regulations
                                in the shipping industry.
                            </p>
                        </div>
                    </div>

                </div>

                <div className="flex justify-center items-center flex-col gap-4">
                    <h6 className="text-md sm:text-lg font-bold text-center">Get in Touch</h6>
                    <p className="text-xs sm:text-sm text-center mx-4 ">Experience hassle-free dry bulk shipping solutions with Theoceann. <br />Contact us today to discuss your shipping needs and let us tailor a <br />solution that aligns with your requirements.</p>
                    <a href="https://theoceann.com/contact">
                        <button className="bg-[#F39C12] px-3 py-2 md:px-4 rounded-md text-sm md:text-md font-semi-bold text-white hover:shadow-yellow-500/20 hover:shadow-lg hover:bg-[#F39C12]">
                            Learn More
                        </button>
                    </a>
                </div>
            </div>


        </>
    );
};

export default Dry;
