import { Detail } from "components/Detail/Detail";
import { useSearchParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { allTeasState } from "states/teas";
import { scrollToId } from "utils/scrollTo";
import "./DetailDrawer.scss";

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
export const Drawer = ({ classes, children }: any) => (
  <aside className={classes} id="drawer">
    {children}
  </aside>
);

export const DetailDrawer = () => {
  const allTeas = useRecoilValue(allTeasState);
  const [params, setParams] = useSearchParams();
  const detailSlug = params.get("detail");
  const classes = `drawer ${detailSlug ? "open" : "closed"}`;

  if (!detailSlug) return <Drawer classes={classes} />;
  const tea = allTeas.find((t) => t.slug === detailSlug);
  if (!tea) return null;

  const resetSelected = () => {
    scrollToId(detailSlug);
    setParams({});
  };

  return (
    <Drawer classes={classes}>
      <button className="DetailButton Close" onClick={resetSelected}>
        <span className="value">&times;</span>
      </button>
      <Detail tea={tea} />
    </Drawer>
  );
};
