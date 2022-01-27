import { useRecoilState } from "recoil";
import { selectedSlugState } from "../states/selectedSlug";
import { TeaProduct } from "../types/TeaProduct";
import { useHotkeys } from "react-hotkeys-hook";

export const getDirection = (
  direction: string,
  slug: string,
  teas: TeaProduct[]
): string => {
  if (!slug) return teas[0].slug;
  const i = teas.findIndex((t) => t.slug === slug);
  const col = 3;
  switch (direction) {
    case "left":
      return teas[i - 1]?.slug || teas[teas.length - 1].slug;
    case "right":
      return teas[i + 1]?.slug || teas[0].slug;
    case "up":
      return teas[i - col]?.slug || teas[teas.length - 1].slug;
    case "down":
      return teas[i + col]?.slug || teas[0].slug;
    default:
      return slug;
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
