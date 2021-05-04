import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './useStyles'

export interface LoadingProps {
  text?: string
}

export const Loading: React.FC<LoadingProps> = ({
  text = 'Идет загрузка...'
}) => (
  <View style={styles.root}>
    <Text style={styles.text}>{text}</Text>
  </View>
)