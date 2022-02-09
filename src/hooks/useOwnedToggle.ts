import { useRecoilState } from "recoil";
import { ownedState } from "states/owned";

export const useOwnedToggle = (slug: string): [boolean, () => void] => {
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
  return [isOwned, toggleOwned];
};
