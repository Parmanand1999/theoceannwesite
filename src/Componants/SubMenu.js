import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BiSolidDownArrow } from "react-icons/bi";

export const SubMenu = ({ subMenuProductContent, page}) => {
  // const [isMenuVisible, setMenuVisible] = useState(false);
  // const handleMouseEnter = () => {
  //   setMenuVisible(true);
  // };

  // const handleMouseLeave = () => {
  //   setMenuVisible(false);
  // };

  const [isMenuVisible, setMenuVisible] = useState(false);
  const handleMouseEnter = () => {
    setMenuVisible(true);
  };

  const handleMouseLeave = () => {
    setMenuVisible(false);
  };

  if(page === 'Knowledege-hub'){
    page = '#'
  }

  return (
    <div>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex gap-2 items-center"
      >
        <Link to={`/product`} className="hover:text-blue-400">
          {page === '#' ? 'Knowledege-hub' : page}
        </Link>
        {/* <BiSolidDownArrow size={10} /> */}
        {isMenuVisible && (
          <div className="top-[1.2rem] min-w-[768px]  flex justify-center items-center   absolute left-[-12rem]">
            <div className="bg-white rounded-lg w-[800px] mt-[1.5rem] pb-[1rem] justify-center gap-[1rem]  flex flex-wrap ">
              {subMenuProductContent.map(({route ,title, logo, list }) => {
                return (
                  <div key={title} className="mt-[.5rem] w-[250px] pl-4  text-black">
                    <div>
                      <h3 className="text-[1rem] font-semibold font-[Roboto] w-[80%] border-b-2 mb-2 bg-white hover:border-gray-700 x-[.4rem] py-[.4rem]">
                        <Link to={route}>{title}</Link>
                      </h3>
                      {/* <hr className="w-[40%] h-[3px] mb-2  rounded-lg hover:bg-gray-200" /> */}
                    </div>
                    <ul className="font-[Roboto] min-w-[200px]  gap-2 flex flex-col ">
                      {list.map((subList) => {
                        
                        return (
                          <Link to={route}>
                            <li className="text-[.9rem]">{subList}</li>
                          </Link>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
