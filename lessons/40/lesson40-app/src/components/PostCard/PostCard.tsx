import React, {useContext, useCallback} from 'react';
import './PostCard.css';
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
    <div className={`post post_${theme}`}>
      <h3 className='post__title'>{post.title}</h3>
      <div className='post__content'>{post.body}</div>
      <div className='post__author-info'>
        <span>Author: </span>
        <button className='post__author-info-button' onClick={() => openAuthorInfoModal(post.userId)}>{getAuthorName()}</button>
      </div>
    </div>
  );
}
export default PostCard;