import axios from "axios";
export * from "./ticker";

export const api = axios.create({
  baseURL: process.env.API_ROOT || "https://poloniex.com",
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error.response?.status);
    return Promise.reject(error);
  }
);
