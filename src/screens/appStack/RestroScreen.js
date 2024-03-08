import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getMenuRestroById, urlFor} from '../../api/API';
import {useRoute} from '@react-navigation/native';
import {horizontalScale, verticalScale} from '../../styles/utilites/Dimension';
import {Drawable} from '../../styles/utilites/Drawables';
import {Icon} from 'react-native-paper';
import {themeColors} from '../../styles/theme';
import {useNavigation} from '@react-navigation/native';
import DishCard from '../../components/DishCard';
import CartButton from '../../components/CartButton';

const RestroScreen = () => {
  const [menu, setMenu] = useState([]);
  const navigation = useNavigation();
  const {params} = useRoute();
  let item = params;
  useEffect(() => {
    getMenuRestroById({id: item._id}).then(data => {
      setMenu(data);
    });
  }, []);
  return (
    <SafeAreaView className=" flex-1 bg-white" edges={'bottom'}>
      <View className="relative">
        <Image
          source={{uri: urlFor + item.image}}
          style={{
            height: verticalScale(250),
            width: '100%',
          }}
        />

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="absolute top-10 left-3 bg-gray-50 p-2 rounded-full shadow"
        >
          <Icon source="arrow-left" size={20} color={themeColors.bgColor(1)} />
        </TouchableOpacity>
      </View>

      <View className="justify-center bg-white items-start rounded-t-3xl -mt-12 pt-6 space-y-2">
        <View className="justify-center p-4 space-y-1">
          <Text className="text-lg font-bold">{item.name}</Text>
          <View className="flex-row items-center space-x-1">
            <Image
              source={Drawable.Rating}
              style={{height: verticalScale(18), width: horizontalScale(18)}}
            />
            <Text className="text-sm">Good Reviews</Text>
            <Text className="text-sm font-semibold">Type of Restaurant</Text>
          </View>
          <View className="flex-row items-center space-x-2">
            <Icon source="map-marker" size={24} />
            <Text className="text-sm">{item.foodCourt}</Text>
          </View>
        </View>
      </View>
      <ScrollView className="flex-1 p-2" showsVerticalScrollIndicator={false}>
        <Text className="text-2xl font-bold">Menu</Text>
        {menu.map(dish => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </ScrollView>
      <CartButton />
    </SafeAreaView>
  );
};

export default RestroScreen;
