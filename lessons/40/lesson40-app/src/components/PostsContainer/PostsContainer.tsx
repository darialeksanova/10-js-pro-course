import React from 'react';
import './PostsContainer.css';
import PostCard from 'components/PostCard';
import { Post } from 'types/Post';
import { Author } from 'types/Author';

type Props = {
  openAuthorInfoModal: (requestedUserID: number) => void;
  visiblePostsAmount: number;
  posts: Post[];
  authors: Author[];
}

const PostsContainer = ({openAuthorInfoModal, visiblePostsAmount, posts, authors}: Props): JSX.Element => {
  return (
    <div className='posts-container'>
      {posts.slice(0, visiblePostsAmount).map(postsItem => {
        return <PostCard 
          key={postsItem.id} 
          openAuthorInfoModal={(requestedUserId) => openAuthorInfoModal(requestedUserId)} 
          post={postsItem}
          authors={authors}
        />
      })}
    </div>
  );
}
export default PostsContainer;