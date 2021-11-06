import React from 'react';
import styles from './ToDoInput.module.css';
import todoInputIcon from 'assets/todoInputIcon.svg';

const ToDoInput = () => {
  return (
    <div className={styles.toDoInputComponent}>
      <h2 className={styles.toDoInputTitle}>TodoInput</h2>
      <div className={styles.toDoInputWrapper}>
        <div className={styles.toDoInputContainer}>
          <div className={styles.toDoInputIconContainer}>
            <img className={styles.toDoInputIcon} src={todoInputIcon} alt="input-icon"/>
          </div>
          <input className={styles.toDoInput} type='text' placeholder='New Todo'></input>
        </div>
          <button className={styles.addTaskButton}>Add new task</button>
      </div>
    </div>
  );
}

export default ToDoInput;