import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  quantity: 0,
  total: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    incrementQuantity: (state, action) => {
      const { id, timestamp } = action.payload;
      const productIndex = state.products.findIndex(
        (product) => product.id === id && product.timestamp === timestamp,
      );

      if (productIndex !== -1) {
        const productToUpdate = state.products[productIndex];
        state.products[productIndex] = {
          ...productToUpdate,
          quantity: productToUpdate.quantity + 1,
        };
        state.total += productToUpdate.price;
      }
    },
    decrementQuantity: (state, action) => {
      const { id, timestamp } = action.payload;
      const productIndex = state.products.findIndex(
        (product) => product.id === id && product.timestamp === timestamp,
      );

      if (productIndex !== -1) {
        const productToUpdate = state.products[productIndex];
        if (productToUpdate.quantity > 1) {
          state.products[productIndex] = {
            ...productToUpdate,
            quantity: productToUpdate.quantity - 1,
          };
          state.total -= productToUpdate.price;
        }
      }
    },
    removeProduct: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) =>
          product.id === action.payload.id &&
          product.timestamp === action.payload.timestamp,
      );

      if (productIndex !== -1) {
        const productToRemove = state.products[productIndex];
        const removedQuantity = productToRemove.quantity;
        const removedTotal = productToRemove.price * removedQuantity;

        // Update the cart's quantity and total.
        //each instance of the porduct in the array serve as one quantity in cart
        state.quantity -= 1;
        state.total -= removedTotal;

        // Create a new array with the product removed using spread syntax.
        state.products = [
          ...state.products.slice(0, productIndex),
          ...state.products.slice(productIndex + 1),
        ];
      }
    },
    // Reset cart action
    resetCart: () => initialState,
  },
});

export const {
  addProduct,
  removeProduct,
  resetCart,
  decrementQuantity,
  incrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
