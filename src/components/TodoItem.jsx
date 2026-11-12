import { useSetRecoilState } from "recoil";
import { todoListState } from "../atoms/todoAtoms";

function TodoItem({ tarefa }) {
  const setTodos = useSetRecoilState(todoListState);

  function alternarConclusao() {
    setTodos((tarefasAtuais) =>
      tarefasAtuais.map((item) =>
        item.id === tarefa.id
          ? { ...item, concluida: !item.concluida }
          : item
      )
    );
  }

  function removerTarefa() {
    setTodos((tarefasAtuais) =>
      tarefasAtuais.filter((item) => item.id !== tarefa.id)
    );
  }

  return (
    <li className={`todo-item ${tarefa.concluida ? "concluida" : ""}`}>
      <label>
        <input
          type="checkbox"
          checked={tarefa.concluida}
          onChange={alternarConclusao}
        />

        <span>{tarefa.texto}</span>
      </label>

      <button className="delete-button" onClick={removerTarefa}>
        Remover
      </button>
    </li>
  );
}

export default TodoItem;