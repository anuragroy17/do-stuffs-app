import React, { useEffect, useState } from 'react';
import { getTodosByTaskId } from '../firebase';
import './TodoList.scss';

export const TodoList = (props) => {
  const [todoName, setTodoName] = useState('');
  const [todos, setTodos] = useState(props.task?.todos);

  const completeTodo = () => {
    console.log('complete');
  };

  const addTodo = (e) => {
    e.preventDefault();
    props.handleTodoAdd(todoName, props.task?.id);
    setTodoName('');
  };

  const handleChange = (e) => {
    setTodoName(e.target.value);
  };

  const fetchTodosOfTask = async (taskId) => {
    const fetchedTodos = [];
    try {
      // console.log(taskId);
      const receivedTodosSnapShot = await getTodosByTaskId(taskId);
      // console.log(receivedTodosSnapShot);
      receivedTodosSnapShot.forEach((d) => {
        // console.log('hi');
        fetchedTodos.push({
          id: d.id,
          ...d.data(),
        });
      });
    } catch (err) {
      console.log(err);
    }
    console.log(fetchedTodos);
    setTodos(fetchedTodos);
  };

  useEffect(() => {
    console.log('test');
    fetchTodosOfTask(props.task?.id);
  }, [props.task?.id]);

  return (
    <div className="todo-list">
      <div className="todo-header">
        <h2 className="list-title">{props.task?.taskName}</h2>
        <p className="task-count">{todos?.length} tasks remaining</p>
      </div>

      <div className="todo-body">
        <div className="tasks">
          {todos?.map((td) => (
            <div className="task" key={td.id}>
              <input type="checkbox" id="task-1" />
              <label>
                <span className="custom-checkbox" onClick={completeTodo}></span>
                {td.todoName}
              </label>
            </div>
          ))}
        </div>

        <div className="new-task-creator">
          <form onSubmit={addTodo}>
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
          <button className="btn delete">Clear completed tasks</button>
          <button className="btn delete">Delete list</button>
        </div>
      </div>
    </div>
  );
};
