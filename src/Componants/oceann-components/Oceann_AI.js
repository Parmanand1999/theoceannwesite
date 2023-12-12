import React from "react";
import "./oceann-ai.css";
import oceannAI_Img1 from "../Assets/oceann-ai-img/oceann-img1.png";
import oceannAI_Img2 from "../Assets/oceann-ai-img/oceann-ai-img2.svg";
import roketImg from "../Assets/oceann-ai-img/roket-img.svg";
import bulbImg from "../Assets/oceann-ai-img/bulb-img.svg";
import oceannAI_Img3 from "../Assets/oceann-ai-img/oceann-ai-img3.png";
import oceannAI_Img4 from "../Assets/oceann-ai-img/oceann-img4.png";
import oceannAI_Img5 from "../Assets/oceann-ai-img/man-1.png";
import oceannAI_Img6 from "../Assets/oceann-ai-img/man-2.png";
import oceannAI_Img7 from "../Assets/oceann-ai-img/man-3.png";
import oceannAI_Img8 from "../Assets/oceann-ai-img/oceann-ai-img8.png";
import oceannAI_Img9 from "../Assets/oceann-ai-img/oceann-ai-img9.png";
import oceannAI_Img10 from "../Assets/oceann-ai-img/oceann-ai-img10.png";
import oceannAI_Img11 from "../Assets/oceann-ai-img/oceann-ai-img11.png";
import oceannAI_Img12 from "../Assets/oceann-ai-img/ocean-ai-img12.png";
import oceannAI_Img13 from "../Assets/oceann-ai-img/ocean-ai-img13.png";
import { Link } from "react-router-dom";

