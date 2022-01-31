import { atom } from "recoil";
import { TeaProduct } from "types/TeaProduct";

export type TeaStyleFiltering =
  | "all"
  | "raw"
  | "ripe"
  | "white"
  | "black"
  | "oolong"
  | "bamboo"
  | "heicha"
  | "sun dried"
  | "shade dried"
  | "smokey"
  | "huigan"
  | "blend"
  | "yiwu"
  | "menghai"
  | "low stock"
  | "rle low stock";

export const teaStyleFilteringState = atom({
  key: "teaStyleFilter",
  default: "all" as TeaStyleFiltering,
});

const isStyle = (s: TeaStyleFiltering) => (x: TeaProduct) => x.style === s;
const identity = (x: TeaProduct) => true;

type TeaStyleFilteringMap = {
  [key in TeaStyleFiltering]: (a: TeaProduct) => boolean;
};

export const filteringFunctions: TeaStyleFilteringMap = {
  all: identity,
  raw: isStyle("raw"),
  ripe: isStyle("ripe"),
  white: isStyle("white"),
  black: isStyle("black"),
  oolong: isStyle("oolong"),
  bamboo: (t: TeaProduct) => t.size === "bamboo",
  heicha: (t: TeaProduct) => t.description.includes("heicha"),
  "sun dried": (t: TeaProduct) => t.description.includes("sun dried"),
  "shade dried": (t: TeaProduct) => t.description.includes("shade dried"),
  huigan: (t: TeaProduct) => t.description.includes("huigan"),
  smokey: (t: TeaProduct) => t.description.includes("smoke"),
  blend: (t: TeaProduct) => t.description.includes("blend"),
  yiwu: (t: TeaProduct) => t.description.includes("Yiwu"),
  menghai: (t: TeaProduct) => t.description.includes("Menghai"),
  "low stock": (t: TeaProduct) => t.quantity < 100 && t.quantity > 0,
  "rle low stock": (t: TeaProduct) => t.quantity < 20 && t.quantity > 0,
  // TODO add data, then re-enable
  // 'green': isStyle(TeaStyle.Green),
  // 'unknown': isStyle(TeaStyle.Unknown),
};
