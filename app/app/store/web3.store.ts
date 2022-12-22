import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWeb3Context, IWeb3StoreState } from "../core/port/web3.store.port";

const initialState: IWeb3StoreState = {
  context : null
};

const web3Slice = createSlice({
  name: "web3",
  initialState,
  reducers: {
    setWeb3Context(state, action: PayloadAction<IWeb3Context>) {
      state.context = action.payload;
    },
  },
});

export const { setWeb3Context } = web3Slice.actions;

export default web3Slice.reducer;
