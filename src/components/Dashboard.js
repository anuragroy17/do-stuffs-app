import React, { useEffect, useState } from 'react';
import { addTask, addTodo, getAllTasks, getTodosByTaskId } from '../firebase';
import { Tasks } from './Tasks';
import { TodoList } from './TodoList';

export const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState({});

  const fetchTasks = async () => {
    const fetchedTasks = [];
    try {
      const receivedTasksSnapShot = await getAllTasks();
      receivedTasksSnapShot.forEach((d) => {
        fetchedTasks.push({
          id: d.id,
          todos: [],
          ...d.data(),
        });
      });
    } catch (err) {
      console.log(err);
    }
    setTasks(fetchedTasks);
    setSelectedTask(fetchedTasks[0]);
  };

  const addNewTask = (newTask) => {
    try {
      addTask(newTask);
      fetchTasks();
    } catch (err) {
      console.log('error occured');
    }
  };

  const addNewTodo = (todoName, taskId) => {
    try {
      addTodo(todoName, taskId);
    } catch (err) {
      console.log('error occured');
    }
  };

  const selectTask = (t) => {
    setSelectedTask(t);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <Tasks
        handleAddTask={addNewTask}
        handleSelectedTask={selectTask}
        taskList={tasks}
      />
      <TodoList task={selectedTask} handleTodoAdd={addNewTodo} />
    </>
  );
};
