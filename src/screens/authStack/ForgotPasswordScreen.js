import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon, TextInput } from "react-native-paper";
import { themeColors } from "../../styles/theme";
import { useNavigation } from "@react-navigation/native";

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const onSubmitpress = () => {
    navigation.navigate("SignIn");
  };
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Image
        className="w-full h-2/5"
        source={require("../../assets/images/vector/signinImage.png")}
      />
      <View className="m-2 p-2 space-y-3">
        <Text className=" font-bold self-start text-4xl">Forgot Password</Text>
        <Text className="text-base font-semibold self-start">
          Don't worry! It happens to the best of us. Please enter the email
          associated with your account.
        </Text>
        {/* User email */}
        <View className="flex-row justify-center items-center space-x-2">
          <Icon source="account" size={25} />
          <TextInput
            mode="outlined"
            className="flex-1"
            activeOutlineColor={themeColors.bgColor(1)}
            outlineColor="gray"
            theme={{ colors: { background: "white" } }}
            label="Enter your Email-id"
            value={email}
            onChangeText={(email) => setEmail(email)}
          />
        </View>
        {/* Submit Button */}
        <TouchableOpacity
          className="items-center p-3 rounded-full"
          style={{ backgroundColor: themeColors.bgColor(1), elevation: 4 }}
          onPress={onSubmitpress}
        >
          <Text className="text-xl font-bold text-white">Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
