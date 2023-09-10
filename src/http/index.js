import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

export const getStore = (business_id) => {
  return api.get(`/api/v2/store/getStore/${business_id}`);
};
