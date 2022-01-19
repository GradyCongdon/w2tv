import { useRecoilState } from "recoil";
import { Sorting, sortings, sortingState } from "states/sorting";

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
