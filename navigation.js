import React from "react";
import MainPage from "./components/MainPage";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainPage}
          options={{ title: "Main Page" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
