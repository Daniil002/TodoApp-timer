/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import './task.css';

const Task = ({
  description,
  created,
  completed,
  time,
  isRunning,
  onDeleted,
  onToggleCompleted,
  onStartTimer,
  onStopTimer,
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
          <span className="description">
            {description}
            <button
              onClick={onStartTimer}
              className="icon icon-play"
              disabled={isRunning}
            ></button>
            <button
              onClick={onStopTimer}
              className="icon icon-pause"
              disabled={!isRunning}
            ></button>
          </span>
          <span className='time'>{time} sec</span>
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
  time: PropTypes.number.isRequired,
  isRunning: PropTypes.bool.isRequired,
  onDeleted: PropTypes.func.isRequired,
  onToggleCompleted: PropTypes.func.isRequired,
  onStartTimer: PropTypes.func.isRequired,
  onStopTimer: PropTypes.func.isRequired,
};

export default Task;
