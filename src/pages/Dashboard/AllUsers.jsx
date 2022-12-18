import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_serveraddress}/users`,
          {
            headers: {
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        const data = await res.json();
        return data;
      } catch (err) {
        console.log(err);
      }
    },
  });

  console.log(users);

  return (
    <>
      {users.length > 0 ? (
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user) => (
                <tr key={user?._id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={user?.avatar || "https://i.pravatar.cc/300"}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user?.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-primary">{user?.role}</span>
                  </td>
                  <td>
                    <button className="btn btn-xs btn-error">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex justify-center items-center h-96">
          <h1 className="text-3xl">No User Available</h1>
        </div>
      )}
    </>
  );
};

export default AllUsers;
