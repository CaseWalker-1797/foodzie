import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {getOrder} from '../../api/API';

const YourOrderScreen = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrder().then(data1 => {
      setOrders(data1);
    });
  }, []);

  return (
    <View>
      <Text>YourOrderScreen</Text>
    </View>
  );
};

export default YourOrderScreen;

const styles = StyleSheet.create({});
