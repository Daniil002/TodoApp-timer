import { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import NewTaskForm from '../new-task-form/new-task-form';
import TaskList from '../task-list/task-list';
import Footer from '../footer/footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          id: 1,
          description: 'Completed task',
          createdAt: new Date(Date.now() - 17000),
          completed: false,
        },
        {
          id: 2,
          description: 'Editing task',
          createdAt: new Date(Date.now() - 300000),
          completed: false,
        },
        {
          id: 3,
          description: 'Active task',
          createdAt: new Date(Date.now() - 300000),
          completed: false,
        },
      ],
      filter: 'All',
    };
  }

  addTask = (description) => {
    const newTask = {
      id: Date.now(),
      description,
      createdAt: new Date(),
      completed: false,
    };
    this.setState(({ tasks }) => ({
      tasks: [...tasks, newTask],
    }));
  };

  filterTasks = () => {
    const { tasks, filter } = this.state;
    return tasks
      .map((task) => ({
        ...task,
        created: formatDistanceToNow(new Date(task.createdAt), {
          addSuffix: true,
        }),
      }))
      .filter((task) => {
        if (filter === 'Active') return !task.completed;
        if (filter === 'Completed') return task.completed;
        return true;
      });
  };

  deleteItem = (id) => {
    this.setState(({ tasks }) => ({
      tasks: tasks.filter((task) => task.id !== id),
    }));
  };

  clearCompleted = () => {
    this.setState(({ tasks }) => ({
      tasks: tasks.filter((task) => !task.completed),
    }));
  };

  toggleTaskCompletion = (id) => {
    this.setState(({ tasks }) => ({
      tasks: tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    }));
  };

  setFilter = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { tasks, filter } = this.state;

    const filteredTasks = this.filterTasks();
    const activeCount = tasks.filter((task) => !task.completed).length;

    return (
      <section className="todoapp">
        <NewTaskForm onTaskAdded={this.addTask} />
        <section className="main">
          <TaskList
            tasks={filteredTasks}
            onDeleted={this.deleteItem}
            onToggleCompleted={this.toggleTaskCompletion}
          />
        </section>
        <Footer
          activeCount={activeCount}
          filter={filter}
          onFilterChange={this.setFilter}
          onClearCompleted={this.clearCompleted}
        />
      </section>
    );
  }
}

export default App;
