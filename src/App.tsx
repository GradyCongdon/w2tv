import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import { selectedSlugState } from "states/selectedSlug";

import { DetailContent } from "components/TeaProduct/Detail";
import { Main } from "components/Main";
import { Nav } from "components/Nav";
import "./App.scss";

function App() {
  const localStoreState = localStorage.getItem("state");
  const state: AppState = localStoreState
    ? JSON.parse(localStoreState)
    : stateDefaults;
  const [viewGlobal, setViewGlobal] = useState(state.viewGlobal);
  const [layout, setLaytout] = useState(state.layout);
  const [whiteBalanced, setWhiteBalanced] = useState(state.whiteBalanced);
  const [selectedSlug, setSelectedSlug] = useRecoilState(selectedSlugState);

  useEffect(() => {
    const state = {
      viewGlobal,
      sorting,
      filtering,
      layout,
      whiteBalanced,
    };
    const json = JSON.stringify(state);
    localStorage.setItem("state", json);
  }, [viewGlobal, sorting, filtering, layout, whiteBalanced]);

  return (
    <div className="app">
      <Nav />
      <Main />
      <DetailContent />
    </div>
  );
}

export default App;
