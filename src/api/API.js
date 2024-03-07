import {useState, useEffect} from 'react';
import Axios from 'react-native-axios';
import _ from 'lodash';

export const newUser = ({name, email, password, confirmPassword}) => {
  Axios.post('http://192.168.1.10:3000/api/v1/user/signup', {
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
  Axios.post('http://192.168.1.10:3000/api/v1/user/login', {
    email: email,
    password: password,
  })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error.response.data);
    });
};

export const urlFor = 'http://192.168.1.10:3000';

export const getCategory = async () => {
  const res = await Axios({
    method: 'GET',
    url: 'http://192.168.1.10:3000/api/v1/menu/util/getCategory',
  });
  const data1 = res.data.data;
  return data1;
};

export const getAllRestro = async () => {
  const res = await Axios({
    method: 'GET',
    url: 'http://192.168.1.10:3000/api/v1/restaurant',
  });
  const data1 = res.data.data;
  const byCourt = _.groupBy(data1, ({ foodCourt }) => foodCourt);
  
  let arr = Object.keys(byCourt).map((key) => {
    return { court : key,data : byCourt[key] }
  });
  // console.log("data ===++>> ",arr[1].data[0])
  return arr;
};
