import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { id } = action.payload;
      const existingItemIndex = state.items.findIndex((item) => item.id === id);
      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].count += 1;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
    },
    removeProductFromCart(state, action) {
      const { id } = action.payload;
      state.items = state.items.filter((product) => product.id !== id);
    },
    decrementProduct(state, action) {
      const { id } = action.payload;
      if (state.items.length <= 0) {
        return "Cart is Empty";
      }
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        if (existingItem.count == 1) {
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          existingItem.count -= 1;
        }
      }
    },
  },
});
export const { addToCart, removeFromCart, decrementProduct } =
  cartSlice.actions;

export default cartSlice.reducer;
