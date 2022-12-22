import { createAsyncThunk } from "@reduxjs/toolkit";
import { ExtraArgument } from "../../../shared/store/store";
import { AvailableERC20Tokens } from "../../../shared/constants/tokens";

interface IArgs {
    token: AvailableERC20Tokens;
    amountDesired: number;
    amountMin: number;
    amountOne: number;
    to: string;
    deadline: number;
}

export const addLiquidityOne = createAsyncThunk("router/addLiquidityOne", async (args: IArgs, { extra, dispatch }) => {
  const { token, amountDesired, amountMin, amountOne, to, deadline } = args;
  await (extra as ExtraArgument).api.router.addLiquidityOne(token, amountDesired, amountMin, amountOne, to, deadline);
});
