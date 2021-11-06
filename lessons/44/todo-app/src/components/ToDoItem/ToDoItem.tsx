import React from 'react';
import styles from './ToDoItem.module.css';
import editTodoIcon from 'assets/editTodoIcon.svg';
import deleteTodoIcon from 'assets/deleteTodoIcon.svg';

const ToDoItem = () => {
  return (
    <div className={styles.toDoItem}>
      <div className={styles.toDoItemText}>
        <span>Some todo</span>
      </div>
      <div className={styles.toDoItemActions}>
        <input className={styles.toDoButton} type='checkbox'></input>
        <button className={styles.toDoButton}>
          <img className={styles.editIcon} src={editTodoIcon} alt="edit"/>
        </button>
        <button className={styles.toDoButton}>
          <img className={styles.deleteIcon} src={deleteTodoIcon} alt="delete"/>
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;