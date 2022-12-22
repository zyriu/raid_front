import { createAsyncThunk } from "@reduxjs/toolkit";
import { ExtraArgument } from "../../../shared/store/store";

interface IArgs {
  pid: number;
  address: string
}

export const harvest = createAsyncThunk("pools/harvest", async (args: IArgs, { extra, dispatch }) => {
  const { pid, address } = args;
  await (extra as ExtraArgument).api.pools.harvest(pid, address);
});
