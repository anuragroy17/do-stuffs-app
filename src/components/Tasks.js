import React, { useState } from 'react';
import './Tasks.scss';

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
    setNewTask(e.target.value);
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
