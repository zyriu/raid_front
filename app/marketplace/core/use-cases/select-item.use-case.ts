import { createAsyncThunk } from "@reduxjs/toolkit";
import { setSelectedItem } from "../../store/marketplace.store";
import { IGameItem } from "../port/marketplace.port";

export const setSelectedMarketplaceItem = createAsyncThunk(
  "marketplace/setSelectedItem",
  async (item: IGameItem, { dispatch }) => {
    return dispatch(setSelectedItem(item));
  },
);
