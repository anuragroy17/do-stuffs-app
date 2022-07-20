import React, { useEffect, useState } from 'react';
import {
  addTodo,
  deleteCompleted,
  getTodosByTaskId,
  updateTodo,
} from '../firebase';
import './TodoList.scss';

export const TodoList = (props) => {
  const [todoName, setTodoName] = useState('');
  const [todos, setTodos] = useState([]);

  const addNewTodo = (e) => {
    e.preventDefault();
    if (todoName === '') return;
    try {
      addTodo(todoName, props.task?.id);
      fetchTodosOfTask(props.task?.id);
    } catch (err) {
      console.log('error occurred');
    }
    setTodoName('');
  };

  const handleChange = (e) => {
    setTodoName(e.target.value);
  };

  const handleChangeClick = async (td) => {
    td.isCompleted = !td.isCompleted;
    try {
      await updateTodo(td, props.task?.id);
      fetchTodosOfTask(props.task?.id);
    } catch (err) {
      console.log('error occured');
    }
  };

  const fetchTodosOfTask = async (taskId) => {
    const fetchedTodos = [];
    try {
      const receivedTodosSnapShot = await getTodosByTaskId(taskId);
      receivedTodosSnapShot.forEach((d) => {
        fetchedTodos.push({
          id: d.id,
          ...d.data(),
        });
      });
    } catch (err) {
      console.log('error occurred');
    }
    setTodos(fetchedTodos);
  };

  const clearCompleted = async () => {
    try {
      await deleteCompleted(todos, props.task?.id);
      fetchTodosOfTask(props.task?.id);
    } catch (err) {
      console.log('error occured');
    }
  };

  const deleteTask = async () => {
    props.handleDeleteTask();
  };

  useEffect(() => {
    fetchTodosOfTask(props.task?.id);
    setTodoName('');
  }, [props.task?.id]);

  return (
    <div className="todo-list">
      <div className="todo-header">
        <h2 className="list-title">{props.task?.taskName}</h2>
        <p className="task-count">
          {todos.length !== 0 &&
            todos.filter((t) => !t.isCompleted).length + ' task remaining'}
          {todos.length === 0 && 'No Tasks Created'}
        </p>
      </div>

      <div className="todo-body">
        <div className="tasks">
          {todos.map((td) => (
            <div className="task" key={td.id}>
              <input
                type="checkbox"
                id={td.id}
                defaultChecked={td.isCompleted}
                onChange={() => handleChangeClick(td)}
              />
              <label htmlFor={td.id}>
                <span className="custom-checkbox"></span>
                {td.todoName}
              </label>
            </div>
          ))}
        </div>

        <div className="new-task-creator">
          <form onSubmit={addNewTodo}>
            <input
              type="text"
              className="new task"
              placeholder="new task name"
              aria-label="new task name"
              value={todoName}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="btn create"
              aria-label="create new task"
            >
              +
            </button>
          </form>
        </div>

        <div className="delete-stuff">
          <button className="btn delete" onClick={clearCompleted}>
            Clear completed tasks
          </button>
          <button className="btn delete" onClick={deleteTask}>
            Delete list
          </button>
        </div>
      </div>
    </div>
  );
};
