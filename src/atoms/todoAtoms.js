import { atom } from "recoil";

export const todoListState = atom({
  key: "todoListState",
  default: [],
});

export const todoFilterState = atom({
  key: "todoFilterState",
  default: "todas",
});