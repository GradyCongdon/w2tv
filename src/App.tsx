import { Nav } from "components/Nav";
import { DetailDrawer } from "routes/Detail";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { sortingState } from "states/sorting";
import { teaStyleFilteringState } from "states/teaStyleFiltering";

import "./App.scss";
import { useKeyboardNavigation } from "hooks/useKeyboardNavigation";
import {
  Routes,
  Route,
  Navigate,
  useSearchParams,
  Outlet,
} from "react-router-dom";
import { Cards } from "routes/Cards";
import { List } from "routes/List";
import { Slices } from "routes/Slices";
import { teasState } from "states/teas";
import { scrollToId } from "utils/scrollTo";

console.log(`msg: ${process.env.REACT_APP_GIT_MSG}`);

function App() {
  // const localStoreState = localStorage.getItem("state");
  // const state: AppState = localStoreState
  //   ? JSON.parse(localStoreState)
  //   : stateDefaults;

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="cards/:subject" element={<Cards />} />
          <Route path="slices/:subject" element={<Slices />} />
          <Route path="list" element={<List />} />
          {/* <Route path="*" element={<Navigate to="cards/wrapperTop" />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;

const Main = () => {
  const sorting = useRecoilValue(sortingState);
  const filtering = useRecoilValue(teaStyleFilteringState);
  const teas = useRecoilValue(teasState);
  const [params] = useSearchParams();

  const detail = params.get("detail") || "";

  useEffect(() => {
    const state = {
      sorting,
      filtering,
    };
    const json = JSON.stringify(state);
    localStorage.setItem("state", json);
  }, [sorting, filtering]);

  useEffect(() => {
    scrollToId(detail || "app", 200);
  }, [sorting, filtering, detail]);

  useKeyboardNavigation(teas);

  return (
    <>
      <Nav />
      <main className={detail ? "detail--open" : ""}>
        <Outlet />
      </main>
      <DetailDrawer />
    </>
  );
};
