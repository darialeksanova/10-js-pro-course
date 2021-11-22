import App from './App';
import { render, screen } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

jest.mock('components/ToDoInput', () => {
  return () => <div data-testid="todo-input"></div>;
});

jest.mock('components/ToDoList', () => {
  return () => <div data-testid="todo-list"></div>;
});

describe('App', () => {
  const mockedStore = createStore((state) => state);
  const component = (
    <Provider store={mockedStore}>
      <App />
    </Provider>
  );

  it('should render component', () => {
    render(component);
    expect(screen.getByTestId('App')).toBeInTheDocument();
  });
});