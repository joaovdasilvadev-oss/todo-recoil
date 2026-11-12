import { selector } from "recoil";
import { todoListState, todoFilterState } from "../atoms/todoAtoms";

export const filteredTodosState = selector({
  key: "filteredTodosState",

  get: ({ get }) => {
    const todos = get(todoListState);
    const filtro = get(todoFilterState);

    if (filtro === "concluidas") {
      return todos.filter((todo) => todo.concluida);
    }

    if (filtro === "pendentes") {
      return todos.filter((todo) => !todo.concluida);
    }

    return todos;
  },
});