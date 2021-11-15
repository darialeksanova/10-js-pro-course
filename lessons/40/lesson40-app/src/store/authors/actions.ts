import { Dispatch } from 'redux';
import { Author } from 'types/Author';
import { AuthorsAction, setAuthorsAction, setAreAuthorsLoadedAction } from './types';

export const setAuthors = (authors: Author[]): setAuthorsAction => {
  return {
    type: AuthorsAction.SET_AUTHORS,
    payload: authors,
  };
};

export const setAreAuthorsLoaded = (): setAreAuthorsLoadedAction => {
  return {
    type: AuthorsAction.SET_ARE_AUTHORS_LOADED,
  };
};


export const loadAuthors = () => (dispatch: Dispatch) => {
  fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((response):Promise<Author[]> => {
      if (response.ok) {
        return response.json();
      }

      throw new Error('Get users response is not ok!');
    })
    .then(authors => {
      dispatch(setAuthors(authors));
      dispatch(setAreAuthorsLoaded());
    })
    .catch(_error => console.log('Sourse is not reachable!'));
};