import axios from "axios";
const baseUrl = "http://localhost:3008/api/bikecycle";
export const getBick = async () => {
  const biks = await axios.get(`${baseUrl}/`);
  return biks.data;
};

export const addBick = async (bick) => {
  const biks = await axios.post(`${baseUrl}/`, bick);
  return biks.data;
};

export const removeBickById = async (id) => {
  const biks = await axios.delete(`${baseUrl}/${id}`);
  return biks.data;
};

export const updateBickById = async (id, status) => {
  const payload = { status };
  const biks = await axios.patch(`${baseUrl}/${id}/status`, payload);
  return biks.data;
};
