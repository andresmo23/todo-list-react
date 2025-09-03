import PropTypes from "prop-types";

const TaskItem = ({ task, deleteTask, checkCompleted, startEditingTask }) => {
  const { description, isPriority, isCompleted } = task;

  const capitalize = (text) => {
    const lower = text.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <li className={isCompleted ? "task-completed" : "task-pending"}>
      <p>
        <b>-</b> {capitalize(description)}
      </p>
      <div className="task-status">
        <span className={isPriority ? "task-prioritaria" : "task-secundaria"}>
          {isPriority ? "Prioritaria" : "Secundaria"}
        </span>
        <span>{isCompleted ? "Completada" : "Pendiente"}</span>
      </div>
      <div className="task-container-buttons">
        <button className="btn btn-task-completed " onClick={() => checkCompleted(task.id)}>
          {!isCompleted ? "Completar" : "Desmarcar"}
        </button>
        <button className="btn btn-task-edit " onClick={() => startEditingTask(task)}>
          Editar
        </button>
        <button className="btn btn-task-delete " onClick={() => deleteTask(task.id)}>
          Eliminar
        </button>
      </div>
    </li>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string,
    description: PropTypes.string,
    isPriority: PropTypes.bool,
    isCompleted: PropTypes.bool,
  }).isRequired,
  deleteTask: PropTypes.func,
  checkCompleted: PropTypes.func,
  startEditingTask: PropTypes.func,
};

export default TaskItem;
