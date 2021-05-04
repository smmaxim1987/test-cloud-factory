import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Button, Headline, Container } from '@shared/ui'

export const AboutScreen: React.FC = () => {

  const navigation = useNavigation();
  const handleGotoQuotes = () => navigation.navigate('Quotes')

  return (
    <SafeAreaView>
      <Container>
        <Headline title='О приложение' />
        <Text>Тестовое задание для RN-разработчика.</Text>
        <Text>Приложение "Котировки"</Text>
        <Button onPress={handleGotoQuotes}>Перейти в экран Котировки</Button>
      </Container>
    </SafeAreaView>
  )
}