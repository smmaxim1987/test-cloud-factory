import { makeAutoObservable } from "mobx";
import { Ticker } from "shared/interfaces";
import { tickerApi } from "shared/api";

export class TickerStore {
  items: Ticker[] = [];
  isLoading = false;
  errors: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  getList = async () => {
    this.isLoading = true;
    this.errors = "";
    try {
      const data = await tickerApi.getList();
      this.items = data;
    } catch (e) {
      this.errors = JSON.stringify(e);
    }
    this.isLoading = false;
  };
}

export const tickerStore = new TickerStore();
