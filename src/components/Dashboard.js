import React, { useEffect, useState } from 'react';
import { addTask, deleteTask, getAllTasks } from '../firebase';
import { Tasks } from './Tasks';
import { TodoList } from './TodoList';

export const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState({});

  const fetchTasks = async (setSelected) => {
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
      console.log('error occurred');
    }
    setTasks(fetchedTasks);
    if (setSelected) {
      setSelectedTask(fetchedTasks[0]);
    }
  };

  const addNewTask = (newTask) => {
    try {
      addTask(newTask);
      fetchTasks(true);
    } catch (err) {
      console.log('error occurred');
    }
  };

  const selectTask = (t) => {
    setSelectedTask(t);
  };

  const deleteTaskParmanently = async () => {
    try {
      console.log(selectedTask.id);
      await deleteTask(selectedTask.id);
      fetchTasks(true);
    } catch (err) {
      console.log('error occured');
    }
  };

  const sortList = async () => {
    try {
      await fetchTasks(false);
    } catch (err) {
      console.log('error occurred');
    }
  };

  useEffect(() => {
    fetchTasks(true);
  }, []);

  return (
    <>
      <Tasks
        selectedTask={selectedTask}
        handleAddTask={addNewTask}
        handleSelectedTask={selectTask}
        taskList={tasks}
      />
      {tasks.length !== 0 && JSON.stringify(selectedTask) !== '{}' && (
        <TodoList
          task={selectedTask}
          handleDeleteTask={deleteTaskParmanently}
          handleSortList={sortList}
        />
      )}
    </>
  );
};
