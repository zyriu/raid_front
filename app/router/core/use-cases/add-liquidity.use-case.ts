import { createAsyncThunk } from "@reduxjs/toolkit";
import { ExtraArgument } from "../../../shared/store/store";
import { AvailableERC20Tokens } from "../../../shared/constants/tokens";

interface IArgs {
  tokenA: AvailableERC20Tokens;
  tokenB: AvailableERC20Tokens;
  amountADesired: number;
  amountBDesired: number;
  amountAMin: number;
  amountBMin: number;
  to: string;
  deadline: number;
}

export const addLiquidity = createAsyncThunk("router/addLiquidity", async (args: IArgs, { extra, dispatch }) => {
  const { tokenA, tokenB, amountADesired, amountBDesired, amountAMin, amountBMin, to, deadline } = args;
  await (extra as ExtraArgument).api.router.addLiquidity(
    tokenA,
    tokenB,
    amountADesired,
    amountBDesired,
    amountAMin,
    amountBMin,
    to,
    deadline,
  );
});
