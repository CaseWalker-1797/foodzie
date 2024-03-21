import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Icon} from 'react-native-paper';
import {themeColors} from '../../common/utilites/theme';
import Categories from '../../common/components/Categories';
import Restros from '../../common/components/Restros';
import {useNavigation} from '@react-navigation/native';
import {getAllRestro, getCategory} from '../../api/API';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [restros, setRestros] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllRestro().then(byCourt => {
      setRestros(byCourt);
    });
    getCategory().then(data1 => {
      setCategories(data1);
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="p-2 space-y-4">
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
            style={{backgroundColor: themeColors.bgColor(1)}}
            className="self-center p-2 rounded-full"
            onPress={() => navigation.navigate('Settings')}>
            <Icon source="menu" size={28} color="white" />
          </TouchableOpacity>
        </View>
        {/* Categories Row */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="overflow-visible">
          {categories?.map(category => (
            <Categories key={category.category} item={category} />
          ))}
        </ScrollView>
      </View>
      <ScrollView className="p-2">
        {/* Restaurant Row */}
        {restros.map(foodCourt => (
          <Restros key={foodCourt._id} foodCourt={foodCourt} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
