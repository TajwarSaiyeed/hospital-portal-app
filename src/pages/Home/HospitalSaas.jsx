import React from "react";
import home_saas from "../../assets/home_saas.png";
import HomeButton from "./HomeButton";

const HospitalSaas = () => {
  return (
    <div className="flex relative items-center">
      <div className="hidden md:block w-1/2">
        <img src={home_saas} alt="" />
      </div>
      <div
        style={{
          background: "rgba(0, 178, 254, 0.5)",
        }}
        className="w-full h-full absolute"
      ></div>
      <div className="w-1/2 absolute top-0 right-0 h-full flex justify-center items-center flex-col p-5 gap-2">
        <h1 className="text-[55px] text-[#0011AD] font-bold">
          Why Hospital SAAS?
        </h1>
        <p className="text-[18px] font-medium text-justify">
          We have implemented, Hospital SAAS for our patient's registration,
          appointment scheduling, inpatient management, ICU management, OT
          management, pharmacy.
        </p>
        <div className="flex w-full gap-2 justify-around items-center">
          <div>
            <p className="flex text-lg font-medium">
              <input
                type="checkbox"
                checked="checked"
                className="checkbox checkbox-info mr-2"
              />
              Fully Secure
            </p>
            <br />
            <p className="flex text-lg font-medium">
              <input
                type="checkbox"
                checked="checked"
                className="checkbox checkbox-info mr-2"
              />
              Easy To Use
            </p>
          </div>
          <div>
            <p className="flex text-lg font-medium">
              <input
                type="checkbox"
                checked="checked"
                className="checkbox checkbox-info mr-2"
              />
              Regular Updates
            </p>
            <br />
            <p className="flex text-lg font-medium">
              <input
                type="checkbox"
                checked="checked"
                className="checkbox checkbox-info mr-2"
              />
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
