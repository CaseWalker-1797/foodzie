import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-paper';
import {themeColors} from '../utilites/theme';
import {useNavigation} from '@react-navigation/native';

const SettingsButton = ({item}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="flex-1  m-2 p-3 rounded-full"
      style={{backgroundColor: themeColors.bgColor(1)}}
      onPress={() => navigation.navigate(item.go)}>
      <View className="flex-row justify-center items-center space-x-3">
        <Icon source={item.icon} size={24} color="white" />
        <Text className="text-white font-bold">{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SettingsButton;

const styles = StyleSheet.create({});
