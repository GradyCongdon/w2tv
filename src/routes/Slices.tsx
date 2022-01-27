import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { teasState } from "states/teas";
import { viewState } from "states/view";
import { getDefaultFilters, Slice } from "../components/TeaProduct/Slice";

export const Slices = () => {
  const teas = useRecoilValue(teasState);
  const view = useRecoilValue(viewState);
  const defaultFilters = getDefaultFilters(view);
  const [filteredSizes, setFilteredSizes] = useState(defaultFilters);

  useEffect(() => {
    setFilteredSizes(getDefaultFilters(view));
  }, [view]);

  const toggle = (size: any) => ({
    ...filteredSizes,
    [size]: !filteredSizes[size] as boolean,
  });

  const Filters = Object.keys(defaultFilters).map((size) => (
    <button
      key={size}
      className={`button toggle ${filteredSizes[size] ? "checked" : ""}`}
      onClick={() => setFilteredSizes(toggle(size))}
    >
      {size}
    </button>
  ));

  const TeaSlices = teas
    .filter((t) => filteredSizes[t.size])
    .map((t) => <Slice key={t.slug} tea={t} />);

  return (
    <>
      <nav className="TeaSliceFilters">{Filters}</nav>
      <div className="TeaSlices">{TeaSlices}</div>
    </>
  );
};
