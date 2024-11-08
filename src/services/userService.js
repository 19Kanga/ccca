import axios from 'axios';
import { BaseUrl } from '../config';

const API_URL = BaseUrl+'/api/users/';

// Register user
const getAllUser = async token => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get (API_URL, config);
  return response.data;
};

const updateUser = async (userData,token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.patch(API_URL, userData,config);
  return response.data;
};

// Login user
const getUserId = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get (API_URL + id, config);
  return response.data;
};



const authService = {
  getAllUser,
  getUserId,
  updateUser
};

export default authService;
