import React from "react";

const HomeButton = () => {
  return (
    <div className="flex gap-6">
      <button className="btn btn-wide rounded-full bg-white hover:bg-slate-200 border-none shadow-md text-black shadow-white ">
        Signup
      </button>
      <button className="btn btn-wide rounded-full bg-white hover:bg-slate-200 border-none shadow-md text-black shadow-white ">
        Contact Us
      </button>
    </div>
  );
};

export default HomeButton;
