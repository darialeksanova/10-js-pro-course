import { render, screen } from '@testing-library/react';
import { FilterValue } from 'types/filterValue';
import { TodoItem } from 'types/todoItem';
import ToDoItemsContainer from './ToDoItemsContainer';

const mockUseSelector = jest.fn(fn => fn());
const mockUseMemo = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: () => mockUseSelector,
}));

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useMemo: () => mockUseMemo(),
}));

jest.mock('components/ToDoItem', () => {
  return (props: { todo: TodoItem }) => <div data-testid={props.todo.id}>{props.todo.content}</div>;
});

describe('Todo items cotainer', () => {
  const component = (
    <ToDoItemsContainer />
  );

  it('should render component without todo items', () => {
    mockUseMemo.mockReturnValueOnce([] as TodoItem[]);
    render(component);
    expect(screen.getByTestId('todo-items-container')).toBeInTheDocument();
  });

  it('should render todo items', () => {
    mockUseMemo.mockReturnValueOnce([
      {id: '123', content:'todo1', isDone: false},
      {id: '1234', content:'todo2', isDone: true},
      {id: '12345', content:'todo3', isDone: false},
    ] as TodoItem[]);
    render(component);
    expect(screen.getByTestId('123')).toBeInTheDocument();
    expect(screen.getByTestId('1234')).toBeInTheDocument();
    expect(screen.getByTestId('12345')).toBeInTheDocument();
    expect(screen.getByTestId('123')).toHaveTextContent('todo1');
    expect(screen.getByTestId('1234')).toHaveTextContent('todo2');
    expect(screen.getByTestId('12345')).toHaveTextContent('todo3');
  });
});