import { View, Text } from "react-native";
import React from "react";
import AuthNav from "./AuthNav";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const MainNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Auth" component={AuthNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNav;
