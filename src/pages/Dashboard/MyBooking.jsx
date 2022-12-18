import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const MyBooking = () => {
  const { user } = useContext(AuthContext);
  const {
    data: myBookings = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myBookings", user?.emi],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_serveraddress}/orders?email=${user?.email}`,
          {
            headers: {
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        const data = await res.json();
        return data;
      } catch (err) {
        console.log(err.message);
      }
    },
  });

  console.log(myBookings);
  return <div>My booking</div>;
};

export default MyBooking;
