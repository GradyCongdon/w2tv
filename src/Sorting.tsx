import { useState } from "react";

const yearDesc = (a: any, b: any) => b.year - a.year;
const yearAsc = (a: any, b: any) => a.year - b.year;
const nameDesc = (a: any, b: any) => b.name.localeCompare(a.name);
const nameAsc = (a: any, b: any) => a.name.localeCompare(b.name);

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
    className='button--sort'
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
