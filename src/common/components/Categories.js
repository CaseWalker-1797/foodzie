import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {urlFor} from '../../api/API';
import {horizontalScale, verticalScale} from '../utilites/Dimension';

const Categories = ({item}) => {
  const [active, setActive] = useState(null);
  let isActive = item.category == active;
  let btnClass = isActive ? 'bg-gray-600' : ' bg-white-100';
  let textClass = isActive ? 'font-semibold text-gray-800' : ' text-gray-500';

  return (
    <View className="justify-center items-center m-2 p-1 space-y-2 ">
      <TouchableOpacity
        className={'rounded-full' + btnClass}
        onPress={() => setActive(item.category)}>
        <Image
          className={'p-3 rounded-full' + btnClass}
          style={{
            resizeMode: 'contain',
            width: horizontalScale(60),
            height: verticalScale(45),
          }}
          source={{uri: urlFor + item.image}}
        />
      </TouchableOpacity>
      <Text className={'text-xs' + textClass}>{item.category}</Text>
    </View>
  );
};

export default Categories;
