import { Reducer } from 'redux';
import { Post } from 'types/Post';

enum PostsAction {
  SET_POSTS = 'set-posts',
}

export type ActionPayload<TType, PType> = {
  type: TType;
  payload: PType;
};

export type PostsState = {
  posts: Post[];
};

const InitialState: PostsState = {
  posts: [],
};

export const setPosts = (posts: Post[]): setPostsAction => {
  return {
    type: PostsAction.SET_POSTS,
    payload: posts,
  };
};

type setPostsAction = ActionPayload<PostsAction, Post[]>;

type postsReducerAction = setPostsAction;

export const postsReducer: Reducer<PostsState, postsReducerAction> = (state: PostsState = InitialState, action: postsReducerAction) => {
  switch (action.type) {
    case PostsAction.SET_POSTS: {
      return {
        ...state,
        posts: action.payload,
      }
    }
    
    default: {
      return state;
    }
  }
};