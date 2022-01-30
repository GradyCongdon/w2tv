import { atom } from "recoil";

export const personalFilters = ["all", "owned", "wish list"] as const;
export type PersonalFilter = typeof personalFilters[number];

export const personalFilterState = atom({
  key: "personalFilter",
  default: "all" as PersonalFilter,
});
