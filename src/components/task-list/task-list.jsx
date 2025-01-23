import React from 'react';
import PropTypes from 'prop-types'; 
import Task from '../task/task';
import './task-list.css';

const TaskList = ({ tasks, onDeleted, onToggleCompleted }) => (
  <ul className="todo-list">
    {tasks.map((task) => (
      <Task
        key={task.id}
        id={task.id}
        description={task.description}
        created={task.created}
        completed={task.completed}
        onDeleted={() => onDeleted(task.id)}
        onToggleCompleted={() => onToggleCompleted(task.id)}
      />
    ))}
  </ul>
);


TaskList.defaultProps = {
  tasks: [],
  onDeleted: () => {},
  onToggleCompleted: () => {},
};


TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      description: PropTypes.string,
      created: PropTypes.string,
      completed: PropTypes.bool,
    })
  ),
  onDeleted: PropTypes.func,
  onToggleCompleted: PropTypes.func,
};

export default TaskList;
