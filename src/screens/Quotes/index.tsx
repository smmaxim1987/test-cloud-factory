import React, { useEffect, useMemo, useState } from 'react'
import { View, Text } from 'react-native'
import { tickerApi } from '@shared/api'
import { Ticker } from '@shared/interfaces'

interface QuotesProps { }

export const QuotesScreen: React.FC<QuotesProps> = () => {

  const [ticker, setTicker] = useState<Record<string, Ticker>>({})

  useEffect(() => {
    tickerApi.getList()
      .then(({ data }) => setTicker(data))
  }, [])

  const tickerItems = useMemo(() => Object.keys(ticker).map(key => ticker[key]), [ticker])

  if (tickerItems.length === 0) {
    return null
  }

  return (
    <View>
      <Text>Экран "Катировки"</Text>
      {tickerItems.map(ticker => (
        <View key={ticker.id}>
          <Text>{ticker.baseVolume}</Text>
          <Text>{ticker.high24hr}</Text>
          <Text>{ticker.highestBid}</Text>
          <Text>{ticker.id}</Text>
          <Text>{ticker.isFrozen}</Text>
          <Text>{ticker.last}</Text>
          <Text>{ticker.low24hr}</Text>
          <Text>{ticker.lowestAsk}</Text>
          <Text>{ticker.percentChange}</Text>
          <Text>{ticker.postOnly}</Text>
          <Text>{ticker.quoteVolume}</Text>
        </View>
      ))}
    </View>
  )
}