import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getCategory, urlFor} from '../api/API';
import {horizontalScale, verticalScale} from '../styles/utilites/Dimension';

const Categories = () => {
  const [active, setActive] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategory().then(data1 => {
      setCategories(data1);
    });
  }, []);

  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
      >
        {categories?.map(item => {
          let isActive = item.category == active;
          let btnClass = isActive ? ' bg-gray-600' : ' bg-white-100';
          let textClass = isActive
            ? ' font-semibold text-gray-800'
            : ' text-gray-500';
          return (
            <View className="justify-center items-center mx-3">
              <TouchableOpacity
                key={item.id}
                className={'rounded-full' + btnClass}
                onPress={() => setActive(item.category)}
              >
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
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;
