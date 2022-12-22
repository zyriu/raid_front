import { createAsyncThunk } from "@reduxjs/toolkit";
import { ExtraArgument } from "../../../shared/store/store";

interface IArgs {
  pid: number;
  amount: number;
  address: string;
}

export const withdrawAndHarvest = createAsyncThunk("pools/withdrawAndHarvest", async (args: IArgs, { extra, dispatch }) => {
  const { pid, amount, address } = args;
  await (extra as ExtraArgument).api.pools.withdrawAndHarvest(pid, amount, address);
});
