import React from 'react';
import PropTypes from 'prop-types';
import Task from '../task/task';
import './task-list.css';

const TaskList = ({
  tasks,
  onDeleted,
  onToggleCompleted,
  onStartTimer,
  onStopTimer,
}) => (
  <ul className="todo-list">
    {tasks.map((task) => (
      <Task
        key={task.id}
        id={task.id}
        description={task.description}
        created={task.created}
        completed={task.completed}
        time={task.time}
        isRunning={task.isRunning}
        onDeleted={() => onDeleted(task.id)}
        onToggleCompleted={() => onToggleCompleted(task.id)}
        onStartTimer={() => onStartTimer(task.id)}
        onStopTimer={() => onStopTimer(task.id)}
      />
    ))}
  </ul>
);

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      description: PropTypes.string,
      created: PropTypes.string,
      completed: PropTypes.bool,
      time: PropTypes.number,
      isRunning: PropTypes.bool,
    })
  ).isRequired,
  onDeleted: PropTypes.func.isRequired,
  onToggleCompleted: PropTypes.func.isRequired,
  onStartTimer: PropTypes.func.isRequired,
  onStopTimer: PropTypes.func.isRequired,
};

export default TaskList;
