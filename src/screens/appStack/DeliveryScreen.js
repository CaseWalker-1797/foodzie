import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Drawable} from '../../common/utilites/Drawables';
import {horizontalScale, verticalScale} from '../../common/utilites/Dimension';
import {Avatar, Icon} from 'react-native-paper';
import {themeColors} from '../../common/utilites/theme';
import {useSelector, useDispatch} from 'react-redux';
import {emptyCart} from '../../redux/slices/cartSlice';
import {selectRestro} from '../../redux/slices/RestroSlice';
import {useNavigation} from '@react-navigation/native';
import MapView, {Marker} from 'react-native-maps';

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestro);
  const dispatch = useDispatch();
  const handleCancel = () => {
    navigation.navigate('Home');
    dispatch(emptyCart());
  };
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Delivery Tracking Map */}
      {/* <MapView
        provider={MapView.PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 22.2887492,
          longitude: 73.3638405,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        className="flex-1"
        mapType="terrain"
      >
        <Marker
          coordinate={{
            latitude: 22.2887492,
            longitude: 73.3638405,
          }}
          title={restaurant?.name || 'Restaurant'}
          description="Choose More Choose Right"
          pinColor={themeColors.bgColor(1)}
        />
      </MapView> */}
      {/* Delivery Details */}
      <View className="p-3 rounded-t-3xl space-y-3 justify-center">
        <View className="flex-row justify-between items-center p-2">
          <View className="">
            <Text className=" text-lg font-semibold">Estimated Arrival</Text>
            <Text className=" text-3xl font-bold">20-30 minutes</Text>
            <Text className=" text-base font-semibold">
              Your order will arrive soon
            </Text>
          </View>
          <Image
            source={Drawable.DeliveryGuyGIF2}
            style={{
              height: verticalScale(100),
              width: horizontalScale(100),
            }}
          />
        </View>
        {/* Rider Details */}
        <View
          className="flex-row justify-between items-center p-3 rounded-full"
          style={{backgroundColor: themeColors.bgColor(0.8)}}
        >
          <View className="flex-row items-center space-x-2">
            <Avatar.Text size={64} label="RN" />
            <View>
              <Text className="text-lg font-bold text-white">
                Veer J Kamdar
              </Text>
              <Text className="text-sm font-semibold text-white">
                Your delivery partner
              </Text>
            </View>
          </View>
          {/* Rider Calling Buttons */}
          <View className="flex-row space-x-2">
            {/* Call Button */}
            <TouchableOpacity className="bg-white p-2 rounded-full">
              <Icon source="phone" size={32} color={themeColors.bgColor(1)} />
            </TouchableOpacity>
            {/* Cancel Button */}
            <TouchableOpacity
              className="bg-white p-2 rounded-full"
              onPress={handleCancel}
            >
              <Icon source="close" size={32} color="red" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DeliveryScreen;

const styles = StyleSheet.create({});
