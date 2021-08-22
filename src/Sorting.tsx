import { useState } from "react";
import { TeaProduct } from "./TeaProduct";

const getName = (x: TeaProduct) => x.name.replace('The ', '')

const nameDesc = (a: TeaProduct, b: TeaProduct) => getName(b).localeCompare(getName(a)) || b.year - a.year;
const nameAsc = (a: TeaProduct, b: TeaProduct) => getName(a).localeCompare(getName(b)) || b.year - a.year;

const yearDesc = (a: TeaProduct, b: TeaProduct) => b.year - a.year || nameAsc(a, b);
const yearAsc = (a: TeaProduct, b: TeaProduct) => a.year - b.year || nameAsc(a, b);

export const useSorting = (defaultSorting = '-year') => {
  return useState(defaultSorting);
}
export const sortFunctions = {
  '-year': yearDesc,
  '+year': yearAsc,
  '+name': nameAsc,
  '-name': nameDesc,
};

const getIcon = (value: string) => {
  switch (value[0]) {
    case '+': {
      // return '⬈';
      return '+';
    }
    case '-': {
      // return '⬊';
      return '-';
    }
    default: {
      return '?';
    }
  }
}

const Label = ({ value }: any) => {
  const icon = getIcon(value);
  return (
    <span className="label">
      <span className="text">{value.slice(1)}</span>
      &nbsp;
      <span className="icon--plain">{icon}</span>
    </span>
  )
}

export const SortButton = ({ value, sorting, setSorting }: any) => (
  <button
    className='button radio button--sort'
    disabled={sorting === value}
    onClick={() => setSorting(value)}>
    <Label value={value} />
  </button>
);
export const SortSelector = (props: any) => {
  const $Buttons = Object.keys(sortFunctions).map(key => <SortButton {...props} value={key} key={key} />);
  return (
    <>
      {$Buttons}
    </>
  );
};
