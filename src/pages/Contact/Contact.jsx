import React from "react";
import contactImage from "../../assets/contact.png";
import { FaLocationArrow, FaPhone } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import Subscribe from "../shared/Subscribe/Subscribe";

const Contact = () => {
  return (
    <div>
      <div className="min-h-96 w-full">
        <img className="w-full object-cover h-full" src={contactImage} alt="" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-6xl text-[#0011AD] my-3 font-bold uppercase">
            Contact Us
          </h1>
          <p className="font-semibold text-xl">
            Get in touch and let us know how we can help. Fill out the form and
            we’ll be in touch as soon as possible.
          </p>
        </div>
        <div className="bg-[#27b9be] w-full flex flex-col-reverse md:flex-row justify-between items-center rounded-lg my-5">
          <div className="p-5 w-full md:w-1/2">
            <form className="w-full flex flex-col items-center justify-center">
              <div className="form-control w-full">
                <label className="label">
                  <span className="text-md text-white font-semibold">
                    First Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your First Name"
                  className="input input-bordered w-full "
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="text-md text-white font-semibold">
                    Last Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Last Name"
                  className="input input-bordered w-full "
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="text-md text-white font-semibold">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="input input-bordered w-full "
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="text-md text-white font-semibold">
                    Phone Number
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="Enter your password"
                  className="input input-bordered w-full "
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="text-md text-white font-semibold">
                    Message
                  </span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-24 w-full"
                  placeholder="Enter Your Message..."
                ></textarea>
              </div>

              <div className="form-control w-full">
                <input
                  type="submit"
                  value="Send Message"
                  className="btn font-bold bg-slate-300 hover:bg-slate-700 text-black hover:text-gray-200  border-none mt-4"
                />
              </div>
            </form>
          </div>
          <div className="w-full md:w-1/2 p-5 flex flex-col justify-start items-start ">
            <div className="flex justify-start items-center">
              <div className="bg-black p-3 rounded-full">
                <FaLocationArrow className="text-4xl text-[#00B2FE]" />
              </div>
              <dir>
                <h1 className="text-xl md:text-3xl font-semibold">Address</h1>
                <p className="text-lg font-medium">
                  423B, Road Wordwide Country, USA
                </p>
              </dir>
            </div>
            <div className="flex justify-start items-center">
              <div className="bg-black p-3 rounded-full">
                <MdMarkEmailRead className="text-4xl text-[#00B2FE]" />
              </div>
              <dir>
                <h1 className="text-xl md:text-3xl font-semibold">Email</h1>
                <p className="text-lg font-medium">admin@hms.com</p>
              </dir>
            </div>
            <div className="flex justify-start items-center">
              <div className="bg-black p-3 rounded-full">
                <FaPhone className="text-4xl text-[#00B2FE]" />
              </div>
              <dir>
                <h1 className="text-xl md:text-3xl font-semibold">Phone</h1>
                <p className="text-lg font-medium">+912345678900</p>
              </dir>
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
    </div>
  );
};

export default Contact;
