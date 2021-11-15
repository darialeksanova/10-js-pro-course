import { Reducer } from 'redux';
import { PostsState, PostsAction, postsReducerAction } from './types';

const InitialState: PostsState = {
  posts: [],
  arePostsLoaded: false,
};

export const postsReducer: Reducer<PostsState, postsReducerAction> = (state: PostsState = InitialState, action: postsReducerAction) => {
  switch (action.type) {
    case PostsAction.SET_POSTS: {
      return {
        ...state,
        posts: action.payload,
      }
    }

    case PostsAction.SET_ARE_POSTS_LOADED: {
      return {
        ...state,
        arePostsLoaded: true,
      }
    }
    
    default: {
      return state;
    }
  }
};