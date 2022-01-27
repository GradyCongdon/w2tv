import { useRecoilState } from "recoil";
import { selectedSlugState } from "states/selectedSlug";
import { TeaOembed } from "types/Oembed";
import { scrollToId } from "utils/scrollTo";

import "./Detail.scss";
import { OembedDetailContent, useOembed } from "./TeaOembed";


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
  return (
    <div className="skeleton">
    </div>
  );
};

export const DetailDrawerContent = ({ slug }: any) => {
  const [detail, status] = useOembed(slug);

  switch (status) {
    case "start":
      return <Skeleton />;
    case "loading":
      return <Skeleton />;
    // case 'resolved': return <Skeleton />;
    case "resolved":
      return <OembedDetailContent oembed={detail as TeaOembed} />;
    default:
      return <Error slug={slug} />;
  }
};

export const DetailDrawer = () => {
  const [selectedSlug, setSelectedSlug] = useRecoilState(selectedSlugState);
  const classes = `drawer ${selectedSlug ? "open" : "closed"}`;

  const resetSelected = () => {
    scrollToId(selectedSlug);
    setSelectedSlug("");
  };

  return (
    <aside className={classes}>
      <button className="DetailButton Close" onClick={resetSelected}>
        <span className="value">&times;</span>
      </button>
      {selectedSlug && <DetailDrawerContent slug={selectedSlug} />}
    </aside>
  );
};
