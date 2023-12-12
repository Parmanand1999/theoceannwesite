import React from "react";
import "./oceann-bi.css";
import oceannBI_Img1 from "../Assets/oceann-bi-img/oceann-bi-img1.jpg";
import editImg from "../Assets/oceann-bi-img/Edit.svg";
import managementImg from "../Assets/oceann-bi-img/management-img.svg";
import financeImg from "../Assets/oceann-bi-img/finance-img.svg";
import performanceImg from "../Assets/oceann-bi-img/performance-img.png";
import oceannBI_Img2 from "../Assets/oceann-bi-img/oceann-bm-img2.png";
import oceannBI_Img3 from "../Assets/oceann-bi-img/oceann-bi-img3.png";
import oceannBI_Img4 from "../Assets/oceann-bi-img/oceann-bi-img4.png";
import oceannBI_Img5 from "../Assets/oceann-bi-img/oceann-bi-img5.png";
import oceannBI_Img6 from "../Assets/oceann-bi-img/1st Image.png";
import oceannBI_Img7 from "../Assets/oceann-bi-img/2nd Img.png";
import oceannBI_Img8 from "../Assets/oceann-bi-img/3rd Image.png";
import oceannBI_Img9 from "../Assets/oceann-bi-img/4th image.png";
import { MdOutlineComputer} from 'react-icons/md';
import { BsGraphUp} from 'react-icons/bs';
import { AiOutlineTeam} from 'react-icons/ai';
import {BiHeart} from 'react-icons/bi';
import { Link } from "react-router-dom";
export default function OceannFinance() {
  
  return (
    <>
      <main>
        <div
          className="h-[85vh] flex items-center"
          style={{
            backgroundImage: `url(${oceannBI_Img1})`,
            backgroundSize: "100% 100%",
            backgroundPosition:"center"
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
                <h1 style={{ color: "#003E78" }}>
                  Your Navigational Hub for Maritime Excellence
                </h1>
                {/* <h1 style={{ color: "#F39C12" }}>Ship Trading</h1> */}
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
                <div
                  className="max-w-xl"
                  style={{ color: "#929292", fontWeight: 600 }}
                >
                  Captain's Compass: Set Sail for Success with business
                  Intelligence tool.
                </div>
                <Link to='/demo'>
                
                <button
                  style={{
                    backgroundColor: "#F39C12",
                    width: "184px",
                    height: "49px",
                    flexShrink: 0,
                    fontWeight: 600,
                    color: "white",
                    marginTop: "1.5rem",
                  }}
                >
                  GET STARTED
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section>
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 section-2-cart">
            <div className="bg-white border rounded-lg hover:bg-[#23A6F0] hover:text-white p-4 shadow-md group">
              <AiOutlineTeam className="font-bold w-10 h-10 text-[#23A6F0] group-hover:text-white"/>
              <h2 class="text-lg font-semibold">Risk Mitigation</h2>
            </div>

            <div className="bg-white border rounded-lg hover:bg-[#23A6F0] hover:text-white p-4 shadow-md group">
            <BsGraphUp className="font-bold w-8 h-8 text-[#23A6F0] group-hover:text-white"/>
              <h2 class="text-lg font-semibold">Trend Recognition</h2>
            </div>

            <div className="bg-white border rounded-lg hover:bg-[#23A6F0] hover:text-white p-4 shadow-md group">
              <BiHeart className="w-10 h-10 text-[#23A6F0] group-hover:text-white"/>
              <h2 class="text-lg font-semibold  ">
                Real-Time Monitoring
              </h2>
            </div>

            <div className="bg-white border rounded-lg hover:bg-[#23A6F0] hover:text-white p-4 shadow-md group">
              
              <MdOutlineComputer className="w-10 h-10 text-[#23A6F0] group-hover:text-white"/>
              <h2 className="text-lg font-semibold">Market Understanding</h2>
            </div>
          </div>
        </div>
      </section>

      {/* ------------- section 2 ------------ */}

      <section>
        <div className="flex flex-col items-center">
          
            <h1 className=" font-bold text-md md:text-lg lg:text-xl mt-10 mb-10"><span className="border-b-2 md:border-b-4 border-yellow-500">Our Business </span>Intelligence Features</h1>
          
          <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 section-2-cart">
              <div className="bg-white border rounded-lg p-4 shadow-md hover:bg-[#0D1337] hover:text-white color-cart "
              
              >
                <div className="w-16 h-16 bg-[#fff] rounded-full flex items-center justify-center">
                  <img src={editImg} alt="editImg" className="bg-yellow-400 p-5 rounded-full"/>
                </div>

                <h2 className="text-lg font-semibold">Chartering dashboard</h2>
                <p>
                  It provides critical real-time data for optimizing vessel
                  chartering and operations.
                </p>
              </div>

              <div className="bg-white border rounded-lg p-4  shadow-md hover:bg-[#0D1337] hover:text-white">
                <div className="w-16 h-16 bg-[#00B4D8] rounded-full flex items-center justify-center">
                  <img src={managementImg} alt="managementImg" />
                </div>

                <h2 className="text-lg font-semibold">Bunker Performance Matrix</h2>
                <p>
                  It provides real-time data on fuel prices, consumption, and
                  environmental regulations, enabling shipowners and operators
                  to make informed decisions, minimize costs, and ensure
                  compliance with emissions standards.
                </p>
              </div>

              <div className="bg-white border rounded-lg p-4 shadow-md hover:bg-[#0D1337] hover:text-white">
                <div class="w-16 h-16 bg-[#7400B8] rounded-full flex items-center justify-center">
                  <img src={financeImg} alt="financeImg" />
                </div>

                <h2 class="text-lg font-semibold">Finance Dashboard</h2>
                <p>
                  Accounting Performance matrix offers real-time insights into
                  financial performance, enabling better decision-making.
                </p>
              </div>

              <div className="bg-white border rounded-lg p-4 shadow-md hover:bg-[#0D1337] hover:text-white">
                <div className="w-16 h-16 bg-[#FF4D6D] rounded-full flex items-center justify-center">
                  <img src={performanceImg} alt="performanceImg" />
                </div>

                <h2 className="text-lg font-semibold">
                  Port Performance Dashboard
                </h2>
                <p>
                  Performance Matrix in the marine industry provides a
                  comprehensive evaluation of port operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------- section 3 ---------------- */}

      <section>
        <div className="flex flex-col items-center section2">
          <div className="section2-heading pt-8 ml-7">
            Streamlined Insights for Strategic Navigation
          </div>

          <div className="flex section2-child2">
            <div className="container mx-auto pt-6 pb-6 pl-6 ">
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
                <div className="flex2 pr-8">
                  <div className="heading">Chartering performance Matrix</div>
                  <div>
                    It provides critical real-time data for optimizing vessel
                    chartering and operations. It offers insights into market
                    rates, cargo opportunities, and vessel performance, enabling
                    informed decisions and enhancing operational efficiency.
                  </div>

                  <div>
                    <Link to="/solution/oceann-vm">
                    <button
                      style={{
                        backgroundColor: "#F39C12",
                        width: "184px",
                        height: "49px",
                        flexShrink: 0,
                        fontWeight: 600,
                        color: "white",
                        marginTop: "1.5rem",
                      }}
                      >
                      KNOW MORE
                    </button>
                      </Link>   
                  </div>
                </div>

                <div className="img-cls pt-3">
                  <img src={oceannBI_Img2} alt="oceannVM_Img2" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 mt-6">
                <div className="img-cls pt-3">
                  <img src={oceannBI_Img3} alt="oceannVM_Img3" />
                </div>

                <div className="flex2 md:pl-10">
                  <div className="heading">Bunker Performance Matrix</div>
                  <div>
                    Digital platform designed to monitor and manage marine fuel
                    operations. It provides real-time data on fuel prices,
                    consumption, and environmental regulations, enabling
                    shipowners and operators to make informed decisions,
                    minimize costs, and ensure compliance with emissions
                    standards.
                  </div>

                  <div>
                  <Link to="/solution/oceann-vm">
                    <button
                      style={{
                        backgroundColor: "#F39C12",
                        width: "184px",
                        height: "49px",
                        flexShrink: 0,
                        fontWeight: 600,
                        color: "white",
                        marginTop: "1.5rem",
                      }}
                    >
                      KNOW MORE
                    </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 mt-6">
                <div className="flex2 pr-8">
                  <div className="heading">Port Performance Matrix</div>
                  <div>
                    Port Performance Matrix in the marine industry provides a
                    comprehensive evaluation of port operations. It helps assess
                    efficiency, turnaround times, congestion, and overall
                    productivity, allowing port authorities and stakeholders to
                    make data-driven decisions for optimizing operations,
                    enhancing logistics, and improving the overall performance
                    of a port.
                  </div>

                  <div>
                  <Link to="/solution/oceann-vm">
                    <button
                      style={{
                        backgroundColor: "#F39C12",
                        width: "184px",
                        height: "49px",
                        flexShrink: 0,
                        fontWeight: 600,
                        color: "white",
                        marginTop: "1.5rem",
                      }}
                    >
                      KNOW MORE
                    </button>
                    </Link>
                  </div>
                </div>

                <div className="img-cls pt-3">
                  <img src={oceannBI_Img4} alt="oceannVM_Img4" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 mt-6">
                <div className="img-cls pt-3">
                  <img src={oceannBI_Img5} alt="oceannVM_Img5" />
                </div>

                <div className="flex2 pl-2">
                  <div className="heading">Accounting Performance Matrix</div>
                  <div>
                    Accounting Performnce matrix offers real-time insights into
                    financial performance, enabling better decision-making. It
                    helps with cost control, financial planning, and identifying
                    areas for operational optimization, ultimately contributing
                    to improved profitability and sustainability in this
                    competitive sector.
                  </div>

                  <div>
                  <Link to="/solution/oceann-vm">
                    <button
                      style={{
                        backgroundColor: "#F39C12",
                        width: "184px",
                        height: "49px",
                        flexShrink: 0,
                        fontWeight: 600,
                        color: "white",
                        marginTop: "1.5rem",
                      }}
                    >
                      KNOW MORE
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------- section 4 ----------------  */}

      <section>
        <div className="flex flex-col items-center section2">
          <div className="section2-heading pt-8">Services</div>

          <div className="flex section2-child2">
            <div className="container mx-auto pt-6 pb-6 pl-6 ">
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
                <div className="flex2 pr-8">
                  <div className="heading">Fleet Management</div>
                  <div>
                    Marine companies often operate fleets of vessels. BI tools
                    can provide insights into the maintenance needs of vessels,
                    track vessel locations, and optimize the deployment of
                    assets for improved efficiency..
                  </div>
                </div>

                <div className=" ">
                  <img src={oceannBI_Img6} alt="oceannBI_Img6" className="  max-md:hidden h-24 md:h-36 "/>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
                <div className="img-cls pt-3 mr-2">
                  <img src={oceannBI_Img7} alt="oceannBI_Img7" className="max-md:hidden h-24 md:h-36 " />
                </div>

                <div className="flex2 pr-8">
                  <div className="heading">Supply Chain Management</div>
                  <div>
                    BI tools can help monitor and manage the supply chain for
                    maritime companies. This includes tracking the movement of
                    goods, managing inventory, and ensuring timely delivery.
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 mt-2">
                <div className="flex2 pr-8">
                  <div className="heading">Market Analysis and Pricing</div>
                  <div>
                  Marine companies can use BI tools to analyze market trends, pricing strategies, and competitor performance to make informed decisions about routes, pricing, and market expansion.
                  </div>
                </div>

                <div className="img-cls pt-3">
                  <img src={oceannBI_Img8} alt="oceannBI_Img8"  className="max-md:hidden h-24 md:h-36 "/>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
                <div className="img-cls pt-3 mr-2">
                  <img src={oceannBI_Img9} alt="oceannBI_Img9" className="max-md:hidden h-24 md:h-36 "/>
                </div>

                <div className="flex2 pr-8">
                  <div className="heading">Port and Terminal Operations</div>
                  <div>
                    BI tools can help optimize port and terminal operations by
                    tracking cargo movements, managing container handling, and
                    scheduling docking times for vessels.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
