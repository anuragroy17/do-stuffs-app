import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { addTask, auth, getAllTasks } from '../firebase';
import { Tasks } from './Tasks';
import { TodoList } from './TodoList';

export const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  const addNewTask = (newTask) => {
    try {
      addTask(newTask);
    } catch (err) {
      console.log(err);
      console.log('error occured');
    }
  };

  useEffect(() => {
    const fetchTasks = async () => {
      const fetchedTasks = [];
      try {
        const receivedTasksSnapShot = await getAllTasks();
        receivedTasksSnapShot.forEach((d) => {
          const doc = d.data();
          fetchedTasks.push({
            id: d.id,
            taskName: doc.taskName,
            date: new Date(doc.date.toDate()),
            lastEdited: new Date(doc.lastEdited.toDate()),
            todos: [],
          });
        });

        fetchedTasks.sort((a, b) => b.lastEdited - a.lastEdited);
      } catch (err) {
        console.log(err);
      }
      setTasks(fetchedTasks);
    };

    fetchTasks();
  }, []);

  return (
    <>
      <Tasks handleAddTask={addNewTask} taskList={tasks} />
      <TodoList />
    </>
  );
};
