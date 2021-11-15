import { Reducer } from 'redux';
import { AuthorsState, AuthorsAction } from './types';
import { authorsReducerAction } from './types';

const InitialState: AuthorsState = {
  authors: [],
  areAuthorsLoaded: false,
};

export const authorsReducer: Reducer<AuthorsState, authorsReducerAction> = (state: AuthorsState = InitialState, action: authorsReducerAction) => {
  switch (action.type) {
    case AuthorsAction.SET_AUTHORS: {
      return {
        ...state,
        authors: action.payload,
      }
    }

    case AuthorsAction.SET_ARE_AUTHORS_LOADED: {
      return {
        ...state,
        areAuthorsLoaded: true,
      }
    }

    default: {
      return state;
    }
  }
};