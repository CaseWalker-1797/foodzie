import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { getCategory, urlFor } from "../api/API";

const Categories = () => {
  const [active, setActive] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategory().then((data1) => {
      setCategories(data1);
    });
  }, []);

  return (
    <View className="border mt-2 justify-center">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
      >
        {categories?.map((item, index) => {
          let isActive = item.category == active;
          let btnClass = isActive ? " bg-gray-600" : " bg-white-100";
          let textClass = isActive
            ? " font-semibold text-gray-800"
            : " text-gray-500";
          return (
            <TouchableOpacity
              key={index}
              className={"rounded-full mr-3 items-center border"}
              onPress={() => setActive(item.category)}
            >
              <View></View>
              <Image
                className={"p-4 rounded-full" + btnClass}
                style={{ width: 32, height: 32 }}
                source={{ uri: urlFor + item.image }}
              />
              <Text className={"text-xs" + textClass}>{item.category}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;
