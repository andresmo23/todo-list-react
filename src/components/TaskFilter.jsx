import PropTypes from "prop-types";

const TaskFilter = ({ filterCategory }) => {
  return (
    <div className="container-filter">
      <label htmlFor="filter">Filtrar por importancia: </label>
      <select id="filter" onChange={(e) => filterCategory(e.target.value)}>
        <option value="todas">Todas</option>
        <option value="prioritaria">Prioritarias</option>
        <option value="secundaria">Secundarias</option>
      </select>
    </div>
  );
};

TaskFilter.propTypes = {
  filterCategory: PropTypes.func,
};

export default TaskFilter;
