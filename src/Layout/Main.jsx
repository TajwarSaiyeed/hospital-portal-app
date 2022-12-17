import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";

const Main = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Main;
