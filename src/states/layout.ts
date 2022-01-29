import { atom } from "recoil";

export type Layout = "cards" | "list" | "slices";

export const layouts: Layout[] = ["cards", "slices", "list"];

export const layoutState = atom({
  key: "layout",
  default: "cards" as Layout,
});
