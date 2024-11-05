
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchUserDetail } from "../services/api";
import Loader from "../components/Loader";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUserDetail = async () => {
      setLoading(true);
      const response = await fetchUserDetail(id);
      setUser(response.data.data);
      localStorage.setItem('lastVisitedUserId', id);
      setLoading(false);
    };
    loadUserDetail();
  }, [id]);

  return loading ? (
    <Loader />
  ) : (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl text-red-700 font-bold mb-4">
        {user.first_name} {user.last_name}
      </h2>

      <img
        src={user.avatar}
        alt={user.first_name}
        className="w-24 h-24 rounded mb-4"
      />

      <p className="text-lg">Email: {user.email}</p>

      <button
        onClick={() => navigate(-1)}
        className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold
        py-2 px-4 rounded"
      >
        Back
      </button>
    </div>
  );
};

export default UserDetail;
