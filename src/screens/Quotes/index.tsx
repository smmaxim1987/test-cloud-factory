import React, { useEffect, useState } from 'react'
import { SafeAreaView, Text } from 'react-native'
import { QuotetsTableTicker } from '@features'
import { useNavigation } from '@react-navigation/native';
import { Button, Loading, Headline, Container } from '@shared/ui'
import { observer } from "mobx-react-lite"
import { tickerStore } from './model'

export const QuotesScreen: React.FC = observer(() => {

  const [isInit, setIsInit] = useState<boolean>(false)
  const { items, isLoading, getList } = tickerStore
  const navigation = useNavigation();
  const handleGotoAbout = () => navigation.navigate('About')

  useEffect(() => {
    getList().finally(() => setIsInit(true))
  }, [])

  useEffect(() => {
    const getListEveryFiveSeconds: NodeJS.Timeout | null = Object.values(items).length > 0 ? setInterval(getList, 5000) : null
    return () => {
      getListEveryFiveSeconds && clearInterval(getListEveryFiveSeconds)
    }
  }, [items])

  return (
    <SafeAreaView>
      <Container>
        <Headline title='Катировки' />
        <Button onPress={handleGotoAbout}>Вернуться</Button>
        {isLoading && !isInit ? <Loading /> : (
          <QuotetsTableTicker items={items} />
        )}
      </Container>
    </SafeAreaView>
  )
})