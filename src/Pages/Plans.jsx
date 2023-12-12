import React, { useEffect } from "react";
import { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import "../styles/paymentSegment.css";
import { productListService } from "../services/all";

const Plans = () => {
  window.scrollTo(0, 0);
  const Navigate = useNavigate();
  const [planForm, setPlanForm] = useState({
    durationType: "monthly",
    duration: 1,
    numberOfUsers: 1,
    months: 12,
  });

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const newForm = { ...planForm };
    if (newForm.durationType == "yearly") {
      newForm.months = 12 * newForm.duration;
    } else {
      newForm.months = newForm.duration;
    }
    setPlanForm(newForm);
  }, [planForm.duration]);

  useEffect(() => {
    getProductList().then((data) => {
      setProducts(data);
    });
  }, []);

  const getProductList = async () => {
    // setIsLoading(true);
    try {
      const data = await productListService();
      // setIsLoading(false);
      return data;
    } catch (error) {
      alert(error.message);
      return [];
    }
  };

  const submitHandler = (userInput) => {
    const token = localStorage.getItem("oceanAllToken");
    const signedUp = localStorage.getItem("oceanAllSignupData");
    if (signedUp) {
      console.log("user signed up");
      // setSelectedProduct(userInput);
      localStorage.setItem("oceanSelectedProduct", userInput.product_name);
      Navigate("/checkout", { state: { product: userInput } });
    } else if (token) {
      const userData = JSON.parse(localStorage.getItem("oceanAllUserData"));
      if (userData.is_subscribed) {
        Swal.fire({
          title: "Already subscribed",
          text: "Please check your profile",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "My Profile",
        }).then((result) => {
          if (result.isConfirmed) {
            Navigate("/profile");
            // window.localStorage.href = "/profile";
          }
        });
      } else {
        const isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
        if (isAdmin) {
          localStorage.setItem("oceanSelectedProduct", userInput.product_name);
          Navigate("/checkout", { state: { product: userInput } });
        } else {
          Swal.fire({
            title: "Not allowed",
            text: "Please contact admin",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "My Profile",
          }).then((result) => {
            if (result.isConfirmed) {
              Navigate("/profile");
              // window.localStorage.href = "/profile";
            }
          });
        }
      }
    } else {
      Navigate("/login");
    }
  };

  return (
    <>
      <div className="m-5 md:m-10">
        <h1 className="text-md text-center sm:text-md md:text-xl font-bold ">
          Explore Our Plans
        </h1>
        <p className="text-xs text-center sm:text-sm md:text-md font-light">
          Custom Crafting Solutions to Meet Your Distinctive Needs
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 w-[90%] mx-auto h-auto">
        {/* Card 1 */}
        {products.map((product, index) => (
          <div key={product.id} className="shadow-2xl border rounded-xl h-fit">
            <h1
              className={
                index % 2 === 0
                  ? "text-sm text-center text-white sm:text-md md:text-lg font-semibold p-4  bg-[#0647CD] rounded-t-xl"
                  : "text-sm text-center text-white sm:text-md md:text-lg font-semibold p-4  bg-[#06cd10] rounded-t-xl"
              }
            >
              {/* vm product */}
              {product.product_name}
            </h1>
            <div className="p-4 gap-4 ">
              <p className="text-xs text-left mx-auto  sm:text-sm md:text-md font-light w-[90%]">
                {product.product_description}
              </p>
              <hr className="m-2 md:m-5" />
              <div className="priceDiv">${product.product_price_per_user}</div>
              <div className="flex flex-col gap-2 md:gap-4 mt-2 md:mt-4 text-xs sm:text-sm lg:text-md xl:text-md justify-center  w-[90%] mx-auto">
                <div className="flex items-center gap-2 w-full ">
                  <AiFillCheckCircle className="w-[10%] text-[#183165]" />
                  <p className="w-[90%]">
                    All the offerings delivered by Oceann Mail
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <AiFillCheckCircle className="w-[10%] text-[#183165]" />
                  <p className="w-[90%]">
                    All the offerings delivered by Oceann Zero
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <AiFillCheckCircle className="w-[10%] text-[#183165]" />
                  <p className="w-[90%]">
                    Chartering: Comprehensive management of TC, VC, COA, cargo
                    trade, and assets
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <AiFillCheckCircle className="w-[10%] text-[#183165]" />
                  <p className="w-[90%]">
                    Operation: Streamlined vessel, voyage, routing,
                    optimization, and reporting.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <AiFillCheckCircle className="w-[10%] text-[#183165]" />
                  <p className="w-[90%]">
                    Finance: Automated invoice generation and tracking.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <AiFillCheckCircle className="w-[10%] text-[#183165]" />
                  <p className="w-[90%]">Data & Integration</p>
                </div>
                <div className="flex items-center gap-2">
                  <AiFillCheckCircle className="w-[10%] text-[#183165]" />
                  <p className="w-[90%]">Bunker Management planForm</p>
                </div>
                <div className="flex items-center gap-2">
                  <AiFillCheckCircle className="w-[10%] text-[#183165]" />
                  <p className="w-[90%]">Port DA Management</p>
                </div>
                <div className="flex items-center gap-2">
                  <AiFillCheckCircle className="w-[10%] text-[#183165]" />
                  <p className="w-[90%]">Claim and Laytime Management</p>
                </div>
                <div className="flex items-center gap-2">
                  <AiFillCheckCircle className="w-[10%] text-[#183165]" />
                  <p className="w-[90%]">Tanker Pooling</p>
                </div>
                <div className="flex items-center gap-2">
                  <AiFillCheckCircle className="w-[10%] text-[#183165]" />
                  <p className="w-[90%]">STS (Ship-to-Ship transfer)</p>
                </div>
                <div className="flex items-center gap-2">
                  <AiFillCheckCircle className="w-[10%] text-[#183165]" />
                  <p className="w-[90%]">Market Trade</p>
                </div>
                <div className="flex items-center gap-2">
                  <AiFillCheckCircle className="w-[10%] text-[#183165]" />
                  <p className="w-[90%]">Third-Party API Service</p>
                </div>
                <button
                  className="bg-[#F39C12] ml-2 p-2  text-white  w-[85%] rounded-sm  "
                  // onClick={() => {
                  //
                  // }}
                  onClick={() => {
                    submitHandler(product);
                  }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Plans;
