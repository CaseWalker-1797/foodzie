import {configureStore} from '@reduxjs/toolkit';
import RestroSlice from '../slices/RestroSlice';

const store = configureStore({
  reducer: {
    restro: RestroSlice,
  },
});

export default store;
