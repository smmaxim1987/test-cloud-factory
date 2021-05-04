import { StyleSheet, Dimensions, Platform, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  root: {
    height: Dimensions.get("window").height,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  head: {
    height: 50,
  },
  body: {
    height: Dimensions.get("window").height - 150,
  },
  foot: {
    height: 50,
    paddingTop: 5,
  },
});
