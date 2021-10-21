import React, { useContext } from 'react';
import styles from './PostsContainer.module.css';
import Card from 'components/Card';
import { Post } from 'types/Post';
import { Author } from 'types/Author';
import CardContent from 'components/CardContent';
import { ThemeContext } from 'ThemeContext';

type Props = {
  openAuthorInfoModal: (requestedUserID: number) => void;
  visiblePostsAmount: number;
  posts: Post[];
  authors: Author[];
}

const PostsContainer = ({openAuthorInfoModal, visiblePostsAmount, posts, authors}: Props): JSX.Element => {
  const theme = useContext(ThemeContext);

  return (
    <div className={styles.postsСontainer}>
      {posts.slice(0, visiblePostsAmount).map(postsItem => {
        return (
          <Card 
            key={postsItem.id}
            size='small'
            theme={theme}
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