export default function Oceann_AI() {
  return (
    <>
      <main>
        <div
          className="h-[85vh] flex items-center"
          style={{
            backgroundImage: `url(${oceannAI_Img1})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "",
          }}
        >
          <div className="flex flex-col justify-between max-w-2xl ml-12">
            <div className="first-child">
              <div
                style={{
                  fontSize: "30px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "normal",
                  textTransform: "capitalize",
                }}
              >
                <div style={{ color: "white" }}>
                  Sailing with AI powered ships Revolutionizing Maritime
                  Excellence
                </div>

                <div></div>
              </div>
            </div>

            <div
              style={{
                color: "#9F7272",
                fontFamily: "Inter",
                fontSize: "12px",
                fontStyle: "normal",
                lineHeight: "100.9%",
              }}
            >
              <Link to="/demo">
                <button
                  style={{
                    backgroundColor: "#F39C12",
                    width: "125px",
                    height: "40px",
                    flexShrink: 0,
                    fontWeight: 600,
                    color: "white",
                    marginTop: "1.5rem",
                    borderRadius: "40px",
                  }}
                >
                  BOOK DEMO
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <section>
        <div className="section2-container flex flex-col -mt-20 w-[95%] mx-auto">
          <div className="section2-heading1">
            <h1>Our Intelligence Solution</h1>
          </div>

          <div className="p-8 md:w-[60%] text-center mx-auto">
            AI-Enabled Trade Intelligence utilizes artificial intelligence to
            provide advanced data analysis, predictive insights, and tailored
            solutions for enhancing decision-making, optimizing supply chains,
            and gaining a competitive edge in the global market.
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 w-[80%] mx-auto ">
            <img src={oceannAI_Img2} alt="oceannAI_Img2" />
            <img src={roketImg} alt="roketImg" className="m-10" />
            <div>
              <h1 className="text-lg">Advanced Data Analytics</h1>
              <p>
                Harness the power of artificial intelligence to analyze vast
                datasets in real-time, enabling you to make data-driven
                decisions that optimize your trade operations.
              </p>
            </div>

            <img src={bulbImg} alt="bulbImg" className="m-10" />
            <div>
              <h1 className="text-lg">Predictive Insights</h1>
              <p>
                AI-driven trade intelligence provides predictive analytics,
                helping you anticipate market trends and changes, ensuring you
                stay one step ahead of the competition.
              </p>
            </div>
            <img
              src={oceannAI_Img3}
              alt="oceannAI_Img3"
              className=" md:mt-[100px] "
            />
          </div>
        </div>
      </section>

      {/* ------------------ section2 -------------- */}
      <section>
        <div className="flex flex-col items-center section2">
          <div className="flex section2-child2">
            <div className="container mx-auto pt-6 pb-6 pl-6 ">
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
                <div className="img-cls pt-3 mr-2">
                  <img src={oceannAI_Img4} alt="oceannAI_Img4" />
                </div>

                <div className="flex2 pr-8 my-auto">
                  <div className="heading">
                    Nautical Evolution Powered by AI: Setting Sail for Success
                  </div>

                  <div>
                    AI-driven predictive maintenance helps in the early
                    detection of equipment failures, reducing downtime and
                    improving safety. Sensors and data analysis are used to
                    predict when machinery and components need maintenance or
                    replacement in ships. AI-powered systems in ships are used
                    for safety and security in maritime operations. These
                    systems can identify and respond to potential security
                    threats, monitor for oil spills and pollution, and even
                    assist in search and rescue missions. AI analytics help
                    optimize vessel performance by analyzing data on fuel
                    consumption, speed, and other operational parameters. This
                    can result in cost savings and reduced environmental impact.
                    AI systems use real-time weather data and historical
                    patterns to recommend optimal routes for ships, taking into
                    account fuel efficiency, safety, and the avoidance of severe
                    weather conditions.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------ section4 --------------- */}

     
      <div class="text-center">
        <h2 className=" text-lg lg:text-2xl m-10 font-bold">
          <span
            className="border-yellow-500
           border-b-4"
          >
           Our K
          </span>
          ey Features
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-[90%] mx-auto">
        {/* Card 1 */}
        <div className="max-w-xs rounded overflow-hidden shadow-lg bg-blue-200 rounded-t-full ">
          <img
            className="w-full h-[60%]"
            src={oceannAI_Img5}
            alt="oceannAI_Img5"
          />
          <div
            className="px-6 py-4 bg-[#003E78] border-orange-500 border-4 rounded-b-lg text-whit
    text-white h-[40%] overflow-auto"
          >
            <div className="font-bold text-lg mb-2">
              Decision Support and Automation
            </div>
            <p className=" text-base">
              Integrates AIS, weather, port, trade, and compliance for precise
              AI analysis in maritime operations.
            </p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="max-w-xs rounded overflow-hidden shadow-lg bg-blue-200 rounded-t-full">
          <img
            className="w-full h-[60%]"
            src={oceannAI_Img6}
            alt="oceannAI_Img6"
          />
          <div
            className="px-6 py-4 bg-[#003E78] border-orange-500 border-4 rounded-b-lg text-whit
    text-white h-[40%] overflow-auto"
          >
            <div className="font-bold text-lg mb-2">
              Data Collection and Processing
            </div>
            <p className="text-base">
              AI guides routes, automation optimizes, boosts maritime
              competitiveness.
            </p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="max-w-xs rounded overflow-hidden shadow-lg bg-blue-200 rounded-t-full">
          <img
            className="w-full h-[60%]"
            src={oceannAI_Img7}
            alt="oceannAI_Img7"
          />
          <div
            className="px-6 py-4 bg-[#003E78] border-orange-500 border-4 rounded-b-lg text-whit
    text-white h-[40%] overflow-auto"
          >
            <div className="font-bold text-lg mb-2">Ongoing enhancement</div>
            <p className=" text-base">
              AI learns from data, improves, and helps maritime adapt.
            </p>
          </div>
        </div>
        {/* Card 4 */}
        <div className="max-w-xs rounded overflow-hidden shadow-lg bg-blue-200 rounded-t-full">
          <img
            className="w-full h-[60%] "
            src={oceannAI_Img5}
            alt="oceannAI_Img5"
          />
          <div
            className="px-6 py-4 bg-[#003E78] border-orange-500 border-4 rounded-b-lg text-whit
    text-white h-[40%] overflow-auto"
          >
            <div className="font-bold text-lg mb-2">
              Generation and Forecasting
            </div>
            <p className=" text-base">
              AI for data analysis, optimizing routes and predicting market
              trends, risks, and compliance
            </p>
          </div>
        </div>
      </div>

      {/* ------------------ section5 --------------- */}

      <div class="text-center">
        <h2 className="text-lg lg:text-2xl m-10 font-bold">
          <span
            className="border-yellow-500
           border-b-4"
          >
            Our In
          </span>
          tellectual Gains
        </h2>
      </div>
      <div class="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 mx-auto card-container ml-5 mr-5">
        {/* <!-- Card 1 --> */}
        <div class="">
         
            <img
              src={oceannAI_Img8}
              alt="oceannAI_Img8"
              className="w-full h-[50%] "
            />
         
          <div class="bg-[#003E78] border-orange-500 border-4 p-5 flex h-[50%] overflow-auto">
            <h1 className="text-white text-xl my-auto m-2">01</h1>
            <div>
              <h3 class="text-white text-lg mt-2">Real-Time Monitoring</h3>
              <p class="text-white">
                Stay updated with real-time insights on market shifts and demand
                patterns, enabling quick responses to changing trade conditions.
              </p>
            </div>
          </div>
        </div>

        {/* <!-- Card 2 --> */}
        <div class="">
          
            <img
              src={oceannAI_Img9}
              alt="oceannAI_Img9"
              className="w-full h-[50%]"
            />
          
          <div class="bg-[#003E78] border-orange-500 border-4 p-4 flex h-[50%] overflow-auto">
            <h1 className="text-white text-xl my-auto m-2">02</h1>
            <div>
              <h3 class="text-white text-lg mt-2">Global Market Advantage</h3>
              <p class="text-white">
                AI-Enabled Trade Intelligence provides a competitive edge in the
                global market. Make informed decisions that set you apart and
                drive business success.
              </p>
            </div>
          </div>
        </div>

        {/* <!-- Card 3 --> */}
        <div class="">
         
            <img
              src={oceannAI_Img10}
              alt="oceannAI_Img10"
              className="w-full h-[50%]"
            />
         
          <div class="bg-[#003E78] border-orange-500 border-4 p-4 flex h-[50%] overflow-auto">
            <h1 className="text-white text-xl my-auto m-2">03</h1>
            <div>
              <h3 class="text-white text-lg mt-2">
                Enhanced Supply Chain Efficiency
              </h3>
              <p class="text-white">
              AI trade intelligence improves resource allocation and streamlines operations.
              </p>
            </div>
          </div>
        </div>

        {/* <!-- Card 4 --> */}
        <div class="">
          
            <img
              src={oceannAI_Img11}
              alt="oceannAI_Img10"
              className="w-full h-[50%]"
            />

          <div class="bg-[#003E78] border-orange-500 border-4 p-4 flex h-[50%] overflow-auto">
            <h1 className="text-white text-xl my-auto m-2">04</h1>
            <div>
              <h3 class="text-white text-lg mt-2">Innovation at the Core</h3>
              <p class="text-white">
                Stay at the forefront of AI technology with continuous
                innovation, ensuring you have access to the latest tools for
                trade intelligence.
              </p>
            </div>
          </div>
        </div>

        {/* <!-- Card 5 --> */}
        <div class="">
     
            <img
              src={oceannAI_Img12}
              alt="oceannAI_Img11"
              className="w-full h-[50%]"
            />
      
          <div class="bg-[#003E78] border-orange-500 border-4 p-4 flex h-[50%] overflow-auto">
            <h1 className="text-white text-xl my-auto m-2">05</h1>
            <div>
              <h3 class="text-white text-lg mt-2">The Future of Trade</h3>
              <p class="text-white">
                Embrace the future of trade intelligence with AI. Unlock
                unparalleled insights that enable you to thrive in a dynamic and
                evolving global trade landscape.
              </p>
            </div>
          </div>
        </div>

        {/* <!-- Card 6 --> */}
        <div class="">
          
            <img
              src={oceannAI_Img13}
              alt="oceannAI_Img11"
              className="w-full h-[50%]"
            />
          
          <div class="bg-[#003E78] border-orange-500 border-4 p-4 flex h-[50%]  overflow-auto">
            <h1 className="text-white text-xl my-auto m-2">06</h1>
            <div>
              <h3 class="text-white text-lg mt-2">Custom Solutions</h3>
              <p class="text-white">
                AI-Enabled Trade Intelligence can be customized to suit your
                specific industry, whether you're in shipping, logistics, or
                international trade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
