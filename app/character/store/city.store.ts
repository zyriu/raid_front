import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterMap } from "../../marketplace/core/port/marketplace.port";
import { Character } from "../core/domain/character";
import { ICityStoreState } from "../core/port/city.port";

const initialState: ICityStoreState = {
  selectedItem: null,
  myCharacters: [],
  filterMap: {
    disciplines: [],
    classes: [],
    stats: [],
    skills: [],
  },
  dnaExtracts: [],
};

const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    setSelectedItem(state, action: PayloadAction<Character | null>) {
      state.selectedItem = action.payload;
    },
    setSelectedFilters(state, action: PayloadAction<FilterMap>) {
      state.filterMap = action.payload;
    },
    setDnaExtracts(state, action: PayloadAction<Character[]>) {
      state.dnaExtracts = action.payload;
    },
    setMyCharacters(state, action: PayloadAction<Character[]>) {
      state.myCharacters = action.payload;
    },
  },
});

export const { setSelectedItem, setSelectedFilters, setDnaExtracts, setMyCharacters } = citySlice.actions;

export default citySlice.reducer;
