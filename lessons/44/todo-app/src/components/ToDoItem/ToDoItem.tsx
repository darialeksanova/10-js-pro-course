import { ChangeEvent, useCallback, useState } from 'react';
import styles from './ToDoItem.module.css';
import editTodoIcon from 'assets/editTodoIcon.svg';
import deleteTodoIcon from 'assets/deleteTodoIcon.svg';
import { TodoItem } from 'types/todoItem';
import { useDispatch } from 'react-redux';
import { editTodo } from 'store/reducers/todosReducer';
import { deleteTodo } from 'store/reducers/todosReducer';

type Props = {
  todo: TodoItem;
};

const ToDoItem = ({ todo }: Props) => {
  const [editTaskInputValue, setEditTaskInputValue] = useState('');
  const [isInEdition, setIsInEdition] = useState(false);
  const dispatch = useDispatch();

  const handleIsDoneChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    dispatch(editTodo({...todo, isDone: event.target.checked}));
  }, [dispatch, todo]);

  const handleEditTaskButtonClick = useCallback(() => {
    setEditTaskInputValue(todo.content);
    setIsInEdition(true);
  }, [todo.content]);

  const handleEditTaskInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setEditTaskInputValue(event.target.value);
  }, []);

  const handleTaskEdit = useCallback(() => {
    dispatch(editTodo({...todo, content: editTaskInputValue}));
    setIsInEdition(false);
  }, [dispatch, editTaskInputValue, todo]);

  const handleDeleteTaskButtonClick = useCallback(() => {
    dispatch(deleteTodo(todo.id));
  }, [dispatch, todo.id]);

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