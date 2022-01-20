import { atom } from "recoil";

export type Layout = "card" | "list" | "slice";

export const layouts: Layout[] = ["card", "slice", "list"];

export const layoutState = atom({
  key: "layout",
  default: "card" as Layout,
});
