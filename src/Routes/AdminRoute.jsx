import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";
import Loading from "../components/Loading/Loading";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, logOut, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <Loading />;
  }
  if (isAdmin) {
    return children;
  } else {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
};

export default AdminRoute;
