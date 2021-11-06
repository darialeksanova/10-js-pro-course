import React from 'react';
import styles from './ToDoList.module.css';
import ToDoFilter from 'components/ToDoFilter';
import ToDoContainer from 'components/ToDoItemsContainer';

const ToDoList = () => {
  return (
    <div className={styles.toDoList}>
      <h2 className={styles.toDoListTitle}>TodoList</h2>
      <ToDoFilter />
      <ToDoContainer />
      <div className={styles.toDoListActions}>
        <button className={styles.toDoListButton}>Delete done tasks</button>
        <button className={styles.toDoListButton}>Delete all tasks</button>
      </div>
    </div>
  );
}

export default ToDoList;