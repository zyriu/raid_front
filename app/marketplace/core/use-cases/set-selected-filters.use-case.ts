import { createAsyncThunk } from "@reduxjs/toolkit";
import { setSelectedFilters } from "../../store/marketplace.store";
import { RootState } from "../../../shared/store/store";
import { ManyFilterType, FilterCategoryType } from "../port/marketplace.port";

export const setFilterItem = createAsyncThunk(
  "marketplace/setSelectedFilters",
  async (item: ManyFilterType, { dispatch, getState }) => {
    const filters = (getState() as RootState).marketplace.filterMap;
    let categoryFilters = [...filters[item.category]];
    console.log("dispatched", categoryFilters);
    categoryFilters = categoryFilters ? categoryFilters.concat(item.filters) : item.filters;
    filters[item.category] = categoryFilters;
    console.log("filters", filters);
    return dispatch(setSelectedFilters({ ...filters }));
  },
);
