import React from "react";

const ServicesSectionOne = () => {
  const grhDetails = [
    {
      id: 1,
      title: "Research",
      description:
        "HMS specialises in developing innovative, efficient and smart healthcare solutions.",
    },
    {
      id: 2,
      title: "HMS Customization",
      description:
        "We offer complete HMS customization solutions. We are staffed by eLearning experts and we know how to get the most from HMS.",
    },
    {
      id: 3,
      title: "Cost Effective",
      description:
        "HMS not only saves time in the hospital but also is cost-effective in decreasing the number of people working on the Paper work.",
    },
  ];

  return (
    <div className="relative h-[800px] md:h-[800px] lg:h-[500px] mt-5 flex justify-center">
      <div className="bg-[#F5F5F5] w-full rounded-[50px] h-[300px] lg:h-64 shadow-md"></div>
      <div className="absolute top-10 mx-auto gap-5 flex justify-center items-center flex-col">
        <h1 className="text-3xl sm:text-6xl font-bold text-[#0011AD] mb-3">
          Grow Your Hospital
        </h1>
        <p>We Help To Grow Your Hospital Beyond Your Expectation</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center">
          {grhDetails.map((grhDetail) => (
            <div
              key={grhDetail.id}
              className="text-center min-w-40 w-full md:w-72 lg:w-80 text-white flex justify-center items-center flex-col bg-[#0011AD] p-4 rounded-2xl"
            >
              <h1 className="text-6xl font-bold">{grhDetail.id}</h1>
              <h2 className="text-4xl">{grhDetail.title}</h2>
              <p className="text-lg">{grhDetail.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSectionOne;
