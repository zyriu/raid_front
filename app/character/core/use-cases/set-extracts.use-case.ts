import { createAsyncThunk } from "@reduxjs/toolkit";
import { setDnaExtracts } from "../../store/city.store";
import { Character } from "../domain/character";

export const setDnaExtract = createAsyncThunk(
  "marketplace/setDnaExtracts",
  async (items: Character[], { dispatch }) => {
    return dispatch(setDnaExtracts(items));
  },
);
