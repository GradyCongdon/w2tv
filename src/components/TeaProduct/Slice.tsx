import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { selectedSlugState } from "states/selectedSlug";
import { viewState } from "states/view";
import { whiteBalancedState } from "states/whiteBalanced";
import { getImageSubject, TeaProduct } from "types/TeaProduct";
import "./Slice.scss";

interface TeaSliceProps {
  tea: TeaProduct;
}

const Slice = ({ tea }: TeaSliceProps) => {
  const view = useRecoilValue(viewState);
  const whiteBalanced = useRecoilValue(whiteBalancedState);
  const [selectedSlug, setSelectedSlug] = useRecoilState(selectedSlugState);

  const { year, name, size, oSlug } = tea;
  const image = getImageSubject(view, 400, tea);
  if (!image.src) return null;

  const onClick = () => setSelectedSlug(oSlug);
  const isSelected = selectedSlug === oSlug;
  const classes = `TeaSliceWrapper ${
    isSelected ? "selected" : ""
  } ${view} ${size}`;

  return (
    <span className={classes} onClick={onClick} id={oSlug}>
      {image && (
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="TeaSlice"
        />
      )}
      <div className="TeaSliceInfoWrapper">
        <div className="TeaSliceInfo glow">
          <span>{year}</span>
          <span>{name}</span>
        </div>
      </div>
    </span>
  );
};

interface SlicesProps {
  teas: TeaProduct[];
}

const getDefaultFilters = (view: string) =>
  ({
    cake: true,
    brick: view === "wrapper" ? false : true,
    square: view === "wrapper" ? false : true,
    mini: view === "wrapper" ? false : true,
    ball: view === "wrapper" ? false : true,
    bamboo: view !== "soup" ? false : true,
  } as any);

export const Slices = ({ teas }: SlicesProps) => {
  const view = useRecoilValue(viewState);
  const defaultFilters = getDefaultFilters(view);
  const [filteredSizes, setFilteredSizes] = useState(defaultFilters);
  useEffect(() => {
    setFilteredSizes(getDefaultFilters(view));
  }, [view]);
  const TeaSlices = teas
    .filter((t) => filteredSizes[t.size])
    .map((t) => <Slice key={t.slug} tea={t} />);
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
  return (
    <>
      <nav className="TeaSliceFilters">{Filters}</nav>
      <div className="TeaSlices">{TeaSlices}</div>
    </>
  );
};
