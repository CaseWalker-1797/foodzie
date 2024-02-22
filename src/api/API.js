import { useState, useEffect } from "react";
import Axios from "react-native-axios";

export const newUser = ({ name, email, password, confirmPassword }) => {
  console.log("first");
  Axios.post("http://192.168.1.11:3000/api/v1/user/signup", {
    name: name,
    email: email,
    password: password,
    passwordConfirm: confirmPassword,
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const checkUser = ({ email, password }) => {
  Axios.post("http://192.168.1.11:3000/api/v1/user/login", {
    email: email,
    password: password,
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.response.data);
    });
};
