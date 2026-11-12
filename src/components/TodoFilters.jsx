import { useRecoilState } from "recoil";
import { todoFilterState } from "../atoms/todoAtoms";

function TodoFilters() {
  const [filtro, setFiltro] = useRecoilState(todoFilterState);

  return (
    <div className="todo-filters">
      <button
        className={filtro === "todas" ? "active" : ""}
        onClick={() => setFiltro("todas")}
      >
        Todas
      </button>

      <button
        className={filtro === "pendentes" ? "active" : ""}
        onClick={() => setFiltro("pendentes")}
      >
        Pendentes
      </button>

      <button
        className={filtro === "concluidas" ? "active" : ""}
        onClick={() => setFiltro("concluidas")}
      >
        Concluídas
      </button>
    </div>
  );
}

export default TodoFilters;