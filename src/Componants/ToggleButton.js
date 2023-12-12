
import {AiOutlineMenu } from "react-icons/ai";
import { FaTimes } from 'react-icons/fa';
export const ToggleButton = ({setNavOpen, isNavOpen}) => {
    console.log(isNavOpen);
  return (
    <div className="z-50 absolute right-0 mt-8 flex justify-end items-center mr-4">
      <button onClick={() => setNavOpen(!isNavOpen)}>
        {!isNavOpen ? (
          <FaTimes size={30} />
        ) : (
          <AiOutlineMenu size={30} className="text-white text-2xl" />
        )}
      </button>
    </div>
  );
};
