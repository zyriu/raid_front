import { createAsyncThunk } from "@reduxjs/toolkit";
import { ExtraArgument } from "../../../shared/store/store";
import { JsonRpcProvider } from "@ethersproject/providers";
import { AvailableERC20Tokens } from "../../../shared/constants/tokens";

interface IArgs {
  provider: JsonRpcProvider;
  token: AvailableERC20Tokens;
}

export const approve = createAsyncThunk("router/approve", async (args: IArgs, { extra, dispatch, getState }) => {
  const { provider, token } = args;
  await (extra as ExtraArgument).api.router.approve(token, provider.getSigner());
  // dispatch setRouterAllowance
});
