import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import oceanAiimg from "./Assets/slider_img/Oceann-Ai-img.png";
import oceanmailimg from "./Assets/slider_img/Oceann-Mail-img.png";
import oceannZeroimg from "./Assets/slider_img/Oceann-Zero-img.png";
import oceannapiimg from "./Assets/slider_img/Oceann-Api-img.png";
import oceannvmimg from "./Assets/slider_img/Oceann-vm-img.png";

const SliderCard = () => {
  const cards = [
    oceanAiimg,
    oceanmailimg,
    oceannZeroimg,
    oceannapiimg,
    oceannvmimg,
  ];
  const cardLinks = [
    "/solution/oceann-ai",
    "/solution/oceann-mail",
    "product/ocean-zero",
    "/solution/oceann-api",
    "/solution/oceann-vm",
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 100 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="relative  lg:mt-[1%] xl:mt-[7%] 2xl:mt-[11%]">
      <Carousel
        responsive={responsive}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        showDots={false}
        arrows={false}
        className="w-[85%] h-40 md:h-60 lg:h-72 mx-auto"
      >
        {cards.map((src, index) => (
          <Link key={index} to={cardLinks[index]}>
            <div className="bg-white m-5 rounded-lg mx-auto shadow-2xl border h w-[90%] transition-transform flex flex-col justify-center ">
              <div className="flex justify-center items-center">
                {" "}
                {/* Add these classes */}
                <img
                  src={src}
                  alt={`Card ${index + 1}`}
                  className="w-2/4 h-32 md:h-44"
                />
              </div>
              <div className="border-2 md:border-4 mt-2 border-yellow-500  "></div>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default SliderCard;
