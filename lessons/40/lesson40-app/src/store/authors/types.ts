import { Action } from 'redux';
import { Author } from 'types/Author';
import { ActionPayload } from 'types/ActionPayload';

export enum AuthorsAction {
  LOAD_AUTHORS_STARTED = 'load-authors-started',
  LOAD_AUTHORS_SUCCESS = 'load-authors-success',
  LOAD_AUTHORS_FAILURE = 'load-authors-failure',
}

export type AuthorsState = {
  authors: Author[];
  isLoading: boolean;
  areAuthorsLoaded: boolean;
  error: null | Error;
};

export type loadAuthorsStartedAction = Action<AuthorsAction.LOAD_AUTHORS_STARTED>;
export type loadAuthorsSuccessAction = ActionPayload<AuthorsAction.LOAD_AUTHORS_SUCCESS, Author[]>;
export type loadAUthorsFailureAction = ActionPayload<AuthorsAction.LOAD_AUTHORS_FAILURE, null | Error>;

export type authorsReducerAction = loadAuthorsStartedAction | loadAuthorsSuccessAction | loadAUthorsFailureAction;