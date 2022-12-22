import { createAsyncThunk } from "@reduxjs/toolkit";
import { ExtraArgument } from "../../../shared/store/store";

interface IArgs {
    amountIn: number;
    amountOutMin: number;
    path: string[];
    to: string;
    deadline: number;
}

export const swapTokensForExactTokens = createAsyncThunk("router/swapTokensForExactTokens", async (args: IArgs, { extra, dispatch }) => {
  const { amountIn, amountOutMin, path, to, deadline } = args;
  await (extra as ExtraArgument).api.router.swapTokensForExactTokens(amountIn, amountOutMin, path, to, deadline);
});
