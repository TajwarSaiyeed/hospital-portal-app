import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer flex md:flex-row flex-col p-10 bg-[#ff67a6] text-white">
      <div className="w-full md:w-1/2">
        <img src={"/icon.png"} className="w-28 h-28 object-cover" alt="" />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
          Aliquam reiciendis, quidem dolor ea corrupti ex, libero animi
          repudiandae consectetur vel error impedit cum accusantium eligendi
          cumque cupiditate minus. Asperiores, ipsum.
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
            123D, Road Wordwide Country, test Country <br /> test@hms.com <br />{" "}
            +1234567890
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
