import styles from './PostComment.module.css';
import classNames from 'classnames/bind';
import { Comment } from 'types/Comment';
import { Theme } from 'types/Theme';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';

type Props = {
  comment: Comment;
}

const cx = classNames.bind(styles);

const PostComment = ({ comment }: Props) => {
  const currentTheme = useSelector((state: RootState) => state.theme.theme);

  return (
    <div className={cx({
      postComment: true,
      dark: currentTheme === Theme.dark,
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