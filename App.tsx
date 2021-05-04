import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { QuotesScreen, AboutScreen } from '@screens'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="About" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Quotes" component={QuotesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}