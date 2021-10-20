import React, {useCallback} from 'react';
import styles from './CardContent.module.css';
import { Post } from 'types/Post';
import { Author } from 'types/Author';

type Props = {
  openAuthorInfoModal: (requestedUserId: number) => void;
  post: Post;
  authors: Author[];
}

const CardContent = ({openAuthorInfoModal, post, authors}: Props): JSX.Element => {

  const getAuthorName = useCallback((): string => {
    const requestedUser = authors.find(author => post.userId === author.id);
    if (requestedUser) {
      return requestedUser?.name;
    }
    return '';
  }, [authors, post.userId]);

  return (
    <>
      <h3 className={styles['card-title']}>{post.title}</h3>
      <div className={styles['card-content']}>{post.body}</div>
      <div className={styles['card-author-info']}>
        <span>Author: </span>
        <button className={styles['card-author-info-button']} onClick={() => openAuthorInfoModal(post.userId)}>{getAuthorName()}</button>
        {/* <Button onClick={() => openAuthorInfoModal(post.userId)} buttonText={getAuthorName()}/> */}
      </div>
    </>
  );
}

export default CardContent;