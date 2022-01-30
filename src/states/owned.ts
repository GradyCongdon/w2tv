import { atom } from "recoil";

const stored = localStorage.getItem("owned");
const owned = stored ? JSON.parse(stored) : {};

type OwnedMap = {
  [key: string]: boolean;
};

export const ownedState = atom({
  key: "owned",
  default: owned as OwnedMap,
});
