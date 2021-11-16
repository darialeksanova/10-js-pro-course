import { Dispatch } from 'redux';
import { Post } from 'types/Post';
import { loadPostsFailureAction, loadPostsStartedAction, loadPostsSuccessAction, PostsAction } from "./types";

const startPostsLoading = (): loadPostsStartedAction => {
  return {
    type: PostsAction.LOAD_POSTS_STARTED,
  };
};

export const setPosts = (posts: Post[]): loadPostsSuccessAction => {
  return {
    type: PostsAction.LOAD_POSTS_SUCCESS,
    payload: posts,
  };
};

export const setError = (error: Error): loadPostsFailureAction => {
  return {
    type: PostsAction.LOAD_POSTS_FAILURE,
    payload: error,
  };
};

export const loadPosts = () => (dispatch: Dispatch) => {
  dispatch(startPostsLoading());
  fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((response):Promise<Post[]> => {
      if (response.ok) {
        return response.json();
      }

      throw new Error('Get posts response is not ok!');
    })
    .then (posts => {
      dispatch(setPosts(posts));
    })
    .catch((error: Error) => {
      console.log('Sourse is not reachable!')
      dispatch(setError(error))
    });
};