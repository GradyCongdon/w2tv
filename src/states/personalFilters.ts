import { atom } from "recoil";

const personalFilters = ["all", "owned", "wish list"] as const;
type PersonalFilter = typeof personalFilters[number];

export const personalFilterState = atom({
  key: "personalFilter",
  default: "all" as PersonalFilter,
});
