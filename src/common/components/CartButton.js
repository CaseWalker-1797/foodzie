import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {themeColors} from '../utilites/theme';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectCartItems, selectCartTotal} from '../../redux/slices/cartSlice';

const CartButton = () => {
  const navigation = useNavigation();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  if (!cartItems.length) return;
  return (
    <View className="absolute bottom-4 w-full z-50">
      {/* Cart Button */}
      <TouchableOpacity
        className=" flex-row justify-between items-center rounded-full m-4 p-3 shadow-lg"
        style={{backgroundColor: themeColors.bgColor(1)}}
        onPress={() => navigation.navigate('Cart')}
      >
        <View
          className=" p-1 px-3 justify-center items-center rounded-full"
          style={{backgroundColor: 'rgba(255,255,255,0.4)'}}
        >
          {/* Final Quantity */}
          <Text className="text-xl font-bold text-white">
            {cartItems.length}
          </Text>
        </View>
        <Text className="text-xl font-extrabold text-white">View Cart</Text>
        {/* Final Price */}
        <Text className="text-xl font-bold text-white">₹ {cartTotal}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartButton;

const styles = StyleSheet.create({});
