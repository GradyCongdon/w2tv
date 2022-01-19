import { atom } from "recoil";
import { TeaStyle } from "types/TeaProduct";


export type TeaStyleFiltering = 'all' | TeaStyle;

export const teaStyleFilteringState = atom({
  key: 'teaStyleFilter',
  default: 'all' as TeaStyleFiltering,
}) 