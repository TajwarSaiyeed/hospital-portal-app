import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

const menuitems = (
  <>
    <li>
      <Link className="text-md" to="/">
        Home
      </Link>
    </li>
    <li>
      <Link className="text-md" to="/pricing">
        Pricing
      </Link>
    </li>
    <li>
      <Link className="text-md" to="/contact">
        Contact
      </Link>
    </li>
    <li>
      <Link className="text-md" to="/aboutus">
        About
      </Link>
    </li>
    <li>
      <Link className="text-md" to="/services">
        Services
      </Link>
    </li>
    <li>
      <Link className="text-md  bg-[#00B2FE] text-white" to="/login">
        Login
      </Link>
    </li>
  </>
);

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuitems}
          </ul>
        </div>
        <Link to="/">
          <img className="w-[60px] h-[60px]" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuitems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
