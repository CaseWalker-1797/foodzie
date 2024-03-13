import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-paper';
import {themeColors} from '../utilites/theme';

const SettingsButton = ({item}) => {
  return (
    <TouchableOpacity
      className="flex-1  m-2 p-3 rounded-full"
      style={{backgroundColor: themeColors.bgColor(1)}}
    >
      <View className="flex-row justify-center items-center space-x-3">
        <Icon source={item.icon} size={24} color="white" />
        <Text className="text-white font-bold">{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SettingsButton;

const styles = StyleSheet.create({});
