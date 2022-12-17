import React from "react";
import about1 from "../../assets/about1.png";

const AboutSectionOne = () => {
  const aboutSectionOne = [
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
  ];

  return (
    <div className="relative">
      <img src={about1} alt="" />
      <div
        style={{
          background: "rgba(0, 178, 254, 0.5)",
        }}
        className="absolute top-0 left-0 w-full h-full"
      ></div>
      <div className="absolute top-10 right-10 z-10">
        <div className="grid grid-cols-2 gap-2 justify-items-center">
          {aboutSectionOne.map((about) => (
            <div
              key={about.id}
              className="gap-3 h-52 min-w-40 w-full md:w-72 lg:w-96 flex  bg-white shadow-lg text-black p-4 rounded-2xl"
            >
              <div className="w-40">
                <img className="w-full" src={about.image} alt="" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#0011AD]">
                  {about.title}
                </h2>
                <p className="text-lg">{about.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSectionOne;
