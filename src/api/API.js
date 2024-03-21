import {useState, useEffect} from 'react';
import Axios from 'react-native-axios';
import _ from 'lodash';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const urlFor = 'http://192.168.1.11:3000';

export const newUser = ({name, email, password, confirmPassword}) => {
  Axios.post(urlFor + '/api/v1/user/signup', {
    name: name,
    email: email,
    password: password,
    passwordConfirm: confirmPassword,
  })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
};

export const checkUser = ({email, password}) => {
  Axios.post(urlFor + '/api/v1/user/login', {
    email: email,
    password: password,
  })
    .then(async response => {
      const useToken = response.data.token;
      await AsyncStorage.setItem('userToken', useToken);
    })
    .catch(error => {
      console.log(error.response.data);
    });
};

export const getCategory = async () => {
  const res = await Axios({
    method: 'GET',
    url: urlFor + '/api/v1/menu/util/getCategory',
  });
  const data1 = res.data.data;
  return data1;
};

export const getAllRestro = async () => {
  const res = await Axios({
    method: 'GET',
    url: urlFor + '/api/v1/restaurant',
  });
  const data1 = res.data.data;
  const byCourt = _.groupBy(data1, ({foodCourt}) => foodCourt);

  let arr = Object.keys(byCourt).map(key => {
    return {court: key, data: byCourt[key]};
  });
  return arr;
};

export const getMenuRestroById = async ({id}) => {
  const res = await Axios({
    method: 'GET',
    url: urlFor + `/api/v1/menu/resto/${id}`,
  });
  const data1 = res.data.data;
  return data1;
};

export const sendOrder = ({token, foodItem, quantity, totalPrice}) => {
  Axios.post(urlFor + '/api/v1/order', {
    token: token,
    item: {foodItem, quantity},
    totalPrice: totalPrice,
  })
    .then(response => {
      console.log(JSON.stringify(response.data));
      console.log('Order Placed', foodItem);
    })
    .catch(error => {
      console.log(error);
    });
};

export const getOrder = async () => {
  const res = await Axios({
    method: 'GET',
    url: urlFor + '/api/v1/order',
  });
  const data1 = res.data.data;
  console.log('Order Details', data1);
  return data1;
};
