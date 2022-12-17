import React from "react";
import { Link } from "react-router-dom";
import Subscribe from "../shared/Subscribe/Subscribe";
import authImage from "../../assets/auth.png";
import logo from "../../assets/logo.png";

const Signup = () => {
  return (
    <div>
      <img src={authImage} alt="" />
      <div className="flex flex-col justify-center items-center w-full my-5">
        <div className="flex justify-center items-center flex-col">
          <img src={logo} alt="" />
          <h1 className="text-3xl font-bold text-[#00B2FE] uppercase">
            Sign Up
          </h1>
        </div>
        <form className="w-3/4 md:w-1/2 flex flex-col items-center justify-center">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Enter your email"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full">
            <input
              type="submit"
              value="Sign Up"
              className="btn bg-[#00B2FE] hover:bg-[#0e6c94] border-none mt-4"
            />
          </div>
        </form>
        <p className="my-4 text-xs sm:text-sm">
          Already have an account?{" "}
          <Link className="link" to="/login">
            Login
          </Link>
        </p>
        <Subscribe />
      </div>
    </div>
  );
};

export default Signup;
