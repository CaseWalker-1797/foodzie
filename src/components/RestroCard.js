import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {Drawable} from '../styles/utilites/Drawables';
import {horizontalScale, verticalScale} from '../styles/utilites/Dimension';
import {Icon} from 'react-native-paper';
import {urlFor} from '../api/API';
import {useNavigation} from '@react-navigation/native';

const RestroCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('Restro', {...item})}
    >
      <View
        className="justify-center bg-white items-start rounded-3xl m-2 space-y-2"
        style={styles.container}
      >
        <Image
          className="rounded-t-3xl"
          source={{uri: urlFor + item.image}}
          style={{
            resizeMode: 'cover',
            height: verticalScale(145),
            width: '100%',
          }}
        />
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
    </TouchableWithoutFeedback>
  );
};

export default RestroCard;

const styles = StyleSheet.create({
  container: {
    shadowColor: '#F97316',
    shadowOffset: {
      width: 4,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 7,
    elevation: 9,
  },
});
