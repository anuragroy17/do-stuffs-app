import React from 'react';
import './Dashboard.scss';
import { Tasks } from './Tasks';
import { TodoList } from './TodoList';

export const Dashboard = () => {
  return (
    <>
      <Tasks />
      <TodoList />
    </>
  );
};
