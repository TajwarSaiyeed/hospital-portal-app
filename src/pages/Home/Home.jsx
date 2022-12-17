import React from "react";
import HomeAboutService from "../../components/HomeAboutService/HomeAboutService";
import Subscribe from "../shared/Subscribe/Subscribe";
import GrowHospital from "../../components/GrowHospital/GrowHospital";
import homeImage from "../../assets/home.png";

const Home = () => {
  return (
    <div>
      <div className="h-96 w-full">
        <img className="w-full object-cover h-full" src={homeImage} alt="" />
      </div>
      <GrowHospital />
      <HomeAboutService />
      <Subscribe />
    </div>
  );
};

export default Home;
