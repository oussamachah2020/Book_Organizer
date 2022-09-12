import axios from "axios";

const API_PATH = "/api/users/";

const register = async (userData) => {
  const response = await axios.post(API_PATH, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
};

const login = async (userData) => {
  const response = await axios.post(API_PATH + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = { register, login, logout };

export default authService;
