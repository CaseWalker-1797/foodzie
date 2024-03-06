import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "react-native-paper";
import { themeColors } from "../../styles/theme";
import Categories from "../../components/Categories";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="border border-red-600 p-2">
        {/* Search Bar & Menu Button*/}
        <View className="flex-row p-0 space-x-2">
          <View className=" flex-1 flex-row items-center border border-gray-300 rounded-full px-2">
            <Icon source="magnify" size={28} />
            <TextInput
              placeholder="Restaurants"
              className="flex-1 p-2"
              keyboardType="default"
            />
            <View className=" flex-row items-center border-l-2 border-l-gray-300">
              <Icon source="map-marker" size={28} />
              <Text className="text-gray-600">PIET, PU</Text>
            </View>
          </View>
          {/* Menu Button */}
          <TouchableOpacity
            style={{ backgroundColor: themeColors.bgColor(1) }}
            className="self-center p-2 rounded-full"
            onPress={() => navigation.navigate("Settings")}
          >
            <Icon source="menu" size={28} color="white" />
          </TouchableOpacity>
        </View>
        {/* Categories Row */}
        <Categories />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
