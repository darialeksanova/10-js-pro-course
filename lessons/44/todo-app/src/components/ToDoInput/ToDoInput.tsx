import { useState } from 'react';
import styles from './ToDoInput.module.css';
import todoInputIcon from 'assets/todoInputIcon.svg';
import { useDispatch } from 'react-redux';
import { TodosAction } from 'types/todosAction';

// type Props = {
//   addNewTask: (inputValue: string) => void;
// };

const ToDoInput = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleAddTaskButtonClick = () => {
    dispatch({
      type: TodosAction.ADD_TODO,
      payload: inputValue,
    });
    setInputValue('');
  };

  return (
    <div className={styles.toDoInputComponent}>
      <h2 className={styles.toDoInputTitle}>TodoInput</h2>
      <div className={styles.toDoInputWrapper}>
        <div className={styles.toDoInputContainer}>
          <div className={styles.toDoInputIconContainer}>
            <img className={styles.toDoInputIcon} src={todoInputIcon} alt="input-icon"/>
          </div>
          <input className={styles.toDoInput} type='text' placeholder='New Todo' value={inputValue} onChange={(event) => setInputValue(event.target.value)}></input>
        </div>
          <button className={styles.addTaskButton} onClick={handleAddTaskButtonClick}>Add new task</button>
      </div>
    </div>
  );
}

export default ToDoInput;