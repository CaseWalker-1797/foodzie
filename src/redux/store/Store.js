import {configureStore} from '@reduxjs/toolkit';
import RestroSlice from '../slices/RestroSlice';
import cartSlice from '../slices/cartSlice';

const store = configureStore({
  reducer: {
    restro: RestroSlice,
    cart: cartSlice,
  },
});

export default store;
