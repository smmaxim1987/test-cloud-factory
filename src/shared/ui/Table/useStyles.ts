import { StyleSheet, Dimensions } from "react-native";


export const styles = StyleSheet.create({
  table: {
    maxWidth: Dimensions.get('window').width
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'flex-start'
  },
  col: {
    padding: 5,
    flex: 1,
  }
});
