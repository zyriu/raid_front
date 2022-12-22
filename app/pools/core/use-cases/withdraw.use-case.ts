import { createAsyncThunk } from "@reduxjs/toolkit";
import { ExtraArgument } from "../../../shared/store/store";

interface IArgs {
  pid: number;
  amount: number;
  address: string;
}

export const withdraw = createAsyncThunk("pools/withdraw", async (args: IArgs, { extra, dispatch }) => {
  const { pid, amount, address } = args;
  await (extra as ExtraArgument).api.pools.withdraw(pid, amount, address);
});
