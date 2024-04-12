import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Navigate from './Navigate';
import { Provider } from 'react-redux'
import store from './store';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <Provider store={store} >
      <Navigate/>
    </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
