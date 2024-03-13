import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-paper';

const SettingsOptionCard = ({option}) => {
  return (
    <TouchableOpacity
      className="flex-row bg-white justify-between items-center m-2 p-4 border border-gray-200 rounded-lg"
      style={styles.container}
    >
      <View className="flex-row justify-center items-center p-1 space-x-2">
        <Icon source={option.icon} size={24} />
        <Text className="text-base font-bold">{option.name}</Text>
      </View>
      <Icon source="chevron-right" size={24} />
    </TouchableOpacity>
  );
};

export default SettingsOptionCard;

const styles = StyleSheet.create({
  container: {
    shadowColor: 'grey',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 6,
  },
});
