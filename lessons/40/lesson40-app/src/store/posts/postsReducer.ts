import { Reducer } from 'redux';
import { PostsState, PostsAction, postsReducerAction } from './types';

const InitialState: PostsState = {
  posts: [],
  isLoading: false,
  arePostsLoaded: false,
  error: null,
};

export const postsReducer: Reducer<PostsState, postsReducerAction> = (state: PostsState = InitialState, action: postsReducerAction) => {
  switch (action.type) {
    case PostsAction.LOAD_POSTS_STARTED: {
      return {
        ...state,
        isLoading: true,
      }
    }

    case PostsAction.LOAD_POSTS_SUCCESS: {
      return {
        ...state,
        posts: action.payload,
        isLoading: false,
        arePostsLoaded: true,
      }
    }

    case PostsAction.LOAD_POSTS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        arePostsLoaded: false,
        error: action.payload,
      }
    }
    
    default: {
      return state;
    }
  }
};