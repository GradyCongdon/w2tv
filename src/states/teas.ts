import { atom, selector } from "recoil";
import { TeaProduct } from "types/TeaProduct";

import teaProducts from "teaProducts.json";
import {
  filteringFunctions,
  teaStyleFilteringState,
} from "./teaStyleFiltering";
import { sortingFunctions, sortingState } from "./sorting";
// const stored = JSON.parse(localStorage.getItem("subjects") || "");

export const allTeasState = atom({
  key: "allTeas",
  default: teaProducts as TeaProduct[],
});

export const teasState = selector({
  key: "teas",
  get: ({ get }) => {
    const all = get(allTeasState);
    const filtering = get(teaStyleFilteringState);
    const sorting = get(sortingState);

    return (
      all
        // @ts-expect-error: dynamic
        .filter(filteringFunctions[filtering])
        .sort(sortingFunctions[sorting])
    );
  },
});
