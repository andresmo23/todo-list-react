import PropTypes from "prop-types";
import { useState } from "react";
import "../styles/form.css";

const TaskForm = ({ addTask, tasks }) => {
  // Estado local que controla los datos del formulario
  // description: texto que el usuario escribe
  // isPriority: booleano que indica si la tarea es prioritaria (true) o secundaria (false)
  const [taskData, setTaskData] = useState({
    description: "",
    isPriority: false,
  });
  const [errorMessage, setErrorMessage] = useState("");

  // funcion para el input que se ejecuta cada vez que el usuario escribe en el input
  const handleDescriptionChange = (desc) => {
    // Actualiza solo la propiedad description, manteniendo isPriority intacta
    setTaskData({ ...taskData, description: desc });
  };

  // funcion para el select que se ejecuta cada vez que el usuario cambia la opción del select
  const handlePriorityChange = (selectValue) => {
    // Convierte el string seleccionado en un booleano
    // "prioritaria" → true, cualquier otro valor → false
    setTaskData({ ...taskData, isPriority: selectValue === "prioritaria" });
  };

  // Valida los datos y llama a addTask para agregar la nueva tarea
  const handleSubmit = (e) => {
    e.preventDefault();
    const isDuplicated = tasks.some(
      (task) =>
        task.description.trim().toLowerCase() === taskData.description.trim().toLocaleLowerCase()
    );

    // Si la tarea ya está creada evita crear duplicadas
    if (isDuplicated) {
      setErrorMessage("Ya existe una tarea con esa descripción.");
      return;
    }

    // Si la descripción está vacía (solo espacios), no se agrega la tarea
    if (!taskData.description.trim()) {
      setErrorMessage("Debes escribir una tarea válida.");
      return;
    }

    // Le pasa la descripción y la prioridad como argumentos
    addTask(taskData.description, taskData.isPriority);

    setTaskData({ description: "", isPriority: false }); // limpia los valores
    setErrorMessage("");
  };

  return (
    <div className="container-form">
      <h2>Agregar Tarea</h2>
      <form className="form form-add" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input
            className="input-form input-form-add"
            type="text"
            placeholder="Descripción de la tarea..."
            value={taskData.description}
            onChange={(e) => handleDescriptionChange(e.target.value)}
          />
          {errorMessage && <span className="error">{errorMessage}</span>}
        </div>
        <div className="container-select">
          <label className="lb-form lb-form-add" htmlFor="isPriority">
            Prioridad:{" "}
          </label>
          <select
            className="select-form select-form-add"
            id="isPriority"
            value={taskData.isPriority ? "prioritaria" : "secundaria"}
            onChange={(e) => handlePriorityChange(e.target.value)}
          >
            <option value="prioritaria">Prioritaria</option>
            <option value="secundaria">Secundaria</option>
          </select>
        </div>
        <button className="btn btn-add" type="submit">
          Agregar
        </button>
      </form>
    </div>
  );
};

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      description: PropTypes.string,
      isPriority: PropTypes.bool,
      isCompleted: PropTypes.bool,
    })
  ).isRequired,
};

export default TaskForm;
