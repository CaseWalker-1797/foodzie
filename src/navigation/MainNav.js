import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import AuthNav from './AuthNav';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppNav from './AppNav';
import {checkUser} from '../api/API';
import SplashScreen from '../screens/SplashScreen';

const Stack = createNativeStackNavigator();

const MainNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Auth" component={AuthNav} />
        <Stack.Screen name="App" component={AppNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNav;
