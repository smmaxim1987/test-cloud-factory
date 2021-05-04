import { makeAutoObservable } from "mobx"
import { TickerType } from '@shared/interfaces'
import { tickerApi } from '@shared/api'

export class TickerStore {

  items: Record<string, TickerType> = {}
  isLoading = false

  constructor() {
    makeAutoObservable(this)
  }

  getList = async () => {
    this.isLoading = true
    try {
      const { data } = await tickerApi.getList()
      this.items = data;
    } catch (e) {
    }
    this.isLoading = false
  }

}

export const tickerStore = new TickerStore()