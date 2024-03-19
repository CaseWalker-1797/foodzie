import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Avatar, Icon, IconButton} from 'react-native-paper';
import {themeColors} from '../../common/utilites/theme';
import {settings, settingsOptions} from '../../common/constants/Constants';
import SettingsOptionCard from '../../common/components/SettingsOptionCard';
import SettingsButton from '../../common/components/SettingsButton';
import {useNavigation} from '@react-navigation/native';

const SettingsScreen = () => {
  const navigation = useNavigation();
  const [otherOptions, setOtherOptions] = useState([]);
  useEffect(() => {
    setOtherOptions(settingsOptions);
  }, []);

  const renderData = ({item}) => {
    return <SettingsButton item={item} />;
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Back Button */}
      <IconButton
        className="shadow-lg m-4"
        icon="arrow-left"
        iconColor={themeColors.bgColor(1)}
        containerColor="white"
        theme={{elevation: 6}}
        size={24}
        onPress={() => navigation.goBack()}
      />
      <ScrollView className=" flex-1 overflow-visible p-2 space-y-6">
        <Avatar.Text className="self-center" size={96} label="XD" />
        <FlatList data={settings} renderItem={renderData} numColumns={2} />
        {otherOptions.map(option => (
          <SettingsOptionCard key={option.id} option={option} />
        ))}
        <TouchableOpacity
          className="flex-row bg-white justify-center border border-gray-100 m-2 p-2 rounded-full"
          style={styles.container}>
          <View className="flex-1 flex-row bg-white justify-center items-center  space-x-4">
            <Icon source="logout" size={24} />
            <Text className="text-xl font-bold">Logout</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsScreen;

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
