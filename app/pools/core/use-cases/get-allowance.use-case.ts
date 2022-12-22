import { createAsyncThunk } from "@reduxjs/toolkit";
import { ExtraArgument, RootState, ThunkWithExtraArguments } from "../../../shared/store/store";
import { AvailableLPTokens } from "../../../shared/constants/tokens";

interface IArgs {
  token: AvailableLPTokens;
}

export const getAllowance = createAsyncThunk<void, IArgs, ThunkWithExtraArguments>
  ("pools/getAllowance", async (args: IArgs, { extra, getState }) => {
    const { web3Store } = getState();
    const { token } = args;
    if (!web3Store.context) throw new Error('web3Store.context is undefined');
    await extra.api.pools.allowance(web3Store.context.address, token);
});
