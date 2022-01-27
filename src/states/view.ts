import { atom } from "recoil";
import { ImageSubject } from "types/TeaProduct";

export type View = ImageSubject;
export const views: View[] = [
  "leaf",
  "soup",
  "teaBottom",
  "teaDetail",
  "teaTop",
  "tong",
  "chabu",
  "shirt",
  "wrapperBottom",
  "wrapperDetail",
  "wrapperTop",
];

export const viewState = atom({
  key: "view",
  default: "wrapperTop" as View,
});
