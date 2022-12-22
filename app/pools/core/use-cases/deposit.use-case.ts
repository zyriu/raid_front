import { createAsyncThunk } from "@reduxjs/toolkit";
import { ExtraArgument } from "../../../shared/store/store";
import { AvailableLPTokens } from "../../../shared/constants/tokens";
import { JsonRpcProvider } from "@ethersproject/providers";

interface IArgs {
  provider: JsonRpcProvider;
  token: AvailableLPTokens;
}

export const approve = createAsyncThunk("pools/approve", async (args: IArgs, { extra, dispatch }) => {
  const { provider, token } = args;
  await (extra as ExtraArgument).api.pools.approve(token, provider.getSigner());
  // dispatch setPoolsAllowance
});
