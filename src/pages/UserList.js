
import React, { useEffect, useState } from "react";
import { fetchUsers } from "../services/api";
import UserCard from "../components/UserCard";
import Loader from "../components/Loader";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      const response = await fetchUsers(page);
      setUsers(response.data.data);
      setLoading(false);
    };
    loadUsers();
  }, [page]);

  const handleNextPage = () => setPage((prev) => prev + 1);
  const handlePreviousPage = () => setPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="my-3">

      <h2 className="text-2xl mb-4">User List</h2>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}

      <div className="flex justify-between mt-4">
        
        <button
          onClick={handlePreviousPage}
          disabled={page === 1}
          className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded
            ${page === 1 && "opacity-50 cursor-not-allowed"}`}
        >
          Previous Page
        </button>

        <button
          onClick={handleNextPage}
          disabled={page === 2}
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
            ${page == 2 && "opacity-50 cursor-not-allowed"}
        `}
        >
          Next Page
        </button>

      </div>
    </div>
  );
};

export default UserList;
