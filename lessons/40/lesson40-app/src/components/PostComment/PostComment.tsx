import styles from './PostComment.module.css';
import classNames from 'classnames/bind';
import { Comment } from 'types/Comment';
import { Themes } from 'types/Theme';
import { useContext } from 'react';
import { ThemeContext } from 'ThemeContext';

type Props = {
  comment: Comment;
}

const cx = classNames.bind(styles);

const PostComment = ({ comment }: Props) => {
  const theme = useContext(ThemeContext);

  return (
    <div className={cx({
      postComment: true,
      dark: theme === Themes.dark,
    })}>
      <div className={styles.commentContent}>{comment.body}</div>
      <div className={styles.authorInfo}>
        <div>{comment.name}</div>
        <div>{comment.email}</div>
      </div>
    </div>
  );
}

export default PostComment;