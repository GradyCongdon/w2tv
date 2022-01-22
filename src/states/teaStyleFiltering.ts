import { atom } from "recoil";
import { TeaProduct, TeaStyle } from "types/TeaProduct";

export type TeaStyleFiltering = "all" | TeaStyle;

export const teaStyleFilteringState = atom({
  key: "teaStyleFilter",
  default: "all" as TeaStyleFiltering,
});

const isStyle = (s: TeaStyleFiltering) => (x: TeaProduct) => x.style === s;
const identity = (x: TeaProduct) => true;

type TeaStyleFilteringMap = {
  // TODO make non-optional
  [key in TeaStyleFiltering]?: (a: TeaProduct) => boolean;
};

export const filteringFunctions: TeaStyleFilteringMap = {
  all: identity,
  raw: isStyle("raw"),
  ripe: isStyle("ripe"),
  white: isStyle("white"),
  black: isStyle("black"),
  oolong: isStyle("oolong"),
  // TODO add data, then re-enable
  // 'green': isStyle(TeaStyle.Green),
  // 'unknown': isStyle(TeaStyle.Unknown),
};
