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
          <HomeButton />
          <p className="text-[#0011AD] text-2xl mt-5">Call : +912345678900</p>
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
