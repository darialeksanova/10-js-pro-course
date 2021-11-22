import { TodoItem } from "types/todoItem";
import { todosReducer, addTodo, TodosState, editTodo, deleteTodo, deleteDoneTodos, deleteAllTodos } from "./todosReducer";

describe('Todos reducer', () => {
  it('Add todo', () => {
    const initialState: TodosState = {
      todos: [],
    };
    const newState = todosReducer(initialState, addTodo('content'));
    expect(newState !== initialState).toBeTruthy();
    expect(newState.todos.length).toBe(1);
    expect(newState.todos[0]).toEqual<TodoItem>({
      id: expect.any(String),
      content: 'content',
      isDone: false,
    }); 
  });

  it('Edit todo', () => {
    const initialState: TodosState = {
      todos: [
        {id: '123', content: 'todo1', isDone: false},
        {id: '321', content: 'todo2', isDone: false},
      ],
    };
    const newState = todosReducer(initialState, editTodo({id: '123', content: 'content', isDone: true}));
    expect(newState.todos.length).toBe(initialState.todos.length);
    expect(newState.todos.find(item => item.id === '123')).not.toEqual(initialState.todos[0]);
    expect(newState.todos.find(item => item.id === '123')).toEqual({id: '123', content: 'content', isDone: true});
  });

  it('Delete todo', () => {
    const initialState: TodosState = {
      todos: [
        {id: '123', content: 'todo1', isDone: false},
        {id: '321', content: 'todo2', isDone: false},
      ],
    };
    const newState = todosReducer(initialState, deleteTodo('123'));
    expect(newState.todos.length).toBe(initialState.todos.length - 1);
    expect(newState.todos.find(item => item.id === '123')).not.toBeDefined();
  });

  it('Delete done todos when there are any', () => {
    const initialState: TodosState = {
      todos: [
        {id: '123', content: 'todo1', isDone: true},
        {id: '321', content: 'todo2', isDone: false},
      ],
    };
    const newState = todosReducer(initialState, deleteDoneTodos());
    expect(newState.todos).toEqual(initialState.todos.filter(item => !item.isDone));
  });

  it('Delete done todos when there is no todos', () => {
    const initialState: TodosState = {
      todos: [],
    };
    const newState = todosReducer(initialState, deleteDoneTodos());
    expect(newState.todos.length).toBe(initialState.todos.length);
  });

  it('Delete done todos when there is no done todos', () => {
    const initialState: TodosState = {
      todos: [
        {id: '123', content: 'todo1', isDone: false},
        {id: '321', content: 'todo2', isDone: false},
      ],
    };
    const newState = todosReducer(initialState, deleteDoneTodos());
    expect(newState.todos.length).toBe(initialState.todos.length);
  });

  it('Delete all todos', () => {
    const initialState: TodosState = {
      todos: [
        {id: '123', content: 'todo1', isDone: true},
        {id: '321', content: 'todo2', isDone: false},
      ],
    };
    const newState = todosReducer(initialState, deleteAllTodos());
    expect(newState.todos.length).toBe(0);
  });

  it('No state', () => {
    const newState = todosReducer(undefined, deleteAllTodos());
    expect(newState).toEqual({todos: []});
  });

  it('No action', () => {
    const initialState: TodosState = {
      todos: [],
    };
    const newState = todosReducer(initialState, { type: 'test' } as any);
    expect(newState).toEqual(initialState);
  });
});


































// import { todosReducer, addTodo, editTodo, deleteTodo } from './todosReducer';

// describe('Todos reducer', () => {
//   it('Add todo', () => {
//     const initialState = {
//       todos: [],
//     };
//     const action = addTodo('new todo');
//     const result = todosReducer(initialState, addTodo('new todo'));
//     expect(result !== initialState).toBeTruthy();
//     expect(result.todos.length).toEqual(1);
//     expect (result.todos[0]).toEqual(action.payload);
//   });

//   it('Edit todo', () => {
//     const initialState = {
//       todos: [
//         {id: '123', content: 'abc', isDone: false},
//         {id: '321', content: 'abcd', isDone: false},
//       ],
//     };
//     const result = todosReducer(initialState, editTodo(initialState.todos[0]));
//     expect (result.todos[0].content).toEqual('abc');
//   });

//   it('Delete todo', () => {
//     const initialState = {
//       todos: [
//         {id: '123', content: 'abc', isDone: false},
//         {id: '321', content: 'abcd', isDone: false},
//       ],
//     };
//     const result = todosReducer(initialState, deleteTodo('123'));
//     expect(result.todos.length).toEqual(1);
//     expect (result.todos.find(({id}) => id === '123')).not.toBeDefined();
//   });

  // it('No action', () => {
  //   const initialState = {
  //     todos: [],
  //   };
  //   expect(todosReducer(initialState, { action: 'test' }) === initialState).toBeTruthy();
  // });

//   it('No state', () => {
//     const result = todosReducer(undefined, { action: 'test' });
//     expect(result).toEqual({
//       todos: [],
//     });
//   });
// }); 