import { LayoutSelector } from "components/Selectors/Layout";
import { FilteringSelector } from "components/Selectors/Filtering";
import { SortingSelector } from "components/Selectors/Sorting";
import { SubjectSelector } from "components/Selectors/Subject";
import { Divider } from "components/Divider";
import { Heading } from "components/Heading";

export const Nav = () => (
  <aside className="controls--global">
    <Heading>w2tv</Heading>
    <SubjectSelector />
    <LayoutSelector />
    <Divider />
    <SortingSelector />
    <Divider />
    <FilteringSelector />
    <Divider />
  </aside>
);
