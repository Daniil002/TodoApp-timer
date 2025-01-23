import React from 'react';
import PropTypes from 'prop-types';
import './task-filter.css';

const TasksFilter = ({ filter, onFilterChange }) => {
  const filters = ['All', 'Active', 'Completed'];

  return (
    <ul className="filters">
      {filters.map((item) => (
        <li key={item}>
          <button
            className={filter === item ? 'selected' : ''}
            onClick={() => onFilterChange(item)}
            type="button"
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
};

TasksFilter.defaultProps = {
  filter: 'All',
  onFilterChange: () => {},
};

TasksFilter.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
};

export default TasksFilter;
