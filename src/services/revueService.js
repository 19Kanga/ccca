import axios from 'axios';
import { BaseUrl } from '../config';

const API_URL = BaseUrl+'/api/revue/';

// Get user Voitures
const createRevue = async (userData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, userData, config);

  return response.data;
};

//getById
const getRevueById = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + id, config);

  // console.log (response.data.result);
  return response.data;
};

const getAllRevue = async token => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  // console.log (response);
  return response.data;
};

const DeleteRevue = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + id, config);

  //   console.log (response.data.result);
  return response.data;
};

const updateRevue = async (data,token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.patch(API_URL,data, config);

  // console.log (response);
  return response.data;
};

const RevueService = {
  getAllRevue,
  createRevue,
  getRevueById,
  DeleteRevue,
  updateRevue
};

export default RevueService;
