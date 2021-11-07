import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { FilterAction } from 'types/filterAction';
import styles from './ToDoFilter.module.css';
import classNames from 'classnames/bind';
import { FilterValue } from 'types/filterValue';

const cx = classNames.bind(styles);

const ToDoFilter = () => {
  const currentFilter = useSelector((state: RootState) => state.filter.currentFilter);
  const [currentFilterName, setCurrentFilterName] = useState<string>('All tasks');
  const dispatch = useDispatch();

  const handleShowAll = () => {
    setCurrentFilterName('All tasks');
    dispatch({
      type: FilterAction.SHOW_ALL,
    });
  }

  const handleShowDone = () => {
    setCurrentFilterName('Done tasks');
    dispatch({
      type: FilterAction.SHOW_DONE,
    });
  }

  const handleShowTodo = () => {
    setCurrentFilterName('Tasks to do');
    dispatch({
      type: FilterAction.SHOW_TODO,
    });
  }

  return (
    <div className={styles.toDoFilter}>
      <div className={styles.toDoFilterActions}>
        <button 
          className={cx({
            toDoButton: true,
            selected: currentFilter === FilterValue.ALL,
          })} 
          onClick={handleShowAll}
        >All</button>

        <button 
          className={cx({
            toDoButton: true,
            selected: currentFilter === FilterValue.DONE,
          })} 
          onClick={handleShowDone}
        >Done</button>

        <button 
          className={cx({
            toDoButton: true,
            selected: currentFilter === FilterValue.TODO,
          })} 
          onClick={handleShowTodo}
        >Todo</button>
      </div>
      <h4 className={styles.toDoFilterName}>{currentFilterName}:</h4>
    </div>
  );
}

export default ToDoFilter;