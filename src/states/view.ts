import { atom } from "recoil";
import { ImageSubject } from "types/FullTea";

export type View = ImageSubject;
export const views: View[] = [
  "leaf",
  "soup",
  "tea-bottom",
  "tea-detail",
  "tea-top",
  "tong",
  "chabu",
  "shirt",
  "wrapper-bottom",
  "wrapper-detail",
  "wrapper-top",
];

export const viewState = atom({
  key: "view",
  default: "wrapper-top" as View,
});
