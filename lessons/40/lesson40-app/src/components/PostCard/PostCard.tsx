import React, {useContext} from 'react';
import './PostCard.css';
import { Post } from 'types/Post';
import { Author } from 'types/Author';
import { ThemeContext } from 'App';

type Props = {
  openAuthorInfoModal: (requestedUserId: number) => void;
  post: Post;
  authors: Author[];
}

const PostCard = (props: Props) => {
  const theme = useContext(ThemeContext);

  const getAuthorName = () => {
    const requestedUser = props.authors.find(author => props.post.userId === author.id);
    return requestedUser?.name;
  }

  return (
    <div className={`post post_${theme}`}>
      <h3 className='post__title'>{props.post.title}</h3>
      <div className='post__content'>{props.post.body}</div>
      <div className='post__author-info'>
        <span>Author: </span>
        <button className='post__author-info-button' onClick={() => props.openAuthorInfoModal(props.post.userId)}>{getAuthorName()}</button>
      </div>
    </div>
  );
}
export default PostCard;