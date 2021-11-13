import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { postsReducer } from 'store/reducers/postsReducer';
import { authorsReducer } from 'store/reducers/authorsReducer';
import { dataLoadedReducer } from 'store/reducers/dataLoadedReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  authors: authorsReducer,
  isDataLoaded: dataLoadedReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools());