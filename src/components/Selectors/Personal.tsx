import { Bookmark, BookmarkFilled } from "components/Icons";
import { useRecoilState } from "recoil";
import {
  personalFilterState,
  PersonalFilter,
  personalFilters,
} from "states/personalFilters";
import "./Personal.scss";

export const Button = ({ filtering }: { filtering: PersonalFilter }) => {
  const [currentFiltering, set] = useRecoilState(personalFilterState);
  const icon = currentFiltering === "owned" ? <BookmarkFilled /> : <Bookmark />;
  return (
    <button
      className="button radio button--filter button--personal"
      disabled={filtering === currentFiltering}
      onClick={() => set(filtering)}
    >
      {filtering === "owned" && icon}
      {filtering}
    </button>
  );
};

export const PersonalSelector = () => {
  const $Buttons = personalFilters.map((value) => (
    <Button filtering={value as PersonalFilter} key={value} />
  ));
  return <>{$Buttons}</>;
};
