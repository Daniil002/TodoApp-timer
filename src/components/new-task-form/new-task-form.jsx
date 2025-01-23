import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './new-task-form.css';

const NewTaskForm = ({ onTaskAdded }) => {
  const [description, setDescription] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && description.trim()) {
      onTaskAdded(description.trim());
      setDescription('');
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </header>
  );
};

NewTaskForm.defaultProps = {
  onTaskAdded: () => {},
};

NewTaskForm.propTypes = {
  onTaskAdded: PropTypes.func,
};

export default NewTaskForm;
