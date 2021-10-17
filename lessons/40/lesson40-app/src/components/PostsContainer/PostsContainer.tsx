import React from 'react';
import './PostsContainer.css';
import Post from '../Post/Post';
import { PostType } from '../../types/PostType';
import { AuthorInfoType } from '../../types/AuthorInfoType';

type Props = {
  openAuthorInfoModal: (requestedUserID: number) => void;
  visiblePostsAmount: number;
  posts: PostType[];
  authors: AuthorInfoType[];
}

function PostsContainer(props: Props) {
  return (
    <div className='posts-container'>
      {props.posts.slice(0, props.visiblePostsAmount).map(postsItem => {
        return <Post 
          key={postsItem.id} 
          openAuthorInfoModal={(requestedUserId) => props.openAuthorInfoModal(requestedUserId)} 
          post={postsItem}
          authors={props.authors}
        />
      })}
    </div>
  );
}
export default PostsContainer;