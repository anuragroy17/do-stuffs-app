import React, { useState } from 'react';
import './Tasks.css';

export const Tasks = (props) => {
  const [newTask, setNewTask] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (newTask === '') return;
    props.handleAddTask(newTask);
    setNewTask('');
  };

  const selectTask = (t) => {
    props.handleSelectedTask(t);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const capitalizeValue = value.charAt(0).toUpperCase() + value.slice(1);
    setNewTask(capitalizeValue);
  };

  return (
    <div className="all-tasks">
      <h2 className="task-list-title">My List</h2>

      <ul className="task-list">
        {props.taskList.map((t) => (
          <li
            key={t.id}
            className="list-name active-list"
            onClick={() => selectTask(t)}
          >
            {t.taskName}
          </li>
        ))}
      </ul>

      <form onSubmit={addTask}>
        <input
          type="text"
          className="new list"
          placeholder="new list name"
          aria-label="new list name"
          value={newTask}
          onChange={handleChange}
        />
        <button
          className="btn create"
          type="submit"
          aria-label="create new list"
        >
          +
        </button>
      </form>
    </div>
  );
};
