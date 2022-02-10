import { BookmarkFilled, Bookmark } from "components/Icons";
import { useOwnedToggle } from "hooks/useOwnedToggle";
import "./OwnedButton.scss";

export const OwnedButton = ({ slug }: { slug: string }) => {
  const [isOwned, toggleOwned] = useOwnedToggle(slug);

  return (
    <button
      className={`DetailButton Owned ${isOwned ? "isOwned" : ""}`}
      onClick={toggleOwned}
    >
      <span className="value">
        {isOwned ? <BookmarkFilled /> : <Bookmark />}
      </span>
    </button>
  );
};
