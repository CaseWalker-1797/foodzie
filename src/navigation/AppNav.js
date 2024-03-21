import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/appStack/HomeScreen';
import RestroScreen from '../screens/appStack/RestroScreen';
import CartScreen from '../screens/appStack/CartScreen';
import SettingsScreen from '../screens/appStack/SettingsScreen';
import PreparingOrderScreen from '../screens/appStack/PreparingOrderScreen';
import DeliveryScreen from '../screens/appStack/DeliveryScreen';
import YourOrderScreen from '../screens/appStack/YourOrderScreen';

const Stack = createNativeStackNavigator();

const AppNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Restro" component={RestroScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen
        name="Cart"
        options={{presentation: 'modal'}}
        component={CartScreen}
      />
      <Stack.Screen
        name="PreparingOrder"
        options={{presentation: 'fullScreenModal'}}
        component={PreparingOrderScreen}
      />
      <Stack.Screen
        name="Delivery"
        options={{presentation: 'fullScreenModal'}}
        component={DeliveryScreen}
      />
      <Stack.Screen name="YourOrder" component={YourOrderScreen} />
    </Stack.Navigator>
  );
};

export default AppNav;
