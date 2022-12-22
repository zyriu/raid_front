import { createAsyncThunk } from "@reduxjs/toolkit";
import { ExtraArgument } from "../../../shared/store/store";

interface IArgs {
  pid: number;
}

export const raidPerBlock = createAsyncThunk("pools/raidPerBlock", async (args: IArgs, { extra, dispatch }) => {
  const { pid } = args;
  await (extra as ExtraArgument).api.pools.raidPerBlock(pid);
});
