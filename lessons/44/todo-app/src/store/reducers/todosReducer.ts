import { Action, Reducer } from "redux";
import { TodoItem } from "types/todoItem";
import { TodosAction } from 'types/todosAction';
import { v4 as uuid} from 'uuid';

export type ActionPayLoad<TType, PType> = {
  type: TType;
  payload: PType;
};

export type TodosState = {
  todos: TodoItem[],
};

const todosAsString = localStorage.getItem('todos');
let todos: TodoItem[] = [];

if (todosAsString !== null) {
  todos = JSON.parse(todosAsString);
};

const initialState: TodosState = {
  todos: todos,
};

type AddTodoAction = ActionPayLoad<TodosAction.ADD_TODO, TodoItem>;
type EditTodoAction = ActionPayLoad<TodosAction.EDIT_TODO, TodoItem>;
type DeleteTodoAction = ActionPayLoad<TodosAction.DELETE_TODO, string>;
type DeleteAllTodosAction = Action<TodosAction.DELETE_ALL>;
type DeleteDoneTodosAction = Action<TodosAction.DELETE_DONE>;

export const addTodo = (content: string): AddTodoAction => ({
  type: TodosAction.ADD_TODO,
  payload: {
    id: uuid(),
    content,
    isDone: false,
  },
});

export const editTodo = (editedTodo: TodoItem): EditTodoAction => ({
  type: TodosAction.EDIT_TODO,
  payload: editedTodo,
});

export const deleteTodo = (id: string): DeleteTodoAction => ({
  type: TodosAction.DELETE_TODO,
  payload: id,
});

export const deleteAllTodos = (): DeleteAllTodosAction => ({
  type: TodosAction.DELETE_ALL,
});

export const deleteDoneTodos = (): DeleteDoneTodosAction => ({
  type: TodosAction.DELETE_DONE,
});

type ReducerAction = AddTodoAction
  | EditTodoAction
  | DeleteTodoAction
  | DeleteAllTodosAction
  | DeleteDoneTodosAction;

export const todosReducer: Reducer<TodosState, ReducerAction> = (state = initialState, action) => {
  switch(action.type) {
    case TodosAction.ADD_TODO: {
      const newTodos = {
        ...state,
        todos: [ ...state.todos, action.payload ],
      };

      return newTodos;
    }

    case TodosAction.EDIT_TODO: {
      const newTodos = {
        ...state, 
        todos: state.todos.map(todo => (todo.id !== action.payload.id)? todo : { ...action.payload }),
      };

      return newTodos;
    }

    case TodosAction.DELETE_TODO: {
      const newTodos = {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };

      return newTodos;
    }

    case TodosAction.DELETE_DONE: {
      const newTodos = {
        ...state,
        todos: state.todos.filter(todo => !todo.isDone),
      };

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