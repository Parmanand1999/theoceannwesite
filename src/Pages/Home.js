import React from "react";
import { Outlet } from "react-router-dom";
import FooterSection from "../Componants/FooterSection";
import Navbar from "../Componants/Navbar";

export const Home = () => {
  return (
    <>
    <Navbar/>
        <Outlet/>
     <FooterSection/>
    </>
  )
};
