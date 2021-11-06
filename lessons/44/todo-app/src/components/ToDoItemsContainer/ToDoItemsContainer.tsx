import ToDoItem from 'components/ToDoItem';
import React from 'react';
import styles from './ToDoItemsContainer.module.css';

const ToDoItemsContainer = () => {
  return (
    <div className={styles.toDoItemsContainer}>
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
    </div>
  );
}

export default ToDoItemsContainer;