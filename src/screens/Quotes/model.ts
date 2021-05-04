import { makeAutoObservable } from "mobx";
import { TickerType } from "@shared/interfaces";
import { tickerApi } from "@shared/api";

export class TickerStore {
  items: Record<string, TickerType> = {};
  isLoading = false;
  errors: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  getList = async () => {
    this.isLoading = true;
    this.errors = "";
    try {
      const { data } = await tickerApi.getList();
      this.items = data;
    } catch ({ message }) {
      this.errors = JSON.stringify(message);
    }
    this.isLoading = false;
  };
}

export const tickerStore = new TickerStore();
