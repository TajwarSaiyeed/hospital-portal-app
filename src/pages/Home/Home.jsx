import React from "react";
import HomeAboutService from "../../components/HomeAboutService/HomeAboutService";
import Subscribe from "../shared/Subscribe/Subscribe";
import GrowHospital from "../../components/GrowHospital/GrowHospital";
import homeImage from "../../assets/home.png";
import ProtectYoutHealth from "./ProtectYoutHealth";
import HospitalSaas from "./HospitalSaas";
import HomeButton from "./HomeButton";
import AllPlans from "../../components/plans/AllPlans/AllPlans";

const Home = () => {
  return (
    <div>
      <div className="h-[500px] md:min-h-96 w-full relative">
        <img className="w-full object-cover h-full" src={homeImage} alt="" />
        <div className="absolute flex flex-col gap-5 p-4 md:pl-10 top-2/4 -translate-y-1/2 left-0 w-full md:w-1/2">
          <h1 className="text-2xl sm:text-4xl font-bold lg:font-normal md:text-4xl lg:text-6xl text-[#ff67a6]">
            Manage Hospital Never Before
          </h1>
          <p className="text-md sm:text-2xl font-semibold text-justify text-white">
            A Next Level Evolution In Healthcare IT, Web Based EMR, Revenue
            Cycle Management Solution, Designed To Meet The Opportunities.
          </p>
          <HomeButton />
          <p className="text-[#ff67a6] text-xl md:text-2xl mt-5">
            Call : +1234567890
          </p>
        </div>
      </div>
      <ProtectYoutHealth />
      <HospitalSaas />
      <GrowHospital />
      <HomeAboutService />
      <AllPlans />
      <Subscribe />
    </div>
  );
};

export default Home;
