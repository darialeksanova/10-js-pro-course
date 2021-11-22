import ToDoInput from 'components/ToDoInput';
import ToDoList from 'components/ToDoList';
import { useEffect } from 'react';
import { store } from 'store/store';
import './App.css';

function App() {
  useEffect(() => {
    store.subscribe(() => {
      localStorage.setItem('todos', JSON.stringify(store.getState().todos.todos));
    });
  }, []);

  return (
    <div className="App" data-testid='App'>
      <ToDoInput />
      <ToDoList />
    </div>
  );
}

export default App;
