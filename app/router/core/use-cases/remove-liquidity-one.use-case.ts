import { createAsyncThunk } from "@reduxjs/toolkit";
import { ExtraArgument } from "../../../shared/store/store";
import { AvailableERC20Tokens } from "../../../shared/constants/tokens";

interface IArgs {
    token: AvailableERC20Tokens;
    liquidity: number;
    amountTokenMin: number;
    amountOneMin: number;
    to: string;
    deadline: number;
}

export const removeLiquidityOne = createAsyncThunk("router/removeLiquidityOne", async (args: IArgs, { extra, dispatch }) => {
  const { token, liquidity, amountTokenMin, amountOneMin, to, deadline } = args;
  await (extra as ExtraArgument).api.router.removeLiquidityOne(token, liquidity, amountTokenMin, amountOneMin, to, deadline);
});
