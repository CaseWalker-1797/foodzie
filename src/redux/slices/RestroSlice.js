import {createSlice} from '@reduxjs/toolkit';

const initialState = {restro: null};

const restroSlice = createSlice({
  name: 'restro',
  initialState,
  reducers: {
    setRestro: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const {setRestro} = restroSlice.actions;
export const selectRestro = state => state.restro.restro;
export default restroSlice.reducer;
