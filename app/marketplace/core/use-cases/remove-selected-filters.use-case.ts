import { createAsyncThunk } from "@reduxjs/toolkit";
import { setSelectedFilters } from "../../store/marketplace.store";
import { RootState } from "../../../shared/store/store";
import { FilterType, FilterCategoryType } from "../port/marketplace.port";

export const removeFilterItem = createAsyncThunk(
  "marketplace/setSelectedFilters",
  async (item: FilterType, { dispatch, getState }) => {
    const filters = (getState() as RootState).marketplace.filterMap;
    const categoryFilters = filters[item.category];
    categoryFilters ? categoryFilters.filter(i => i.name === item.filter.name) : (filters[item.category] = []);
    return dispatch(setSelectedFilters(filters));
  },
);
