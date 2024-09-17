import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: null,
  brochure: [], // Initialized as an empty array
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    productDetails: (state, action) => {
      state.product = action.payload;
    },

    shortlist: (state, action) => {
      // Check if the item is already in the shortlist to avoid duplicates
      const isAlreadyShortlisted = state.brochure.some(
        (item) => item._id === action.payload._id
      );

      if (!isAlreadyShortlisted) {
        // Use spread operator to add item immutably
        state.brochure = [...state.brochure, action.payload];
      }
    },

    removeFromList: (state, action) => {
      // Remove item from brochure by filtering out the item
      state.brochure = state.brochure.filter(
        (item) => item._id !== action.payload
      );
    },

    removeProduct: (state) => {
      state.product = null;
    },
  },
});

export const { productDetails, removeProduct, shortlist, removeFromList } =
  productSlice.actions;
export { productSlice };
