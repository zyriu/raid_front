import { createAsyncThunk } from "@reduxjs/toolkit";
import { IGameItem } from "../../../marketplace/core/port/marketplace.port";
import { setSelectedItem } from "../../store/city.store";

export const setSelectedCityItem = createAsyncThunk(
  "marketplace/setSelectedItem",
  async (item: IGameItem, { dispatch }) => {
    return dispatch(setSelectedItem(item));
  },
);
