import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";
import Hospitals from "../pages/Hospitals/Hospitals";
import Services from "../pages/Services/Services";
import Contact from "../pages/Contact/Contact";
import Pricing from "../pages/Pricing/Pricing";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/hospitals",
        element: <Hospitals />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);
