import { StyleSheet } from "react-native";

export const todoStyle = StyleSheet.create({
  todo: {
    margin: 5,
    paddingHorizontal: 10,
    height: 8,
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 4,
  },
})

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 20
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
  },
  pressable: {
    borderRadius: 4,
    padding: 4,
    backgroundColor: '#048BA8',
    width: '85%',
    marginHorizontal: 'auto',
    textAlign: 'center',
    marginVertical: 20
  }
});