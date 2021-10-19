import React from 'react';
import './PostsContainer.css';
import PostCard from 'components/PostCard';
import { Post } from 'types/Post';
import { AuthorInfo } from 'types/AuthorInfo';

type Props = {
  openAuthorInfoModal: (requestedUserID: number) => void;
  visiblePostsAmount: number;
  posts: Post[];
  authors: AuthorInfo[];
}

const PostsContainer = (props: Props) => {
  return (
    <div className='posts-container'>
      {props.posts.slice(0, props.visiblePostsAmount).map(postsItem => {
        return <PostCard 
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