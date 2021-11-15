import { Action } from 'redux';
import { Author } from 'types/Author';
import { ActionPayload } from 'types/ActionPayload';

export enum AuthorsAction {
  SET_AUTHORS = 'set-authors',
  SET_ARE_AUTHORS_LOADED = 'set-are-authors-loaded',
}

export type AuthorsState = {
  authors: Author[];
  areAuthorsLoaded: boolean;
};

export type setAuthorsAction = ActionPayload<AuthorsAction.SET_AUTHORS, Author[]>;
export type setAreAuthorsLoadedAction = Action<AuthorsAction.SET_ARE_AUTHORS_LOADED>;


export type authorsReducerAction = setAuthorsAction | setAreAuthorsLoadedAction;