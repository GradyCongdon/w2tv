import { atom } from 'recoil';

export type View = 'wrapper' | 'bing' | 'soup'
export const views: View[] = ['wrapper','bing' , 'soup'];

export const viewState = atom({
  key: 'view',
  default: 'wrapper' as View,
});