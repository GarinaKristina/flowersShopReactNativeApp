import React from "react";

import { createStackNavigator } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: "Main Page" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}