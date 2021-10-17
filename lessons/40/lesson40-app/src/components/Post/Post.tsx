import React from 'react';
import './Post.css';
import { PostType } from 'types/PostType';
import { AuthorInfoType } from 'types/AuthorInfoType';
import { ThemeContext } from 'App';

type Props = {
  openAuthorInfoModal: (requestedUserId: number) => void;
  post: PostType;
  authors: AuthorInfoType[];
}

function Post(props: Props) {
  const theme = React.useContext(ThemeContext);

  function getAuthorName() {
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
export default Post;