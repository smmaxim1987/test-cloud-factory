import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  root: {
    padding: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  warning: {
    backgroundColor: "rgb(255, 244, 229)",
    color: "rgb(102, 60, 0)",
  },
  error: {
    backgroundColor: "rgb(253, 236, 234)",
    color: "rgb(97, 26, 21)",
  },
  info: {
    backgroundColor: "rgb(232, 244, 253)",
    color: "rgb(13, 60, 97)",
  },
  success: {
    backgroundColor: "rgb(237, 247, 237)",
    color: "rgb(30, 70, 32)",
  },
  text: {
    fontWeight: "bold",
  },
});
