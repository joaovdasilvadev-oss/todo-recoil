import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../atoms/todoAtoms";

function TodoForm() {
  const [texto, setTexto] = useState("");
  const setTodos = useSetRecoilState(todoListState);

  function adicionarTarefa(event) {
    event.preventDefault();

    if (!texto.trim()) return;

    const novaTarefa = {
      id: Date.now(),
      texto: texto.trim(),
      concluida: false,
    };

    setTodos((tarefasAtuais) => [...tarefasAtuais, novaTarefa]);

    setTexto("");
  }

  return (
    <form className="todo-form" onSubmit={adicionarTarefa}>
      <input
        type="text"
        placeholder="Digite uma nova tarefa..."
        value={texto}
        onChange={(event) => setTexto(event.target.value)}
      />

      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TodoForm;