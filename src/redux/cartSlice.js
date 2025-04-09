
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    decreaseQuantity(state, action) {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    increaseQuantity(state, action) {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
    },
    removeFromCart(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    }
  }
});

export const { addToCart, decreaseQuantity, increaseQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
