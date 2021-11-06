import ToDoInput from 'components/ToDoInput';
import ToDoList from 'components/ToDoList';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <ToDoInput />
      <ToDoList />
    </div>
  );
}

export default App;
