import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import RestroCard from './RestroCard';
import {getAllRestro} from '../../api/API';
import {themeColors} from '../utilites/theme';

const Restros = foodCourt => {
  return (
    <View className="pb-3 space-y-2">
      <View
        key={foodCourt._id}
        className="flex-row justify-between items-center">
        <Text className="font-bold text-xl">{foodCourt.foodCourt.court}</Text>
        <TouchableOpacity>
          <Text
            style={{color: themeColors.text}}
            className="font-semibold text-sm">
            See All
          </Text>
        </TouchableOpacity>
      </View>
      {/* Horizontal List of Restros */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible">
        {foodCourt.foodCourt.data.map(restro => (
          <RestroCard key={restro._id} item={restro} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Restros;

const styles = StyleSheet.create({});
