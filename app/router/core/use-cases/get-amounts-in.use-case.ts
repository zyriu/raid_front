import { createAsyncThunk } from "@reduxjs/toolkit";
import { ExtraArgument } from "../../../shared/store/store";

interface IArgs {
    amountIn: number,
    path: string[]
}

export const getAmountsIn = createAsyncThunk("router/getAmountsIn", async (args: IArgs, { extra, dispatch }) => {
  const { amountIn, path } = args;
  await (extra as ExtraArgument).api.router.getAmountsIn(amountIn, path);
});
