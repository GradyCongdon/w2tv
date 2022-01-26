import { Cards } from "components/TeaProduct/Card";
import { List } from "components/TeaProduct/List";
import { Slices } from "components/TeaProduct/Slice";
import { useKeyboardNavigation } from "hooks/useKeyboardNavigation";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { layoutState } from "states/layout";
import { selectedSlugState } from "states/selectedSlug";
import { sortingState } from "states/sorting";
import { teasState } from "states/teas";
import { teaStyleFilteringState } from "states/teaStyleFiltering";
import { TeaProduct } from "types/TeaProduct";
import { scrollToId } from "utils/scrollTo";

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
  const teas = useRecoilValue(teasState);

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
