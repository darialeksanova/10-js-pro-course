import { Action } from 'redux';
import { Post } from 'types/Post';
import { ActionPayload } from 'types/ActionPayload';

export enum PostsAction {
  SET_POSTS = 'set-posts',
  SET_ARE_POSTS_LOADED = 'set-are-posts-loaded',
}

export type PostsState = {
  posts: Post[];
  arePostsLoaded: boolean;
};

export type setPostsAction = ActionPayload<PostsAction.SET_POSTS, Post[]>;
export type setArePostsLoadedAction = Action<PostsAction.SET_ARE_POSTS_LOADED>;

export type postsReducerAction = setPostsAction | setArePostsLoadedAction;