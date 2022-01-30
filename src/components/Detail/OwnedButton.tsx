import { useRecoilState } from "recoil";
import { ownedState } from "states/owned";

export const OwnedButton = ({ slug }: { slug: string }) => {
  const [owned, setOwned] = useRecoilState(ownedState);
  const isOwned = owned[slug];
  const toggleOwned = () => {
    const newOwned = {
      ...owned,
      [slug]: !isOwned,
    };
    setOwned(newOwned);
    localStorage.setItem("owned", JSON.stringify(newOwned));
  };
  return (
    <button
      className={`DetailButton Owned ${isOwned ? "isOwned" : ""}`}
      onClick={toggleOwned}
    >
      <span className="value">💸</span>
    </button>
  );
};
