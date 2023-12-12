import React, { useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { Link } from "react-router-dom";

export const MobileDropDown = ({ page, list, setNavOpen }) => {
  const [showDropDown, setShowDropdown] = useState(false);

  return (
    <div
      role="button"
      className="rounded-md "
      onClick={() => setShowDropdown(!showDropDown)}
      // onMouseLeave={() => setShowDropdown(false)}
    >
      <button className="flex gap-2 px-4 pb-2 capitalize items-center">
        {page + "s"}
        <BiSolidDownArrow
          className={showDropDown ? "rotate-180" : "rotate-0"}
          size={10}
        />
      </button>
      {showDropDown && (
        <ul className="flex flex-col max-h-fit pt-2 bg-white  gap-2 pb-2 underline">
          <h3 className="text-black font-semibold underline ml-4 text-[1rem]">
            {page + "s"}
          </h3>
          {list.map(({ route, title, logo }) => {
            return (
              <li className="flex p-1  text-[black] gap-3">
                <img src="" alt="" />
                <Link onClick={() => setNavOpen(false)} to={route}>
                  {title}
                </Link>
              </li>
            );
          })}
          {page === "solution" && (
            <>
              <div className="flex gap-2  pb-2 capitalize flex-col">
                <h3 className="text-black font-semibold underline ml-4 text-[1rem]">
                  Roles
                </h3>
                <li className="flex p-1  text-[black] gap-3">
                  <img src="" alt="" />
                  <Link to={"#"}>Dry</Link>
                </li>
                <li className="flex p-1  text-[black] gap-3">
                  <img src="" alt="" />
                  <Link to={"#"}>Project</Link>
                </li>
                <li className="flex p-1  text-[black] gap-3">
                  <img src="" alt="" />
                  <Link to={"#"}>Parceling</Link>
                </li>
                <li className="flex p-1  text-[black] gap-3">
                  <img src="" alt="" />
                  <Link to={"#"}>Tankers</Link>
                </li>
                <li className="flex p-1  text-[black] gap-3">
                  <img src="" alt="" />
                  <Link to={"#"}>Pooling</Link>
                </li>
              </div>
              <div className="flex gap-2  pb-2 capitalize flex-col">
                <h3 className="text-black font-semibold underline ml-4 text-[1rem]">
                Industries
                </h3>
                <li className="flex p-1  text-[black] gap-3">
                  <img src="" alt="" />
                  <Link to={"#"}>Shiping Owner</Link>
                </li>
                <li className="flex p-1  text-[black] gap-3">
                  <img src="" alt="" />
                  <Link to={"#"}>Charter-Operator</Link>
                </li>
                <li className="flex p-1  text-[black] gap-3">
                  <img src="" alt="" />
                  <Link to={"#"}>Commodities Trader</Link>
                </li>
                <li className="flex p-1  text-[black] gap-3">
                  <img src="" alt="" />
                  <Link to={"#"}>Port Agent</Link>
                </li>
                <li className="flex p-1  text-[black] gap-3">
                  <img src="" alt="" />
                  <Link to={"#"}>ship Broker</Link>
                </li>
              </div>
            </>
          )}
        </ul>
      )}
    </div>
  );
};
