
import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <div
      className="relative group flex items-center p-4 border rounded-md shadow-md bg-white
    hover:shadow-lg transition-shadow duration-300"
    >
      <img
        className="w-24 h-24 rounded-full mr-4"
        src={user.avatar}
        alt={user.first_name}
      />

      <div className="flex-grow">

        <h3 className="text-lg font-semibold">
          {user.first_name} {user.last_name}
        </h3>

        <p className="text-gray-600">{user.email}</p>

      </div>

      <Link
        to={`/users/${user.id}`}
        className="absolute inset-0 hover:bg-black hover:bg-opacity-50 flex items-center justify-center 
        text-white text-xl rounded-md transition-opacity opacity-0 group-hover:opacity-100"
      >
        View Details
      </Link>
      
    </div>
  );
};

export default UserCard;
