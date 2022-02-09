import { Nav } from "components/Nav";
import { Empty } from "Empty";
import { useKeyboardNavigation } from "hooks/useKeyboardNavigation";
import { lazy, Suspense, useEffect } from "react";
import {
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import { useRecoilValue } from "recoil";

import { personalFilterState } from "states/personalFilters";
import { sortingState } from "states/sorting";
import { teasState } from "states/teas";
import { teaStyleFilteringState } from "states/teaStyleFiltering";
import { scrollToId } from "utils/scrollTo";
import "./App.scss";
import { DetailDrawer } from "routes/DetailDrawer";
import { Placeholder } from "components/Placeholder";
import { Search } from "components/Search";

const Cards = lazy(() => import("routes/Cards"));
const List = lazy(() => import("routes/List"));
const Slices = lazy(() => import("routes/Slices"));

process && console.log(`msg: ${process?.env?.REACT_APP_GIT_MSG || "dev"}`);

const Loading = () => {
  return (
    <>
      <Nav />
      <main className="main Loading">
        <Placeholder />
      </main>
      <DetailDrawer />
    </>
  );
};

function App() {
  const sorting = useRecoilValue(sortingState);
  const filtering = useRecoilValue(teaStyleFilteringState);
  const teas = useRecoilValue(teasState);
  const personal = useRecoilValue(personalFilterState);
  const [params] = useSearchParams();
  const location = useLocation();

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
    window.scrollTo(0, 0);
  }, [sorting, filtering, personal, location.pathname]);

  useEffect(() => {
    if (detail) scrollToId(detail, 80);
  }, [detail]);

  useKeyboardNavigation(teas);

  const classes = `app ${detail ? "detail--open" : ""}`;

  return (
    <div className={classes}>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="cards/:subject" element={<Cards />} />
            <Route path="slices/:subject" element={<Slices />} />
            <Route path="list/:subject" element={<List />} />
            <Route index element={<Navigate to="/cards/wrapperTop" />} />
            <Route path="*" element={<Navigate to="cards/wrapperTop" />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

const Main = () => {
  const teas = useRecoilValue(teasState);
  // const loading = false;
  // if (loading) return <Loading />;
  return (
    <>
      <Nav />
      <main id="main">{teas.length ? <Outlet /> : <Empty />}</main>
      <Search />
      <DetailDrawer />
    </>
  );
};
