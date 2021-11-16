import { Action } from 'redux';
import { Post } from 'types/Post';
import { ActionPayload } from 'types/ActionPayload';

export enum PostsAction {
  LOAD_POSTS_STARTED = 'load-posts-started',
  LOAD_POSTS_SUCCESS = 'load-posts-success',
  LOAD_POSTS_FAILURE = 'load-posts-failure',
}

export type PostsState = {
  posts: Post[];
  isLoading: boolean;
  arePostsLoaded: boolean;
  error: null | Error;
};

export type loadPostsStartedAction = Action<PostsAction.LOAD_POSTS_STARTED>;
export type loadPostsSuccessAction = ActionPayload<PostsAction.LOAD_POSTS_SUCCESS, Post[]>;
export type loadPostsFailureAction = ActionPayload<PostsAction.LOAD_POSTS_FAILURE, null | Error>;

export type postsReducerAction = loadPostsStartedAction | loadPostsSuccessAction | loadPostsFailureAction;