import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Icon, IconButton, TextInput, Snackbar} from 'react-native-paper';
import {themeColors} from '../../common/utilites/theme';
import {checkUser} from '../../api/API';

const SignInScreen = () => {
  const navigation = useNavigation();
  const msg1 = 'Please fill all the fields';
  const msg2 = 'Welcome to Foodzie, ';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState(null);
  const [visible, setVisible] = useState(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  const onSignInPress = () => {
    if (!email || !password) {
      onToggleSnackBar();
      setMsg(msg1);
      setVisible(true);
      navigation.navigate('App');
    } else {
      console.log('before++++++++++++++++', email, password);
      checkUser({email, password});
      onToggleSnackBar();
      setMsg(msg2 + email);
      console.log('after++++++++++++++++', email, password);
    }
  };
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Image
        className="w-full h-2/5"
        source={require('../../assets/images/vector/signinImage.png')}
      />
      <ScrollView
        className="m-2 p-2 space-y-3"
        showsVerticalScrollIndicator={false}>
        <Text className=" font-bold self-start text-4xl">Sign In</Text>
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
            mode="outlined"
            className="flex-1"
            secureTextEntry={true}
            activeOutlineColor={themeColors.bgColor(1)}
            outlineColor="gray"
            theme={{colors: {background: 'white'}}}
            label="Enter your Password"
            value={password}
            onChangeText={password => setPassword(password)}
          />
        </View>
        {/* Forgot Password Button */}
        <TouchableOpacity
          className="items-end"
          onPress={() => navigation.navigate('ForgotPassword-')}>
          <Text className="text-base font-semibold">Forgot Password</Text>
        </TouchableOpacity>
        {/* SignIn Button */}
        <TouchableOpacity
          className="items-center p-3 rounded-full"
          style={{backgroundColor: themeColors.bgColor(1), elevation: 4}}
          onPress={onSignInPress}>
          <Text className="text-xl font-bold text-white">Sign In</Text>
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
            Don't have an account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text
              className="text-base font-bold"
              style={{color: themeColors.bgColor(1)}}>
              SignUp
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Snackbar visible={visible} onDismiss={onDismissSnackBar}>
        {msg}
      </Snackbar>
    </SafeAreaView>
  );
};

export default SignInScreen;
