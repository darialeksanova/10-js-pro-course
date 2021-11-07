import { combineReducers, createStore } from 'redux';
import { todosReducer } from './reducers/todosReducer';
import { filterReducer } from './reducers/filterReducer';

const rootReducer = combineReducers({
  filter: filterReducer,
  todos: todosReducer,
});

// export type RootReducer = ReturnType<typeof rootReducer>;
// export type RootState = ReturnType<typeof store.getState>;
export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);

