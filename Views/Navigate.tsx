import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react"
import HomeView from "./Home";
import AddNewTodo from "./AddNew";

const Stack = createNativeStackNavigator();

interface NavigateProps {}
const Navigate = ({
  ...props
}: NavigateProps ) => {
  return (
    <>
      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeView}
          />
          <Stack.Screen
            name="New Todo"
            component={AddNewTodo}
          />
        </Stack.Navigator>
      </NavigationContainer> */}
    </>
  )
};

export default Navigate;
