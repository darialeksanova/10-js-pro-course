import React, {useContext, useCallback} from 'react';
import styles from './PostCard.module.css';
import { Post } from 'types/Post';
import { Author } from 'types/Author';
import { ThemeContext } from 'App';

type Props = {
  openAuthorInfoModal: (requestedUserId: number) => void;
  post: Post;
  authors: Author[];
}

const PostCard = ({openAuthorInfoModal, post, authors}: Props): JSX.Element => {
  const theme = useContext(ThemeContext);

  const getAuthorName = useCallback((): string => {
    const requestedUser = authors.find(author => post.userId === author.id);
    if (requestedUser) {
      return requestedUser?.name;
    }
    return '';
  }, [authors, post.userId]);

  return (
    <div className={styles['post']}>
    {/* <div className={styles[`post post_${theme}`]}> */}
      <h3 className={styles['post__title']}>{post.title}</h3>
      <div className={styles['post__content']}>{post.body}</div>
      <div className={styles['post__author-info']}>
        <span>Author: </span>
        <button className={styles['post__author-info-button']} onClick={() => openAuthorInfoModal(post.userId)}>{getAuthorName()}</button>
      </div>
    </div>
  );
}
export default PostCard;