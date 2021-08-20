import { useState } from 'react';
import { Teas } from './Tea';
import { ViewSelector } from './ViewSelector';
import { ViewState } from './ViewState';
import { data } from './data';
import './App.css';
import { sortFunctions, SortSelector, useSorting } from './Sorting';
import { filterFunctions, FilterSelector } from './Filtering';

const Heading = ({ children }: any) => (
  <h1 className="heading">{children}</h1>
);

function App() {
  const [viewGlobal, setViewGlobal] = useState(ViewState.Wrapper);
  const [sorting, setSorting] = useSorting();
  const [filtering, setFiltering] = useState('all');
  const sortedTeas = data
    // @ts-expect-error: dynamic
    .filter(filterFunctions[filtering])
    // @ts-expect-error: dynamic
    .sort(sortFunctions[sorting]);
  return (
    <main>
      <div className='controls--global'>
        <Heading>w2tv</Heading>
        <ViewSelector global={true} view={viewGlobal} setView={setViewGlobal} />
        <br />
        <br />
        <SortSelector sorting={sorting} setSorting={setSorting} />
        <br />
        <br />
        <FilterSelector filtering={filtering} setFiltering={setFiltering} />
        <br />
        <br />
        <br />
      </div>
      <Teas teas={sortedTeas} viewGlobal={viewGlobal} />
    </main>
  );
}

export default App;
