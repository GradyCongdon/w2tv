import { Detail } from "components/Detail/Detail";
import { useSearchParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { selectedSlugState } from "states/selectedSlug";
import { allTeasState, teasState } from "states/teas";
import { TeaOembed } from "types/Oembed";
import { scrollToId } from "utils/scrollTo";

import "./Detail.scss";

// const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const Error = ({ slug }: any) => {
  return (
    <>
      <h1>error</h1>
      <h1>{slug}</h1>
    </>
  );
};

export const Skeleton = () => {
  return <div className="skeleton"></div>;
};

export const DetailDrawer = () => {
  const allTeas = useRecoilValue(allTeasState);
  const [params, setParams] = useSearchParams();
  const detailSlug = params.get("detail");

  if (!detailSlug) return null;
  const tea = allTeas.find((t) => t.slug === detailSlug);
  if (!tea) return null;

  const classes = `drawer ${detailSlug ? "open" : "closed"}`;

  const resetSelected = () => {
    scrollToId(detailSlug);
    setParams({});
  };

  return (
    <aside className={classes}>
      <button className="DetailButton Close" onClick={resetSelected}>
        <span className="value">&times;</span>
      </button>
      <Detail tea={tea} />
    </aside>
  );
};
