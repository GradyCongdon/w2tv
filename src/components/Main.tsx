import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import _teas from "teaProducts.json";
import { useKeyboardNavigation } from "hooks/useKeyboardNavigation";
import { scrollToId } from "utils/scrollTo";
import { Cards } from "components/TeaProduct/Card";
import { Slices } from "components/TeaProduct/Slice";
import { List } from "components/TeaProduct/List";
import { TeaProduct } from "types/TeaProduct";
import { layoutState } from "states/layout";
import { sortingState, sortingFunctions } from "states/sorting";
import {
  teaStyleFilteringState,
  filteringFunctions,
} from "states/teaStyleFiltering";
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

  const teas = (_teas as TeaProduct[])
    // @ts-expect-error: dynamic
    .filter(filteringFunctions[filtering])
    .sort(sortingFunctions[sorting]);

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
