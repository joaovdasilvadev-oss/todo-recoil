import { useRecoilValue } from "recoil";
import { filteredTodosState } from "../selectors/todoSelectors";
import TodoItem from "./TodoItem";

function TodoList() {
  const tarefas = useRecoilValue(filteredTodosState);

  if (tarefas.length === 0) {
    return <p className="empty-message">Nenhuma tarefa encontrada.</p>;
  }

  return (
    <ul className="todo-list">
      {tarefas.map((tarefa) => (
        <TodoItem key={tarefa.id} tarefa={tarefa} />
      ))}
    </ul>
  );
}

export default TodoList;