import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react"
import HomeView from "./Views/Home";
import AddNewTodo from "./Views/AddNew";

const Stack = createNativeStackNavigator();

interface NavigateProps {}
const Navigate = ({
  ...props
}: NavigateProps ) => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeView}
          />
          <Stack.Screen
            name="AddNew"
            component={AddNewTodo}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
};

export default Navigate;
