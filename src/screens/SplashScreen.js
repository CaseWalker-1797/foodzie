import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Drawable} from '../common/utilites/Drawables';
import {verticalScale} from '../common/utilites/Dimension';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {checkUser} from '../api/API';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    getToken();
  }, []);

  const getToken = async () => {
    const value = await AsyncStorage.getItem('userToken');
    setTimeout(() => {
      navigation.navigate(value ? 'App' : 'Auth');
    }, 3000);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Image
        source={Drawable.SignUp}
        style={{height: verticalScale(500), width: '100%'}}
      />
    </SafeAreaView>
  );
};

export default SplashScreen;
