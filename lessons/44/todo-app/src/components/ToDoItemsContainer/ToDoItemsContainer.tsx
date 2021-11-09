import ToDoItem from 'components/ToDoItem';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { FilterValue } from 'types/filterValue';
import { TodoItem } from 'types/todoItem';
import styles from './ToDoItemsContainer.module.css';

const ToDoItemsContainer = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const currentFilter = useSelector((state: RootState) => state.filter.currentFilter);

  const filterTodos = useMemo(() => (todos: TodoItem[], currentFilter: FilterValue): TodoItem[] => {
    if (currentFilter === FilterValue.ALL) {
      return todos;
    }
    if (currentFilter === FilterValue.DONE) {
      return todos.filter(todo => todo.isDone);
    }
    if (currentFilter === FilterValue.TODO) {
      return todos.filter(todo => !todo.isDone);
    }
    return todos;
  }, []);

  return (
    <div className={styles.toDoItemsContainer}>
      {filterTodos(todos, currentFilter).map(todo => {
        return <ToDoItem key={todo.id} todo={todo} />
      })}
    </div>
  );
}

export default ToDoItemsContainer;