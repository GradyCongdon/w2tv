import { useRecoilState } from "recoil";
import { TeaProduct, TeaStyle } from "types/TeaProduct";
import {
  TeaStyleFiltering,
  teaStyleFilteringState,
} from "states/teaStyleFiltering";

const isStyle = (s: TeaStyle) => (x: TeaProduct) => x.style === s;
const identity = (x: TeaProduct) => true;

type TeaStyleFilteringMap = {
  // TODO make non-optional
  [key in TeaStyleFiltering]?: (a: TeaProduct) => boolean;
};

export const filterFunctions: TeaStyleFilteringMap = {
  all: identity,
  raw: isStyle(TeaStyle.Raw),
  ripe: isStyle(TeaStyle.Ripe),
  white: isStyle(TeaStyle.White),
  black: isStyle(TeaStyle.Black),
  oolong: isStyle(TeaStyle.Oolong),
  huangpian: isStyle(TeaStyle.Huangpian),
  // TODO add data, then re-enable
  // 'green': isStyle(TeaStyle.Green),
  // 'unknown': isStyle(TeaStyle.Unknown),
};

export const Button = ({ filtering }: { filtering: TeaStyleFiltering }) => {
  const [value, set] = useRecoilState(teaStyleFilteringState);
  return (
    <button
      className="button radio button--filter"
      disabled={filtering === value}
      onClick={() => set(value)}
    >
      {value}
    </button>
  );
};

export const FilteringSelector = () => {
  const $Buttons = Object.keys(filterFunctions).map((key) => (
    <Button filtering={key as TeaStyleFiltering} key={key} />
  ));
  return <>{$Buttons}</>;
};
