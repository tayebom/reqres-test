
import React, { useEffect, useState } from "react";
import { fetchUserDetail } from "../services/api";
import Loader from "../components/Loader";

const Home = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadLastVisitedUser = async () => {
      const lastVisitedUserId = localStorage.getItem("lastVisitedUserId");
      if (lastVisitedUserId) {
        const response = await fetchUserDetail(lastVisitedUserId);
        setUser(response.data.data);
      }
      setLoading(false);
    };
    loadLastVisitedUser();
  }, []);

  return (
    <div className="flex flex-col items-center h-screen gap-2">
      <h1 className="text-4xl text-red-700 font-bold my-5 mb-4">
        Welcome to Lovely SheenHub Team ❤️
      </h1>

      {loading ? (
        <Loader />
      ) : user ? (
        <div className=" bg-gray-200 p-4 my-5 flex flex-col rounded shadow-md w-full max-w-sm items-center">
          <h2 className="text-2xl mb-2">
            {user.first_name} {user.last_name}
          </h2>

          <img
            src={user.avatar}
            alt={user.first_name}
            className="w-24 h-24 rounded-full mb-2"
          />

          <p className="text-lg">Email: {user.email}</p>
        </div>
      ) : (
        <p className="text-lg">No user visited recently.</p>
      )}
    </div>
  );
};

export default Home;
