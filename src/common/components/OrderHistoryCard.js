import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {IconButton, Button} from 'react-native-paper';
import { themeColors } from '../utilites/theme';

const OrderHistoryCard = ({item}) => {
  const [showDetails, setShowDetails] = useState(false);

  console.log('item', item);
  return (
    <View className="justify-center">
      <View className="flex-row justify-between items-center p-2">
        <Text className="">
          Order No.
          <Text className="">{'     ' + item._id}</Text>
        </Text>
        <IconButton
          icon={showDetails ? 'chevron-up' : 'chevron-down'}
          size={20}
          iconColor={themeColors.bgColor(1)}
          onPress={() => {
            setShowDetails(!showDetails);
          }}
        />
      </View>
      {showDetails && (
        <View className="p-2 space-y-2">
          <Text>{item.userId.name}</Text>
          <View className="flex-row justify-between items-center ">
            <Text>Delivery Address of Order</Text>
            <IconButton icon="near-me" size={20} />
          </View>
          <View className="border">
            {item.item.map((item1, index) => (
              <View className="flex-row justify-between p-2" key={index}>
                <Text>
                  {item1.foodItem.foodItem + '     '}
                  <Text> x{' ' + item1.quantity}</Text>
                </Text>
                <Text>₹ {item1.foodItem.price}</Text>
              </View>
            ))}
          </View>
          <View className="flex-row justify-between items-center ">
            <Text>Amount to Collect</Text>
            <Text className="font-bold">₹ {item.totalPrice}</Text>
          </View>
          <Button
            mode="contained"
            buttonColor={themeColors.bgColor(1)}
            textColor="white">
            <Text className="font-bold">Confirm Pickup</Text>
          </Button>
        </View>
      )}
    </View>
  );
};

export default OrderHistoryCard;

const styles = StyleSheet.create({});
