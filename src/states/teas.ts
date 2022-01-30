import { atom, selector } from "recoil";
import { TeaProduct } from "types/TeaProduct";

import teaProducts from "teaProducts.json";
import {
  filteringFunctions,
  teaStyleFilteringState,
} from "./teaStyleFiltering";
import { sortingFunctions, sortingState } from "./sorting";
import { ownedState } from "./owned";
import { personalFilterState } from "./personalFilters";

export const allTeasState = atom({
  key: "allTeas",
  default: teaProducts as TeaProduct[],
});

export const teasState = selector({
  key: "teas",
  get: ({ get }) => {
    const all = get(allTeasState);
    const selectedFiltering = get(teaStyleFilteringState);
    const selectedSorting = get(sortingState);
    const personalFilter = get(personalFilterState);

    return all
      .filter((t) => {
        switch (personalFilter) {
          case "owned": {
            const owned = get(ownedState);
            const isOwned = owned[t.slug];
            if (!isOwned) return false;
            break;
          }
          case "wish list":
          case "all":
          default: {
            break;
          }
        }
        const filter = filteringFunctions[selectedFiltering];
        return filter(t);
      })
      .sort(sortingFunctions[selectedSorting]);
  },
});
