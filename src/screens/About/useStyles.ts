import { StyleSheet, Platform, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  root: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  description: {
    marginBottom: 30,
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 22,
  },
});
