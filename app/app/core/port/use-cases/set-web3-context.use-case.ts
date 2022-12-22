import { createAsyncThunk } from "@reduxjs/toolkit";
import { setWeb3Context } from "../../../store/web3.store";
import { IWeb3Context } from "../web3.store.port";

export const setWeb3ContextUseCase = createAsyncThunk("web3/setWeb3Context", async (context: IWeb3Context, { extra, dispatch }) => {
  dispatch(setWeb3Context(context));
});
