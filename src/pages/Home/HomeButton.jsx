import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const HomeButton = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex flex-col sm:flex-row gap-6">
      {!user?.email && (
        <Link
          to="/signup"
          className="btn btn-wide rounded-full bg-white hover:bg-slate-200 border-none shadow-md text-black shadow-white "
        >
          Signup
        </Link>
      )}
      <Link
        to="/contact"
        className="btn btn-wide rounded-full bg-white hover:bg-slate-200 border-none shadow-md text-black shadow-white "
      >
        Contact Us
      </Link>
    </div>
  );
};

export default HomeButton;
