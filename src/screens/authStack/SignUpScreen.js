import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Icon, IconButton, TextInput, Snackbar} from 'react-native-paper';
import {themeColors} from '../../common/utilites/theme';
import {newUser} from '../../api/API';
import { Drawable } from '../../common/utilites/Drawables';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const msg1 = 'Please fill all the fields';
  const msg2 = 'Password and Confirm Password should be same';
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [msg, setMsg] = useState(null);
  const [visible, setVisible] = useState(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  const onSignUpPress = () => {
    if (!name || !email || !password || !confirmPassword) {
      onToggleSnackBar();
      setMsg(msg1);
      setVisible(true);
    } else if (password !== confirmPassword) {
      onToggleSnackBar();
      setMsg(msg2);
      setVisible(true);
    } else {
      newUser({name, email, password, confirmPassword});
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Image
        className="w-full h-2/5"
        source={Drawable.SignUp}
      />
      <ScrollView
        className="m-2 p-2 space-y-3"
        showsVerticalScrollIndicator={false}
      >
        {/* User name */}
        <View className="flex-row justify-center items-center space-x-2">
          <Icon source="account" size={25} />
          <TextInput
            mode="outlined"
            className="flex-1"
            activeOutlineColor={themeColors.bgColor(1)}
            outlineColor="gray"
            theme={{colors: {background: 'white'}}}
            label="Enter your name"
            value={name}
            onChangeText={name => setName(name)}
          />
        </View>
        {/* User email */}
        <View className="flex-row justify-center items-center space-x-2">
          <Icon source="account" size={25} />
          <TextInput
            mode="outlined"
            className="flex-1"
            activeOutlineColor={themeColors.bgColor(1)}
            outlineColor="gray"
            theme={{colors: {background: 'white'}}}
            label="Enter your Email-id"
            value={email}
            onChangeText={email => setEmail(email)}
          />
        </View>
        {/* User password */}
        <View className="flex-row justify-center items-center space-x-2">
          <Icon source="account" size={25} />
          <TextInput
            secureTextEntry={true}
            mode="outlined"
            className="flex-1"
            activeOutlineColor={themeColors.bgColor(1)}
            outlineColor="gray"
            theme={{colors: {background: 'white'}}}
            label="Enter your Password"
            value={password}
            onChangeText={password => setPassword(password)}
          />
        </View>
        {/* User confirm password */}
        <View className="flex-row justify-center items-center space-x-2">
          <Icon source="account" size={25} />
          <TextInput
            mode="outlined"
            className="flex-1"
            activeOutlineColor={themeColors.bgColor(1)}
            outlineColor="gray"
            theme={{colors: {background: 'white'}}}
            label="Confirm Password"
            value={confirmPassword}
            onChangeText={confirmPassword =>
              setConfirmPassword(confirmPassword)
            }
          />
        </View>
        {/* SignUp Button */}
        <TouchableOpacity
          className="items-center p-3 rounded-full "
          style={{backgroundColor: themeColors.bgColor(1), elevation: 4}}
          onPress={onSignUpPress}
        >
          <Text className="text-xl font-bold text-white">Sign Up</Text>
        </TouchableOpacity>
        <Text className=" font-semibold text-xl text-center">Or</Text>
        {/* Other SignIn Button */}
        <View className="flex-row justify-center items-center">
          <IconButton
            icon={require('../../assets/images/signin/googleLogo.png')}
            size={32}
          />
          <IconButton
            icon={require('../../assets/images/signin/appleLogo.png')}
            size={32}
          />
          <IconButton
            icon={require('../../assets/images/signin/facebookLogo.png')}
            size={32}
          />
        </View>
        {/* Go to Sign Up Message */}
        <View className="flex-row justify-center items-center space-x-2 pb-4">
          <Text className="text-base font-semibold">
            Already have an account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text
              className="text-base font-bold"
              style={{color: themeColors.bgColor(1)}}
            >
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* Snackbar */}
      <Snackbar visible={visible} onDismiss={onDismissSnackBar}>
        {msg}
      </Snackbar>
    </SafeAreaView>
  );
};

export default SignUpScreen;
