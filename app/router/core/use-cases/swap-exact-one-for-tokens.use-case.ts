import { createAsyncThunk } from "@reduxjs/toolkit";
import { ExtraArgument } from "../../../shared/store/store";
import { AvailableERC20Tokens } from "../../../shared/constants/tokens";

interface IArgs {
    amountOutMin: number;
    path: string[];
    to: string;
    deadline: number;
}

export const swapExactOneForTokens = createAsyncThunk("router/swapExactOneForTokens", async (args: IArgs, { extra, dispatch }) => {
  const { amountOutMin, path, to, deadline }= args;
  await (extra as ExtraArgument).api.router.swapExactOneForTokens(amountOutMin, path, to, deadline);
});
