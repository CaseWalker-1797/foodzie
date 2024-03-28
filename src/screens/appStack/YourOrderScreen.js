import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {getOrder} from '../../api/API';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Icon, IconButton} from 'react-native-paper';
import {themeColors} from '../../common/utilites/theme';
import OrderHistoryCard from '../../common/components/OrderHistoryCard';

const YourOrderScreen = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrder().then(data1 => {
      setOrders(data1);
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row items-center py-2">
        <IconButton icon="arrow-left" />
        <Text className="text-lg font-bold">Order History</Text>
      </View>
      <View>
        <View
          className="flex-row bg-white justify-between items-center m-2 p-2 rounded-xl "
          style={styles.container}>
          <View className="flex-1 flex-row border-r border-gray-300 items-center mx-2 p-0 space-x-2">
            <Icon source="magnify" size={24} color={themeColors.bgColor(1)} />
            <TextInput
              className="flex-1 p-2"
              placeholder="Search by restaurant or dish"
              placeholderTextColor="gray"
            />
          </View>
          <Icon
            source="microphone-outline"
            size={24}
            color={themeColors.bgColor(1)}
          />
        </View>
        <ScrollView>
          {orders.map(item => (
            <OrderHistoryCard item={item} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default YourOrderScreen;

const styles = StyleSheet.create({
  container: {
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.21,
    shadowRadius: 6.65,
    elevation: 9,
  },
});
