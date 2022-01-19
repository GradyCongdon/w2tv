import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { teas as _teas } from "data";
import { useKeyboardNavigation } from "hooks/useKeyboardNavigation";
import { scrollToId } from "utils/scrollTo";
import { Cards } from "components/TeaProduct/Card";
import { Slices } from "components/TeaProduct/Slice";
import { List } from "components/TeaProduct/List";
import { TeaProduct } from "types/TeaProduct";
import { layoutState } from "states/layout";
import { sortingState } from "states/sorting";
import { teaStyleFilteringState } from "states/teaStyleFiltering";
import { selectedSlugState } from "states/selectedSlug";

const LayoutView = ({ teas }: { teas: TeaProduct[] }) => {
  const layout = useRecoilValue(layoutState);
  switch (layout) {
    case "list": {
      return <List teas={teas} />;
    }
    case "slice": {
      return <Slices teas={teas} />;
    }
    default:
    case "card": {
      return <Cards teas={teas} />;
    }
  }
};

export const Main = () => {
  const sorting = useRecoilValue(sortingState);
  const filtering = useRecoilValue(teaStyleFilteringState);
  const layout = useRecoilValue(layoutState);
  const selectedSlug = useRecoilValue(selectedSlugState);

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
      <LayoutView teas={teas} />
    </main>
  );
};
