import { api } from ".";
import { AxiosResponse } from "axios";
import { TickerType } from "@shared/interfaces";

export const tickerApi = {
  // Получить список
  getList: (): Promise<AxiosResponse<Record<string, TickerType>>> =>
    api.get(`/public?command=returnTicker`),
};
