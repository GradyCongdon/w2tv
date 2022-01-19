import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { teas as _teas } from "data";
import { useKeyboardNavigation } from "hooks/useKeyboardNavigation";
import { scrollToId } from "utils/scrollTo";
import { Cards } from "components/TeaProduct/Card";
import { Slices } from "components/TeaProduct/Slice";
import { List } from "components/TeaProduct/List";

const LayoutView = () => {
  const layout = useRecoilValue(layoutState);

  switch (layout) {
    case Layout.List: {
      return <List />;
    }
    case Layout.Slice: {
      return <TeaSlices />;
    }
    default:
    case Layout.Card: {
      return <TeaCards />;
    }
  }
};

export const Main = () => {
  const teas = _teas
    // @ts-expect-error: dynamic
    .filter(filterFunctions[filtering])
    // @ts-expect-error: dynamic
    .sort(sortFunctions[sorting]);

  useEffect(() => {
    scrollToId(selectedSlug, 200);
  }, [sorting, filtering, layout, selectedSlug]);

  useKeyboardNavigation(teas);

  return (
    <main className={selectedSlug ? "detail--open" : ""}>
      <LayoutView />
    </main>
  );
};
