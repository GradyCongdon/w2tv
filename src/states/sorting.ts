import { atom } from 'recoil';

export type Sorting = '-year' | '+year' | '+name' | '-name';
export const sortings: Sorting[] = ['-year' , '+year' , '+name' , '-name'];

export const sortingState = atom({
  key: 'sorting',
  default: '-year' as Sorting,
});
