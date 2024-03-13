import {View, Text} from 'react-native';
import React from 'react';
import AuthNav from './AuthNav';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppNav from './AppNav';

const Stack = createNativeStackNavigator();

const MainNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="App"
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="Auth" component={AuthNav} />
        <Stack.Screen name="App" component={AppNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNav;
