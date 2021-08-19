import { useState } from 'react';
import { Teas } from './Tea';
import { ViewSelector } from './ViewSelector';
import { ViewState } from './ViewState';
import { data } from './data';
import './App.css';

const yearDesc = (a: any, b: any) => b.year - a.year;
const yearAsc = (a: any, b: any) => a.year - b.year;
const nameDesc = (a: any, b: any) => b.name.localeCompare(a.name);
const nameAsc = (a: any, b: any) => a.name.localeCompare(b.name);
const sortFunctions = {
  '+year': yearAsc,
  '-year': yearDesc,
  '+name': nameAsc,
  '-name': nameDesc,
}

const SortButton = ({ value, sorting, setSorting }: any) => (
  <button
    className='button--sort'
    disabled={sorting === value}
    onClick={() => setSorting(value)}>{value}
  </button>
)

const SortSelector = (props: any) => {
  const $Buttons = Object.keys(sortFunctions).map(key => <SortButton {...props} value={key} key={key} />);
  return (
    <>
      {$Buttons}
    </>
  )

}

function App() {
  const [viewGlobal, setViewGlobal] = useState(ViewState.Wrapper);
  const [sorting, setSorting] = useState('+year');
  // @ts-expect-error: dynamic
  const sortedTeas = data.sort(sortFunctions[sorting]);
  return (
    <main>
      <div className='controls--global'>
        <ViewSelector global={true} view={viewGlobal} setView={setViewGlobal} />
        <SortSelector sorting={sorting} setSorting={setSorting} />
      </div>
      <Teas teas={sortedTeas} viewGlobal={viewGlobal} />
    </main>
  );
}

export default App;
