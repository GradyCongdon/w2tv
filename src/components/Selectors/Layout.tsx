import { useRecoilState } from "recoil";
import { Layout, layoutState, layouts } from "states/layout";
import { capitalize } from "utils/capitalize";

export const Selector = ({ layout }: { layout: Layout }) => {
  const [currentLayout, setLayout] = useRecoilState(layoutState);
  return (
    <button
      className="button radio button--layout"
      disabled={currentLayout === layout}
      onClick={() => setLayout(layout)}
    >
      {capitalize(layout)}
    </button>
  );
};

export const LayoutSelector = () => (
  <>
    {layouts.map((l) => (
      <Selector key={l} layout={l} />
    ))}
  </>
);
