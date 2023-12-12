import React from "react";
import "./oceann-mail.css";
import oceanMailImg1 from "../Assets/Ocean-img/oceanMailImg1.png";
import oceanMailImg2 from "../Assets/Ocean-img/oceannMailImg2.png";
import oceanMailImg3 from "../Assets/Ocean-img/oceannMailImg3.png";
import oceanMailImg4 from "../Assets/Ocean-img/oceannMailImg4.png";
import trendImg from "../Assets/Ocean-img/trend-img.svg";
import rightImg from "../Assets/Ocean-img/right-img.svg";
import personImg from "../Assets/Ocean-img/person-img.svg";
import messageImg from "../Assets/Ocean-img/message-img.svg";
import settingImg from "../Assets/Ocean-img/setting-img.svg";
import rectangleImg1 from "../Assets/Ocean-img/RectangleImg1.png";
import rectangleImg2 from "../Assets/Ocean-img/RectangleImg2.svg";
// import oceannMailAnimationVideo from '../Assets/Oceann_Mail_Assests/video.mp4'

function OceanMail() {
  return (
    <>
      <main>
        <div
          className="h-[85vh] flex items-center"
          style={{
            backgroundImage: `url(${oceanMailImg1})`,
            backgroundSize: "cover",
          }}
        >
          <div className="oceann-mail-section1">
            <div className="text-center text-6xl">Oceann Mail</div>
            <div className="font-medium ">
              AI Enabled Communication Intelligence
            </div>
          </div>
        </div>
      </main>

      {/* <section className=" bg-slate-400">
        <video
          loop
          autoPlay
          muted
          className="h-[85vh]  object-cover"
        >
          <source src={oceannMailAnimationVideo} type="video/mp4"></source>
        </video>
      </section> */}

      <section>
        <div className="flex">
          <div className="p-12  font-semibold section2-child1">
            The email solution tailored for trading and operational needs. The
            Oceann operates as an innovative data collaboration hub, applying
            cutting-edge AI tools to support the maritime and trade industries.
          </div>
        </div>
      </section>

      <section>
        <div className="section3 pb-6">
          <div className="section3-child1"></div>
          <div className="container mx-auto flex justify-center items-center pt-12">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-content-center ">
              <div className="img-cls pt-3">
                <img
                  src={oceanMailImg2}
                  alt="oceanMailImg2"
                  className="w-[600px]"
                />
              </div>

              <div className="flex1 pr-8 mt-[60px]">
                <div className="heading text-white">
                  Intelligent ship filtering solutions
                </div>
                <div className="">
                  Unlock the potential of AI in the maritime world with our
                  cutting-edge Email Solution. Seamlessly streamline and enhance
                  your communication processes for unprecedented efficiency.
                  Harness the power of artificial intelligence to elevate your
                  shipping operations to new horizons. Explore the future of
                  maritime communication with us today.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="md:flex md:flex-row-reverse m-10 justify-between items-center w-[90%] mx-auto ml -36">
        <div className=" pt-3 flex items-center mx-auto">
          <img src={oceanMailImg3} alt="oceanMailImg3" className=" h-64 " />
        </div>
        <div className=" pr-8 mt-5 md:w-[50%] ">
          <h1 className="text-md font-bold md:text-lg">
            Seamless Communication, Smoother Voyages
          </h1>
          <div>
            Our AI-powered email solution streamlines communication, ensuring
            that shipping operations run more smoothly and efficiently. Stay
            ahead in the ever-evolving maritime landscape with our innovative
            solution.
          </div>
        </div>
      </div>

      <section>
        <div className="section3 section5 pb-6 pl-4">
          <div className="container mx-auto pt-12">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 pl-2">
              <div className="flex items-center justify-center">
                <div className="section5-heading">
                  ”Navigating the Future of Communication: Our AI-Powered Email
                  Solution for Shipping”
                </div>
              </div>

              <div className="section-5-img pt-3">
                <img
                  src={oceanMailImg4}
                  alt="oceanMailImg4"
                  className="h-[300px]"
                />
              </div>

              <div>
                Unlock the potential of AI in the maritime world with our
                cutting-edge Email Solution. Seamlessly streamline and enhance
                your communication processes for unprecedented efficiency.
                Harness the power of artificial intelligence to elevate your
                shipping operations to new horizons. Explore the future of
                maritime communication with us today.
              </div>
            </div>
          </div>
          <div className="section3-child1 mr-4"></div>
        </div>
      </section>

      <section>
        <div className="section6  mt-16 relative ">
          <div className="rectangleImg1 absolute top-0 z-10 left-0">
            <img src={rectangleImg1} alt="rectangleImg1" />
          </div>
          <div className="section6-heading z-10">Benefits</div>

          <div className="container mx-auto pt-6 pb-6 pl-6 pr-2 z-10">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-white shadow-lg section-2-cart">
                <div>
                  <img src={trendImg} alt="{trendImg}" />
                </div>
                <h1 className="platform-section2-cart-heading">
                  2x Faster Processing
                </h1>
                <p className="platform-section2-cart-info">
                  Dive into a world where email management is twice as fast,
                  guaranteeing swift decision-making for your voyages.
                </p>
              </div>

              <div className="p-4 bg-white shadow-lg section-2-cart">
                <div>
                  <img src={rightImg} alt="{rightImg}" />
                </div>
                <h1 className="platform-section2-cart-heading">
                  Augmented Voyage Efficiency
                </h1>
                <p className="platform-section2-cart-info">
                  Enhance your voyage plans and strategies with our tailored
                  insights.
                </p>
              </div>

              <div className="p-4 bg-white shadow-lg section-2-cart">
                <div>
                  <img src={personImg} alt="{personImg}" />
                </div>
                <h1 className="platform-section2-cart-heading">
                  Maximize Voyagers per User
                </h1>
                <p className="platform-section2-cart-info">
                  Expand your horizons and capitalize on more voyagers without
                  compromising user experience or safety.
                </p>
              </div>

              <div className="p-4 bg-white shadow-lg section-2-cart">
                <div>
                  <img src={messageImg} alt="{messageImg}" />
                </div>
                <h1 className="platform-section2-cart-heading">
                  Automated Email Sorting
                </h1>
                <p className="platform-section2-cart-info">
                  Say goodbye to the clutter. Our solution categorizes and
                  prioritizes emails for you, ensuring you see what's important
                  first..
                </p>
              </div>

              <div className="p-4 bg-white shadow-lg section-2-cart">
                <div>
                  <img src={settingImg} alt="{settingImg}" />
                </div>
                <h1 className="platform-section2-cart-heading">
                  Innovative Tonnage and Cargo Order Automation
                </h1>
                <p className="platform-section2-cart-info">
                  Our system reads and understands your entire email database,
                  turning thousands of emails into actionable insights on
                  tonnage and cargo orders.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rectangleImg2">
          <img src={rectangleImg2} alt="rectangleImg2" />
        </div>
      </section>
    </>
  );
}

export default OceanMail;
