import React from "react";

const HomeAboutService = () => {
  const homeAboutService = [
    {
      id: 1,
      num: 234,
      text: "Services",
      pic: "https://i.ibb.co/gvrGtPz/check.png",
    },
    {
      id: 2,
      num: 455,
      text: "Team Members",
      pic: "https://i.ibb.co/NrqM4z8/pbar.png",
    },
    {
      id: 3,
      num: 365,
      text: "Happy Patients",
      pic: "https://i.ibb.co/nzx0F2z/heart.png",
    },
    {
      id: 4,
      num: 528,
      text: "Tonic Research",
      pic: "https://i.ibb.co/8zf3RT1/sm.png",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-5 md:h-32 my-5 bg-slate-100">
      {homeAboutService.map((HAS) => (
        <div key={HAS.id} className="flex items-center gap-2">
          <img src={HAS.pic} alt="" />
          <div className="flex flex-col">
            <span className="text-xl">{HAS.num}</span>
            <span className="text-xl">{HAS.text}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeAboutService;
