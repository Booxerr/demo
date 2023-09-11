import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

export const getStore = (business_id) => {
  return api.get(`/api/v2/store/getStore/${business_id}`);
};

export const getStaff = (storeId) => {
  return api.get(`/api/v2/staffAccess/get/${storeId}`);
};

export const addStaff = (body) => {
  return api.post(`/api/v1/staff/get`,body);
};

export const updateStaff = (body) => {
  return api.post(`/api/v1/staff/update`,body);
};

export const addStaffRole = (body) => {
  return api.post(`/api/v1/staffAccess/add`,body);
};

export const deleteStaff = (staffId) => {
  return api.delete(`/api/v1/staff/delete/${staffId}`);
};

export const removeRoleSalesPurchaseManager = (
  salesPurchaseManagerId,
  staffId
) => {
  return api.delete(
    `/api/v1/salesPurchaseManager/delete/${salesPurchaseManagerId}/${staffId}`
  );
};
export const removeRoleSalesManager = (salesManagerId, staffId) => {
  return api.delete(`/api/v1/salesManager/delete/${salesManagerId}/${staffId}`);
};
export const removeRoleStoreManager = (storeManagerId, staffId) => {
  return api.delete(`/api/v1/storeManager/delete/${storeManagerId}/{staffId}`);
};
