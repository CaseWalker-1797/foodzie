import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {themeColors} from '../../common/utilites/theme';
import {Icon} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {selectRestro} from '../../redux/slices/RestroSlice';
import {
  removeFromCart,
  selectCartItems,
  selectCartTotal,
} from '../../redux/slices/cartSlice';
import {horizontalScale, verticalScale} from '../../common/utilites/Dimension';
import {sendOrder, urlFor} from '../../api/API';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const deliveryFee = 3;
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const [dishList, setDishList] = useState([]);
  const getToken = async () => {
    const value = await AsyncStorage.getItem('userToken');
    console.log('Value    +++++' + value);
    return value;
  };

  useEffect(() => {
    const items = cartItems.reduce((group, item) => {
      if (group[item.id]) {
        group[item.id].push(item);
      } else {
        group[item.id] = [item];
      }
      return group;
    }, {});
    setDishList(items);
  }, [cartItems]);

  const createOrder = () => {
    const qtyMap = {};

    for (const key in dishList) {
      if (dishList.hasOwnProperty(key)) {
        const items = dishList[key];
        items.forEach(item => {
          const itemId = item._id;
          qtyMap[itemId] = (qtyMap[itemId] || 0) + 1;
        });
      }
    }

    const uniqueItemIds = new Set();

    const outputArray = [];
    for (const key in dishList) {
      if (dishList.hasOwnProperty(key)) {
        const items = dishList[key];
        items.forEach(item => {
          const itemId = item._id;
          if (!uniqueItemIds.has(itemId)) {
            uniqueItemIds.add(itemId);
            const newItem = {...item, quantity: qtyMap[itemId]};
            outputArray.push(newItem);
          }
        });
      }
    }

    console.log(JSON.stringify(outputArray));
    return outputArray.map(item => ({
      foodItem: item._id,
      quantity: item.quantity,
    }));
  };

  return (
    <View className="flex-1 bg-white">
      {/* Cart Header */}
      <View className="relative flex-row justify-center items-center">
        <TouchableOpacity
          className="absolute z-10 left-2 rounded-full p-1"
          style={{backgroundColor: themeColors.bgColor(1)}}
          onPress={() => navigation.goBack()}>
          <Icon source="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-3xl font-bold p-6">Your Cart</Text>
      </View>
      {/* Delivery Status */}
      <View
        className="flex-row justify-between p-4"
        style={{backgroundColor: themeColors.bgColor(0.2)}}>
        <Text>Delivery in 20-30 minutes</Text>
        <TouchableOpacity>
          <Text
            className=" text-sm font-bold"
            style={{color: themeColors.bgColor(1)}}>
            Change
          </Text>
        </TouchableOpacity>
      </View>
      {/* Cart Summary */}
      <ScrollView className="flex-1">
        {Object.entries(dishList).map(([key, item]) => {
          let dish = item[0];
          return (
            <View
              key={key}
              className="flex-row justify-between items-center m-2 p-2 space-x-2">
              {/* Total Dishes */}
              <Text
                className="text-base font-bold p-1"
                style={{color: themeColors.bgColor(1)}}>
                x{item.length}
              </Text>
              <View className="flex-1 flex-row justify-start items-center space-x-2">
                <Image
                  className="rounded-full"
                  source={{uri: urlFor + dish.image}}
                  style={{
                    height: verticalScale(60),
                    width: horizontalScale(60),
                  }}
                />
                <Text className="text-base font-semibold">{dish.foodItem}</Text>
              </View>
              {/* Cart Price & Quantity */}
              <View className="flex-row justify-center items-center p-1 space-x-1">
                <Text className="font-bold p-1">₹ {dish.price}</Text>
                <TouchableOpacity
                  className="rounded-full p-1"
                  style={{backgroundColor: themeColors.bgColor(1)}}
                  onPress={() => dispatch(removeFromCart({id: dish.id}))}>
                  <Icon source="minus" size={20} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>
      {/* Cart Total */}
      <View
        className="justify-center rounded-t-3xl p-6 space-y-4 "
        style={{backgroundColor: themeColors.bgColor(0.2)}}>
        <View className="flex-row justify-between items-center">
          <View className="p-2 space-y-2">
            <Text className="text-sm ">Sub Total</Text>
            <Text className="text-sm ">Delivery Fee</Text>
            <Text className="text-sm font-bold">Order Total</Text>
          </View>
          <View className="p-2 space-y-2">
            <Text className="text-sm ">₹ {cartTotal}</Text>
            <Text className="text-sm ">₹ {deliveryFee}</Text>
            <Text className="text-sm font-bold">
              ₹ {cartTotal + deliveryFee}
            </Text>
          </View>
        </View>
        {/* Place Order Button */}
        <TouchableOpacity
          className="justify-center items-center rounded-full p-3"
          style={{backgroundColor: themeColors.bgColor(1)}}
          onPress={async () => {
            sendOrder({
              token: await getToken(),
              item: createOrder(),
              totalPrice: cartTotal + deliveryFee,
            });
            navigation.navigate('PreparingOrder');
          }}>
          <Text className=" text-lg font-bold text-white">Place Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
