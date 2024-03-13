import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Drawable} from '../../common/utilites/Drawables';
import {verticalScale} from '../../common/utilites/Dimension';

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery');
    }, 3000);
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white justify-center items-center ">
      <Image
        source={Drawable.DeliveryGuyGIF}
        style={{
          resizeMode: 'contain',
          height: verticalScale(400),
          width: '100%',
        }}
      />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;

const styles = StyleSheet.create({});
