import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { teasState } from "states/teas";
import { ImageSubject } from "types/TeaProduct";
import { Slice } from "components/TeaProduct/Slice";
import "./Slices.scss";

export const Slices = () => {
  const teas = useRecoilValue(teasState);
  const params = useParams();
  const subject = params.subject as ImageSubject;

  const defaultFilters = getDefaultFilters(subject);
  const [filteredSizes, setFilteredSizes] = useState(defaultFilters);

  useEffect(() => {
    setFilteredSizes(getDefaultFilters(subject));
  }, [subject]);

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
    .map((t) => <Slice key={t.slug} tea={t} subject={subject} />);

  return (
    <>
      <nav className="TeaSliceFilters">{Filters}</nav>
      <div className="TeaSlices">{TeaSlices}</div>
    </>
  );
};

export const getDefaultFilters = (subject: ImageSubject) =>
  ({
    cake: true,
    brick: true,
    mini: subject === "wrapperTop" ? false : true,
    bamboo: subject === "wrapperTop" ? false : true,
    unknown: subject === "soup" ? true : false,
    // brick: subject === "wrapperTop" ? false : true,
    // mini: subject === "wrapperTop" ? false : true,
  } as any);

export default Slices;
