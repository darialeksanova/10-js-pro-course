import {useCallback} from 'react';
import styles from './CardContent.module.css';
import { Post } from 'types/Post';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';

type Props = {
  openAuthorInfoModal: (requestedUserId: number) => void;
  post: Post;
}

const CardContent = ({openAuthorInfoModal, post}: Props): JSX.Element => {
  const authors = useSelector((state: RootState) => state.authors.authors);

  const getAuthorName = useCallback((): string => {
    const requestedUser = authors[post.userId];
    if (requestedUser) {
      return requestedUser?.name;
    }
    return '';
  }, [authors, post.userId]);

  return (
    <div className={styles.cardContent}>
      <h3 className={styles.cardTitle}>{post.title}</h3>
      <div className={styles.cardBody}>{post.body}</div>
      <NavLink to={`/posts/${post.id}`} className={styles.postDetailsButton}>Details</NavLink>
      <div className={styles.authorInfo}>
        <span>Author: </span>
        <button className={styles.authorInfoButton} onClick={() => openAuthorInfoModal(post.userId)}>{getAuthorName()}</button>
        {/* <Button onClick={() => openAuthorInfoModal(post.userId)} buttonText={getAuthorName()}/> */}
      </div>
    </div>
  );
}

export default CardContent;