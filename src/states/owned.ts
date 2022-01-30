import { atom } from "recoil";

const stored = JSON.parse(localStorage.getItem("owned") || "") || {};

type OwnedMap = {
  [key: string]: boolean;
};

export const ownedState = atom({
  key: "owned",
  default: stored as OwnedMap,
});
