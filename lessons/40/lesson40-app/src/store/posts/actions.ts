import { Dispatch } from 'redux';
import { Post } from 'types/Post';
import { PostsAction, setPostsAction, setArePostsLoadedAction } from "./types";

export const setPosts = (posts: Post[]): setPostsAction => {
  return {
    type: PostsAction.SET_POSTS,
    payload: posts,
  };
};

export const setArePostsLoaded = (): setArePostsLoadedAction => {
  return {
    type: PostsAction.SET_ARE_POSTS_LOADED,
  };
};

export const loadPosts = () => (dispatch: Dispatch) => {
  fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((response):Promise<Post[]> => {
      if (response.ok) {
        return response.json();
      }

      throw new Error('Get posts response is not ok!');
    })
    .then (posts => {
      dispatch(setPosts(posts));
      dispatch(setArePostsLoaded());
    })
    .catch(_error => console.log('Sourse is not reachable!'));
};