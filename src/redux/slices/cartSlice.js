import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
      console.log('An item has been added to cart');
    },
    removeFromCart: (state, action) => {
      let newCart = [...state.items];
      let itemIndex = state.items.findIndex(
        item => item._id == action.payload._id,
      );
      if (itemIndex >= 0) {
        newCart.splice(itemIndex, 1);
        console.log('An item has been removed from cart');
      } else {
        console.log('Cannot remove the item not preset in cart');
      }
      state.items = newCart;
    },
    emptyCart: (state, action) => {
      state.items = [];
      console.log('Cart has been emptied');
    },
  },
});

export const {addToCart, removeFromCart, emptyCart} = cartSlice.actions;

export const selectCartItems = state => state.cart.items;

export const selectCartItemsById = (state, _id) =>
  state.cart.items.filter(item => item._id == _id);

export const selectCartTotal = state =>
  state.cart.items.reduce((total, item) => (total = total += item.price), 0);

export default cartSlice.reducer;