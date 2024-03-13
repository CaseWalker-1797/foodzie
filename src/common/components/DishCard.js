import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {horizontalScale, verticalScale} from '../utilites/Dimension';
import {themeColors} from '../utilites/theme';
import {Icon} from 'react-native-paper';
import {urlFor} from '../../api/API';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToCart,
  removeFromCart,
  selectCartItemsById,
} from '../../redux/slices/cartSlice';

const DishCard = ({dish}) => {
  const dispatch = useDispatch();
  const totalItems = useSelector((state, _id) =>
    selectCartItemsById(state, dish._id),
  );
  const addItem = () => {
    dispatch(addToCart({...dish}));
  };
  const removeItem = () => {
    dispatch(removeFromCart({id: dish.id}));
  };
  return (
    <View
      className="bg-white flex-row justify-center items-center border border-gray-100 rounded-3xl m-2 p-2"
      style={styles.container}
    >
      {/* Menu Item Detials */}
      <Image
        className="rounded-2xl"
        source={{uri: urlFor + dish.image}}
        style={{
          resizeMode: 'cover',
          height: '80%',
          width: horizontalScale(110),
        }}
      />
      <View className="flex-1 space-y-2 p-2">
        {/* Dish Name */}
        <Text className="text-lg font-bold">{dish.foodItem}</Text>
        {/* Dish Description */}
        <Text className="text-sm">{dish.description}</Text>
        <View className="justify-between items-center flex-row">
          {/* Dish Price */}
          <Text className="text-base font-semibold">₹ {dish.price}</Text>
          {/* Dish Qunatity Buttons */}
          <View className="flex-row items-center space-x-2">
            {/* Remove Item */}
            <TouchableOpacity
              style={{backgroundColor: themeColors.bgColor(1)}}
              className="p-1 rounded-full"
              disabled={!totalItems.length}
              onPress={removeItem}
            >
              <Icon source="minus" size={18} color="white" />
            </TouchableOpacity>
            {/* Total Items */}
            <Text className="text-sm font-semibold">{totalItems.length}</Text>
            {/* Add Item */}
            <TouchableOpacity
              style={{backgroundColor: themeColors.bgColor(1)}}
              className="p-1 rounded-full"
              onPress={addItem}
            >
              <Icon source="plus" size={18} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DishCard;

const styles = StyleSheet.create({
  container: {
    shadowColor: 'gray',
    shadowOffset: {
      width: 4,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 7,
    elevation: 9,
  },
});
