import React from "react";

const ProtectYoutHealth = () => {
  const grhDetails = [
    {
      id: 1,
      title: "Schedule Appointment",
      description:
        "Makes it Easy for patients to Book Appointment online from anywhere & anytime.",
      image: "https://i.ibb.co/ZhssDvS/schedule.png",
    },
    {
      id: 2,
      title: "OPD Management",
      description:
        "Easily Manage Appointments with one click go to Medical Records of Patient to Save time.",
      image: "https://i.ibb.co/3sG49NW/opd.png",
    },
    {
      id: 3,
      title: "IPD Management",
      description:
        "This module of hospital management system is designed to manage all Inpatient department.",
      image: "https://i.ibb.co/jW5tHYR/ipd.png",
    },
  ];
  return (
    <div className="relative h-[1000px] sm:h-[700px] md:h-[800px] lg:h-[500px] mt-5 flex justify-center">
      <div className="bg-[#F5F5F5] w-full rounded-[50px] h-[300px] lg:h-64 shadow-md"></div>
      <div className="absolute top-10 mx-auto gap-5 flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center sm:text-6xl font-bold text-[#0011AD] mb-3">
          Protect Your Health
        </h1>
        <p className="text-center">
          Our medical clinic provides quality care for the entire family while
          maintaining a personable atmosphere best services.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
          {grhDetails.map((grhDetail) => (
            <div
              key={grhDetail.id}
              className="text-center gap-4 h-52 min-w-40 w-full flex flex-col md:w-72 lg:w-80 bg-[#0011AD] shadow-lg text-white p-4 rounded-2xl"
            >
              <h2 className="text-2xl font-bold text-white">
                {grhDetail.title}
              </h2>
              <div className="flex mt-4 text-left justify-center items-center gap-2">
                <img className="w-20 h-18 mr-4" src={grhDetail.image} alt="" />
                <p className="text-sm">{grhDetail.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProtectYoutHealth;
