import { render, screen, fireEvent } from '@testing-library/react';
import ToDoList from './ToDoList';
import { deleteAllTodos } from 'store/reducers/todosReducer';
import { deleteDoneTodos } from 'store/reducers/todosReducer';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
}));

jest.mock('components/ToDoFilter', () => {
  return () => <div data-testid="todo-filter"></div>;
});

jest.mock('components/ToDoItemsContainer', () => {
  return () => <div data-testid="todo-items-container"></div>;
});

describe('Todo list', () => {
  const component = (
    <ToDoList />
  );

  beforeEach(() => {
    render(component);
  });

  it('should render component', () => {
    expect(screen.getByTestId('todo-list')).toBeInTheDocument();
    expect(screen.getByTestId('todo-filter')).toBeInTheDocument();
    expect(screen.getByTestId('todo-items-container')).toBeInTheDocument();
    expect(screen.getByTestId('delete-done-tasks-button')).toBeInTheDocument();
    expect(screen.getByTestId('delete-all-tasks-button')).toBeInTheDocument();
  });

  it('should handle delete done todos click', () => {
    fireEvent.click(screen.getByTestId('delete-done-tasks-button'));
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith(deleteDoneTodos);
  });

  it('should handle delete all todos click', () => {
    fireEvent.click(screen.getByTestId('delete-all-tasks-button'));
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith(deleteAllTodos);
  });
});