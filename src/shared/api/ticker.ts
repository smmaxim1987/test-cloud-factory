import axios from "axios";
import { Ticker } from "shared/interfaces";

export const api = axios.create({
  baseURL: process.env.API_ROOT || "https://api.poloniex.com/",
});

api.interceptors.response.use((response) => response.data, Promise.reject);

export const tickerApi = {
  // Получить список
  getList: (): Promise<Ticker[]> => {
    return api.get(`/markets/ticker24h`);
  },
};
