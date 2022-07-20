import React, { useState } from 'react';
import './Tasks.scss';

export const Tasks = (props) => {
  const [newTask, setNewTask] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    props.handleAddTask(newTask);
  };

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  return (
    <div className="all-tasks">
      <h2 className="task-list-title">My tasks</h2>

      <ul className="task-list">
        {props.taskList.map((t) => (
          <li key={t.id} className="list-name active-list">
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
          onChange={handleChange}
        />
        <button
          className="btn create"
          type="submit"
          disabled={newTask === ''}
          aria-label="create new list"
        >
          +
        </button>
      </form>
    </div>
  );
};
