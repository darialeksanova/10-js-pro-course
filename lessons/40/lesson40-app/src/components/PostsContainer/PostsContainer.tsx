import React from 'react';
import styles from './PostsContainer.module.css';
import Card from 'components/Card';
import { Post } from 'types/Post';
import { Author } from 'types/Author';
import CardContent from 'components/CardContent';

type Props = {
  openAuthorInfoModal: (requestedUserID: number) => void;
  visiblePostsAmount: number;
  posts: Post[];
  authors: Author[];
}

const PostsContainer = ({openAuthorInfoModal, visiblePostsAmount, posts, authors}: Props): JSX.Element => {
  return (
    <div className={styles.postsСontainer}>
      {posts.slice(0, visiblePostsAmount).map(postsItem => {
        return (
          <Card 
            key={postsItem.id}
            size='small'
          >
            <CardContent 
              openAuthorInfoModal={(requestedUserId) => openAuthorInfoModal(requestedUserId)} 
              post={postsItem}
              authors={authors}
            />
          </Card>
        ) 
      })}
    </div>
  );
}
export default PostsContainer;