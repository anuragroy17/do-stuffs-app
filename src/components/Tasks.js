import React from 'react';
import './Tasks.scss';

export const Tasks = () => {
  return (
    <div class="all-tasks">
      <h2 class="task-list-title">My lists</h2>
      <ul class="task-list">
        <li class="list-name active-list">Youtube</li>
        <li class="list-name">Work</li>
        <li class="list-name">Grocery</li>
      </ul>

      <form action="">
        <input
          type="text"
          class="new list"
          placeholder="new list name"
          aria-label="new list name"
        />
        <button class="btn create" aria-label="create new list">
          +
        </button>
      </form>
    </div>
  );
};
