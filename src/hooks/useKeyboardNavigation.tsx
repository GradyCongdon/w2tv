import { useRecoilState } from "recoil";
import { selectedSlugState } from "../states/selectedSlug";
import { TeaProduct } from "../types/TeaProduct";
import { useHotkeys } from "react-hotkeys-hook";

export const getDirection = (
  direction: string,
  oSlug: string,
  teas: TeaProduct[]
): string => {
  if (!oSlug) return teas[0].oSlug;
  const i = teas.findIndex((t) => t.oSlug === oSlug);
  const col = 3;
  switch (direction) {
    case "left":
      return teas[i - 1]?.oSlug || teas[teas.length - 1].oSlug;
    case "right":
      return teas[i + 1]?.oSlug || teas[0].oSlug;
    case "up":
      return teas[i - col]?.oSlug || teas[teas.length - 1].oSlug;
    case "down":
      return teas[i + col]?.oSlug || teas[0].oSlug;
    default:
      return oSlug;
  }
};

export function useKeyboardNavigation(teas: TeaProduct[]) {
  const [selectedSlug, setSelectedSlug] = useRecoilState(selectedSlugState);
  useHotkeys(
    "left",
    () => setSelectedSlug(getDirection("left", selectedSlug, teas)),
    [selectedSlug, teas]
  );
  useHotkeys(
    "right",
    () => setSelectedSlug(getDirection("right", selectedSlug, teas)),
    [selectedSlug, teas]
  );
  useHotkeys(
    "up",
    () => setSelectedSlug(getDirection("up", selectedSlug, teas)),
    [selectedSlug, teas]
  );
  useHotkeys(
    "down",
    () => setSelectedSlug(getDirection("down", selectedSlug, teas)),
    [selectedSlug, teas]
  );
}
