import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { FilterAction } from 'types/filterAction';
import styles from './ToDoFilter.module.css';
import classNames from 'classnames/bind';
import { FilterValue } from 'types/filterValue';

const cx = classNames.bind(styles);

const ToDoFilter = () => {
  const currentFilter = useSelector((state: RootState) => state.filter.currentFilter);
  const dispatch = useDispatch();

  const handleShowAll = useCallback(() => {
    dispatch({
      type: FilterAction.SHOW_ALL,
    });
  }, [dispatch]);

  const handleShowDone = useCallback(() => {
    dispatch({
      type: FilterAction.SHOW_DONE,
    });
  }, [dispatch]);

  const handleShowTodo = useCallback(() => {
    dispatch({
      type: FilterAction.SHOW_TODO,
    });
  }, [dispatch]);

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
      {currentFilter === FilterValue.ALL && <h4 className={styles.toDoFilterName}>All tasks:</h4>}
      {currentFilter === FilterValue.DONE && <h4 className={styles.toDoFilterName}>Done tasks:</h4>}
      {currentFilter === FilterValue.TODO && <h4 className={styles.toDoFilterName}>Tasks to do:</h4>}
    </div>
  );
}

export default ToDoFilter;