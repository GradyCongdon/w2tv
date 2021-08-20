import { TeaProduct, TeaStyle } from "./TeaProduct";

const isStyle = (s: TeaStyle) => (x: TeaProduct) => x.style === s;
const identity = (x: TeaProduct) => true;
export const filterFunctions = {
  'all': identity,
  // 'green': isStyle(TeaStyle.Green),
  'raw': isStyle(TeaStyle.Raw),
  'ripe': isStyle(TeaStyle.Ripe),
  'white': isStyle(TeaStyle.White),
  'black': isStyle(TeaStyle.Black),
  'oolong': isStyle(TeaStyle.Oolong),
  'huangpian': isStyle(TeaStyle.Huangpian),
  // 'unknown': isStyle(TeaStyle.Unknown),
};

export const FilterButton = ({ value, filtering, setFiltering }: any) => (
  <button
    className='button--filter'
    disabled={filtering === value}
    onClick={() => setFiltering(value)}>{value}
  </button>
);

export const FilterSelector = (props: any) => {
  const $Buttons = Object.keys(filterFunctions).map(key => <FilterButton {...props} value={key} key={key} />);
  return (
    <>
      {$Buttons}
    </>
  );
};
