import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";
import TaskEditor from "./components/TaskEditor";
import "./styles/App.css";

function App() {
  // estados necesarios
  const [tasks, setTasks] = useState([]);
  const [filterImportant, setFilterImportant] = useState("todas");
  const [taskToEdit, setTaskToEdit] = useState(null);

  // crear nueva tarea y actualizar el estado global
  const addTask = (description, isPriority) => {
    const newTask = {
      id: crypto.randomUUID(),
      description: description.trim(),
      isPriority,
      isCompleted: false,
    };

    setTasks((prev) => [...prev, newTask]);
  };

  // eliminar item del arreglo
  const deleteTask = (idTask) => {
    setTasks((prev) => prev.filter((task) => task.id !== idTask));
  };

  // editar item
  const updateTask = (idTask, updateData) => {
    const updateTasks = tasks.map((task) =>
      task.id === idTask ? { ...task, ...updateData } : task
    );

    setTasks(updateTasks);
    setTaskToEdit(null);
  };

  // recibe el objeto y lo guarda en el estado para editar (taskToEdit)
  const startEditingTask = (task) => {
    setTaskToEdit(task);
  };

  // marcar como completada
  const checkCompleted = (idTask) => {
    const updateTask = tasks.map((task) =>
      task.id === idTask ? { ...task, isCompleted: !task.isCompleted } : task
    );

    setTasks(updateTask);
  };

  // Arreglo derivado que contiene solo las tareas que cumplen con el filtro actual
  // Se genera dinámicamente en cada render usando el estado filterImportant
  const filteredTasks = tasks.filter((task) => {
    if (filterImportant === "todas") return true;
    if (filterImportant === "prioritaria") return task.isPriority;
    if (filterImportant === "secundaria") return !task.isPriority;
  });

  // funcion para actualizar el estado filterImportant
  const filterCategory = (valueCategory) => setFilterImportant(valueCategory);

  return (
    <main>
      <h1>Lista de Tareas React</h1>
      <TaskForm addTask={addTask} tasks={tasks} />
      <section className="section-show-tasks">
        <TaskFilter filterCategory={filterCategory} />
        <div>
          {filteredTasks.length === 0 ? (
            <p className="message-conditional">No hay tareas que mostrar por el momento.</p>
          ) : (
            <TaskList
              tasks={filteredTasks}
              checkCompleted={checkCompleted}
              startEditingTask={startEditingTask}
              deleteTask={deleteTask}
            />
          )}
        </div>
      </section>
      {taskToEdit && (
        <TaskEditor task={taskToEdit} updateTask={updateTask} close={() => setTaskToEdit(null)} />
      )}
    </main>
  );
}

export default App;
