import React from "react";
import { useNavigate } from "react-router-dom";
import home_img_oceann_mail from "../Componants/Assets/image/home_img_oceann_mail.png";
import { Community } from "../Componants/Community";
import MapSection from "../Componants/MapSection";
import { MartimeMasters } from "../Componants/MartimeMasters";
import Navherosection from "../Componants/Navherosection";
import Oceannzerocard from "../Componants/OceannZero-Components/Oceannzerocard";
import ProfitableJourney from '../Componants/ProfitableJourney';
import TradingPlateform from "../Componants/TradingPlateform";
import VoyagePlanning from "../Componants/VoyagePlanning";
import HeroSection from "../Componants/heroSection";
import SliderCard from "../Componants/SliderCard";

const Home = () => {
  const navigator = useNavigate()
  return (
    <>
      <div>
        <div className="font-serift">
          <Navherosection />
          <SliderCard/>
          <HeroSection />
          <MapSection />
          <section className="flex mx-[3rem]  justify-center">
            <main className="w-[100%]">
              <div className="flex justify-center">
                <div>
                  <h3 className="text-[#003E78] capitalize font-semibold text-[2rem]">
                    Oceann mail
                  </h3>
                  <hr className="w-[50%] h-1 bg-[#F39C12] rounded-sm" />
                </div>
              </div>
              <p
                className="text-center  text-[1.5rem] 
          my-3 font-semibold max-md:text-[1rem]"
              >
                Discover the evolution of maritime email solutions with
                OceannMail
              </p>
              <div className="flex  gap-[1rem] max-md:flex-col-reverse max-md:items-center justify-center">
                <div className="w-[50%] max-md:flex flex-col  max-md:w-[95%] max-sm:w-full max-sm:text-center mt-[3rem] max-sm:text-[.8rem] max-lg:mt-0">
                  <p className="font-[Roboto] max-md:text-center">
                    Introducing OceannMail, the future of streamlined maritime
                    communications. Experience a revolution in maritime email
                    solutions, prioritizing speed and efficiency. Our technology
                    addresses existing platform inefficiencies to ensure your
                    emails are not just read but understood. Benefits include 2x
                    faster processing, augmented voyage efficiency, maximizing
                    voyagers per user, automated email sorting, and as we auto suggest ships for cargos for ships. Say goodbye to email
                    clutter and embrace a sea change in maritime communications
                    with OceannMail.
                  </p>
                  <button onClick={() => navigator("/solution/oceann-mail")} className="text-center max-sm:text-[.8rem] mt-[1.9rem] max-lg:mt-[1rem]    text-white text- px-[2rem] py-[.8rem] rounded-[30px] bg-[#F39C12] mx-auto">
                    LEARN MORE
                  </button>
                </div>
                <img
                  className="w-[50%] h-[80%] max-sm:w-full max-md:w-[95%]"
                  src={home_img_oceann_mail}
                  alt=""
                />
              </div>
            </main>
          </section>
          <MartimeMasters />

          <div className="mb-14 mx-[3rem] max-sm:mx-[1rem]">
            <h1 className="text-md text-center sm:text-lg md:text-xl font-semibold text-[#003E78] mt-1 mb-1  md:mt-5 p-2 ">
              <span className="border-b-4 border-[#F39C12]">Oceann</span> Zero
            </h1>
            <p className="p-1 text-center font-semibold text-sm sm:text-md md:text-md mb-4">
              Integrated Freight management platform
            </p>
            <Oceannzerocard />
          </div>
          <VoyagePlanning />
          <TradingPlateform />
          <Community />
          <ProfitableJourney/>
        </div>
      </div>
    </>
  );
};

export default Home;
