import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {themeColors} from '../styles/theme';

const CartButton = () => {
  return (
    <View className="absolute bottom-2 w-full z-50">
      <TouchableOpacity
        className=" flex-row justify-between items-center rounded-full m-2 p-4 shadow-lg"
        style={{backgroundColor: themeColors.bgColor(1)}}
      >
        <View
          className=" p-1 px-3 justify-center items-center rounded-full"
          style={{backgroundColor: 'rgba(255,255,255,0.4)'}}
        >
          <Text className="text-xl font-bold text-white">1</Text>
        </View>
        <Text className="text-xl font-extrabold text-white">View Cart</Text>
        <Text className="text-xl font-bold text-white">₹ 20</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartButton;

const styles = StyleSheet.create({});
