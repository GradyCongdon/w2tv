import { Cards } from "routes/Cards";
import { List } from "routes/List";
import { Slices } from "routes/Slices";
import { useKeyboardNavigation } from "hooks/useKeyboardNavigation";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { layoutState } from "states/layout";
import { selectedSlugState } from "states/selectedSlug";
import { sortingState } from "states/sorting";
import { teasState } from "states/teas";
import { teaStyleFilteringState } from "states/teaStyleFiltering";
import { scrollToId } from "utils/scrollTo";

export const Main = () => {
  const sorting = useRecoilValue(sortingState);
  const filtering = useRecoilValue(teaStyleFilteringState);
  const selectedSlug = useRecoilValue(selectedSlugState);
  const teas = useRecoilValue(teasState);

  useEffect(() => {
    scrollToId(selectedSlug, 200);
  }, [sorting, filtering, selectedSlug]);

  useKeyboardNavigation(teas);

  return (
    <main className={selectedSlug ? "detail--open" : ""}>
      <Routes>
        <Route index element={<Cards />} />
        <Route path="cards/:subject" element={<Cards />} />
        <Route path="slices/:subject" element={<Slices />} />
        <Route path="list" element={<List />} />
      </Routes>
    </main>
  );
};
