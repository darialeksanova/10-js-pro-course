import ToDoInput from './ToDoInput';
import { render, screen, fireEvent } from '@testing-library/react';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
}));

describe('Todo input', () => {
  const component = (
    <ToDoInput />
  );

  it('should render component', () => {
    render(component);
    expect(screen.getByTestId('todo-input')).toBeInTheDocument();
  });

  it('should handle add task button click', () => {
    render(component);
    fireEvent.click(screen.getByTestId('add-todo-button'));
    // expect(mockDispatch).toBeCalledTimes(1);
  });
});