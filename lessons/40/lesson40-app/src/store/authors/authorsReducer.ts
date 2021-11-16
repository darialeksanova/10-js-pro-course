import { Reducer } from 'redux';
import { AuthorsState, AuthorsAction } from './types';
import { authorsReducerAction } from './types';

const InitialState: AuthorsState = {
  authors: [],
  isLoading: false,
  areAuthorsLoaded: false,
  error: null,
};

export const authorsReducer: Reducer<AuthorsState, authorsReducerAction> = (state: AuthorsState = InitialState, action: authorsReducerAction) => {
  switch (action.type) {
    case AuthorsAction.LOAD_AUTHORS_STARTED: {
      return {
        ...state,
        isLoading: true,
      }
    }

    case AuthorsAction.LOAD_AUTHORS_SUCCESS: {
      return {
        ...state,
        authors: action.payload,
        isLoading: false,
        areAuthorsLoaded: true,
      }
    }

    case AuthorsAction.LOAD_AUTHORS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        areAuthorsLoaded: false,
        error: action.payload,
      }
    }

    default: {
      return state;
    }
  }
};