import { createAsyncThunk } from "@reduxjs/toolkit";
import { ExtraArgument } from "../../../shared/store/store";
import { AvailableERC20Tokens } from "../../../shared/constants/tokens";

interface IArgs {
    tokenA: AvailableERC20Tokens;
    tokenB: AvailableERC20Tokens;
    liquidity: number;
    amountAMin: number;
    amountBMin: number;
    to: string;
    deadline: number;
}

export const removeLiquidity = createAsyncThunk("router/removeLiquidity", async (args: IArgs, { extra, dispatch }) => {
  const { tokenA, tokenB, liquidity, amountAMin, amountBMin, to, deadline } = args;
  await (extra as ExtraArgument).api.router.removeLiquidity(tokenA, tokenB, liquidity, amountAMin, amountBMin, to, deadline);
});
