import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/appStack/HomeScreen';
import RestroScreen from '../screens/appStack/RestroScreen';

const Stack = createNativeStackNavigator();

const AppNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Restro" component={RestroScreen} />
    </Stack.Navigator>
  );
};

export default AppNav;
