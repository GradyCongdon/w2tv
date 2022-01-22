import { atom } from "recoil";
import { TeaProduct } from "types/TeaProduct";

export type Sorting = "-year" | "+year" | "+name" | "-name";
export const sortings: Sorting[] = ["-year", "+year", "+name", "-name"];

export const sortingState = atom({
  key: "sorting",
  default: "-year" as Sorting,
});

const getName = (x: TeaProduct) => x.name.replace("The ", "");

const nameDesc = (a: TeaProduct, b: TeaProduct) =>
  getName(b).localeCompare(getName(a)) || b.year - a.year;
const nameAsc = (a: TeaProduct, b: TeaProduct) =>
  getName(a).localeCompare(getName(b)) || a.year - b.year;

const yearDesc = (a: TeaProduct, b: TeaProduct) =>
  b.year - a.year || nameAsc(a, b);
const yearAsc = (a: TeaProduct, b: TeaProduct) =>
  a.year - b.year || nameAsc(a, b);

type SortingFunctionMap = {
  [key in Sorting]: (a: TeaProduct, b: TeaProduct) => number;
};

export const sortingFunctions: SortingFunctionMap = {
  "-year": yearDesc,
  "+year": yearAsc,
  "+name": nameAsc,
  "-name": nameDesc,
};
