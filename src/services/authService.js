import axios from 'axios';
import { BaseUrl } from '../config';

const API_URL = BaseUrl +'/api/auth/';

// Register user
const register = async userData => {
  const response = await axios.post (API_URL + 'register', userData);

  return response.data;
};


// Login user
const login = async userData => {
  const response = await axios.post (API_URL + 'login', userData);

  if (response.data) {
    localStorage.setItem ('user', JSON.stringify (response.data.result));
    localStorage.setItem ('token', JSON.stringify (response.data.token));
  }

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem ('user');
  localStorage.clear ();
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
