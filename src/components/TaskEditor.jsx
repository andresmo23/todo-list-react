import PropTypes from "prop-types";
import { useState } from "react";
import "../styles/modal.css";

function TaskEditor({ task, updateTask, close }) {
  // Estado local que controla los campos editables
  const [editData, setEditData] = useState({
    description: task.description,
    isPriority: task.isPriority,
  });

  // Actualiza el campo de descripción
  const handleDescriptionChange = (e) => {
    setEditData({ ...editData, description: e.target.value });
  };

  // Actualiza el campo de prioridad
  const handlePriorityChange = (e) => {
    setEditData({ ...editData, isPriority: e.target.value === "prioritaria" });
  };

  // Envía los cambios al componente padre
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editData.description.trim()) return;

    updateTask(task.id, editData);
  };

  return (
    <div className="modal-overlay">
      <div className="container-form container-modal">
        <h2>Editar Tarea</h2>
        <form className="form modal-form" onSubmit={handleSubmit}>
          <input
            className="input-form input-form-modal"
            type="text"
            placeholder="Edita la descripción."
            value={editData.description}
            onChange={handleDescriptionChange}
          />
          <div className="container-select-modal">
            <label className="lb-form lb-form-modal" htmlFor="editPriority">
              Prioridad:{" "}
            </label>
            <select
              className="select-form select-form-modal"
              id="editPriority"
              value={editData.isPriority ? "prioritaria" : "secundaria"}
              onChange={handlePriorityChange}
            >
              <option value="prioritaria">Prioritaria</option>
              <option value="secundaria">Secundaria</option>
            </select>
          </div>
          <div className="modal-container-btn">
            <button className="btn btn-modal-update" type="submit">
              Actualizar
            </button>
            <button className="btn btn-modal-cancel" type="button" onClick={close}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

TaskEditor.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isPriority: PropTypes.bool.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }).isRequired,
  updateTask: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
};

export default TaskEditor;
