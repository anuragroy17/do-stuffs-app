import React from 'react';
import './TodoList.scss';

export const TodoList = () => {
  return (
    <div className="todo-list">
      <div className="todo-header">
        <h2 className="list-title">YouTube</h2>
        <p className="task-count">3 tasks remaining</p>
      </div>

      <div className="todo-body">
        <div className="tasks">
          <div className="task">
            <input type="checkbox" id="task-1" />
            <label for="task-1">
              <span className="custom-checkbox"></span>
              record todo list video
            </label>
          </div>

          <div className="task">
            <input type="checkbox" id="task-2" />
            <label for="task-2">
              <span className="custom-checkbox"></span>
              another task
            </label>
          </div>

          <div className="task">
            <input type="checkbox" id="task-3" />
            <label for="task-3">
              <span className="custom-checkbox"></span>a third task
            </label>
          </div>
        </div>

        <div className="new-task-creator">
          <form action="">
            <input
              type="text"
              className="new task"
              placeholder="new task name"
              aria-label="new task name"
            />
            <button className="btn create" aria-label="create new task">
              +
            </button>
          </form>
        </div>

        <div className="delete-stuff">
          <button className="btn delete">Clear completed tasks</button>
          <button className="btn delete">Delete list</button>
        </div>
      </div>
    </div>
  );
};
