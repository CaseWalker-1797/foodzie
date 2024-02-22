import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../screens/authStack/SignInScreen";
import SignUpScreen from "../screens/authStack/SignUpScreen";
import ForgotPasswordScreen from "../screens/authStack/ForgotPasswordScreen";

const Stack = createNativeStackNavigator();

const AuthNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignUp"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
};

export default AuthNav;
