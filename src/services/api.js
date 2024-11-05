
import axios from "axios";

const API_URL = "https://reqres.in/api";

export const login = async (credentials) => {
  return await axios.post(`${API_URL}/login`, credentials);
};

export const fetchUsers = async (page) => {
  return await axios.get(`${API_URL}/users?page=${page}`);
};

export const fetchUserDetail = async (id) => {
  return await axios.get(`${API_URL}/users/${id}`);
};
