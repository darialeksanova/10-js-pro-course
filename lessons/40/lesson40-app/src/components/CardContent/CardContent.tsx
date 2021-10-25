import {useCallback} from 'react';
import styles from './CardContent.module.css';
import { Post } from 'types/Post';
import { Author } from 'types/Author';
import { NavLink } from 'react-router-dom';

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