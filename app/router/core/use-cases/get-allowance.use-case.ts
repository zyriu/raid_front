import { createAsyncThunk } from "@reduxjs/toolkit";
import { ExtraArgument } from "../../../shared/store/store";
import { AvailableERC20Tokens } from "../../../shared/constants/tokens";

interface IArgs {
  address: string;
  token: AvailableERC20Tokens;
}

export const getAllowance = createAsyncThunk("router/getAllowance", async (args: IArgs, { extra, dispatch }) => {
  const { address, token } = args;
  await (extra as ExtraArgument).api.router.allowance(address, token);
  // dispatch setPoolsAllowance
});
