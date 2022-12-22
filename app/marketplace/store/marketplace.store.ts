import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Character } from "../../character/core/domain/character";
import { FilterMap, IMarketplaceStoreState } from "../core/port/marketplace.port";

const Characters: Character[] = [];

const initialState: IMarketplaceStoreState = {
  selectedItem: Characters[0],
  filterMap: {
    disciplines: [],
    classes: [],
    stats: [],
    skills: [],
  },
  characters: Characters,
};

const marketplaceSlice = createSlice({
  name: "marketplace",
  initialState,
  reducers: {
    setSelectedItem(state, action: PayloadAction<Character | null>) {
      state.selectedItem = action.payload;
    },
    setSelectedFilters(state, action: PayloadAction<FilterMap>) {
      state.filterMap = action.payload;
    },
  },
});

export const { setSelectedItem, setSelectedFilters } = marketplaceSlice.actions;

export default marketplaceSlice.reducer;
