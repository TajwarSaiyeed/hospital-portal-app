import React from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer flex md:flex-row flex-col p-10 bg-[#0011AD] text-white">
      <div className="w-full md:w-1/2">
        <img src={logo} alt="" />
        <p className="text-xl">
          Over past 10+ years of experience <br /> and skills in various
          technologies, we built great scalable products. Whatever technology we
          worked with, we just not build products for our clients but we a
        </p>
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-5 md:flex-row md:justify-between">
        <div className="flex flex-col">
          <span className="footer-title text-xl">Useful Links</span>
          <Link className="text-xl link link-hover" to="/">
            Home
          </Link>
          <Link className="text-xl link link-hover" to="/pricing">
            Pricing
          </Link>
          <Link className="text-xl link link-hover" to="/contact">
            Contact
          </Link>
          <Link className="text-xl link link-hover" to="/aboutus">
            About
          </Link>
          <Link className="text-xl link link-hover" to="/services">
            Services
          </Link>
        </div>

        <div>
          <span className="footer-title text-xl">Get in Touch</span>
          <p className="text-lg">
            423B, Road Wordwide Country, USA <br /> admin@hms.com <br />{" "}
            +912345678900
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
