import { useRecoilState } from "recoil";
import { TeaProduct } from "types/TeaProduct";
import { Sorting, sortings, sortingState } from "states/sorting";

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

export const sortFunctions: SortingFunctionMap = {
  "-year": yearDesc,
  "+year": yearAsc,
  "+name": nameAsc,
  "-name": nameDesc,
};

const getIcon = (value: string) => {
  switch (value[0]) {
    case "+": {
      // return '⬈';
      return "+";
    }
    case "-": {
      // return '⬊';
      return "-";
    }
    default: {
      return "?";
    }
  }
};

const Label = ({ value }: any) => {
  const icon = getIcon(value);
  return (
    <span className="label">
      <span className="text">{value.slice(1)}</span>
      &nbsp;
      <span className="icon--plain">{icon}</span>
    </span>
  );
};

export const Button = ({ sorting }: { sorting: Sorting }) => {
  const [currentSorting, setSorting] = useRecoilState(sortingState);
  return (
    <button
      className="button radio button--sort"
      disabled={sorting === currentSorting}
      onClick={() => setSorting(sorting)}
    >
      <Label value={sorting} />
    </button>
  );
};

export const SortingSelector = (props: any) => {
  const $Buttons = sortings.map((s) => <Button sorting={s} key={s} />);
  return <>{$Buttons}</>;
};
