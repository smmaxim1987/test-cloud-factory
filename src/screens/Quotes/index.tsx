import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { tickerApi } from '@shared/api'
import { Ticker } from '@shared/interfaces'
import { QuotetsTableTicker } from '@features'

interface QuotesProps { }

export const QuotesScreen: React.FC<QuotesProps> = () => {

  const [ticker, setTicker] = useState<Record<string, Ticker>>({})

  useEffect(() => {
    tickerApi.getList()
      .then(({ data }) => setTicker(data))
  }, [])

  return (
    <View>
      <Text>Экран "Катировки"</Text>
      <QuotetsTableTicker items={ticker} />
    </View>
  )
}