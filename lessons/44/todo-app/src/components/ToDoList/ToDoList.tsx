import styles from './ToDoList.module.css';
import ToDoFilter from 'components/ToDoFilter';
import ToDoItemsContainer from 'components/ToDoItemsContainer';
import { useDispatch } from 'react-redux';
import { deleteAllTodos } from 'store/reducers/todosReducer';
import { deleteDoneTodos } from 'store/reducers/todosReducer';
import { useCallback } from 'react';

const ToDoList = () => {
  const dispatch = useDispatch();

  const handleDeleteDoneButtonClick = useCallback(() => {
    dispatch(deleteDoneTodos);
  }, [dispatch]);

  const handleDeleteAllButtonClick = useCallback(() => {
    dispatch(deleteAllTodos);
  }, [dispatch]);

  return (
    <div className={styles.toDoList} data-testid='todo-list'>
      <h2 className={styles.toDoListTitle}>TodoList</h2>
      <ToDoFilter />
      <ToDoItemsContainer />
      <div className={styles.toDoListActions}>
        <button 
          className={styles.toDoListButton} 
          data-testid='delete-done-tasks-button' 
          onClick={handleDeleteDoneButtonClick}
        >Delete done tasks</button>
        <button 
          className={styles.toDoListButton} 
          data-testid='delete-all-tasks-button'
          onClick={handleDeleteAllButtonClick}
        >Delete all tasks</button>
      </div>
    </div>
  );
}

export default ToDoList;