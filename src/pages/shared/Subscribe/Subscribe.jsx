import React from "react";

const Subscribe = () => {
  return (
    <div className="flex my-5 justify-center items-center flex-col">
      <h1 className="font-bold text-[#0011AD] text-xl md:text-6xl mb-5">
        Subscribe Our Newsletter
      </h1>
      <div className="my-3 w-3/4 flex justify-center p-1 rounded-full bg-[#5eabcc] items-center gap-2">
        <div className="form-control w-full">
          <input
            type="text"
            placeholder="Enter your email"
            className="input border-none text-xl placeholder:text-white focus:outline-none w-full bg-transparent text-white"
          />
        </div>
        <input
          type="button"
          value="Subscribe"
          className="p-3 btn rounded-full"
        />
      </div>
    </div>
  );
};

export default Subscribe;
