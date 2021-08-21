import { useState } from 'react';
import { ViewSelectorGlobal } from './ViewSelector';
import { ViewState } from './ViewState';
import { teas } from './data';
import { sortFunctions, SortSelector, useSorting } from './Sorting';
import { filterFunctions, FilterSelector } from './Filtering';
import { TeaCards } from './TeaCard';
import { TeaSlices } from './TeaSlice';
import { List } from './ListText';

import './App.scss';

const Heading = ({ children }: any) => (
  <h1 className="heading">{children}</h1>
);

const Divider = () => (
  <>
    <br />
    <br />
  </>
);

enum Layout {
  Card = 'card',
  List = 'list',
  Slice = 'Slice'
}

const ListSelector = ({ layout, setLaytout }: any) => (
  <button
    className="button radio button--layout"
    disabled={layout === Layout.List}
    onClick={() => setLaytout(Layout.List)}
  >
    List
  </button>
);

const SliceSelector = ({ layout, setLaytout }: any) => (
  <button
    className="button radio button--layout"
    disabled={layout === Layout.Slice}
    onClick={() => setLaytout(Layout.Slice)}
  >
    Slice
  </button>
);

const CardSelector = ({ layout, setLaytout }: any) => (
  <button
    className="button radio button--layout"
    disabled={layout === Layout.Card}
    onClick={() => setLaytout(Layout.Card)}
  >
    Card
  </button>
);



function App() {
  const [viewGlobal, setViewGlobal] = useState(ViewState.Wrapper);
  const [sorting, setSorting] = useSorting();
  const [filtering, setFiltering] = useState('all');
  const [layout, setLaytout] = useState(Layout.Card);
  const [whiteBalanced, setWhiteBalanced] = useState(true);
  const sortedTeas = teas
    // @ts-expect-error: dynamic
    .filter(filterFunctions[filtering])
    // @ts-expect-error: dynamic
    .sort(sortFunctions[sorting]);

  let Items;
  switch (layout) {
    case Layout.List: {
      Items = (<List teas={sortedTeas} />);
      break;
    }
    case Layout.Slice: {
      Items = (<TeaSlices teas={sortedTeas} view={viewGlobal} whiteBalanced={whiteBalanced} />);
      break;
    }
    default:
    case Layout.Card: {
      Items = (<TeaCards teas={sortedTeas} viewGlobal={viewGlobal} whiteBalanced={whiteBalanced} />);
      break;
    }
  }

  return (
    <>
      <aside className='controls--global'>
        <Heading>w2tv</Heading>
        <CardSelector layout={layout} setLaytout={setLaytout} />
        <SliceSelector layout={layout} setLaytout={setLaytout} />
        <ViewSelectorGlobal view={viewGlobal} setView={setViewGlobal} whiteBalanced={whiteBalanced} setWhiteBalanced={setWhiteBalanced} />
        <ListSelector layout={layout} setLaytout={setLaytout} />
        <Divider />
        <SortSelector sorting={sorting} setSorting={setSorting} />
        <Divider />
        <FilterSelector filtering={filtering} setFiltering={setFiltering} />
        <Divider />
      </aside>
      <main>
        {Items}
      </main>
    </>
  );
}

export default App;
