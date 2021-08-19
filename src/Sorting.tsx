const yearDesc = (a: any, b: any) => b.year - a.year;
const yearAsc = (a: any, b: any) => a.year - b.year;
const nameDesc = (a: any, b: any) => b.name.localeCompare(a.name);
const nameAsc = (a: any, b: any) => a.name.localeCompare(b.name);
export const sortFunctions = {
  '+year': yearAsc,
  '-year': yearDesc,
  '+name': nameAsc,
  '-name': nameDesc,
};
export const SortButton = ({ value, sorting, setSorting }: any) => (
  <button
    className='button--sort'
    disabled={sorting === value}
    onClick={() => setSorting(value)}>{value}
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
