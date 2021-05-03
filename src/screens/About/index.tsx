import React from 'react'
import { View, Text } from 'react-native'

interface AboutScreenProps { }

export const AboutScreen: React.FC<AboutScreenProps> = () => {
  return (
    <View>
      <Text>Экран "О Приложение"</Text>
    </View>
  )
}