import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { BiSolidDownArrow } from "react-icons/bi";
export const SubMenuForSolutionKnowledgeHub = ({ submenuList, page }) => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const handleMouseEnter = () => {
    setMenuVisible(true);
  };

  const handleMouseLeave = () => {
    setMenuVisible(false);
  };

  const RolesAndIndustries = [
    {
      title:"Dry",
      link:"/dry"
    },
    {
      title:"Project",
      link:"/project"
    },
    {
      title:"Parceling",
      link:"/parceling" 
    },
    {
      title:"Tanker",
      link:"/tanker"
    },
    {
      title:"Pooling",
      link:"/pooling"
    },
    // "Project",
    // "Parceling",
    // "Tankers",
    // "Pooling",
  ];
  console.log(RolesAndIndustries,"999999");
  const Players = [
    "Shiping",
    "Charter-Operator",
    "Commodities Traders",
    "Ports Agents",
    "Shiping Broker",
  ];
  // console.log(submenuList);
  return (
    <div>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex gap-2 items-center"
      >
        <Link to={`/solution`} className="hover:text-blue-400">
          {/* {page === "#" ? "Knowledege-hub" : page} */}
          Solutions
        </Link>
        {/* <BiSolidDownArrow size={10} /> */}
        {isMenuVisible && (
          <div className="top-[1.5rem] min-w-[768px]  px-4 flex justify-center items-center   absolute left-[-12rem]">
            <div className="gap  flex">
              <div className="bg-white rounded-l-lg   mt-[1.5rem] pb-[1rem] justify-center gap-[1rem] px-[1rem]">
                <h3 className="text-black font-bold underline  text-[1.2rem] mt-3">
                  Solutions
                </h3>
                {submenuList.map(({ route, title, logo, list }) => {
                  return (
                    <div className="mt-[.5rem]    text-black">
                      <div>
                        <h3 className="text-[1rem] font-semibold font-[Roboto] w-[80%] border-b-2 mb-2 bg-white hover:border-gray-700 x-[.4rem] py-[.4rem]">
                          <Link to={route}>{title}</Link>
                        </h3>
                        {/* <hr className="w-[40%] h-[3px] mb-2  rounded-lg hover:bg-gray-200" /> */}
                      </div>
                      <ul className="font-[Roboto] min-w-[200px]  gap-2">
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
              <div className="bg-white rounded-r-lg flex  mt-[1.5rem] pb-[1rem] justify-center gap-[1rem] px-[1rem]">
                <div>
                  <h3 className="text-black font-bold underline  text-[1.2rem] mt-3">
                    Roles
                  </h3>
                  {RolesAndIndustries?.map((role, index) => {
                // console.log(title,link ,"hghygyh77777777");
                    return (
                      <div className="mt-[.5rem]    text-black">
                        <div key={index}>
                          <h3 className="text-[1rem]  font-[Roboto]  border-b-2 mb-2 bg-white px-[.4rem] py-[.4rem]">
                            <Link to={role.link}>{role.title}</Link>
                          </h3>
                          {/* <hr className="w-[40%] h-[3px] mb-2  rounded-lg hover:bg-gray-200" /> */}
                        </div>
                        {/* <ul className="font-[Roboto] min-w-[200px]  gap-2">
                        {list.map((subList) => {
                          return (
                            <Link to={'#'}>
                              <li className="text-[.9rem]">{subList}</li>
                            </Link>
                          );
                        })}
                      </ul> */}
                      </div>
                    );
                  })}
                </div>
                <div className="ml-[1.5rem]">
                  <h3 className="text-black font-bold underline  text-[1.2rem] mt-3">
                    Industries
                  </h3>
                  {Players.map((item) => {
                    return (
                      <div className="mt-[.5rem]    text-black">
                        <div>
                          <h3 className="text-[1rem]  font-[Roboto]  border-b-2 mb-2 bg-white px-[.4rem] py-[.4rem]">
                            <Link to={"#"}>{item}</Link>
                          </h3>
                          {/* <hr className="w-[40%] h-[3px] mb-2  rounded-lg hover:bg-gray-200" /> */}
                        </div>
                        {/* <ul className="font-[Roboto] min-w-[200px]  gap-2">
                        {list.map((subList) => {
                          return (
                            <Link to={'#'}>
                              <li className="text-[.9rem]">{subList}</li>
                            </Link>
                          );
                        })}
                      </ul> */}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
