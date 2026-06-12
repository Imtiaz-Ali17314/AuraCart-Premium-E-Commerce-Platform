import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addToBag(state, action) {
      state.push(action.payload);
    },
    removeFromBag(state, action) {
      return state.filter((item) => item !== String(action.payload));
    },
    clearBag() {
      return [];
    },
  },
});

export const bagActions = bagSlice.actions;
export default bagSlice;
