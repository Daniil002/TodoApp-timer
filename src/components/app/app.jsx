/* eslint-disable */
import { useState, useCallback, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';
import NewTaskForm from '../new-task-form/new-task-form';
import TaskList from '../task-list/task-list';
import Footer from '../footer/footer';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: 'Completed task',
      createdAt: Date.now() - 17000,
      completed: false,
      time: 0,
      isRunning: false,
    },
    {
      id: 2,
      description: 'Editing task',
      createdAt: Date.now() - 300000,
      completed: false,
      time: 0,
      isRunning: false,
    },
    {
      id: 3,
      description: 'Active task',
      createdAt: Date.now() - 300000,
      completed: false,
      time: 0,
      isRunning: false,
    },
  ]);
  const [filter, setFilter] = useState('All');

  
  const startTimer = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isRunning: true } : task
      )
    );
  };

  
  const stopTimer = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isRunning: false } : task
      )
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.isRunning ? { ...task, time: task.time + 1 } : task
        )
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const addTask = useCallback((description) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: Date.now(),
        description,
        createdAt: Date.now(),
        completed: false,
        time: 0,
        isRunning: false,
      },
    ]);
  }, []);

  const deleteItem = useCallback((id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }, []);

  const clearCompleted = useCallback(() => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
  }, []);

  const toggleTaskCompletion = useCallback((id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed, isRunning: false } : task
      )
    );
  }, []);

  const filterTasks = useCallback(() => {
    return tasks
      .map((task) => ({
        ...task,
        created: formatDistanceToNow(task.createdAt, { addSuffix: true }),
      }))
      .filter((task) => {
        if (filter === 'Active') return !task.completed;
        if (filter === 'Completed') return task.completed;
        return true;
      });
  }, [tasks, filter]);

  const filteredTasks = filterTasks();
  const activeCount = tasks.filter((task) => !task.completed).length;

  return (
    <section className="todoapp">
      <NewTaskForm onTaskAdded={addTask} />
      <section className="main">
        <TaskList
          tasks={filteredTasks}
          onDeleted={deleteItem}
          onToggleCompleted={toggleTaskCompletion}
          onStartTimer={startTimer}
          onStopTimer={stopTimer}
        />
      </section>
      <Footer
        activeCount={activeCount}
        filter={filter}
        onFilterChange={setFilter}
        onClearCompleted={clearCompleted}
      />
    </section>
  );
};

export default App;
