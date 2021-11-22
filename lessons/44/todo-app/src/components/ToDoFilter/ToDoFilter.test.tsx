import { render, screen, fireEvent } from '@testing-library/react';
import { FilterAction } from 'types/filterAction';
import ToDoFilter from './ToDoFilter';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
  useSelector: jest.fn(),
}));

describe('Todo filter', () => {
  const component = (
    <ToDoFilter />
  );

  beforeEach(() => {
    render(component);
  });

  it('should render component', () => {
    expect(screen.getByTestId('todo-filter')).toBeInTheDocument();
    expect(screen.getByTestId('show-all-button')).toBeInTheDocument();
    expect(screen.getByTestId('show-done-button')).toBeInTheDocument();
    expect(screen.getByTestId('show-todo-button')).toBeInTheDocument();
  });

  it('should handle show all button click', () => {
    fireEvent.click(screen.getByTestId('show-all-button'));
    expect(mockDispatch).toBeCalledTimes(1);
    expect(mockDispatch).toBeCalledWith({ type: FilterAction.SHOW_ALL });
  });

  it('should handle show done button click', () => {
    fireEvent.click(screen.getByTestId('show-done-button'));
    expect(mockDispatch).toBeCalledTimes(1);
    expect(mockDispatch).toBeCalledWith({ type: FilterAction.SHOW_DONE });
  });

  it('should handle show todo button click', () => {
    fireEvent.click(screen.getByTestId('show-todo-button'));
    expect(mockDispatch).toBeCalledTimes(1);
    expect(mockDispatch).toBeCalledWith({ type: FilterAction.SHOW_TODO });
  });
});