import { api } from ".";
import { TickerType } from "@shared/interfaces";

export const tickerApi = {
  // Получить список
  getList: (): Promise<Record<string, TickerType>> => {
    return api.get(`/public?command=returnTicker`);
  },
};
