import { NavLink, useParams } from "react-router-dom";
import { Layout, layouts } from "states/layout";
import { capitalize } from "utils/capitalize";

export const Selector = ({ layout }: { layout: Layout }) => {
  const { subject } = useParams();

  const newLocation = {
    pathname: `${layout}/${subject}`,
    search: location.search,
  };
  return (
    <NavLink className="button radio button--layout" to={newLocation}>
      <span className="label">{capitalize(layout)}</span>
    </NavLink>
  );
};

export const LayoutSelector = () => (
  <>
    {layouts.map((l) => (
      <Selector key={l} layout={l} />
    ))}
  </>
);
