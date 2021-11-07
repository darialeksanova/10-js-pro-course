import { SyntheticEvent, useState } from 'react';
import styles from './ToDoItem.module.css';
import editTodoIcon from 'assets/editTodoIcon.svg';
import deleteTodoIcon from 'assets/deleteTodoIcon.svg';
import { TodoItem } from 'types/todoItem';
import { useDispatch } from 'react-redux';
import { TodosAction } from 'types/todosAction';

type Props = {
  todo: TodoItem;
};

const ToDoItem = ({ todo }: Props) => {
  const [editTaskInputValue, setEditTaskInputValue] = useState('');
  const [isInEdition, setIsInEdition] = useState(false);
  const dispatch = useDispatch();

  const handleIsDoneChange = (event: SyntheticEvent) => {
    if (event.target instanceof HTMLInputElement) {
      dispatch({
        type: TodosAction.EDIT_TODO,
        payload: {...todo, isDone: event.target.checked},
      });
    }
  };

  const handleEditTaskButtonClick = () => {
    setEditTaskInputValue(todo.content);
    setIsInEdition(true);
  };

  const handleEditTaskInputChange = (event: SyntheticEvent) => {
    if (event.target instanceof HTMLInputElement) {
      setEditTaskInputValue(event.target.value);
    }
  };

  const handleTaskEdit = () => {
    dispatch({
      type: TodosAction.EDIT_TODO,
      payload: {...todo, content: editTaskInputValue},
    });
    setIsInEdition(false);
  };

  const handleDeleteTaskButtonClick = () => {
    dispatch({
      type: TodosAction.DELETE_TODO,
      payload: todo.id,
    });
  };

  return (
    <div className={styles.toDoItem}>
      <div className={styles.toDoItemContent}>
        {!isInEdition && <span>{todo.content}</span>}
        {isInEdition && (
            <>
              <input className={styles.editTaskInput} type='text' value={editTaskInputValue} onChange={handleEditTaskInputChange}></input>
              <button className={styles.saveTodoButton} onClick={handleTaskEdit}>Save</button>
            </>
          ) 
        }
      </div>
      <div className={styles.toDoItemActions}>
        <input className={styles.toDoButton} type='checkbox' checked={todo.isDone} onChange={handleIsDoneChange}></input>
        <button className={styles.toDoButton} onClick={handleEditTaskButtonClick}>
          <img className={styles.editIcon} src={editTodoIcon} alt="edit"/>
        </button>
        <button className={styles.toDoButton} onClick={handleDeleteTaskButtonClick}>
          <img className={styles.deleteIcon} src={deleteTodoIcon} alt="delete"/>
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;