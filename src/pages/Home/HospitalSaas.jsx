import React from "react";
import home_saas from "../../assets/home_saas.png";
import HomeButton from "./HomeButton";
import { BsFillCheckSquareFill } from "react-icons/bs";

const HospitalSaas = () => {
  return (
    <div className="flex h-[600px] sm:h-[500px] md:h-[600px] relative items-center">
      <div className="hidden md:block w-full h-full lg:w-1/2">
        <img className="w-full h-full object-cover" src={home_saas} alt="" />
      </div>
      <div
        style={{
          background: "rgba(0, 178, 254, 0.5)",
        }}
        className="w-full h-full absolute"
      ></div>
      <div className="w-full lg:w-1/2 absolute top-0 right-0 h-full flex justify-center items-center flex-col p-5 gap-2">
        <h1 className="text-2xl sm:text-4xl text-[#ff67a6] font-bold">
          Why Hospital SAAS?
        </h1>
        <p className="text-[18px] md:text-3xl lg:text-[18px] md:text-center lg:text-justify font-medium text-justify">
          We have implemented, Hospital SAAS for our patient's registration,
          appointment scheduling, inpatient management, ICU management, OT
          management, pharmacy.
        </p>
        <div className="flex w-full gap-2 justify-around items-center">
          <div className="my-2">
            <p className="flex items-center gap-1 text-sm sm:text-lg font-medium">
              <BsFillCheckSquareFill fontSize={21} />
              Fully Secure
            </p>
            <br />
            <p className="flex items-center gap-1 text-sm sm:text-lg font-medium">
              <BsFillCheckSquareFill fontSize={21} />
              Easy To Use
            </p>
          </div>
          <div>
            <p className="flex items-center gap-1 text-sm sm:text-lg font-medium">
              <BsFillCheckSquareFill fontSize={21} />
              Regular Updates
            </p>
            <br />
            <p className="flex items-center gap-1 text-sm sm:text-lg font-medium">
              <BsFillCheckSquareFill fontSize={21} />
              24*7 Support
            </p>
          </div>
        </div>
        <HomeButton />
      </div>
    </div>
  );
};

export default HospitalSaas;
