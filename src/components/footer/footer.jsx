import React from 'react';
import PropTypes from 'prop-types';
import TasksFilter from '../task-filter/task-filter';
import './footer.css';

const Footer = ({ activeCount, filter, onFilterChange, onClearCompleted }) => (
  <footer className="footer">
    <span className="todo-count">{activeCount} items left</span>
    <TasksFilter filter={filter} onFilterChange={onFilterChange} />
    <button
      className="clear-completed"
      type="button"
      onClick={onClearCompleted}
    >
      Clear completed
    </button>
  </footer>
);

Footer.defaultProps = {
  activeCount: 0,
  filter: 'All',
  onFilterChange: () => {},
  onClearCompleted: () => {},
};

Footer.propTypes = {
  activeCount: PropTypes.number,
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
  onClearCompleted: PropTypes.func,
};

export default Footer;
