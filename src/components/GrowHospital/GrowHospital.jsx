import React from "react";

const GrowHospital = () => {
  const grhDetails = [
    {
      id: 1,
      title: "Built SEO",
      description:
        "SEO Brings Higher patient retention Rates which will Results into Higher Conversion Rate.",
      image: "https://i.ibb.co/hYDPXrd/seo.png",
    },
    {
      id: 2,
      title: "Hospital Profile",
      description:
        "More than 80% of people searching for medical professionals make their selection from HMS.",
      image: "https://i.ibb.co/7tJ1bmH/hosp.png",
    },
    {
      id: 3,
      title: "Online Appointment",
      description:
        "Provide comfort to your patients in this pandemic situation to book online appointments.",
      image: "https://i.ibb.co/10GP36y/appointment.png",
    },
    {
      id: 4,
      title: "Articles",
      description:
        "Keep updated with latest techniques/knowledge/research to build a professional network.",
      image: "https://i.ibb.co/CWdTF4s/articles.png",
    },
    {
      id: 5,
      title: "Easy to Use",
      description:
        "Top quality Software with all Features easy to use and easily accessible.",
      image: "https://i.ibb.co/FbhBVbp/finger.png",
    },
    {
      id: 6,
      title: "24*7 Support",
      description: "Any time we are here to help you.",
      image: "https://i.ibb.co/j6b0Pw0/call.png",
    },
  ];
  return (
    <div className="relative h-[1600px] sm:h-[900px] md:h-[900px] lg:h-[650px] mt-5 flex justify-center">
      <div className="w-full gap-10 flex flex-col">
        <div className="bg-[#F5F5F5] w-full rounded-[50px] h-[300px] lg:h-64 shadow-md"></div>
        <div className="bg-[#F5F5F5] w-full rounded-[50px] h-[300px] lg:h-64 shadow-md"></div>
      </div>
      <div className="absolute top-10 mx-auto gap-5 flex justify-center items-center flex-col">
        <h1 className="text-3xl sm:text-6xl text-center font-bold text-[#ff67a6] mb-3">
          Grow Your Hospital
        </h1>
        <p className="text-center">
          We Help To Grow Your Hospital Beyond Your Expectation
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
          {grhDetails.map((grhDetail) => (
            <div
              key={grhDetail.id}
              className="gap-4 h-52 min-w-40 w-full flex flex-col md:w-72 lg:w-80 bg-[#ff67a6] shadow-lg text-white p-4 rounded-2xl"
            >
              <img className="w-10 h-12" src={grhDetail.image} alt="" />
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {grhDetail.title}
                </h2>
                <p className="text-lg">{grhDetail.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GrowHospital;
