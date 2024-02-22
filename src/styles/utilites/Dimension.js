import { Dimensions } from "react-native";
export const wp = (width) => {
  return (Dimensions.get("window").width * width) / 390;
};
export const hp = (height) => {
  return (Dimensions.get("window").height * height) / 844;
};
