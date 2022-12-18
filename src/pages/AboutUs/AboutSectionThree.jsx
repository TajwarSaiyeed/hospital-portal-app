import React from "react";
import about2 from "../../assets/about2.png";

const AboutSectionThree = () => {
  const aboutSectionThree = [
    {
      id: 1,
      title: "Can Doctor 24x7 Handle My Emergency Situations?",
      body: "Doctor 24×7 is designed to handle non-emergent medical problems. You should NOT use it if you are experiencing a medical emergency.",
    },
    {
      id: 2,
      title: "Can I Call Doctor 24x7 Outside Of India?",
      body: "Doctor 24×7 consults are unavailable outside of India. However, if you are travelling outside India, you can use our service from a mobile phone using a SIM card issued in India.",
    },
    {
      id: 3,
      title: "Is my electronic health record kept private?",
      body: "Health records are kept totally private and we employ robust encryption methods to protect your personal information. You determine who can see the information in your record.",
    },
  ];

  return (
    <div className="relative h-[700px] max-h-[800px] sm:h-[600px]">
      <img className="w-full h-full object-cover" src={about2} alt="" />
      <div
        style={{
          background: "rgba(0, 178, 254, 0.5)",
        }}
        className="absolute top-0 left-0 w-full h-full"
      ></div>
      <div className="absolute top-10">
        {aboutSectionThree.map((about) => (
          <div key={about.id}>
            <h1 className="bg-white sm:w-3/4 md:text-xl lg:w-3/5 lg:text-2xl font-bold text-sm p-2 md:w-3/4 rounded-tr-3xl rounded-br-3xl pl-6">
              {about.title}
            </h1>
            <p className="w-full sm:w-3/4 text-md sm:text-lg md:text-xl mt-2 pl-6 p-3 text-white">
              {about.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSectionThree;
