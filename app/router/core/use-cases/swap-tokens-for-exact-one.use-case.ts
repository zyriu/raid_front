import { createAsyncThunk } from "@reduxjs/toolkit";
import { ExtraArgument } from "../../../shared/store/store";
import { AvailableERC20Tokens } from "../../../shared/constants/tokens";

interface IArgs {
    amountIn: number;
    amountOutMin: number;
    path: string[];
    to: string;
    deadline: number;
}

export const swapTokensForExactOne = createAsyncThunk("router/swapTokensForExactOne", async (args: IArgs, { extra, dispatch }) => {
  const { amountIn, amountOutMin, path, to, deadline } = args;
  await (extra as ExtraArgument).api.router.swapTokensForExactOne(amountIn, amountOutMin, path, to, deadline);
});
