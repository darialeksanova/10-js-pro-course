import { Reducer } from 'redux';
import { Author } from 'types/Author';

enum AuthorsAction {
  SET_AUTHORS = 'set-authors',
}

export type ActionPayload<TType, PType> = {
  type: TType;
  payload: PType;
};

export type AuthorsState = {
  authors: Author[];
};

const InitialState: AuthorsState = {
  authors: [],
};

export const setAuthors = (authors: Author[]): setAuthorsAction => {
  return {
    type: AuthorsAction.SET_AUTHORS,
    payload: authors,
  };
};

type setAuthorsAction = ActionPayload<AuthorsAction, Author[]>;

type authorsReducerAction = setAuthorsAction;

export const authorsReducer: Reducer<AuthorsState, authorsReducerAction> = (state: AuthorsState = InitialState, action: authorsReducerAction) => {
  switch (action.type) {
    case AuthorsAction.SET_AUTHORS: {
      return {
        ...state,
        authors: action.payload,
      }
    }

    default: {
      return state;
    }
  }
};