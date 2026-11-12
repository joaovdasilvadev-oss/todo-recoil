import { useRecoilValue } from "recoil";
import { todoListState } from "./atoms/todoAtoms";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFilters from "./components/TodoFilters";

import "./App.css";

function App() {
  const tarefas = useRecoilValue(todoListState);

  const concluidas = tarefas.filter((tarefa) => tarefa.concluida).length;
  const pendentes = tarefas.length - concluidas;

  return (
    <main className="container">
      <header className="header">
        <h1>Minha Todo List</h1>
        <p>Organize suas tarefas e acompanhe seu progresso.</p>
      </header>

      <section className="todo-card">
        <TodoForm />

        <div className="todo-stats">
          <span>Total: {tarefas.length}</span>
          <span>Pendentes: {pendentes}</span>
          <span>Concluídas: {concluidas}</span>
        </div>

        <TodoFilters />

        <TodoList />
      </section>

      <footer>
        <p>Desenvolvido com React e Recoil</p>
      </footer>
    </main>
  );
}

export default App;