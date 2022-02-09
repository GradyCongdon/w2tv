import { useOwnedToggle } from "hooks/useOwnedToggle";

export const OwnedButton = ({ slug }: { slug: string }) => {
  const [isOwned, toggleOwned] = useOwnedToggle(slug);

  return (
    <button
      className={`DetailButton Owned ${isOwned ? "isOwned" : ""}`}
      onClick={toggleOwned}
    >
      <span className="value">💸</span>
    </button>
  );
};
