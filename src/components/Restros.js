import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import RestroCard from './RestroCard';
import {getAllRestro} from '../api/API';
import {themeColors} from '../styles/theme';

const Restros = () => {
  const [restros, setRestros] = useState([]);
  useEffect(() => {
    getAllRestro().then(byCourt => {
      setRestros(byCourt);
    });
  }, []);
  return (
    <View>
      {restros.map((foodCourt, index) => (
        <>
          <View key={index} className="flex-row justify-between items-center">
            <Text className="font-bold text-xl">{foodCourt.court}</Text>
            <TouchableOpacity>
              <Text
                style={{color: themeColors.text}}
                className="font-semibold text-sm"
              >
                See All
              </Text>
            </TouchableOpacity>
          </View>
          {/* Horizontal List of Restros */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="overflow-visible"
          >
            {foodCourt.data.map(restro => (
              <RestroCard key={restro._id} item={restro} />
            ))}
          </ScrollView>
        </>
      ))}
    </View>
  );
};

export default Restros;

const styles = StyleSheet.create({});
