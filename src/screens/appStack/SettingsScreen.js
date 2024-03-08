import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Icon} from 'react-native-paper';
import {themeColors} from '../../common/utilites/theme';
import {settingsOptions} from '../../common/constants/Constants';

const SettingsScreen = () => {
  const [otherOptions, setOtherOptions] = useState([]);
  useEffect(() => {
    setOtherOptions(settingsOptions);
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <TouchableOpacity>
        <Icon source="arrow-left" size={28} color={themeColors.bgColor(1)} />
      </TouchableOpacity>
      <ScrollView>
        <View>
          <TouchableOpacity>
            <Text>Your orders</Text>
          </TouchableOpacity>
        </View>
        {otherOptions.map(option => (
          <View>
            <Text>{option.name}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
