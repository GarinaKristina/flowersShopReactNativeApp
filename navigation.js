import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import WelcomePage from "./components/WelcomePage";
import CatalogPage from "./components/CatalogPage";

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomePage}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="Catalog"
          component={CatalogPage}
          options={{ title: "Catalog" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
