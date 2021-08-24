import { useEffect, useState } from 'react';
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
  <h1 className="heading" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{children}</h1>
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

interface AppState {
  viewGlobal: ViewState;
  sorting: string;
  filtering: string;
  layout: Layout;
  whiteBalanced: boolean;
}

const stateDefaults = {
  viewGlobal: ViewState.Wrapper,
  sorting: '-year',
  filtering: 'all',
  layout: Layout.Card,
  whiteBalanced: true,
}



function App() {
  const localStoreState = localStorage.getItem('state');
  const state: AppState = localStoreState ? JSON.parse(localStoreState) : stateDefaults;
  const [viewGlobal, setViewGlobal] = useState(state.viewGlobal);
  const [sorting, setSorting] = useSorting(state.sorting);
  const [filtering, setFiltering] = useState(state.filtering);
  const [layout, setLaytout] = useState(state.layout);
  const [whiteBalanced, setWhiteBalanced] = useState(state.whiteBalanced);

  useEffect(() => {
    const state = {
      viewGlobal,
      sorting,
      filtering,
      layout,
      whiteBalanced
    };
    const json = JSON.stringify(state);
    localStorage.setItem('state', json);
  }, [viewGlobal, sorting, filtering, layout, whiteBalanced]);

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
        <ViewSelectorGlobal view={viewGlobal} setView={setViewGlobal} whiteBalanced={whiteBalanced} setWhiteBalanced={setWhiteBalanced} />
        <CardSelector layout={layout} setLaytout={setLaytout} />
        <SliceSelector layout={layout} setLaytout={setLaytout} />
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
