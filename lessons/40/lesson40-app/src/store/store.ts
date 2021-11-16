import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { postsReducer } from 'store/posts/postsReducer';
import { authorsReducer } from 'store/authors/authorsReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  posts: postsReducer,
  authors: authorsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));