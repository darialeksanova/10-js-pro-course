import styles from './ToDoList.module.css';
import ToDoFilter from 'components/ToDoFilter';
import ToDoContainer from 'components/ToDoItemsContainer';
import { useDispatch } from 'react-redux';
import { TodosAction } from 'types/todosAction';

const ToDoList = () => {
  const dispatch = useDispatch();

  const handleDeleteDoneButtonClick = () => {
    dispatch({
      type: TodosAction.DELETE_DONE,
    })
  };

  const handleDeleteAllButtonClick = () => {
    dispatch({
      type: TodosAction.DELETE_ALL,
    });
  };

  return (
    <div className={styles.toDoList}>
      <h2 className={styles.toDoListTitle}>TodoList</h2>
      <ToDoFilter />
      <ToDoContainer />
      <div className={styles.toDoListActions}>
        <button className={styles.toDoListButton} onClick={handleDeleteDoneButtonClick}>Delete done tasks</button>
        <button className={styles.toDoListButton} onClick={handleDeleteAllButtonClick}>Delete all tasks</button>
      </div>
    </div>
  );
}

export default ToDoList;