import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { QuotesScreen, AboutScreen } from "screens";
import { configure } from "mobx";
import { paths } from "constants/paths";

configure({ enforceActions: "never" });
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={paths.about()}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={paths.about()} component={AboutScreen} />
        <Stack.Screen name={paths.quotes()} component={QuotesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
