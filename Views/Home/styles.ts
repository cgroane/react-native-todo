import { StyleSheet } from "react-native";

export const todoStyle = StyleSheet.create({
  todo: {
    margin: 10,
    paddingHorizontal: 10,
    height: 15,
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  input: {
    marginRight: 5
  }
})

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%'
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  textInput: {
    borderWidth: 1,
    margin: 3
  }
});