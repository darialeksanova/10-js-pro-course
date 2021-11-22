import { ChangeEvent, useCallback, useState } from 'react';
import styles from './ToDoInput.module.css';
import todoInputIcon from 'assets/todoInputIcon.svg';
import { useDispatch } from 'react-redux';
import { addTodo } from 'store/reducers/todosReducer';

const ToDoInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [isAddButtonDisabled, setIsAddButtonDisabled] = useState(true);
  const dispatch = useDispatch();

  const handleAddTaskButtonClick = useCallback(() => {
    dispatch(addTodo(inputValue));
    setInputValue('');
    setIsAddButtonDisabled(true);
  }, [dispatch, inputValue]);

  const handleInputValueChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const targetValue = event.target.value;
    setInputValue(targetValue);
    setIsAddButtonDisabled(targetValue.trim() === '');
  }, []);

  return (
    <div className={styles.toDoInputComponent} data-testid='todo-input'>
      <h2 className={styles.toDoInputTitle}>TodoInput</h2>
      <div className={styles.toDoInputWrapper}>
        <div className={styles.toDoInputContainer}>
          <div className={styles.toDoInputIconContainer}>
            <img className={styles.toDoInputIcon} src={todoInputIcon} alt="input-icon"/>
          </div>
          <input 
            className={styles.toDoInput} 
            data-testid='add-todo-input'
            type='text' 
            placeholder='New Todo' 
            value={inputValue} 
            onChange={handleInputValueChange}
          ></input>
        </div>
          <button 
            className={styles.addTaskButton} 
            data-testid='add-todo-button'
            disabled={isAddButtonDisabled} 
            onClick={handleAddTaskButtonClick}
          >Add new task</button>
      </div>
    </div>
  );
}

export default ToDoInput;