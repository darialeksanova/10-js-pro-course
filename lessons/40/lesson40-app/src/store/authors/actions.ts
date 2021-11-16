import { Dispatch } from 'redux';
import { Author } from 'types/Author';
import { AuthorsAction, loadAUthorsFailureAction, loadAuthorsStartedAction, loadAuthorsSuccessAction } from './types';

export const startAuthorsLoading = (): loadAuthorsStartedAction => {
  return {
    type: AuthorsAction.LOAD_AUTHORS_STARTED,
  };
};

export const setAuthors = (authors: Author[]): loadAuthorsSuccessAction => {
  return {
    type: AuthorsAction.LOAD_AUTHORS_SUCCESS,
    payload: authors,
  };
};

export const setError = (error: Error): loadAUthorsFailureAction => {
  return {
    type: AuthorsAction.LOAD_AUTHORS_FAILURE,
    payload: error
  };
};

export const loadAuthors = () => (dispatch: Dispatch) => {
  dispatch(startAuthorsLoading());
  fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((response):Promise<Author[]> => {
      if (response.ok) {
        return response.json();
      }

      throw new Error('Get users response is not ok!');
    })
    .then(authors => {
      dispatch(setAuthors(authors));
    })
    .catch((error: Error) => {
      console.log('Sourse is not reachable!')
      dispatch(setError(error));
    });
};