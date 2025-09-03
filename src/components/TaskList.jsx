import PropTypes from "prop-types";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, deleteTask, checkCompleted, startEditingTask }) => {
  return (
    <ul className="tasks-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          checkCompleted={checkCompleted}
          startEditingTask={startEditingTask}
        />
      ))}
    </ul>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      description: PropTypes.string,
      isPriority: PropTypes.bool,
      isCompleted: PropTypes.bool,
    })
  ).isRequired,
  deleteTask: PropTypes.func,
  checkCompleted: PropTypes.func,
  startEditingTask: PropTypes.func,
};

export default TaskList;
