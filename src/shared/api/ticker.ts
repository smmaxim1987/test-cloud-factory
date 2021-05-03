import { api } from '.'
import { AxiosResponse } from 'axios'
import { Ticker } from '@shared/interfaces'

export const tickerApi = {

  // Получить список
  getList: (): Promise<AxiosResponse<Record<string, Ticker>>> => api.get(`/public?command=returnTicker`)

}