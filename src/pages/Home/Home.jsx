import React from "react";
import HomeAboutService from "../../components/HomeAboutService/HomeAboutService";
import Subscribe from "../shared/Subscribe/Subscribe";
import GrowHospital from "../../components/GrowHospital/GrowHospital";
import homeImage from "../../assets/home.png";

const Home = () => {
  return (
    <div>
      <div className="min-h-96 w-full relative">
        <img className="w-full object-cover h-full" src={homeImage} alt="" />
        <div className="absolute flex flex-col gap-5 pl-10 top-2/4 -translate-y-1/2 left-0 w-1/2">
          <h1 className="md:text-6xl text-[#0011AD]">
            Manage Hospital Never Before
          </h1>
          <p className="text-xl text-white">
            A Next Level Evolution In Healthcare IT, Web <br /> Based EMR,
            Revenue Cycle Management <br /> Solution, Designed To Meet The{" "}
            <br />
            Opportunities.
          </p>
          <div className="flex gap-6">
            <button className="btn btn-wide rounded-full bg-white hover:bg-slate-200 border-none shadow-md text-black shadow-white ">
              Signup
            </button>
            <button className="btn btn-wide rounded-full bg-white hover:bg-slate-200 border-none shadow-md text-black shadow-white ">
              Contact Us
            </button>
          </div>
          <p className="text-[#0011AD] text-2xl mt-5">Call : +912345678900</p>
        </div>
      </div>
      <GrowHospital />
      <HomeAboutService />
      <Subscribe />
    </div>
  );
};

export default Home;
