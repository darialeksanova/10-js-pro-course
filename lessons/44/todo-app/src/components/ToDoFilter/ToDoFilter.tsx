import React from 'react';
import styles from './ToDoFilter.module.css';

const ToDoFilter = () => {
  return (
    <div className={styles.toDoFilter}>
      <button className={styles.toDoButton}>All</button>
      <button className={styles.toDoButton}>Done</button>
      <button className={styles.toDoButton}>Todo</button>
    </div>
  );
}

export default ToDoFilter;