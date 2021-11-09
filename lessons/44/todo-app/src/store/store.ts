import { combineReducers, createStore } from 'redux';
import { todosReducer } from './reducers/todosReducer';
import { filterReducer } from './reducers/filterReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  filter: filterReducer,
  todos: todosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools());

