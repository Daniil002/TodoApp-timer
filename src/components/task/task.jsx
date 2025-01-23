import React from 'react';
import PropTypes from 'prop-types';
import './task.css';

const Task = ({
  description,
  created,
  completed,
  onDeleted,
  onToggleCompleted,
}) => {
  const inputId = `task-${description.replace(/\s+/g, '-').toLowerCase()}`; 

  return (
    <li className={completed ? 'completed' : ''}>
      <div className="view">
        <input
          id={inputId}
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={onToggleCompleted}
        />
        <label htmlFor={inputId}>
          <span className="description">{description}</span>
          <span className="created">{created}</span>
        </label>
        <button className="icon icon-edit" type="button" aria-label="Edit" />
        <button
          className="icon icon-destroy"
          type="button"
          aria-label="Delete"
          onClick={onDeleted}
        />
      </div>
    </li>
  );
};

Task.propTypes = {
  description: PropTypes.string.isRequired,
  created: PropTypes.string,
  completed: PropTypes.bool,
  onDeleted: PropTypes.func,
  onToggleCompleted: PropTypes.func,
};

Task.defaultProps = {
  created: '',
  completed: false,
  onDeleted: () => {},
  onToggleCompleted: () => {},
};

export default Task;
