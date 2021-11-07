import { AnyAction, Reducer } from "redux";
import { TodoItem } from "types/todoItem";
import { TodosAction } from 'types/todosAction';

// export type ActionPayLoad<Payload> = {
//   type: TodosAction;
//   payload?: Payload;
// }

export type TodosState = {
  todos: TodoItem[],
};

const todosAsString = localStorage.getItem('todos');
let todos: TodoItem[] = [];

if (todosAsString !== null) {
  todos = JSON.parse(todosAsString);
}

const initialState: TodosState = {
  todos: todos,
};

export const todosReducer: Reducer<TodosState, AnyAction> = (state: TodosState = initialState, action: AnyAction) => {
  switch(action.type) {
    case TodosAction.ADD_TODO: {
      const newTodos = {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            content: action.payload,
            isDone: false,
          }
        ],
      };
      localStorage.setItem('todos', JSON.stringify(newTodos.todos));

      return newTodos;
    }

    case TodosAction.EDIT_TODO: {
      const newTodos = {
        ...state, 
        todos: state.todos.map(todo => (todo.id !== action.payload.id)? todo : { ...action.payload }),
      };
      localStorage.setItem('todos', JSON.stringify(newTodos.todos));

      return newTodos;
    }

    case TodosAction.DELETE_TODO: {
      const newTodos = {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      }
      localStorage.setItem('todos', JSON.stringify(newTodos.todos));

      return newTodos;
    }

    case TodosAction.DELETE_DONE: {
      const newTodos = {
        ...state,
        todos: state.todos.filter(todo => todo.isDone === false),
      };
      localStorage.setItem('todos', JSON.stringify(newTodos.todos));

      return newTodos;
    }

    case TodosAction.DELETE_ALL: {
      return {
        ...state,
        todos: [],
      }
    }

    default: {
      return state;
    }
  }
};