import React from 'react'
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";

export const Card = ({color, bgColor, title, detail, page,path}) => {
  return (
    <div className="p-4 rounded-2 flex flex-col justify-between  border w-[350px] h-[200px] border-solid border-black border-opacity-30 bg-white">
                <div className="flex">
                  <h3 style={{
                    'color': color,
                    'backgroundColor': bgColor,
                  }} className={`text-[.8rem] font-medium py-[.2rem] px-[.8rem]`}>
                    {title}
                  </h3>
                </div>
                <p
                  className="
                   w-[85%]
                     text-[.9rem] font-semibold text-[#101010]"

                >
                 {detail}
                </p>
                <Link to={path}>
                  <div className="flex  items-center gap-2">
                    <p className="font-[Roboto] text-[#0A62A4] text-[.7rem]">
                      Know more about {page}
                    </p>
                    <BsArrowRightShort />
                  </div>
                </Link>
              </div>
  )
}
