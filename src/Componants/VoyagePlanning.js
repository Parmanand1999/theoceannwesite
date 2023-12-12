import React from "react";
// import naturalimg from "./Assets/image/Rectangle4082.png";
import natureImg from "./Assets/image/nature-img.png";
const VoyagePlanning = () => {
  return (
    <>
      <div>
        <h1 className="className='text-md text-center sm:text-lg md:text-xl font-semibold text-[#003E78]   md:mt-5 p-2 mb-4 lg:mb-11 mt-10">
          <span className="border-b-4   border-[#F39C12]">Voyage</span> Planning
        </h1>
      </div>
      <div className="flex max-sm:mx-[1.5rem] flex-col md:flex-row-reverse items-center gap-[4rem] justify-center mt-10 mb-10">
        <img
          src={natureImg}
          alt="imagepic"
          className="object-cover rounded-3xl"
        />
        <div className="flex max-sm:w-full text-center w-[50%] md:w-[30%] m justify-center text-black  flex-col gap-3  mt-2">
          <div className="shadow-lg  hover:shadow-2xl shadow-gray-400 bg-white hover:border hover:border-[#238A9F] rounded-2xl p-2">
            Analytical Trade Dashboard
          </div>
          <div className="shadow-lg hover:shadow-2xl shadow-gray-400 bg-white hover:border hover:border-[#238A9F] rounded-2xl p-2">
            Voyage Scheduling
          </div>
          <div className="shadow-lg  hover:shadow-2xl shadow-gray-400 bg-white hover:border hover:border-[#238A9F] rounded-2xl p-2">
            Freight Contract Management
          </div>
          <div className="shadow-lg  hover:shadow-2xl shadow-gray-400 bg-white hover:border hover:border-[#238A9F] rounded-2xl p-2">
            Port-Sea Distance Calculator
          </div>
          <div className="shadow-lg  hover:shadow-2xl shadow-gray-400 bg-white hover:border hover:border-[#238A9F] rounded-2xl p-2">
            Speed Dynamic
          </div>
          <div className="shadow-lg  hover:shadow-2xl shadow-gray-400 bg-white hover:border hover:border-[#238A9F] rounded-2xl p-2">
            Chartering
          </div>
          <div className="shadow-lg  hover:shadow-2xl shadow-gray-400 bg-white hover:border hover:border-[#238A9F] rounded-2xl p-2">
            Operation
          </div>
          <div className="shadow-lg  hover:shadow-2xl shadow-gray-400 bg-white hover:border hover:border-[#238A9F] rounded-2xl p-2">
            Finance
          </div>
          <div className="shadow-lg  hover:shadow-2xl shadow-gray-400 bg-white hover:border hover:border-[#238A9F] rounded-2xl p-2">
            Analytics
          </div>
        </div>
      </div>
    </>
    // <div className="flex justify-center m-6">
    //   <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">

    //   <div className="nature-img-container mt-2 mb-2">
    //       <div className="p-4 shadow-md">Analytical Trade Dashboard</div>
    //       <div className="p-4 shadow-md">Voyage Scheduling</div>
    //       <div className="p-4 shadow-md">Freight Contract Management</div>
    //       <div className="p-4 shadow-md">Port-Sea Distance Calculator</div>
    //       <div className="p-4 shadow-md">Speed Dynamic</div>
    //       <div className="p-4 shadow-md">Chartering</div>
    //       <div className="p-4 shadow-md">Operation</div>
    //       <div className="p-4 shadow-md">Finance</div>
    //       <div className="p-4 shadow-md">Analytics</div>
    //     </div>

    //     <div className="nature-img-container1">
    //       <img src={natureImg} alt="natureImg"/>
    //     </div>

    //   </div>
    // </div>
  );
};

export default VoyagePlanning;
