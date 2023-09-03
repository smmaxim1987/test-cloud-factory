import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  table: {},
  row: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "nowrap",
    borderBottomColor: "#DDDDDD",
    borderBottomWidth: 1,
  },
  col: {
    padding: 5,
    flex: 1,
    flexGrow: 1,
  },
});
