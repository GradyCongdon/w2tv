import { useRecoilState } from "recoil";
import {
  filteringFunctions,
  TeaStyleFiltering,
  teaStyleFilteringState,
} from "states/teaStyleFiltering";

export const Button = ({ filtering }: { filtering: TeaStyleFiltering }) => {
  const [currentFiltering, set] = useRecoilState(teaStyleFilteringState);
  return (
    <button
      className="button radio button--filter"
      disabled={filtering === currentFiltering}
      onClick={() => set(filtering)}
    >
      {filtering}
    </button>
  );
};

export const FilteringSelector = () => {
  const $Buttons = Object.keys(filteringFunctions).map((key) => (
    <Button filtering={key as TeaStyleFiltering} key={key} />
  ));
  return <>{$Buttons}</>;
};
