import axios from "axios";
import { Helper } from "../helper";

const controller = "department";

export const DepartmentService = {
  get: async () => {
    let response = await axios.get(`${controller}`);
    return Helper.getResult(response);
  },
  getById: async (id) => {
    let response = await axios.get(`${controller}/${id}`);
    return Helper.getResult(response);
  },
  post: async (model) => {
    let response = await axios.post(`${controller}`, model);
    return Helper.getResult(response);
  },
  put: async (id, model) => {
    let response = await axios.put(`${controller}/${id}`, model);
    return Helper.getResult(response);
  },
  delete: async (id) => {
    let response = await axios.delete(`${controller}/${id}`);
    return Helper.getResult(response);
  },
};
