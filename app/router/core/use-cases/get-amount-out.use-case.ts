import { createAsyncThunk } from "@reduxjs/toolkit";
import { ExtraArgument } from "../../../shared/store/store";

interface IArgs {
    amountOut: number,
    path: string[]
}

export const getAmountOut = createAsyncThunk("router/getAmountOut", async (args: IArgs, { extra, dispatch }) => {
  const { amountOut, path } = args;
  await (extra as ExtraArgument).api.router.getAmountOut(amountOut, path);
});
